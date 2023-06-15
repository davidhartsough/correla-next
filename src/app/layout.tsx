import "./globals.css";
import TopBarNav from "@/components/TopBarNav";

export const metadata = {
  title: "Correla",
  description: "Correla v2.0 (next app)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBarNav />
        {children}
      </body>
    </html>
  );
}
