"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={` ${styles.container}`}>
      <div className="text-xl capitalize">{pathname.split("/").pop()}</div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-md">
          <MdSearch />
          <input className={`bg-transparent`} type="text" placeholder="Search" />
        </div>
        <div className="flex gap-4">
          <MdNotifications size={20} />
          <MdOutlineChat size={20} />
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
