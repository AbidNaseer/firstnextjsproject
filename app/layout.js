import Footer from "@/app/(components)/footer/footer"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
