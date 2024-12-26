'use client';

import Signin_Card_1 from "../components/Signin_Card_1/Signin_Card_1";
import Signin_Card_2 from "../components/Signin_Card_2/Signin_Card_2";

import CodeAntbig from '../../public/CodeAntbig.svg';
import Image from 'next/image'; 
import Signin_Card_Main from "../components/Main_Signin_Card/Main_Signin_Card";

export default function SignIn() {
    return (
        <main>
            <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
               
                <div className="bg-white hidden md:flex justify-center items-center ">
                    <div className="mb-56 relative">
                        <Signin_Card_1 />
                        <div className=" absolute top-[150px] left-[205px]">
                        <Signin_Card_2 />
                        </div>
                        
                    </div>

                    
                    <div className="absolute left-0 bottom-0">
                        <Image
                            src={CodeAntbig}
                            alt="CodeAnt"
                            quality={100}
                            width={248}
                            height={360}
                        />
                    </div>
                </div>

                
                <div className="absolute inset-y-0 w-[1px] bg-gray-300 right-1/2 hidden md:block"></div>

               
                <div className="bg-[#FAFAFA]">
                    <div className="h-full flex justify-center items-center">
                        <Signin_Card_Main/>
                    </div>
                </div>
            </div>
        </main>
    );
}
