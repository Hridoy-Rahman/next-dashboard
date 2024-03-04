"use client";
import React, { useState } from "react";
import styles from "@/app/ui/login/login.module.css";
import Button from "@/app/ui/dashboard/buttons/button";
import { FaEyeSlash,FaEye  } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Username" />
        <div className="flex gap-2 items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye  />}
          </button>
        </div>
        <Button customClass="bg-teal-500 p-2 rounded-lg w-full" name="Login" />
      </form>
    </div>
  );
};

export default Login;
