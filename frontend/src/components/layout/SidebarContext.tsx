"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

const STORAGE_KEY = "codeverse:sidebar-expanded";
const MOBILE_QUERY = "(max-width: 900px)";

type SidebarContextValue = {
    /** Rail déplié (260px) ou replié en icônes (68px). Desktop uniquement. */
    expanded: boolean;
    /** Drawer ouvert par-dessus le contenu. Mobile uniquement. */
    mobileOpen: boolean;
    /** true une fois la préférence lue depuis localStorage — sert à couper
     *  les transitions au premier rendu pour éviter un « saut » visible. */
    ready: boolean;
    isMobile: boolean;
    toggle: () => void;
    setExpanded: (value: boolean) => void;
    openMobile: () => void;
    closeMobile: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar() {
    const ctx = useContext(SidebarContext);
    if (!ctx) {
        throw new Error("useSidebar doit être utilisé à l'intérieur de <SidebarProvider>.");
    }
    return ctx;
}

export function SidebarProvider({ children }: { children: ReactNode }) {
    // On démarre toujours à `true` pour que le rendu serveur et le premier
    // rendu client soient identiques (pas d'erreur d'hydratation).
    const [expanded, setExpandedState] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [ready, setReady] = useState(false);

    // Préférence persistée, lue après l'hydratation.
    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored !== null) setExpandedState(stored === "true");
        } catch {
            // localStorage indisponible (navigation privée, cookies bloqués) :
            // on garde simplement la valeur par défaut.
        }
        setReady(true);
    }, []);

    const setExpanded = useCallback((value: boolean) => {
        setExpandedState(value);
        try {
            window.localStorage.setItem(STORAGE_KEY, String(value));
        } catch {
            /* ignoré volontairement */
        }
    }, []);

    // Suivi du point de rupture.
    useEffect(() => {
        const mql = window.matchMedia(MOBILE_QUERY);
        const apply = (matches: boolean) => {
            setIsMobile(matches);
            if (!matches) setMobileOpen(false); // on repasse en desktop : plus de drawer
        };

        apply(mql.matches);
        const handler = (e: MediaQueryListEvent) => apply(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    const openMobile = useCallback(() => setMobileOpen(true), []);
    const closeMobile = useCallback(() => setMobileOpen(false), []);

    const toggle = useCallback(() => {
        if (isMobile) setMobileOpen((v) => !v);
        else setExpanded(!expanded);
    }, [isMobile, expanded, setExpanded]);

    // Raccourci clavier : Ctrl/Cmd + B
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "b" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                toggle();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [toggle]);

    // Échap ferme le drawer, et on bloque le défilement du fond pendant qu'il est ouvert.
    useEffect(() => {
        if (!mobileOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMobile();
        };
        window.addEventListener("keydown", onKeyDown);

        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previous;
        };
    }, [mobileOpen, closeMobile]);

    const value = useMemo<SidebarContextValue>(
        () => ({
            expanded,
            mobileOpen,
            ready,
            isMobile,
            toggle,
            setExpanded,
            openMobile,
            closeMobile,
        }),
        [expanded, mobileOpen, ready, isMobile, toggle, setExpanded, openMobile, closeMobile]
    );

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}
