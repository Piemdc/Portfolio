import ACF from "@/public/images/reals/acf/acf.svg";
import OPUS from "@/public/images/reals/opus/opuslogo.svg";
import RealBlock from "@/Components/atoms/RealBlock";


export default function RealsWrapper(){

    return (
        <div className={'py-10 lg:py-0 flex flex-row flex-wrap justify-center gap-8 lg:w-[60%] content-start mx-auto h-full'}>
            <RealBlock url={'projects/acf'} image={<ACF/>} />
            <RealBlock url={'projects/opus'} image={<OPUS/>} />
            <RealBlock url={'projects/opus'} image={<OPUS/>} />
            <RealBlock url={'projects/opus'} image={<OPUS/>} />
            <RealBlock url={'projects/opus'} image={<OPUS/>} />
            <RealBlock url={'projects/opus'} image={<OPUS/>} />
            <RealBlock url={'projects/opus'} image={<OPUS/>} />
        </div>
    )
}