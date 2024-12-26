'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Signin_Card_2() {
    const [issueCount, setIssueCount] = useState(0);

    useEffect(() => {
        const animateIssueCount = () => {
            let current = 0;
            const target = 500; 
            const duration = 1; 
            const interval = setInterval(() => {
                current += Math.ceil(target / (duration * 60)); 
                if (current >= target) {
                    clearInterval(interval);
                    current = target;
                }
                setIssueCount(current);
            }, 1000 / 60); 
        };

        animateIssueCount();
    }, []);
    return (
        <> 
        <div className=" lg:w-[16.875em] lg:h-[10.25em] w-[14.875em] h-[10em] rounded-xl drop-shadow-xl shadow-all-sides bg-white relative"> 
           <div className="flex items-center justify-between mx-6 pt-4">
                <Image 
                    src='/pie-chart.svg'
                    alt="Pie Chart"
                    width={56}
                    height={56}
                />
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[#0049C6] font-bold text-[14px] leading-[20px] flex flex-row items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                        14%
                    </div>
                    <div className="text-[12px] leading-[16px]">This week</div>
                </div>
           </div>
           <div className="flex flex-col items-center justify-center  absolute top-[88.19px] left-[23.83px]">
            <div className=" leading-[20px] font-bold">Issues Fixed</div>
               <motion.span
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1 }}
                   className="text-[#171717] w-[108px] h-[32px] font-bold leading-[32px] text-[32px]"
               >
                   {issueCount}K+
               </motion.span>
               
           </div>
        </div>
        </>
    );
}
