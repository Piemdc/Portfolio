"use client"
import ScrollPositionContext from "@/utils/contexts/ScrollPositionContext";
import { useContext } from "react";

export default function BgBody() {
    const currentIndex = useContext(ScrollPositionContext)
    return (
        <div id={'bgbody'} className={'fixed top-0 h-lvh w-full'}>
            <div className={'hero w-full h-full absolute opacity-1 transition-opacity duration-100 ease-in-out'}></div>
            <div className={'about bg-[60%] lg:bg-center w-full h-full absolute opacity-0 transition-opacity'} style={{
                opacity: currentIndex.index === 0 && currentIndex.percent > 0
                    ? Number((currentIndex.percent / 100).toFixed(1))
                    : currentIndex.index === 1 && currentIndex.percent >= 0
                        ? 1 - Number((currentIndex.percent / 100).toFixed(1))
                        : 0
            }}></div>
            <div className={'stack bg-[60%] lg:bg-center w-full h-full absolute opacity-0 transition-opacity'} style={{
                opacity: currentIndex.index === 1 && currentIndex.percent > 0.20
                    ? Number((currentIndex.percent / 100).toFixed(1))
                    : currentIndex.index >= 2
                        ? 1
                        : 0
            }}></div>
        </div>
    )
}