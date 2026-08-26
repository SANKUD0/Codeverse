"use client";

import { AppShell, PageContent } from "./layout/AppShell";
import { IconHome, IconTrending, IconUsers, IconBroadcast, IconUser, IconHistory, IconDraft, IconSettings, IconAccount, IconPlus, IconLogout, IconBell } from "./layout/icons";
import { Menu, MenuLabel, MenuItem, MenuSeparator } from "./layout/Menu";
import { Navbar, NavbarSearch, NavbarIconButton, NavbarAvatar } from "./layout/Navbar";
import { SidebarHeader, SidebarSection, SidebarItem, SidebarFooter, SidebarAction, Sidebar } from "./layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppShell
            sidebar={
                <Sidebar>
                    <SidebarHeader mark="CV" href="/accueil">
                        {`</Codeverse>`}
                    </SidebarHeader>

                    <SidebarSection>
                        <SidebarItem href="/accueil" icon={<IconHome />} exact>
                            Accueil
                        </SidebarItem>
                        <SidebarItem href="/tendance" icon={<IconTrending />}>
                            Tendance
                        </SidebarItem>
                    </SidebarSection>

                    <SidebarSection label="Communautés">
                        <SidebarItem href="/community" icon={<IconUsers />}>
                            Communauté
                        </SidebarItem>
                        <SidebarItem href="/community/mes-communautes" icon={<IconBroadcast />}>
                            Mes communautés
                        </SidebarItem>
                        <SidebarItem href="/posts/abonnements" icon={<IconUser />}>
                            Mes abonnements
                        </SidebarItem>
                    </SidebarSection>

                    <SidebarSection label="Publications">
                        <SidebarItem href="/posts/mes-posts" icon={<IconHistory />}>
                            Mes posts
                        </SidebarItem>
                        <SidebarItem href="/posts/brouillons" icon={<IconDraft />} badge={3}>
                            Brouillons
                        </SidebarItem>
                    </SidebarSection>

                    <SidebarSection label="Compte">
                        <SidebarItem href="/account/settings" icon={<IconSettings />}>
                            Paramètres
                        </SidebarItem>
                        <SidebarItem href="/account" icon={<IconAccount />} exact>
                            Compte
                        </SidebarItem>
                    </SidebarSection>

                    <SidebarFooter>
                        <SidebarAction icon={<IconPlus />} href="/posts/create">
                            Nouveau post
                        </SidebarAction>
                        <SidebarAction
                            icon={<IconLogout />}
                            variant="outline"
                            onClick={() => {
                                // TODO: brancher la déconnexion
                            }}
                        >
                            Déconnexion
                        </SidebarAction>
                    </SidebarFooter>
                </Sidebar>
            }
        >
            <Navbar title="Tableau de bord">
                <NavbarSearch
                    onSubmit={(q) => {
                        // TODO: brancher la recherche
                        console.log(q);
                    }}
                />

                <NavbarIconButton label="Notifications" badge>
                    <IconBell />
                </NavbarIconButton>

                <Menu
                    label="Menu du compte"
                    trigger={<NavbarAvatar initials="AF" name="Antoine" />}
                >
                    <MenuLabel>Antoine Fauché</MenuLabel>
                    <MenuItem href="/account" icon={<IconAccount />}>
                        Mon profil
                    </MenuItem>
                    <MenuItem href="/account/parametres" icon={<IconSettings />}>
                        Paramètres
                    </MenuItem>
                    <MenuSeparator />
                    <MenuItem
                        icon={<IconLogout />}
                        danger
                        onSelect={() => {
                            // TODO: brancher la déconnexion
                        }}
                    >
                        Déconnexion
                    </MenuItem>
                </Menu>
            </Navbar>

            <PageContent>{children}</PageContent>
        </AppShell>
    );
}