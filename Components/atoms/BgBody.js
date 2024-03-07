"use client"
import ScrollPositionContext from "@/utils/contexts/ScrollPositionContext";
import { useContext } from "react";

export default function BgBody() {
    const currentIndex = useContext(ScrollPositionContext)
    return(
        <div id={'bgbody'} className={'fixed w-full'}>
            <div className={'hero w-full min-h-screen absolute opacity-1 transition-opacity duration-100 ease-in-out'}></div>
            <div className={'about bg-[60%] lg:bg-center w-full min-h-screen absolute opacity-0 transition-opacity'} style={{
                opacity: currentIndex.index === 0 && currentIndex.percent > 0
                    ? Number((currentIndex.percent / 100).toFixed(1))
                    : currentIndex.index >= 1
                        ? 1
                        : 0
            }}></div>
        </div>
    )
}