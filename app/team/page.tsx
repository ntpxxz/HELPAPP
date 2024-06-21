'use client'
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { useState } from 'react'
const UserItem = dynamic(() => import("useritem"), { ssr: false });
type Member = {
    email: string
    full_name: string
    backgroundColor?: string
    role: string
    status? : string
}
import { Badge } from "@/components/ui/badge"

import {
    Command,
    CommandInput,
   
} from "@/components/ui/command"
export default function TeamSettings() {
    const [members, setMembers] = useState<Member[]>([
        {
            email: "CodexSam@gmail.com",
            full_name: "Test User1",
            backgroundColor: "rgba(101,75,46,2)",
            role: "admin",
            status: ""
        },
        {
            email: "CodexSam@gmail.com",
            full_name: "Test User2",
            backgroundColor: "rgba(151,75,46,2)",
            role: "admin",
            status: ""
        },
        {
            email: "CodexSam@gmail.com",
            full_name: "Test User3",
            backgroundColor: "rgba(191,75,46,2)",
            role: "viewer",
            status: "pending"
        }
    ])
    return (
        <div className='grid gap-4'>
            <header>
                <h2 className='text-[36px] font-[700]'>Team settings</h2>
            </header>
            <div className="grid gap-2">

            <div>
                <div className='flex items-center justify-between gap-2'>
                    <Command className="rounded-lg border">
                        <CommandInput placeholder="Type a command or search..." /></Command>
                    <Button variant="secondary">Add a new member</Button>
                </div>
            </div>
            <div>
                <div className="border rounded">
                {members.length === 0 && <div className ="p-4">There are no members yet.</div>}

                    {members && members.map((member: Member, key: number) => <div className="grid grid-cols-6 border-b 
                    last:border-b-0 flex items-center justify-between pr-2" key={key} >

                        <div className="col-span-2 flex gap-2">
                        <UserItem
                            backgroundColor={member.backgroundColor}
                            title={member.full_name}
                            description={member.email}
                            shadow={false}
                            border={false} />
                        </div>
                        <div className="col-span-3 flex gap-2" >
                        <Badge className={`tag ${member.role}`}>{member.role}</Badge>
                        {member.status && <Badge className={`tag ${member.status}`}>{member.status}</Badge>}

                        </div>
                     <div className="col-span-1 flex justify-end">
                     <Button variant="outline">Remove</Button>
                     </div>
                    </div>)}
                </div>
            </div>
        </div>
        
            </div>
    )
}
