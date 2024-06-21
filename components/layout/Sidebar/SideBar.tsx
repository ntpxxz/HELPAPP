"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  SquareGanttChart,
  LaptopMinimal,
  Users,
  Settings,
  LogOut

} from "lucide-react";
import UserItem from 'useritem'
import styles from './menuLink.module.css'
import MenuLink from "@/components/layout/Sidebar/MenuLink"

const SideBar = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {}
    }, []);
  
  const menuList = [
    {
      group: "General",
      items: [
        {
          url: "/",
          icon: <LayoutDashboard />,
          label: "Dashboard",
        },
        {
          url: "../jobs",
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

      Setting: [
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
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <Image src="/vercel.svg" alt="logo" width={100} height={70} />
      <div>
        <UserItem
          title="John Doe"
          description="johndoe@mail.com"
          shadow={false}
          style={{
            border: '1px solid blue'
          }}
        />

      </div>
      <div className="grow">
        <ul className={styles.items}>
          {menuList.map((cat) => (
            <li key={cat.group}>
              <span  className={styles.cat}>{cat.group}</span>
              {cat.items.map((item) => (
                <MenuLink item={item} key={item.label} />
              ))}
            </li>
          ))}
        </ul>

      </div>
      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings />
          <span>Team Settings</span>
        </Link>
      </div>
    </div>
  )
}


export default SideBar