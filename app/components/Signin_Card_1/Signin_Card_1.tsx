'use client';
import Image from 'next/image';
import Ant1 from '@/public/SigninAnt-1.svg';
import {motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from 'react';

export default function Signin_Card_1() {
    const [langCount, setLangCount] = useState(0);
    const [devCount, setDevCount] = useState(0);
    const [hoursCount, setHoursCount] = useState(0);

    useEffect(() => {
        const animateLangCount = () => {
            let current = 0;
            const target = 30; 
            const duration = 0.5; 

            const interval = setInterval(() => {
                current += Math.ceil(target / (duration * 60)); 
                setLangCount(current);

                if (current >= target) {
                    clearInterval(interval);
                    setLangCount(target); 
                }
            }, 1000 / 60); 
        };

        animateLangCount();
    }, []);

    useEffect(() => {
        const animateDevCount = () => {
            let current = 0;
            const target = 10; 
            const duration = 1; 

            const interval = setInterval(() => {
                current += Math.ceil(target / (duration * 60)); 
                setDevCount(current);

                if (current >= target) {
                    clearInterval(interval);
                    setDevCount(target); 
                }
            }, 1000 / 60); 
        };

        animateDevCount();
    }, []);

    useEffect(() => {
        const animateHoursCount = () => {
            let current = 0;
            const target = 100; 
            const duration = 0.5; 

            const interval = setInterval(() => {
                current += Math.ceil(target / (duration * 60)); 
                setHoursCount(current);

                if (current >= target) {
                    clearInterval(interval);
                    setHoursCount(target); 
                }
            }, 1000 / 60); 
        };

        animateHoursCount();
    }, []);

    return (
        <div className=" flex items-center justify-center lg:w-[27.9375em] w-[25em] h-[10.625em]  rounded-2xl shadow-all-sides drop-shadow-2xl bg-white relative ">
            <div className=" flex absolute top-5 left-6">
            <div className="flex-shrink-0">
                <Image 
                    src='/SigninAnt-1.svg' 
                    alt="Ant1" 
                    width={28} 
                    height={31} 
                />
            </div>
            
            <div className="ml-2">
                <p className=" text-[18px] leading-[27px] font-bold">AI to Detect & Autofix Bad Code</p>
            </div>
            </div>
            <div className="h-[1px] bg-[#E6E8F0] w-full my-2 absolute top-[72px]"></div>
            <div className="flex items-center justify-around ">
           <div className=" flex flex-col items-center justify-center  top-[94.5px] lg:left-[20px] md:left-[10px] absolute">
           
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className='text-[#171717] text-[18px] font-bold leading-[27px]'
                    >
                        {langCount}+
                    </motion.span>
                    <h1 className="text-[#171717] font-normal leading-[20px] text-[14px]">Language Support</h1>
                
           </div>
                <div className="flex flex-col items-center justify-center  top-[94.5px] lg:left-[188.5px] md:left-[178.5px]  absolute">
                <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className='text-[#171717] text-[18px] font-bold leading-[27px]'
                    >
                        {devCount}K+
                    </motion.span>
                    <h1 className="text-[#171717] font-normal leading-[20px] text-[14px]">Developers</h1>
                </div>
                <div className="flex flex-col items-center justify-center  top-[94.5px] left-[320.5px]  absolute">
                <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className='text-[#171717] text-[18px] font-bold leading-[27px]'
                    >
                        {hoursCount}K+
                    </motion.span>
                    <h1 className="text-[#171717] font-normal leading-[20px] text-[14px] ">Hours</h1>
                </div>
            
           </div>
            
        </div>
    );
}


