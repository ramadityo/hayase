"use client";
import toast, { Toaster } from "react-hot-toast";

const failedLogin = () => toast.error("Sign in was failed, please try again.");
const successLogin = () => toast.success("Sign in was successful, welcome back!");
const successRegister = () => toast.success("Sign up was successful, welcome!");
const failedRegister = () => toast.error("Sign up was failed, please check again.");

export { failedLogin, successLogin, failedRegister, successRegister };
