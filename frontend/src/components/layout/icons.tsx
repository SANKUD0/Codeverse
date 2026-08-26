/**
 * Jeu d'icônes minimal, en SVG inline — pas de librairie à installer.
 * Chacune hérite de `currentColor` et de la taille fixée par le composant parent.
 */

type IconProps = { className?: string };

const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
};

export const IconHome = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
    </svg>
);

export const IconTrending = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
    </svg>
);

export const IconUsers = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    </svg>
);

export const IconBroadcast = (p: IconProps) => (
    <svg {...base} {...p}>
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
    </svg>
);

export const IconUser = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export const IconHistory = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M3 3v5h5" />
        <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
        <path d="M12 7v5l4 2" />
    </svg>
);

export const IconDraft = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
    </svg>
);

export const IconSettings = (p: IconProps) => (
    <svg {...base} {...p}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.61.68 1.05 1.31 1.05H21a2 2 0 1 1 0 4h-.09c-.63 0-1.17.44-1.51 1z" />
    </svg>
);

export const IconAccount = (p: IconProps) => (
    <svg {...base} {...p}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20.7a8 8 0 0 1 10 0" />
    </svg>
);

export const IconPlus = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M12 5v14M5 12h14" />
    </svg>
);

export const IconLogout = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="m16 17 5-5-5-5" />
        <path d="M21 12H9" />
    </svg>
);

export const IconBell = (p: IconProps) => (
    <svg {...base} {...p}>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
);
