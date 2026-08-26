"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useSidebar } from "./SidebarContext";
import styles from "./Sidebar.module.scss";

/* ------------------------------------------------------------------ */
/*  Sidebar                                                            */
/* ------------------------------------------------------------------ */

export function Sidebar({ children }: { children: ReactNode }) {
    const { expanded, mobileOpen, ready, isMobile, closeMobile } = useSidebar();

    return (
        <>
            {/* Voile : uniquement en mobile, quand le drawer est ouvert */}
            <div
                className={styles.scrim}
                data-visible={mobileOpen || undefined}
                onClick={closeMobile}
                aria-hidden="true"
            />

            <aside
                className={styles.sidebar}
                data-expanded={expanded || undefined}
                data-open={mobileOpen || undefined}
                data-ready={ready || undefined}
                aria-label="Navigation principale"
                // En mobile le drawer sort du flux : on le masque aux lecteurs
                // d'écran tant qu'il est fermé.
                aria-hidden={isMobile && !mobileOpen ? true : undefined}
                inert={isMobile && !mobileOpen ? true : undefined}
            >
                {children}
            </aside>
        </>
    );
}

/* ------------------------------------------------------------------ */
/*  En-tête (marque)                                                   */
/* ------------------------------------------------------------------ */

export function SidebarHeader({
    href = "/",
    mark,
    children,
}: {
    href?: string;
    /** Glyphe court affiché même quand le rail est replié (ex. « CV »). */
    mark: ReactNode;
    children: ReactNode;
}) {
    const { closeMobile, isMobile } = useSidebar();

    return (
        <div className={styles.header}>
            <Link
                href={href}
                className={styles.brand}
                onClick={() => isMobile && closeMobile()}
            >
                <span className={styles.brandMark} aria-hidden="true">
                    {mark}
                </span>
                <span className={styles.brandLabel}>{children}</span>
            </Link>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export function SidebarSection({
    label,
    children,
}: {
    label?: string;
    children: ReactNode;
}) {
    return (
        <div className={styles.section}>
            {label && <p className={styles.sectionLabel}>{label}</p>}
            <ul className={styles.list}>{children}</ul>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Entrée de navigation                                               */
/* ------------------------------------------------------------------ */

export function SidebarItem({
    href,
    icon,
    badge,
    exact = false,
    children,
}: {
    href: string;
    icon: ReactNode;
    /** Pastille de compteur (nombre de brouillons, notifications…). */
    badge?: string | number;
    /** true : actif seulement sur l'URL exacte. false : actif aussi sur les sous-routes. */
    exact?: boolean;
    children: string;
}) {
    const pathname = usePathname();
    const { isMobile, closeMobile } = useSidebar();

    const active = exact
        ? pathname === href
        : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <li>
            <Link
                href={href}
                className={styles.item}
                data-active={active || undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => isMobile && closeMobile()}
                // Sert d'infobulle CSS quand le rail est replié
                data-tooltip={children}
            >
                <span className={styles.itemIcon} aria-hidden="true">
                    {icon}
                </span>
                <span className={styles.itemLabel}>{children}</span>
                {badge !== undefined && (
                    <span className={styles.itemBadge}>{badge}</span>
                )}
            </Link>
        </li>
    );
}

/* ------------------------------------------------------------------ */
/*  Pied de sidebar                                                    */
/* ------------------------------------------------------------------ */

export function SidebarFooter({ children }: { children: ReactNode }) {
    return <div className={styles.footer}>{children}</div>;
}

/** Bouton pleine largeur qui se réduit à son icône quand le rail est replié. */
export function SidebarAction({
    icon,
    variant = "solid",
    onClick,
    href,
    children,
}: {
    icon: ReactNode;
    variant?: "solid" | "outline";
    onClick?: () => void;
    href?: string;
    children: string;
}) {
    const className = `${styles.action} ${
        variant === "outline" ? styles.actionOutline : styles.actionSolid
    }`;

    const content = (
        <>
            <span className={styles.itemIcon} aria-hidden="true">
                {icon}
            </span>
            <span className={styles.itemLabel}>{children}</span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={className} data-tooltip={children}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" className={className} onClick={onClick} data-tooltip={children}>
            {content}
        </button>
    );
}
