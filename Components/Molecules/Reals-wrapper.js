import ACF from "@/public/images/reals/acf/acf.svg";
import RealBlock from "@/Components/atoms/RealBlock";


export default function RealsWrapper(){

    return (
        <div className={'flex flex-row flex-wrap justify-center gap-6 lg:w-[60%] content-start mx-auto h-full'}>
            <RealBlock url={'projects/acf'} image={<ACF/>} />
            <RealBlock url={'projects/acf'} image={<ACF/>} />
            <RealBlock url={'projects/acf'} image={<ACF/>} />
            <RealBlock url={'projects/acf'} image={<ACF/>} />
            <RealBlock url={'projects/acf'} image={<ACF/>} />
            <RealBlock url={'projects/acf'} image={<ACF/>} />

        </div>
    )
}