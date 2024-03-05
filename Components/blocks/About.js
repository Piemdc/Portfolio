
import Link from "next/link";
import Reals from "@/Components/blocks/Reals";
import {useState} from "react";

export default function About({changeShowReals}){
    return (
            <section id={"about"} className={"w-full text-primary-content relative"}>
                <div className={"relative z-40 px-10 lg:grid grid-cols-2 min-h-screen  pt-[60px] lg:pt-0"}>
                    <div className={"text-3xl self-center p-10 text-left relative uppercase lg:col-span-1"}>
                        <h2 className={"font-title font-extralight hover:text-secondary-focus transition-colors duration-300 capitalize text-6xl mb-10 text-right"}>Pierre Magnien</h2>
                        <p className={"font-bold mb-5 text-right"}>passionné, débrouillard et autonome, j&apos;ai maintenant la possibilité de mettre ma vision et mes talents à la création de produits innovants. </p>
                        <p className={"font-bold text-right"}> Actuellement en poste chez <Link href={"https://opus.paris"} target={"_blank"} role={"link"} aria-label={"opus"} className={"text-accent hover:text-accent-focus"}>Opus</Link>, Je participe à la création de solutions digitales complètes sur du Wordpress classique comme sur du Headless avec NextJS</p>
                    </div>
                    <div className={"lg:col-span-1 flex flex-column justify-end items-end gap-4 mb-[100px] mr-[10rem]"}>
                        <div className={'flex justify-center items-center'}>
                            <span className={"text-primary-content button lower"}>Mes realisations</span>
                            <button className={'relative hover:scale-105 transition-transform cursor-pointer'}
                                 onClick={changeShowReals}>
                                <div className={'z-[9999] w-[30px] h-[30px] border-dashed border-[1px] border-white outline-dashed outline-[3px]  outline-offset-4 animate-spin duration-700 rounded-full'}></div>
                                <span className={'z-[2] absolute left-0 right-0 top-0 bottom-0 text-center mt-0.5'}>≫</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
    )
}