"use client";

import type { ReactNode } from "react";
import { useSidebar } from "./SidebarContext";
import styles from "./Navbar.module.scss";

export function Navbar({
    title,
    children,
}: {
    /** Titre de la page courante, affiché à côté du bouton de repli. */
    title?: string;
    /** Actions à droite : recherche, notifications, menu utilisateur… */
    children?: ReactNode;
}) {
    const { toggle, expanded, isMobile, mobileOpen } = useSidebar();

    const label = isMobile
        ? mobileOpen
            ? "Fermer le menu"
            : "Ouvrir le menu"
        : expanded
          ? "Replier la barre latérale"
          : "Déplier la barre latérale";

    return (
        <header className={styles.navbar}>
            <button
                type="button"
                className={styles.toggle}
                onClick={toggle}
                aria-label={label}
                aria-expanded={isMobile ? mobileOpen : expanded}
                title={`${label} (Ctrl+B)`}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round">
                    <path d="M3.5 5.5h17M3.5 12h17M3.5 18.5h17" />
                </svg>
            </button>

            {title && <h1 className={styles.title}>{title}</h1>}

            <div className={styles.actions}>{children}</div>
        </header>
    );
}

/** Champ de recherche de la barre du haut. */
export function NavbarSearch({
    placeholder = "Rechercher…",
    onSubmit,
}: {
    placeholder?: string;
    onSubmit?: (query: string) => void;
}) {
    return (
        <form
            className={styles.search}
            role="search"
            onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("q") as HTMLInputElement | null;
                onSubmit?.(input?.value.trim() ?? "");
            }}
        >
            <svg
                className={styles.searchIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
            </svg>
            <input
                type="search"
                name="q"
                className={styles.searchInput}
                placeholder={placeholder}
                aria-label={placeholder}
            />
        </form>
    );
}

/** Bouton d'icône simple pour la barre du haut. */
export function NavbarIconButton({
    label,
    badge,
    onClick,
    children,
}: {
    label: string;
    badge?: boolean;
    onClick?: () => void;
    children: ReactNode;
}) {
    return (
        <button
            type="button"
            className={styles.iconButton}
            aria-label={label}
            title={label}
            onClick={onClick}
        >
            {children}
            {badge && <span className={styles.dot} aria-hidden="true" />}
        </button>
    );
}

/** Pastille d'avatar — sert de déclencheur au <Menu>. */
export function NavbarAvatar({
    initials,
    name,
}: {
    initials: string;
    name?: string;
}) {
    return (
        <span className={styles.avatarWrap}>
            <span className={styles.avatar} aria-hidden="true">
                {initials}
            </span>
            {name && <span className={styles.avatarName}>{name}</span>}
            <svg
                className={styles.chevron}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </span>
    );
}
