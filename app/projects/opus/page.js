import Image from "next/image";
import opusBG from "@/public/images/reals/opus/opus.png"
export default function Page() {

    return (
        <main className="flex min-h-lvh flex-col items-center justify-between relative reals bg-fixed ">
        <div className={'mt-[60px] w-full py-6'}>
                <a href={'https://opus.paris/'} target={'_blank'} className={'hover:scale-[101%] rounded-lg overflow-hidden transition duration-700 block w-[40%] mx-auto drop-shadow-lg relative cursor-pointer'}>
                    <Image src={opusBG} alt={'site Pour les enfants'}/>
                </a>
           </div>
        </main>
    )
}
