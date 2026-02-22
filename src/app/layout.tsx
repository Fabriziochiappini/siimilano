import type { Metadata } from "next";
import { Oswald, Lora } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "S.I.I. SRL Milano | Esperienza e Innovazione in Edilizia",
  description: "Ristrutturazioni Edili e Consulenza Tecnica per la riqualificazione del patrimonio immobiliare. Un approccio moderno basato su solide competenze tecniche.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${oswald.variable} ${lora.variable} antialiased font-sans bg-background-light dark:bg-background-dark text-neutral-dark dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
