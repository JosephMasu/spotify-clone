'use client';
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
interface SidebarProps {
 children: React.ReactNode;   
}

export const Sidebar: React.FC<SidebarProps> =({
    children
    }) => {
        const pathname = usePathname();
        const routes = useMemo(() =>[
            {
                icon: HiHome,
                label:'Home',
                active:pathname!=='/search', 
                href:'/',
            },
            {
                icon: BiSearch,
                label:'search',
                active:pathname ==='/search', 
                href:'/',
            }
        ],[pathname])
    return (
        <div className="flex h-full">
            <div 
            className="
            hidden
            md:flex
            flex-col 
            gap-y-2
            bg-black
            h-full
            width-[300px]">
                <Box>
                    <div
                    className="
                    flex
                    flex-col
                    gap-4
                    px-5
                    py-4">
                        {routes.map((item) =>(
                        <SidebarItem
                        key={item.label}
                        {...item}
                        />
                    ))}</div>
                </Box>
                <Box className="
                overflow-y-auto
                h-full">
                    Sidebar Navigation
                </Box>
            </div>
          Sidebar!  
        </div>
    )
}
