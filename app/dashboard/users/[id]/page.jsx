import Image from "next/image";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import React from "react";
import Button from "@/app/ui/dashboard/buttons/button";

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className="rounded-lg"
          src="/images.png"
          alt="user image"
          width="300"
          height="300"
        ></Image>
        Jhon Doe
      </div>
      <div className={styles.info}>
        <form action="" className={styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="jhon doe" name="username" required />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="jhondoe@gmail.com" name="email" required />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder=""
            name="password"
            required
          />
          <label htmlFor="phone">Phone</label>
          <input type="number" placeholder="23465234" name="phone" required />
          <label htmlFor="role">Role</label>
          <select name="isAdmin" id="isAdmin">
            <option value={false}>Is Admin</option>
            <option value={true}>Yes</option>
            <option value={false}> No</option>
          </select>
          <label htmlFor="activeStatus">Active Status</label>
          <select name="isActive" id="isActive">
            <option value={true}>Is Active</option>
            <option value={true}>Yes</option>
            <option value={false}> No</option>
          </select>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            placeholder="Address"
          ></textarea>
          <Button
                  buttonType="button"
                  customClass="bg-teal-500 p-2 rounded-lg w-full"
                  name="Update"
                />
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
