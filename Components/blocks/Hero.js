import Link from "next/link";
import EMAIL from "@/public/images/email.svg"
import DIVIDER from "@/public/images/divider.svg"
import {useEffect, useState} from "react";
export default function Hero() {
    const targetWord = 'developer';
    const [word, setWord] = useState(' '.repeat(targetWord.length));

    useEffect(() => {
        targetWord.split('').forEach((correctLetter, index) => {
            setTimeout(() => {
                setWord((currentWord) => {
                    const wordArray = currentWord.split('');
                    wordArray[index] = correctLetter;
                    return wordArray.join('');
                });
            }, 125 * (index + 1)); // this will queue them up to be one second apart
        });
    }, []);


    return (
        <section id={"hero"} className={"px-10 pt-[60px] lg:pt-0 w-full min-h-screen text-primary-content relative" }>
            <div className={"lg:grid grid-cols-2 lg:min-h-screen font-sans uppercase pt-[60px] lg:pt-0"}>
                <div className={"lg:col-span-1 self-center font-black tracking-tighter lg:text-right mb-10 lg:mb-0 lg:pr-10 lg:border-r-2 relative"}>
                    <h1 className={"flex flex-col text-5xl lg:text-8xl"}>Frontend <span>{word}</span></h1>
                </div>
                <div className={"lg:col-span-1 lg:text-3xl self-center lg:p-10 font-bold text-left relative"}>
                    <p>Jeune développeur</p>
                    <p className={'mb-5 lg:mb-0'}>basé à Bordeaux en France, diplômé d&apos;Hetic en 2023, en contrat chez <Link href={"https://opus.paris"} target={"_blank"} role={"link"} aria-label={"opus"} className={"text-accent hover:text-accent-focus"}>Opus</Link>. J&apos;aime l&apos;art, la musique, les jeux vidéos et la nature.</p>

                    <div className={"lg:absolute lg:bottom-[-2em] lg:right-40"}>
                        <Link href={"mailto:magniendcpierre@gmail.com"} className="button flex flex-row justify-end items-center gap-2">
                            <span className={'font-sans text-sm'}>contactez-moi</span>
                            <span className={"w-[15px] text-primary-content"}><EMAIL/></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'w-full h-[20px] absolute left-0 bottom-[40px]'}>
                <a href={"#about"} className={'block animate-bounce h-[30px] w-[30px] mx-auto'}>
                    <DIVIDER/>
                </a>
            </div>

        </section>
    )
}
