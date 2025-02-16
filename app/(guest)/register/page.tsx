import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register",
  description: "This is a register page.",
};
const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
