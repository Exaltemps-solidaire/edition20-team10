import type { Metadata } from "next";
import { Fredoka, Work_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-titre",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-texte",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imagine for Margo — Trouvez votre parcours",
  description:
    "Entreprise, particulier, testateur ou organisateur : trouvez votre façon d'agir avec Imagine for Margo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${fredoka.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
