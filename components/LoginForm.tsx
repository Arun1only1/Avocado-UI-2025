"use client";
import { loginCredentialSchema } from "@/validation-schema/login.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

interface ILoginForm {
  email: string;
  password: string;
}
const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginCredentialSchema}
      onSubmit={(values: ILoginForm) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-8 shadow-2xl rounded p-4 min-w-[400px] justify-center items-center"
          >
            <Typography variant="h5" className="text-gray-600">
              Login
            </Typography>

            <FormControl fullWidth>
              <TextField label="Email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.email}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.password}
                </FormHelperText>
              ) : null}
            </FormControl>

            <Stack className="w-full justify-center items-center gap-2">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="bg-orange-400 text-base"
              >
                submit
              </Button>

              <Link
                className="text-orange-400 hover:text-orange-600"
                href="/register"
              >
                New here? Create Account
              </Link>
            </Stack>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
