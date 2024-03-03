import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import View from "@/app/ui/dashboard/buttons/view";
import Delete from "@/app/ui/dashboard/buttons/delete";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className="rounded-full"
                  src="/images.png"
                  alt="user image"
                  width="40"
                  height="40"
                ></Image>
                Jhon Doe
              </div>
            </td>
            <td>jhondoe@gmail.com</td>
            <td>03.03.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td className="flex gap-2">
              <Link href="/">
                <View/>
              </Link>
              <Delete/>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default UsersPage;
