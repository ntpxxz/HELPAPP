"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants"
import { group } from "console";
import {
    Command,    
    CommandGroup,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    LayoutDashboard,
    SquareGanttChart,
    LaptopMinimal,    
    Users,
    Settings,
    LogOut

  } from "lucide-react";
  import UserItem from "./Usertem";

const SideBar = () => {
    const menuList = [
        {
group: "General",
items:[
    {
        url: "/",
        icon: <LayoutDashboard />,
        label: "Dashboard",
    },
    {
        url: "/Jobs",
        icon: <SquareGanttChart />,
        label: "Job Status",
      },   
      {
        url: "/Equipments",
        icon: <LaptopMinimal />,
        label: "Equipments",
      },
      {
        url: "/Users",
        icon: <Users />,
        label: "Users",
      },
    ],  
  
    Setting:[  
    {
      url: "/Setting",
      icon: <Settings />,
      label: "Setting",
  
    },
    {
      url: "/Sign Out",
      icon: <LogOut />,
      label: "Sign Out",
    },    
]
        }
    ]
  return ( 
  <div className="fixed flex flex-col gap-4 w-[200px] min-w-[200px] border-r min-h-screen p-4">
        <Image src="/vercel.svg" alt="logo" width={100} height={70} />

<div className="grow">
<Command style={{overflow:'visible'}}>
  <CommandList>
    {menuList.map((menu:any, key:number)=>(
   
    <CommandGroup key={key}>
        {menu.items.map((option:any, optionKey:number)=>
       
      <CommandItem key={optionKey} className="flex gap-2 cursor-pointer"> 
        {option.icon}
        {option.label}
        </CommandItem>
    )}
    </CommandGroup>
     ))}
      
  </CommandList>
</Command>

</div>
<div>
  <UserItem/>
</div>
</div>
)
}

export default SideBar