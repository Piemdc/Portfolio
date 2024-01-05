import './globals.css'
import Header from "@/Components/blocks/Header";
import Head from "@/Components/atoms/head";


export const metadata = {
  title: 'Piemdc - Web Development',
  description: 'Pierre Magnien - Frontend developer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
     <Head/>
    <body className={'bg-neutral antialiased'}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
