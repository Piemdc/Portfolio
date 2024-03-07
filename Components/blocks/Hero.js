import Link from "next/link";
import Arrow from "@/public/images/310628.svg"
import Image from "next/image";

export default function Hero(){

    return (
        <section id={"hero"} className={"px-10 pt-[60px] lg:pt-0 w-full text-primary-content" }>
            <div className={"lg:grid grid-cols-2 lg:min-h-screen font-sans uppercase pt-[60px] lg:pt-0"}>
                <div className={"lg:col-span-1 self-center font-black tracking-tighter lg:text-right mb-10 lg:mb-0 lg:pr-10 lg:border-r-2 relative"}>
                    <span className={"absolute lowercase font-title top-[-1em] lg:right-10 text-secondary-focus lg:text-4xl"}>Junior</span>
                    <h1 className={"text-5xl lg:text-8xl"}>Frontend developer</h1>
                </div>
                <div className={"lg:col-span-1 lg:text-3xl self-center lg:p-10 font-bold text-left relative"}>
                    <p>Jeune développeur</p>
                    <p className={'mb-5 lg:mb-0'}>basé en France,diplômé d&apos;Hetic, en contrat chez <Link href={"https://opus.paris"} target={"_blank"} role={"link"} aria-label={"opus"} className={"text-accent hover:text-accent-focus"}>Opus</Link>. J&apos;aime l&apos;art et la musique, les jeux vidéos et la nature.</p>

                    <div className={"lg:absolute lg:bottom-[-2em] lg:right-40"}>
                        <Link href={"#contact"} className="button flex flex-col">
                            <span>contactez-moi</span>
                            <span className={"w-[150px] h-[50px] text-primary-content"}><Arrow/></span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}