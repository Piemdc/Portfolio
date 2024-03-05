import Image from "next/image";
import opusBG from "@/public/images/reals/opus/opus.png"
export default function Page() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative bg-black">
           <div className={'mt-[60px] w-full'}>
                <a href={'https://opus.paris/'} target={'_blank'} className={'block w-[40%] mx-auto drop-shadow-lg relative cursor-pointer'}>
                    <Image src={opusBG} alt={'site Pour les enfants'}/>
                </a>
           </div>
        </main>
    )
}
