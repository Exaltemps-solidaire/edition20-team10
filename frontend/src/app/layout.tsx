import type { Metadata } from "next";
import { Source_Sans_3, Schoolbell } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-texte",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const schoolbell = Schoolbell({
  variable: "--font-accroche",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imagine for Margo — Trouvez votre parcours",
  description:
    "Entreprise, particulier, testateur ou organisateur : trouvez votre façon d'agir avec Imagine for Margo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sourceSans.variable} ${schoolbell.variable}`}>
      <body>{children}</body>
    </html>
  );
}
