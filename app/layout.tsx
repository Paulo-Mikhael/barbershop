import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./src/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-geist-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Barbershop",
  description: "Site para agendamento de horários de uma barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <ThemeProvider>
        <body className="min-h-full">{children}</body>
      </ThemeProvider>
    </html>
  );
}
