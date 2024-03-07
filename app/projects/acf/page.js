import Image from "next/image";
import acfBG from "@/public/images/reals/acf/acfbg.png"
export default function Page() {

    return (
        <main className="flex min-h-vh flex-col items-center justify-between relative reals bg-fixed ">
           <div className={'mt-[60px] w-full py-6'}>
                <a href={'https://pourlesenfants.actioncontrelafaim.org/'} target={'_blank'} className={'hover:scale-[101%] rounded-lg overflow-hidden  transition duration-700 block w-[40%] mx-auto drop-shadow-lg relative cursor-pointer'}>
                    <Image src={acfBG} alt={'site Pour les enfants'}/>
                </a>
           </div>
        </main>
    )
}
