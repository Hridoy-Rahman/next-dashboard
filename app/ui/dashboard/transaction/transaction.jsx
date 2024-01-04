import React from "react";
import Image from "next/image";
import styles from './transaction.module.css'

const Transactions = () => {
  return (
    <div>
      <h1 className="text-2xl text-gray-400 font-semibold mb-3">Latest Transactions</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src="/images.png"
                alt="user image"
                width="30"
                height="30"
              ></Image>
              Jhon Doe
            </td>
            <td>
                <span className={`${styles.status} bg-[#746956]`}>Pending</span>
            </td>
            <td>04/01/2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src="/images.png"
                alt="user image"
                width="30"
                height="30"
              ></Image>
              Jhon Doe
            </td>
            <td>
                <span className={`${styles.status} bg-[#754256]`}>Cancelled</span>
            </td>
            <td>04/01/2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src="/images.png"
                alt="user image"
                width="30"
                height="30"
              ></Image>
              Jhon Doe
            </td>
            <td>
                <span className={`${styles.status} bg-[#667388]`}>Done</span>
            </td>
            <td>04/01/2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src="/images.png"
                alt="user image"
                width="30"
                height="30"
              ></Image>
              Jhon Doe
            </td>
            <td>
                <span className={`${styles.status} bg-[#746956]`}>Pending</span>
            </td>
            <td>04/01/2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src="/images.png"
                alt="user image"
                width="30"
                height="30"
              ></Image>
              Jhon Doe
            </td>
            <td>
                <span className={`${styles.status} bg-[#754256]`}>Cancelled</span>
            </td>
            <td>04/01/2024</td>
            <td>$3.20</td>
          </tr>
          <tr>
            <td className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src="/images.png"
                alt="user image"
                width="30"
                height="30"
              ></Image>
              Jhon Doe
            </td>
            <td>
                <span className={`${styles.status} bg-[#667388]`}>Done</span>
            </td>
            <td>04/01/2024</td>
            <td>$3.20</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
