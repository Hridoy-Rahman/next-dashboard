import React from "react";
import styles from "@/app/ui/dashboard/users/add/addUsers.module.css";
import { addUser } from "@/app/lib/action";

const AddUsers = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="number" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}> No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}> No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="10"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUsers;
