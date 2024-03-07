"use client"
import Link from "next/link";
import React, { useState, useEffect } from 'react';

export default function Header(options){
    const [isScrolled,setIsScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0 ) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id={'header'} role={'banner'} className={'h-[60px] z-50 w-full px-10 flex flex-row justify-between text-primary-content font-sans fixed border-b-[1px] animate duration-700 ease-in-out '+ (isScrolled?'bg-primary/50 backdrop-blur-xs':'')}>
            <div className={'flex flex-row items-center gap-4'}>
                <a href={'/'} className={'font-title'}>
                    Piemdc
                </a>
                <div className={'uppercase font-bold'}>
                    Frontend Developer
                </div>
            </div>
            <nav className={'flex flex-row items-center'}>
               <ul className={'flex flex-row gap-2'}>
                   <li className={'hidden lg:block'}><Link role={'link'} href="#about">à propos</Link></li>
                   <li><Link role={'link'} href="mailto:magniendcpierre@gmail.com">contact</Link></li>
               </ul>
            </nav>
        </header>
    )
}