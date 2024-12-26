'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Main_Button from '@/app/components/Main_Buttons/Main_Button';

type ButtonData = {
    logoSrc: string;
    option: string;
};

export default function Signin_Card_Main() {
    const [selectedType, setSelectedType] = useState<'SAAS' | 'Self Hosted' | null>('SAAS'); // Default to 'SAAS'

    const buttonData: Record<'SAAS' | 'Self Hosted', ButtonData[]> = {
        SAAS: [
            { logoSrc: '/Github.svg', option: 'Sign in with Github' },
            { logoSrc: '/Bitbucket.svg', option: 'Sign in with Bitbucket' },
            { logoSrc: '/Azure.svg', option: 'Sign in with Azure DevOps' },
            { logoSrc: '/Gitlab.svg', option: 'Sign in with GitLab' },
        ],
        'Self Hosted': [
            { logoSrc: '/Gitlab.svg', option: 'Self Hosted GitLab' },
            { logoSrc: '/sso.svg', option: 'Sign in with SSO' },
            
        ],
    };

    const renderOptions = () => {
        if (!selectedType) return null;

        return (
            <div className="flex flex-col gap-4 mt-4 md:mt-6 ">
                {buttonData[selectedType].map((button, index) => (
                    <Main_Button key={index} logoSrc={button.logoSrc} option={button.option} />
                ))}
            </div>
        );
    };

    return (
        
        <div className="lg:w-[41em] w-auto h-[37.64625em] bg-white rounded-xl border-[1px] border-gray-300 ">
            <div className="container mx-1 mb-7 mt-6 md:mt-9">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center w-[201.38px] h-[40px] gap-[13.76px]">
                        <Image src="/SigninAnt-1.svg" alt="CodeAnt" width={35.62} height={40} />
                        <div style={{ fontFamily: 'Satoshi-Light, sans-serif' }}>CodeAnt AI</div>
                    </div>
                </div>
                <div className="mt-6 md:mt-9 w-[90%] mx-auto">
                    <div className="text-center font-semibold leading-[40px] lg:text-[32px] md:text-[26px] sm:text-[24px] text-[20px]">
                        Welcome to CodeAnt AI
                    </div>
                </div>
            </div>

            <div className="container mx-auto w-[90%] md:w-[324px] h-[60px] border-gray-300 border-[1px] rounded-lg flex">
                <button
                    className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#1570EF] hover:text-white transition-colors rounded-lg"
                    onClick={() => setSelectedType('SAAS')}
                >
                    <div className="font-semibold md:text-[20px] text-[16px] md:leading-[28px] leading-[24px]">SAAS</div>
                </button>
                <button
                    className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#1570EF] hover:text-white transition-colors rounded-lg"
                    onClick={() => setSelectedType('Self Hosted')}
                >
                    <div className="font-semibold md:text-[20px] text-[16px] md:leading-[28px] leading-[24px]">Self Hosted</div>
                </button>
            </div>

            <div className="container mx-auto md:px-6 px-3 mt-4">{renderOptions()}</div>
        </div>
    );
}
