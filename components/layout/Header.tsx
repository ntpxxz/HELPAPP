'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import React, { useState } from 'react'
import { Bell } from 'lucide-react'
import { CommandDemo } from './Command'
import { Button } from '../ui/button'


export const Header = () => {
  const [notifications, setNotifications]=useState<any>([
{

  text: "This is a notification",
  date:"25-05-2024",
  read: true
},
{

  text: "This is a notification",
  date:"25-05-2024",
  read: false
},




  ])
  return (
    <div className='grid grid-cols-2 gap-2 p-2 border-b'>
      <CommandDemo />
      <div className='flex items-center justify-center'>
       
        <DropdownMenu>
          <DropdownMenuTrigger asChild>  
          <Button className='relative rounded-lg' variant="outline" size="icon">
          <div className= {`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x:any)=>x.read) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>

          <Bell className='h-4 w-4'/>
        </Button> 
        </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>       
       {notifications.map((item: any, key: number)=> 
       <DropdownMenuItem key={key} className ='py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2'>
        <div className= {`h-3 w-3 rounded-full my-1 ${!item.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
        <div>           
       <p>{item.text}</p>
       <p className='text-us text-neutral-500'>{item.date}</p>
       </div>  
       </DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}
