import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Button from "@/app/ui/dashboard/buttons/button";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/action";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchProducts(q, page);
  console.log(products)

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    className="rounded-full"
                    src={product.img || "/noitem.jpg"}
                    alt="product image"
                    width="40"
                    height="40"
                  ></Image>
                  {product.title}
                </div>
              </td>
              <td>{console.log(product.desc)}</td>
              <td>${product.price}</td>
              <td>{product.createdAt.toString().slice(4,16)}</td>
              <td>{product.stock}</td>
              <td className="flex gap-2">
                <Link href={`/dashboard/products/${product.id}`}>
                  <Button
                    buttonType="button"
                    customClass="bg-teal-500 p-1 rounded-md"
                    name="View"
                  />
                </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={product.id}/>
                <Button
                  customClass="bg-red-600 p-1 rounded-md"
                  name="Delete"
                />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
