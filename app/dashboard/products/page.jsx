import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Button from "@/app/ui/dashboard/buttons/button";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for user" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className="rounded-full"
                  src="/noitem.jpg"
                  alt="product image"
                  width="40"
                  height="40"
                ></Image>
                iPhone 11
              </div>
            </td>
            <td>Desc</td>
            <td>$120.50</td>
            <td>03.03.2024</td>
            <td>32</td>
            <td className="flex gap-2">
              <Link href="/dashboard/users/test">
                <Button
                  buttonType="button"
                  customClass="bg-teal-500"
                  name="View"
                />
              </Link>
              <Button
                buttonType="button"
                customClass="bg-red-600"
                name="Delete"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
