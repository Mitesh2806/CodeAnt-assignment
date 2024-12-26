'use client';

import Signin_Card_1 from "../components/Signin_Card_1/Signin_Card_1";
import Signin_Card_2 from "../components/Signin_Card_2/Signin_Card_2";

import CodeAntbig from '../../public/CodeAntbig.svg';
import Image from 'next/image'; 
import Signin_Card_Main from "../components/Main_Signin_Card/Main_Signin_Card";

export default function SignIn() {
    return (
        <main>
            <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 overflow-y-hidden">
               
                <div className="bg-white hidden md:flex justify-center items-center relative  ">
                    <div className=" flex w-[474px] items-center justify-center absolute">
                    <div className="mb-56 ">
                        <Signin_Card_1 />
                        <div className=" absolute lg:top-[150px] lg:left-[215px] left-[160px] top-[145px]">
                        <Signin_Card_2 />
                        </div>
                    </div>
                    
                        
                    </div>

                    
                    <div className="absolute bottom-[-80px] left-0">
                        <div className="lg:h-[360px] lg:w-[248px] h-[310px] w-[210px]">
                            <Image
                                src={CodeAntbig}
                                alt="CodeAnt"
                                quality={100}
                                layout="responsive"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="absolute inset-y-0 w-[1px] bg-gray-300 right-1/2 hidden md:block"></div>

               
                <div className="bg-[#FAFAFA]">
                    <div className="h-full flex flex-col justify-center items-center px-5 md:px-1 md:gap-4 gap-3">
                        <Signin_Card_Main/>
                        <div className=" text-[12px] md:text-[16px]">By signing up you agree to the <span className="font-bold">Privacy Policy.</span></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
