"use client"
import React from 'react'
import styles from './menuLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const menuList = ({item}) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Link href={item.url} className={styles.container}>
        {item.icon}
        {item.label}
    </Link>
  )
}

export default menuList