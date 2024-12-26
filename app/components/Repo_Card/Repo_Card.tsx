'use client';

import { Badge } from "@/components/ui/badge";
import { DatabaseIcon } from "lucide-react";

export default function Repo_Card({heading, access, lang, space, days}:{heading:string; access:string; lang:string; space:string; days:string;}) {
    return (
        <>
            <div className="flex items-center w-full h-[6.4em] border-r-0 border-l-0 border-[1px] border-[#D5D7DA] hover:bg-[#F5F5F5]">
                <div className="flex flex-col mx-4 gap-2 md:gap-3">
                    <div className="flex flex-row gap-2 md:gap-3">
                        <div className="font-bold text-sm md:text-base">{heading}</div>
                        <Badge 
                            variant={"outline"} 
                            className="rounded-xl bg-[#B2DDFF] text-[#175CD3] text-xs md:text-sm cursor-default"
                        >
                            {access}
                        </Badge>
                    </div>
                    <div className="flex flex-row gap-2 md:gap-3 shrink">
                        <div className="flex flex-row items-center gap-2">
                            <div className="font-normal text-xs md:text-sm">{lang}</div>
                            <div className="rounded-full w-[0.4em] h-[0.4em] md:w-[0.5em] md:h-[0.5em] bg-blue-600"></div>
                        </div>
                        <div className="flex flex-row gap-2 md:gap-3 shrink">
                            <div className="flex flex-row items-center gap-1 md:gap-2">
                                <DatabaseIcon className="w-3 h-3 md:w-4 md:h-4" />
                                <div className="font-medium text-xs md:text-sm">{space}</div>
                            </div>
                        </div>
                        <div className="text-xs md:text-sm">{days}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
