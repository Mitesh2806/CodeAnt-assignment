'use client';

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchCard() {
    return (
        <div className="flex flex-col w-full  p-3 rounded-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <div className="flex flex-col">
                    <div className="font-bold md:text-[28px] text-[18px]">Repositories</div>
                    <div className="font-normal text-[10px] md:text-xs">33 Total Repositories</div>
                </div>
                <div className="flex flex-row items-center md:justify-end gap-2">
                    <button className="flex items-center justify-center px-4 py-1 md:px-8 md:py-2 rounded-lg bg-white border-[1px] border-[#D5D7DA] text-sm md:text-base">
                        Refresh All
                    </button>
                    <button className="flex items-center justify-center px-4 py-1 md:px-8 md:py-2 rounded-lg bg-blue-600 border-[#D5D7DA] text-white text-sm md:text-base">
                        Add Repository
                    </button>
                </div>
            </div>
            <div className="flex items-center w-full md:w-[366px] gap-2 mt-4">
                <Search className="text-gray-400" />
                <Input 
                    className="text-sm md:text-base flex-grow" 
                    placeholder="Search Repositories" 
                />
            </div>
           
        </div>
    );
}
