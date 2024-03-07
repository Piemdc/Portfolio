"use client"
import Image from "next/image";
import opusBG from "@/public/images/reals/opus/opus.png"
import {useState} from "react";
import LOAD from "@/public/images/load.svg"

export default function Page() {

        const [loaded, setLoaded] = useState(false);

        return (
            <main className="flex screen flex-col items-center min-h-lvh justify-between relative reals bg-fixed ">
                <div className={'mt-[60px] w-full py-6'}>
                    {loaded? null : (
                        <div className={'flex justify-center h-full items-center pt-[100px]'}><LOAD/></div>
                    )}
                    <a href={'https://opus.paris/'} target={'_blank'} className={`${loaded ? 'opacity-1' : 'opacity-0'}  hover:scale-[101%] rounded-lg overflow-hidden  transition duration-700 block w-[40%] mx-auto drop-shadow-lg relative cursor-pointer`}>
                        <Image src={opusBG} alt={'site Opus'}
                               onLoad={() => setLoaded(true)}
                        />
                    </a>
                </div>
            </main>
        )
    }

