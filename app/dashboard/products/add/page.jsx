import React from "react";
import styles from "@/app/ui/dashboard/products/add/addProducts.module.css";
import { addProduct } from "@/app/lib/action";


const AddProducts = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a category</option>
          <option value="phone">Phone</option>
          <option value="computer"> Computer</option>
          <option value="kitchen">Kitchen</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" required />
        <input type="text" placeholder="size" name="size" required />
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;
