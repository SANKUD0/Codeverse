import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

export const metadata = {
  other: { "color-scheme": "light dark" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}