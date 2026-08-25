import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="theme--default">
      <body>{children}</body>
    </html>
  );
}