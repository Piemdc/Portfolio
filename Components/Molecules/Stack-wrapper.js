import JS from  '@/public/images/stack/JS.svg'
import PHP from  '@/public/images/stack/PHP.svg'
import REACT from  '@/public/images/stack/react.svg'
import WORDPRESS from  '@/public/images/stack/wordpress.svg'
import NEXT from  '@/public/images/stack/NEXT.svg'
import GIT from  '@/public/images/stack/git.svg'
import DOCKER from  '@/public/images/stack/docker.svg'


export default function StackWrapper(){

    return (
        <div className={'flex flex-row flex-wrap justify-center lg:justify-end gap-8 lg:w-[60%] content-end  h-full'}>
            <div className={'w-[100px] text-yellow-400 rounded-md overflow-hidden'}>
                <JS/>
                <span className={'sr-only'}>Javascript</span>
            </div>

            <div className={'w-[100px] text-[#7377AE] rounded-md overflow-hidden'}>
                <PHP/>
                <span className={'sr-only'}>PHP</span>
            </div>

            <div className={'w-[100px] text-transparent rounded-md overflow-hidden'}>
                <REACT/>
                <span className={'sr-only'}>React</span>
            </div>

            <div className={'w-[100px] text-[#268CB0]'}>
                <WORDPRESS/>
                <span className={'sr-only'}>Wordpress</span>
            </div>

            <div className={'w-[100px] text-white'}>
                <NEXT/>
                <span className={'sr-only'}>NextJs</span>
            </div>

            <div className={'w-[100px]'}>
                <GIT/>
                <span className={'sr-only'}>Git</span>
            </div>

            <div className={'w-[100px] text-[#1794D4]'}>
                <DOCKER/>
                <span className={'sr-only'}>Docker</span>
            </div>

        </div>
    )
}