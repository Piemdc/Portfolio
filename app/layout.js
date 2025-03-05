import './globals.css'
import Header from "@/Components/blocks/Header";
import Head from "@/Components/atoms/head";
import ScrollPositionProvider from "@/utils/providers/ScrollPositionProvider";
import dynamic from "next/dynamic";
import { ReCaptchaProvider } from "next-recaptcha-v3";



export const metadata = {
  title: 'Piemdc - Frontend developer',
  description: 'Explore a front-end web developer\'s portfolio, featuring cutting-edge designs and projects that highlight expertise in creating engaging and user-friendly websites.',
  robots: 'index, follow'
}

export default function RootLayout({ children }) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const DynamicBgBody = dynamic(() => import("@/Components/atoms/BgBody"), { ssr: false });

  return (
    <html lang="fr">
      <Head />
      <ScrollPositionProvider>
        <ReCaptchaProvider reCaptchaKey={reCaptchaKey}>
          <body className={'antialiased relative'}>
            <DynamicBgBody />
            <Header />
            {children}
          </body>
        </ReCaptchaProvider>
      </ScrollPositionProvider>

    </html>
  )
}
