"use client";
import { registerUserSchema } from "@/validation-schema/register.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";

interface IRegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dob?: string;
  gender: string;
  role: string;
  address: string;
}

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        role: "",
        address: "",
      }}
      validationSchema={registerUserSchema}
      onSubmit={(values: IRegisterForm) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-8 shadow-2xl rounded p-4 min-w-[450px] justify-center items-center"
          >
            <Typography variant="h5" className="text-gray-600">
              Register
            </Typography>

            <FormControl fullWidth>
              <TextField
                label="First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.firstName}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Last Name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.lastName}
                </FormHelperText>
              ) : null}
            </FormControl>
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

            <FormControl fullWidth>
              <TextField label="DOB" {...formik.getFieldProps("dob")} />
              {formik.touched.dob && formik.errors.dob ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.dob}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="Address" {...formik.getFieldProps("address")} />
              {formik.touched.address && formik.errors.address ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.address}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label="Role" {...formik.getFieldProps("role")}>
                <MenuItem value={"seller"}>Seller</MenuItem>
                <MenuItem value={"buyer"}>Buyer</MenuItem>
              </Select>

              {formik.touched.role && formik.errors.role ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.role}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select label="Gender" {...formik.getFieldProps("gender")}>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>

              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.gender}
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
                href="/login"
              >
                Already a user? Login
              </Link>
            </Stack>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
