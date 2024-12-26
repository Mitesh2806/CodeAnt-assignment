'use client';

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { RefreshCwIcon } from "lucide-react";
import { Plus } from "lucide-react";

export default function SearchCard() {
  return (
    <div className="flex flex-col w-full p-3 rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div className="flex flex-col md:ml-2">
          <div className="font-bold text-[20px] md:text-[28px]">Repositories</div>
          <div className="font-normal text-[12px] md:text-[14px]">33 Total Repositories</div>
        </div>
        <div className="flex flex-row items-center md:justify-end gap-1 md:gap-2 md:mr-2">
          <button className="flex items-center justify-center w-[100px] md:w-[200px] h-[35px] md:h-[40px] rounded-md bg-white border-[1px] border-[#D5D7DA] text-xs md:text-base gap-1 md:gap-2">
            <RefreshCwIcon height={16} width={16} />
            <span className="hidden md:block">Refresh All</span>
            <span className="md:hidden">Refresh All</span>
          </button>
          <button className="flex items-center justify-center w-[110px] md:w-[200px] h-[35px] md:h-[40px] rounded-md bg-blue-600 border-[#D5D7DA] text-xs md:text-base text-white gap-1 md:gap-2">
            <Plus height={16} width={16} />
            <span className="hidden md:block">Add Repository</span>
            <span className="md:hidden">Add Repository</span>
          </button>
        </div>
      </div>
      <div className="flex items-center w-full md:w-[366px] gap-1 mt-3 md:mt-4 md:ml-2 border-[1px] border-[#D5D7DA] rounded-lg">
        <Search className="text-gray-400 text-[16px] md:text-[20px] ml-2" />
        <Input
          className="text-sm md:text-base flex-grow"
          placeholder="Search Repositories"
        />
      </div>
    </div>
  );
}
