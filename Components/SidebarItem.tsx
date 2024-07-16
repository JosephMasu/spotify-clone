import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons'

interface SidebarProps{
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;

}

const SidebarItem: React.FC<SidebarProps> =({
    icon,
    label,
    active,
    href,
}) =>{
    
  return (
    <Link>SidebarItem</Link>
  )
}

export default SidebarItem