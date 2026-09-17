import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Merakia | Chatbots IA y automatizaciones para tu negocio",
  description: "Recupera tiempo con Merakia. Chatbots con IA, atención automatizada, reservaciones, pedidos y cobros para restaurantes y soluciones a medida para tu negocio.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="es-MX"><body>{children}</body></html>;
}
