import "./globals.scss";
// import Navbar from "@/components/Navbar";
import { Libre_Franklin } from "next/font/google";

const font = Libre_Franklin({ subsets: ["latin"] });

export const metadata = {
  title: "BioTrust",
  description: "",
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