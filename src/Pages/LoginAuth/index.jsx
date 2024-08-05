import React, { useState } from "react";
import UserForm from "../../Component/UserForm";
import logo from "../../assets/logo/BuyKarooLogo.png";
import Button from "../../Helper/Button";
import { json, redirect, useNavigate, useActionData } from "react-router-dom";
const LoginAuth = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const actionValue = useActionData();
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
      // if(field)
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
    const res = await fetch("http://127.0.0.1:5001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formColl)
    });

    if(res.ok){
      const data = await res.json();
      console.log(data, "tojen")
    }else{
      console.log(res.status, res.statusText, "error")
    }
  };

  const token = getJWT(formColl);

  return redirect("/");
};
