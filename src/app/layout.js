import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import { lusitana, roboto } from "@/ui/fonts";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ojos de Cielo Arte",
  description: "Generated by Alejandro Ponce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased `}><Nav />{children}
      <footer className='py-10 flex justify-center items-center text-2xl content-end opacity-20 border-solid'>
        <p className={`${lusitana.className}`}>creado por Alejandro Ponce</p>

        </footer></body>
    </html>
  );
}
