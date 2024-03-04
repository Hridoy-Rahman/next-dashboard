import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Button from "@/app/ui/dashboard/buttons/button";
import { fetchUsers } from "@/app/lib/data";

const UsersPage = async () => {
  const users = await fetchUsers();
  console.log(users);

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className="rounded-full"
                    src={user.img || "/images.png"}
                    alt="user image"
                    width="40"
                    height="40"
                  ></Image>
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td className="flex gap-2">
                <Link href={`/dashboard/users/${user.id}`}>
                  <Button
                    buttonType="button"
                    customClass="bg-teal-500 p-1 rounded-md"
                    name="View"
                  />
                </Link>
                <Button
                  buttonType="button"
                  customClass="bg-red-600 p-1 rounded-md"
                  name="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
