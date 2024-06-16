import { Box, Button, TextField, useMediaQuery, Typography } from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "../../redux/userSlice";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    const savedUserResponse = await fetch(`http://localhost:8080/auth/register`, {
      method: "POST",
      body: formData,
    });
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();
    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(`http://localhost:8080/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setUser({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/about");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: isNonMobileScreens ? undefined : "span 4",
              },
            }}
          >
            {isRegister && (
              <>
                <TextField
                  label="First Name"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  placeholder="Enter your first name"
                  sx={{
                    fontFamily: "Josefin Sans",
                    gridColumn: "span 2",
                    borderRadius: "0.75rem",
                    fontSize: "18px",
                    backgroundColor: "white",
                    color: "#ED9A42", // Change text color
                    "& label.Mui-focused": {
                      color: "#ED9A42", // Change label color when focused
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#ED9A42", // Change underline color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#ED9A42", // Change border color when focused
                      },
                    },
                  }}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    fontFamily: "Josefin Sans",
                    gridColumn: "span 2",
                    borderRadius: "0.75rem",
                    fontSize: "18px",
                    backgroundColor: "white",
                    color: "#ED9A42", // Change text color
                    "& label.Mui-focused": {
                      color: "#ED9A42", // Change label color when focused
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#ED9A42", // Change underline color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#ED9A42", // Change border color when focused
                      },
                    },
                  }}
                />
              </>
            )}
            <TextField
              name="email"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{
                fontFamily: "Josefin Sans",
                gridColumn: "span 4",
                borderRadius: "0.75rem",
                fontSize: "18px",
                backgroundColor: "white",
                color: "#ED9A42", // Change text color
                "& label.Mui-focused": {
                  color: "#ED9A42", // Change label color when focused
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#ED9A42", // Change underline color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#ED9A42", // Change border color when focused
                  },
                },
              }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{
                fontFamily: "Josefin Sans",
                gridColumn: "span 4",
                borderRadius: "0.75rem",
                fontSize: "18px",
                backgroundColor: "white",
                color: "#ED9A42", // Change text color
                "& label.Mui-focused": {
                  color: "#ED9A42", // Change label color when focused
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#ED9A42", // Change underline color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#ED9A42", // Change border color when focused
                  },
                },
              }}
            />
          </Box>
          {/* Buttons */}
          <Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "#ED9A42",
                color: "#fff",
                textTransform: "uppercase",
                fontSize: "14px",
                fontFamily: "Josefin Sans",
                "&:hover": {
                  backgroundColor: "#ED9A42",
                  opacity: "0.8",
                },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              color="#ED9A42"
              sx={{
                textDecoration: "underline",
                fontFamily: "Josefin Sans",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {isLogin ? "Don`t have an account? Sign Up here." : "Already have an account? Login here."}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
