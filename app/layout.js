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
     <body className={'antialiased relative'}>
     <DynamicBgBody/>
     <Header/>
        {children}
     {/*<div className={"font-black tracking-tighter text-primary-content relative text-center h-screen flex flex-col justify-center"}>*/}
     {/*    <h1 className={"lg:text-4xl uppercase"}>Ça arrive bientôt ! :)</h1>*/}
     {/*</div>*/}
     </body>
     </ScrollPositionProvider>

    </html>
  )
}
