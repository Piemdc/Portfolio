import ScrollPositionContext from "@/utils/contexts/ScrollPositionContext";
import {useContext} from "react";

export default function RealsSide({changeShowReals}){

    const currentIndex = useContext(ScrollPositionContext)

    return (
                <button className={`${currentIndex.index >= 1 ? 'opacity-1' : 'opacity-0'} transition-opacity duration-700 z-40 flex justify-center gap-4 items-center fixed right-0 top-1/3  hover:scale-105 cursor-pointer`}
                        onClick={changeShowReals}>
                    <div className={" flex flex-col justify-start text-primary-content bg-neutral/25 backdrop-blur lower sideways border-dashed border-black rounded-l-lg  border-l-[1px] border-b-[1px] border-t-[1px] px-3 py-4"}>
                        <p>S</p>
                        <p>h</p>
                        <p>o</p>
                        <p>w</p>
                        <p>r</p>
                        <p>o</p>
                        <p>o</p>
                        <p>m</p>
                    </div>

                </button>
    )
}