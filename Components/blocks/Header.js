export default function Header(options){

    return (
        <header id={'header'} role={'banner'} className={'w-full flex flex-row justify-between py-2 px-6 text-primary-content '}>
            <div className={'flex flex-row gap-2'}>
                <a href={'#'} className={'font-sans font-bold'}>
                    Pierre Magnien
                </a>
                <div className={'font-sans italic'}>
                    Web Developer
                </div>
            </div>
            <nav>
               <ul className={'flex flex-row gap-2'}>
                   <li>réalisations</li>
                   <li>à propos</li>
                   <li>contact</li>
               </ul>
            </nav>
        </header>
    )
}