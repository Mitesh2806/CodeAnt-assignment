'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import SideNav from "../components/SideNav/SideNav";
import { useState, useEffect } from "react";
import Repo_Card from "../components/Repo_Card/Repo_Card";
import SearchCard from "../components/Search-card/Search-card";
import repositories from "@/data/repositories.json"
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Repository() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); 
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="h-screen  ">
            {isMobile ? (
                <div className="flex flex-col ">
                    <SideNav sidebarWidth={202} />
                    <div className="bg-[#FAFAFA] h-full w-full flex items-center justify-center">
                            
                            <div className="bg-white rounded-lg shadow-lg  w-[98%]">
                                <div className="  sticky md:top-1  opacity-90">
                                <SearchCard/>
                                </div> 
                                <ScrollArea className="h-[510px]  border-[1px]">
                                {repositories.map((repo, index) => (
                                    
                                    <Repo_Card
                                        key={index}
                                        heading={repo.heading}
                                        access={repo.access}
                                        lang={repo.lang}
                                        space={repo.space}
                                        days={repo.days}
                                    />
                                ))}
                                    </ScrollArea> 
                                
                            </div>
                        </div>
                </div>
            ) : (
                <ResizablePanelGroup direction="horizontal">
                    
                    <ResizablePanel 
                        defaultSize={18} 
                        minSize={8} 
                        style={{ width: "242px", maxWidth: "400px", minWidth: "190px" }}
                    >
                        <SideNav sidebarWidth={242} />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={93}>
                    <div className="bg-[#FAFAFA] h-full w-full flex items-center justify-center">
                            
                            <div className="bg-white rounded-lg shadow-lg  w-[98%]">
                                <SearchCard />
                                <ScrollArea className=" h-[575.4px]   ">
                                {repositories.map((repo, index) => (
                                <Repo_Card
                                    key={index}
                                    heading={repo.heading}
                                    access={repo.access}
                                    lang={repo.lang}
                                    space={repo.space}
                                    days={repo.days}
                                />
                            ))}
                                </ScrollArea>
                                
                            
                            </div>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            )}
        </div>
    );
}
