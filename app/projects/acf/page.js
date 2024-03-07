"use client"
import Image from "next/image";
import acfBG from "@/public/images/reals/acf/acfbg.png"
import LOAD from "@/public/images/load.svg"
import {useState} from "react";
export default function Page() {

    const [loaded, setLoaded] = useState(false);

    return (
        <main className="flex screen flex-col items-center min-h-lvh justify-between relative reals bg-fixed ">
           <div className={'mt-[60px] w-full py-6'}>
               {loaded? null : (
                   <div className={'flex justify-center h-full items-center pt-[100px]'}><LOAD/></div>
               )}
                <a href={'https://pourlesenfants.actioncontrelafaim.org/'} target={'_blank'} className={`${loaded ? 'opacity-1' : 'opacity-0'}  hover:scale-[101%] rounded-lg overflow-hidden  transition duration-700 block w-[40%] mx-auto drop-shadow-lg relative cursor-pointer`}>
                    <Image src={acfBG} alt={'site Pour les enfants'}
                        onLoad={() => setLoaded(true)}
                 />
                </a>
           </div>
        </main>
    )
}
