"use client"

import Hero from "@/Components/blocks/Hero";
import About from "@/Components/blocks/About";
import {useState} from "react";
import Reals from "@/Components/blocks/Reals";
import useLockBodyScroll from "@/utils/methods/useLockBodyScrolls";



export default function Home() {

    const [showReals,setShowReals] = useState(false);
    const changeShowReals =(e) =>{
        setShowReals(!showReals);
    }
    useLockBodyScroll(showReals);

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
