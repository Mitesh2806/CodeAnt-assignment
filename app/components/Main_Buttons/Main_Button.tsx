'use client';
import Image from "next/image";

export default function Main_Button({ logoSrc, option }: { logoSrc: string; option: string }) {
    return (
        <div className="rounded-lg border-[1px] border-gray-300 flex items-center justify-center px-4 py-2 gap-4 hover:bg-[#E9EAEB]">
            <Image src={logoSrc} alt="Logo" width={24} height={24} />
            <span className="text-gray-700 font-medium">{option}</span>
        </div>
    );
}
