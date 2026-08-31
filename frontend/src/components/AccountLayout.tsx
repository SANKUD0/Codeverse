import { AppShell } from "./layout/AppShell";
import { IconHome, IconUser } from "./layout/icons";
import { Sidebar, SidebarItem, SidebarSection } from "./layout/Sidebar";
import { SidebarProvider } from "./layout/SidebarContext";

export default function AccountLayout() {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarSection>
                    <SidebarItem href="/accueil" icon={<IconHome />}>
                        Accueil
                    </SidebarItem>
                    <SidebarItem href="/account" icon={<IconUser />}>
                        Account
                    </SidebarItem>
                </SidebarSection>
            </Sidebar>
        </SidebarProvider>
    );
}