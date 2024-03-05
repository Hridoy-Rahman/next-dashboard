import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import React from "react";
import Button from "@/app/ui/dashboard/buttons/button";
import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/action";

const SingleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className="rounded-lg"
          src={product.img || "/noitem.jpg"}
          alt="user image"
          width="300"
          height="300"
        ></Image>
        {product?.title}
      </div>
      <div className={styles.info}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="title">Title</label>
          <input type="text" placeholder={product.title} name="title" />
          <label htmlFor="price">Price</label>
          <input type="number" placeholder={`$${product.price}`} name="price" />
          <label htmlFor="stock">Stock</label>
          <input type="number" placeholder={product.stock} name="stock" />
          <label htmlFor="color">Color</label>
          <input type="text" l placeholder={product?.color} name="color" />
          <label htmlFor="size">Size</label>
          <input type="text" l placeholder={product?.size} name="size" />

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
            placeholder={product.description}
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

export default SingleProduct;
