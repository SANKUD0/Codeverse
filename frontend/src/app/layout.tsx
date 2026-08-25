import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Codeverse",
  description: "A platform for developers to share and collaborate on code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
