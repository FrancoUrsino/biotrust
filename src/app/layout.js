import "./globals.scss";
// import Navbar from "@/components/Navbar";
import { Libre_Franklin } from "next/font/google";

const font = Libre_Franklin({ subsets: ["latin"] });

export const metadata = {
title: "Biotrust",
  description: "Nuestra empresa es el principal proveedor de equipamiento médico, ofrecemos la mas avanzada tecnología, procurando estar actualizados y de acuerdo a las normas vigentes.",
  keywords: ['Biotrust', 'certificaciones', 'medicina', 'alquiler de artefactos medicos', 'electromedicina', 'equipamiento medico', 'normas vigentes'],
  authors: [{ name: 'Marina' }, { name: 'Franco Ursino', url: 'https://francoursino-portfolio.vercel.app/' }],
  creator: 'Franco Ursino',
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}