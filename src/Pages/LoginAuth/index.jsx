import React, { useEffect, useState } from "react";
import UserForm from "../../Component/UserForm";
import logo from "../../assets/logo/BuyKarooLogo.png";
import Button from "../../Helper/Button";
import { json, redirect, useNavigate, useActionData } from "react-router-dom";
import api from "../../service/api";
import { useDispatch } from "react-redux";
import authSlice from "../../store/authSlice";
import { login } from "../../store/authSlice";
const LoginAuth = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actionValue = useActionData();

  const userErr = actionValue?.userErr || null
  
  const token = actionValue?.token || null
  console.log("___________token", token)
  const errors = actionValue?.errors || {};
  // asAS!@12
  
  const loginFields = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email address",
      type: "email",
      required: true,
      pattern: /\S+@\S+\.\S+/,
      errorMessage: "Email is invalid",
    },
    {
      name: "password",
      placeholder: "Enter password",
      label: "Password",
      type: "password",
      required: true,
      pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage:
        "Password must be alphanumeric, include at least one special character, and be at least 7 characters long",
    },
  ];

  useEffect(() => {
    if (token) {
      try{
        const res = api.getUserName(formData.email)
        console.log(res)
      }catch(err)
      {
        console.log(err)
      }
      
      dispatch(login({token, username : "abc@gmail.com"}))
      navigate("/")
    }
  }, [token])

  const submitHandler = (formData) => {
    console.log("formData", formData);
    setFormData(formData);
  };

  return (
    <>
      <div
        style={{ height: "90vh" }}
        className="login-container grid place-items-center bg-gray-900 "
      >
        <div className="login-section border-black border-4 flex justify-evenly align-middle items-center bg-white  h-4/5 w-4/5 rounded-lg">
          <div className="login w-1/3 ">
            <UserForm
              userErr={userErr}
              errors={errors}
              className=""
              fields={loginFields}
              formTitle={"LOGIN"}
              onSubmit={submitHandler}
              btnTitle="Login"
            >
              <Button
                onClick={() => navigate("/auth/signin")}
                className=" text-white bg-gray-700 rounded-xl"
                type="button"
              >
                Create new user
              </Button>
            </UserForm>
          </div>
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAuth;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");


  const formColl = {
    email,
    password,
  };

  const loginFields = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email address",
      type: "email",
      required: true,
      pattern: /\S+@\S+\.\S+/,
      errorMessage: "Email is invalid",
    },
    {
      name: "password",
      placeholder: "Enter password",
      label: "Password",
      type: "password",
      required: true,
      pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage:
        "Password must be alphanumeric, include at least one special character, and be at least 7 characters long",
    },
  ];

  const validateForm = (form) => {
    const errors = {};
    loginFields.forEach((field, ind) => {
      if (field.name == "email" || field.name == "password") {
        if (field.required && !form[field.name]) {
          errors[field.name] = field.errorMessage;
        }
        if (!field.pattern.test(form[field.name])) {
          errors[field.name] = field.errorMessage;
        }
      } else {
        if (field.required && !form[field.name]) {
          errors[field.name] = field.errorMessage;
        }
      }
    });
    return errors;
  };

  const errors = validateForm({
    email,
    password,
  });
  if (Object.keys(errors).length != 0) {
    console.log(Object.keys(errors).length, "in action");
    return json({ errors }, { status: 400 });
  }

  const getJWT = async (formColl) => {
    const res = await api.getJWT(formColl)
    console.log(res, res.status)
    if (res.status == 200) {
      let token = res.data.access_token
      console.log(token, "bearer")
      return json({ token }, { status: 200 });
    } else {
      if(res.message == "Network Error"){
        let userErr = "Server is not responding plz try again later"
        return json({userErr}, {status: 444})
      }
      console.log(res)
      let userErr = res.response.data.msg
      return json({userErr}, {status: res.response.status})
    }
  };

  return getJWT(formColl);
}
