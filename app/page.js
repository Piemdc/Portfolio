"use client"

import Hero from "@/Components/blocks/Hero";
import About from "@/Components/blocks/About";
import { useState } from "react";
import Reals from "@/Components/blocks/Reals";
import useLockBodyScroll from "@/utils/methods/useLockBodyScrolls";
import RealsSide from "@/Components/Molecules/Reals-side";
import Stack from "@/Components/blocks/Stack";
import SpotifyContainer from "@/Components/blocks/SpotifyContainer";
import Contact from "@/Components/blocks/Contact";



export default function Home() {

    const [showReals, setShowReals] = useState(false);
    const changeShowReals = (e) => {
        setShowReals(!showReals);
    }
    useLockBodyScroll(showReals);

    // @todo create a provider for this state
    const SpotifyTrack = process.env.NEXT_PUBLIC_SPOTIFY_TRACK
    const EmailJsDatas = {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    }
    return (
        <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between relative">
            <Hero />
            <About />
            <Reals showReals={showReals} setShowReals={setShowReals} changeShowReals={changeShowReals} />
            <RealsSide changeShowReals={changeShowReals} />
            <Stack />
            <SpotifyContainer SpotifyTrack={SpotifyTrack} />
            <Contact EmailJsDatas={EmailJsDatas} />
        </main>
    )
}
