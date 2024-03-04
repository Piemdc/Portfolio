
export default function RealBlock(props){
    return (
        <a href={props.url} className={'w-[40%] lg:w-[20%]'}>
            <div className={'svg__wrapper'}>{props.image}</div>
        </a>
    )
}