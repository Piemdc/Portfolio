"use client"

import Hero from "@/Components/blocks/Hero";
import About from "@/Components/blocks/About";
import {useState} from "react";
import Reals from "@/Components/blocks/Reals";
import useLockBodyScroll from "@/utils/methods/useLockBodyScrolls";
import RealsSide from "@/Components/Molecules/Reals-side";
import Stack from "@/Components/blocks/Stack";



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
        <About />
        <Reals showReals={showReals} setShowReals={setShowReals} changeShowReals={changeShowReals}/>
        <RealsSide changeShowReals={changeShowReals}/>
        <Stack/>
        {/*<Contact/>*/}
    </main>
  )
}
