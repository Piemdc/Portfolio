"use client"

import Link from "next/link";
import EMAIL from "@/public/images/email.svg";

export default function FourOhFour() {
    return(
        <section id={"hero"} className={"px-10 pt-[60px] lg:pt-0 w-full min-h-screen text-primary-content" }>
            <div className={"grid grid-cols-2  lg:min-h-screen font-sans uppercase pt-[60px] lg:pt-0"}>
                <div className={"col-span-1 h-[170px] bg-black/50 self-center font-black tracking-tighter lg:text-right lg:mb-0 pr-10 border-r-2 relative flex items-center justify-end"}>
                    <h1 className={"text-white text-5xl lg:text-8xl"}>404 :(</h1>
                </div>

            <div className={"col-span-1 h-[170px] bg-black/50 self-center p-10 font-bold text-left relative flex flex-col items-start justify-center"}>
                <p className={"lg:text-3xl"}>Cette pas n&apos;existe pas</p>
                <a href="/" className={'lowercase underline text-accent hover:text-accent-focus'}> Retourner sur la page principale</a>
            </div>
            </div>


        </section>
)
}