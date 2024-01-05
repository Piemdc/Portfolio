"use client"
import ScrollPositionContext from "@/utils/contexts/ScrollPositionContext";
import { useContext } from "react";

export default function BgBody() {


    const currentIndex = useContext(ScrollPositionContext)
    console.log(currentIndex)
    return(
        <div id={'bgbody'} className={'fixed'}>
            <div className={'contact w-screen min-h-screen absolute transition-opacity'}></div>
            <div className={'real w-screen min-h-screen absolute transition-opacity'}></div>
            <div className={'about w-screen min-h-screen absolute opacity-1 transition-opacity'}></div>
            <div className={'hero w-screen min-h-screen absolute transition-opacity duration-100 ease-in-out'}
             style={{
                 opacity: currentIndex.index === 0
                     ? 1-Number((currentIndex.percent / 100).toFixed(2))
                     : currentIndex.index === 1
                         ? 0
                         : 1
             }}
            ></div>
        </div>
    )
}