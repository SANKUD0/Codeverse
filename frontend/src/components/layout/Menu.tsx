"use client";

import Link from "next/link";
import {
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
    type ReactNode,
} from "react";
import styles from "./Menu.module.scss";

/**
 * Menu déroulant accessible, sans dépendance.
 * Gère : clic extérieur, Échap, flèches haut/bas, Home/Fin,
 * retour du focus sur le déclencheur à la fermeture.
 */
export function Menu({
    trigger,
    align = "end",
    label = "Menu",
    children,
}: {
    trigger: ReactNode;
    align?: "start" | "end";
    label?: string;
    children: ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const menuId = useId();

    const close = useCallback((returnFocus = true) => {
        setOpen(false);
        if (returnFocus) triggerRef.current?.focus();
    }, []);

    // Clic en dehors
    useEffect(() => {
        if (!open) return;
        const onPointerDown = (e: PointerEvent) => {
            if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [open]);

    // À l'ouverture, focus sur la première entrée
    useEffect(() => {
        if (!open) return;
        const first = listRef.current?.querySelector<HTMLElement>("[data-menu-item]");
        first?.focus();
    }, [open]);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (!open) return;

        if (e.key === "Escape") {
            e.preventDefault();
            close();
            return;
        }

        const items = Array.from(
            listRef.current?.querySelectorAll<HTMLElement>("[data-menu-item]") ?? []
        );
        if (items.length === 0) return;

        const index = items.indexOf(document.activeElement as HTMLElement);

        const focusAt = (i: number) => {
            e.preventDefault();
            items[(i + items.length) % items.length]?.focus();
        };

        if (e.key === "ArrowDown") focusAt(index + 1);
        else if (e.key === "ArrowUp") focusAt(index - 1);
        else if (e.key === "Home") focusAt(0);
        else if (e.key === "End") focusAt(items.length - 1);
    };

    return (
        <div className={styles.wrap} ref={wrapRef} onKeyDown={onKeyDown}>
            <button
                type="button"
                ref={triggerRef}
                className={styles.trigger}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls={open ? menuId : undefined}
                aria-label={label}
                onClick={() => setOpen((v) => !v)}
            >
                {trigger}
            </button>

            {open && (
                <div
                    id={menuId}
                    ref={listRef}
                    role="menu"
                    aria-label={label}
                    className={styles.panel}
                    data-align={align}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

export function MenuLabel({ children }: { children: ReactNode }) {
    return <p className={styles.label}>{children}</p>;
}

export function MenuSeparator() {
    return <div className={styles.separator} role="separator" />;
}

export function MenuItem({
    href,
    icon,
    onSelect,
    danger = false,
    children,
}: {
    href?: string;
    icon?: ReactNode;
    onSelect?: () => void;
    danger?: boolean;
    children: ReactNode;
}) {
    const className = `${styles.item} ${danger ? styles.itemDanger : ""}`;

    const content = (
        <>
            {icon && (
                <span className={styles.itemIcon} aria-hidden="true">
                    {icon}
                </span>
            )}
            <span>{children}</span>
        </>
    );

    if (href) {
        return (
            <Link href={href} role="menuitem" data-menu-item className={className}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type="button"
            role="menuitem"
            data-menu-item
            className={className}
            onClick={onSelect}
        >
            {content}
        </button>
    );
}
