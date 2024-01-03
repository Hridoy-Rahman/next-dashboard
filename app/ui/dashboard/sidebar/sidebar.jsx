import React from 'react';
import Image from 'next/image';
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from './menuLink/menuLink';


const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className='flex gap-6 items-center mb-6'>
                <Image className='rounded-full' src="/images.png" 
                alt='user image'
                width="50" height="50"></Image>
                <div>
                    <h1 className='text-lg'>Jhon Doe</h1>
                    <h1 className='text-sm'>Admin</h1>
                </div>
            </div>
            <ul>
                {menuItems.map((cat)=>(
                    <li className='mb-4 ' key={cat.title}>
                    <span className={`${styles.cat} text-gray-300`}>{cat.title}
                    </span>
                    {cat.list.map((item)=>(
                        <MenuLink item ={item} key={item.title}/>
                    ))}
                    </li>
                ))}
            </ul>
            <button className='flex items-center gap-6 text-xl p-2 hover:bg-[#384d7e] rounded-lg w-full'>
              <MdLogout size={20}/>
              Logout</button>
        </div>
    );
};

export default Sidebar;