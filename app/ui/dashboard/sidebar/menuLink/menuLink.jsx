"use client"
import React from 'react';
import styles from './menuLink.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({item}) => {
    const pathname =usePathname()
    return (
        <Link href={item.path} className={`${styles.container} flex items-center gap-6 text-xl p-2 hover:bg-[#384d7e] rounded-lg ${pathname=== item.path && styles.active} `}>
            {item.icon}
            {item.title}
        </Link>
    );
};

export default MenuLink;