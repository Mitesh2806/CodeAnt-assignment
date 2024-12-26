'use client';
import Image from "next/image";
import AntMain from '@/public/SigninAnt-1.svg';
import { useState } from "react";
import Github from '@/public/Github.svg';
import Bitbucket from '@/public/Bitbucket.svg';
import Azure from '@/public/Azure.svg';
import Gitlab from '@/public/Gitlab.svg';
import sso from '@/public/sso.svg';
import Main_Button from '@/app/components/Main_Buttons/Main_Button';

type ButtonData = {
    logoSrc: string;
    option: string;
};

export default function Signin_Card_Main() {
    const [selectedType, setSelectedType] = useState<'SAAS' | 'Self Hosted' | null>(null);

    const buttonData: Record<'SAAS' | 'Self Hosted', ButtonData[]> = {
        SAAS: [
            { logoSrc: Github, option: 'Sign in with Github' },
            { logoSrc: Bitbucket, option: 'Sign in with Bitbucket' },
            { logoSrc: Azure, option: 'Sign in with Azure DevOps' },
            { logoSrc: Gitlab, option: 'Sign in with GitLab' },
        ],
        'Self Hosted': [
            { logoSrc: sso, option: 'Sign in with SSO' },
            { logoSrc: Gitlab, option: 'Self Hosted GitLab' },
        ],
    };

    const renderOptions = () => {
        if (!selectedType) return null;

        return (
            <div className="flex flex-col gap-4 mt-6">
                {buttonData[selectedType].map((button, index) => (
                    <Main_Button key={index} logoSrc={button.logoSrc} option={button.option} />
                ))}
            </div>
        );
    };

    return (
        <div className="md:w-[42em] w-[39em]  h-[37.64625em] bg-white rounded-xl border-[1px] border-gray-300 mx-4">
            <div className="container mx-1 mb-7 mt-9">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center w-[201.38px] h-[40px] gap-[13.76px]">
                        <Image src={AntMain} alt="CodeAnt" width={35.62} height={40} />
                        <div style={{ fontFamily: 'Satoshi-Light, sans-serif' }}>CodeAnt AI</div>
                    </div>
                </div>
                <div className="mt-9 md:w-[368px] md:h-[48px] w-[350px] h-[42px] mx-auto">
                    <div className="text-center font-semibold leading-[48px] md:text-[32px] text-[28px]">
                        Welcome to CodeAnt AI
                    </div>
                </div>
            </div>

            <div className="container mx-auto w-[324px] h-[60px] border-gray-300 border-[1px] rounded-lg flex">
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

            
            <div className="container mx-auto md:px-6 px-3 ">{renderOptions()}</div>
        </div>
    );
}
