import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import React from "react";
import Button from "@/app/ui/dashboard/buttons/button";

const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className="rounded-lg"
          src="/noitem.jpg"
          alt="user image"
          width="300"
          height="300"
        ></Image>
        Iphone
      </div>
      <div className={styles.info}>
        <form action="" className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Iphone" name="title" required />
          <label htmlFor="price">Price</label>
          <input type="number" placeholder="$12" name="price" required />
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            placeholder="12"
            name="stock"
            required
          />
          <label htmlFor="color">Color</label>
          <input type="text"l placeholder="red" name="color" required />
          <label htmlFor="size">Size</label>
          <input type="text"l placeholder="xl" name="size" required />

          
          <label htmlFor="category">Category</label>
          <select name="cat" id="cat">
            <option value="general">Choose a category</option>
            <option value="phone">Phone</option>
            <option value="computer"> Computer</option>
            <option value="kitchen"> Kitchen</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder="Description"
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

export default SingleProduct;
