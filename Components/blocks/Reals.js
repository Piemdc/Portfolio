import RealsWrapper from "@/Components/Molecules/Reals-wrapper";


export default function Reals({showReals, setShowReals,changeShowReals}){
    return (
        <section id={'reals'} className={`z-40 px-10 w-full reals bg-secondary text-primary-content h-screen absolute bottom-0 duration-700 ${showReals ? 'translate-x-0':'translate-x-full'}`}>
            <button className={'relative hover:scale-105 transition-transform cursor-pointer mt-[120px]'}
                    onClick={changeShowReals}>
                <div className={'z-[9999] w-[30px] h-[30px] border-dashed border-[1px] border-white outline-dashed outline-[3px]  outline-offset-4 animate-spin duration-700 rounded-full'}></div>
                <span className={'z-[2] absolute left-0 right-0 top-0 bottom-0 text-center mt-0.5'}>≪</span>
            </button>
            <RealsWrapper/>
        </section>
    )
}