import Link from "next/link"
import Navbar from "../components/Navbar"
import {Roboto} from "next/font/google" /* bring styles from google */

export const metadata = {
  title: "Mi tienda con Next js - Home page",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",
}

const roboto = Roboto({ /* defining styles */
  weight: ["300","400","500","700"],
  styles: ["italic","normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}

      </body>
    </html>
  )
}
