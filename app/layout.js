import './globals.css'
import Header from "@/Components/blocks/Header";
import Head from "@/Components/atoms/head";
import ScrollPositionProvider from "@/utils/providers/ScrollPositionProvider";
import dynamic from "next/dynamic";


export const metadata = {
  title: 'Piemdc - Web Development',
  description: 'Pierre Magnien - Frontend developer'
}

export default function RootLayout({ children }) {

    const DynamicBgBody = dynamic(() => import("@/Components/atoms/BgBody"), { ssr: false });

    return (
    <html lang="fr">
     <Head/>
     <ScrollPositionProvider>
     <body className={'bg-neutral antialiased relative'}>
     <DynamicBgBody/>
       <Header/>
        {children}
     </body>
     </ScrollPositionProvider>

    </html>
  )
}
