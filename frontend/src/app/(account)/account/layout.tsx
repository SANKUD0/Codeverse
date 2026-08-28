import DashboardLayout from "@/components/DasboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayout>{children}</DashboardLayout>
    );
}