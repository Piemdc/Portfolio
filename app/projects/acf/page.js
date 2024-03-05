import Image from "next/image";
import acfBG from "@/public/images/reals/acf/acfbg.png"
export default function Page() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative bg-black">
           <div className={'mt-[60px] w-full'}>
                <a href={'https://pourlesenfants.actioncontrelafaim.org/'} target={'_blank'} className={'block w-[40%] mx-auto drop-shadow-lg relative cursor-pointer'}>
                    <Image src={acfBG} alt={'site Pour les enfants'}/>
                </a>
           </div>
        </main>
    )
}
