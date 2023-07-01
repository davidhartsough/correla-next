import type { Metadata } from "next";
import "./globals.css";
import TopBarNav from "@/components/TopBarNav";

const description =
  "Correla connects people through correlation and conversation. Explore the directory, discover amazing people, and make new connections.";
export const metadata: Metadata = {
  metadataBase: new URL("https://correla.vercel.app"),
  title: {
    template: "%s • Correla",
    default: "Correla",
  },
  description,
  keywords: [
    "correla",
    "correlation",
    "connection",
    "conversation",
    "people",
    "connect",
    "discover",
    "directory",
    "explore",
  ],
  applicationName: "Correla",
  openGraph: {
    type: "website",
    title: {
      template: "%s • Correla",
      default: "Correla",
    },
    description,
    url: "https://correla.vercel.app/",
    locale: "en_US",
    siteName: "Correla",
  },
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
