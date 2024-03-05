import Image from "next/image";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import React from "react";
import Button from "@/app/ui/dashboard/buttons/button";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/action";

const SingleUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className="rounded-lg"
          src={user.img || "/images.png"}
          alt="user image"
          width="300"
          height="300"
        ></Image>
        {user.username}
      </div>
      <div className={styles.info}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="username">Username</label>
          <input type="text" placeholder={user.username} name="username" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder={user.email} name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="" name="password" />
          <label htmlFor="phone">Phone</label>
          <input type="number" placeholder={user.phone} name="phone" />
          <label htmlFor="role">Role</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              {" "}
              No
            </option>
          </select>
          <label htmlFor="activeStatus">Active Status</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              {" "}
              No
            </option>
          </select>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            placeholder={user?.address}
          ></textarea>
          <Button
            customClass="bg-teal-500 p-2 rounded-lg w-full"
            name="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
