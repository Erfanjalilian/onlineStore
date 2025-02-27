
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import {CartProvider } from "../context/CartContext "
import { MyLanguageProvider } from "../context/myLanguage";
import {AuthProvider} from "../context/AuthContext"
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>
       <CartProvider>
        <MyLanguageProvider>  
        <Navbar />  
        {children}
        <Footer />
        </MyLanguageProvider>
        </CartProvider>
        </AuthProvider>
        
        
     
       
       
      </body>
    </html>
  );
}
