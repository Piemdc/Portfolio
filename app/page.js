"use client"

import Hero from "@/Components/blocks/Hero";
import About from "@/Components/blocks/About";
import Contact from "@/Components/blocks/Contact";
import dynamic from "next/dynamic";
import {useState} from "react";
import Reals from "@/Components/blocks/Reals";



export default function Home() {

    const [showReals,setShowReals] = useState(false);
    const changeShowReals =(e) =>{
        setShowReals(!showReals);
    }

    // @todo create a provider for this state


    return (
    <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between relative">
        <Hero/>
        <About changeShowReals={changeShowReals}/>
        <Reals showReals={showReals} setShowReals={setShowReals} changeShowReals={changeShowReals}/>
        {/*<Contact/>*/}
    </main>
  )
}
