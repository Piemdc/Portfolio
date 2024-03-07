
export default function RealBlock(props){
    return (
        <a href={props.url} className={'border-[1px] border-black/10 h-[150px] w-[150px] bg-black/25 transition duration-700 hover:bg-black/75 hover:scale-90 backdrop-blur rounded-xl p-4 lg:w-[20%] flex flex-col justify-center'}>
            <div className={'svg__wrapper'}>{props.image}</div>
        </a>
    )
}