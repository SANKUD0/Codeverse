"use client";

import type { ReactNode } from "react";
import { SidebarProvider, useSidebar } from "./SidebarContext";
import styles from "./AppShell.module.scss";

/**
 * Enveloppe la sidebar et le contenu.
 * Le décalage du contenu suit la largeur réelle du rail.
 */
export function AppShell({
    sidebar,
    children,
}: {
    sidebar: ReactNode;
    children: ReactNode;
}) {
    return (
        <SidebarProvider>
            {sidebar}
            <ShellMain>{children}</ShellMain>
        </SidebarProvider>
    );
}

function ShellMain({ children }: { children: ReactNode }) {
    const { expanded, ready } = useSidebar();

    return (
        <div
            className={styles.main}
            data-expanded={expanded || undefined}
            data-ready={ready || undefined}
        >
            {children}
        </div>
    );
}

/** Conteneur du contenu de page, sous la Navbar. */
export function PageContent({ children }: { children: ReactNode }) {
    return <main className={styles.content}>{children}</main>;
}
