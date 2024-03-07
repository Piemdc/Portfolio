
import Link from "next/link";

export default function About(){
    return (
            <section id={"about"} className={"w-full text-primary-content relative"}>
                <div className={"relative z-20 px-10 lg:grid grid-cols-2 lg:min-h-screen pt-[60px] lg:pt-0"}>
                    <div className={"lg:text-3xl self-center lg:p-10 text-left relative uppercase lg:col-span-1"}>
                        <h2 className={"font-title font-extralight hover:text-secondary-focus transition-colors duration-300 capitalize text-6xl mb-10 lg:text-right"}>Pierre Magnien</h2>
                        <p className={"font-bold mb-5 lg:text-right"}>passionné, débrouillard et autonome, j&apos;ai maintenant la possibilité de mettre ma vision et mes talents à la création de produits innovants. </p>
                        <p className={"font-bold lg:text-right"}> Actuellement en poste chez <Link href={"https://opus.paris"} target={"_blank"} role={"link"} aria-label={"opus"} className={"text-accent hover:text-accent-focus"}>Opus</Link>, Je participe à la création de solutions digitales complètes sur du Wordpress classique comme sur du Headless avec NextJS</p>
                    </div>
                </div>
            </section>
    )
}