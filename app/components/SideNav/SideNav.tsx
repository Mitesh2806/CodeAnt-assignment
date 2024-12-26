'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import Image from 'next/image';
import CodeAnt from '@/public/SigninAnt-1.svg';
import Home from '@/public/Home.svg';
import Cloud from '@/public/Cloud.svg';
import Usage from '@/public/Usage.svg';
import Settings from '@/public/Settings.svg';
import Code from '@/public/Code.svg';
import Phone from '@/public/Phone.svg';
import Logout from '@/public/Logout.svg';

const SideNav = ({ sidebarWidth }: { sidebarWidth: number }) => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);

    const userName = "Mitesh Kumar Das Gupta";
    const isExpanded = sidebarWidth > 180;

    return (
        <>
            
            <div className="md:hidden flex top-0 w-full h-16 items-center justify-between px-4 bg-white sticky z-50 border-b">
                <div className="flex items-center gap-2">
                    <Image src={CodeAnt} alt="CodeAnt" width={20} height={20} />
                    <div style={{ fontFamily: 'Satoshi-Light, sans-serif' }} className="font-bold text-lg">
                        CodeAnt AI
                    </div>
                </div>
                <div onClick={toggleNav} className="block md:hidden my-auto cursor-pointer">
                    {navOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>

            
            {navOpen && (
                <div className="fixed flex flex-col top-16 w-full bg-white z-50 border-t">
                    {[ 
                        { icon: Home, label: 'Repositories' },
                        { icon: Code, label: 'AI Code Review' },
                        { icon: Cloud, label: 'Cloud Security' },
                        { icon: Usage, label: 'How to Use' },
                        { icon: Settings, label: 'Settings' },
                        { icon: Phone, label: 'Contact' },
                        { icon: Logout, label: 'Logout', className: 'text-red-500' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-2 px-4 py-4 text-black cursor-pointer hover:bg-[#1570EF] hover:text-white ${item.className || ''}`}
                        >
                            <div className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert">
                                <Image src={item.icon} alt={item.label} width={20} height={20} />
                            </div>
                            <div className="font-normal">{item.label}</div>
                        </div>
                    ))}
                </div>
            )}

            
            <div className="hidden md:flex md:flex-col h-screen bg-white">
                <div className="flex flex-row gap-2 py-3 pl-3 items-center">
                    <Image src={CodeAnt} alt="CodeAnt" width={24} height={24} />
                    {isExpanded && (
                        <div style={{ fontFamily: 'Satoshi-Light, sans-serif' }} className="font-bold text-lg">
                            CodeAnt AI
                        </div>
                    )}
                </div>

                <div className="flex items-center w-11/12 mx-auto justify-between h-6 rounded-sm border border-[#D5D7DA] mt-2">
                    <div className="text-md ml-2 truncate" title={userName}>
                        {userName}
                    </div>
                    <AiOutlineDown className="mr-2" size={18} />
                </div>

                <div className="mt-4 space-y-2">
                    {[ 
                        { icon: Home, label: 'Repositories' },
                        { icon: Code, label: 'AI Code Review' },
                        { icon: Cloud, label: 'Cloud Security' },
                        { icon: Usage, label: 'How to Use' },
                        { icon: Settings, label: 'Settings' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="mx-3 rounded-lg px-4 py-2 text-black cursor-pointer hover:bg-[#1570EF] hover:text-white flex items-center gap-2 group"
                        >
                            <div className="w-5 h-5 group-hover:filter group-hover:brightness-0 group-hover:invert">
                                <Image src={item.icon} alt={item.label} width={20} height={20} />
                            </div>
                            {isExpanded && <div className="font-normal">{item.label}</div>}
                        </div>
                    ))}
                </div>

                <div className="mt-auto space-y-2 pb-4">
                    <div className="flex items-center gap-2 mx-3 px-4 py-2 text-black cursor-pointer hover:bg-[#1570EF] hover:text-white group rounded-lg">
                        <div className="  group-hover:filter group-hover:brightness-0 group-hover:invert">
                        <Image src={Phone} alt="Contact" width={20} height={20} />
                        </div>
                        
                        {isExpanded && <div className="font-normal">Contact</div>}
                    </div>
                    <div className="flex items-center gap-2 mx-3 px-4 py-2 text-black cursor-pointer hover:bg-[#1570EF] hover:text-white group rounded-lg">
                        <div className=" group-hover:filter group-hover:brightness-0 group-hover:invert">
                        <Image src={Logout} alt="Logout" width={20} height={20} />
                        </div>
                        {isExpanded && <div className="font-normal">Logout</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideNav;
