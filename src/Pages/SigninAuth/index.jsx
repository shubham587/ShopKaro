import React, { useState } from "react";
import UserForm from "../../Component/UserForm";
import logo from "../../assets/logo/BuyKarooLogo.png";
import Button from "../../Helper/Button";
import { redirect, useActionData, useNavigate, json } from "react-router-dom";
import api from "../../service/api";
const SigninAuth = () => {
  const [formData, setFormData] = useState({});
  const [userError, setUserError] = useState(null)

  const navigate = useNavigate();
  const actionValue = useActionData();

  const errors = actionValue?.errors || {};
  let userErr = actionValue?.userErr || null

  // if(userErr !== null){
  //   setUserError(userErr)
  // }

  console.log(actionValue, "actionValue")
  console.log(userErr, "userErr")

  const submitHandler = (formData) => {
    console.log("formData", formData);
    setFormData(formData);
  };

  const signinFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
      errorMessage: "Name is required",
    },
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
    {
      name: "confirm-password",
      placeholder: "Confirm password",
      label: "Password",
      type: "password",
      required: true,
      // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage: "Password did not match!!",
    },
  ];

  return (
    <>
      <div
        style={{ height: "90vh" }}
        className="signin-container grid place-items-center bg-gray-900 "
      >
        <div className="signin-section border-black border-4 flex justify-evenly align-middle items-center bg-white  h-4/5 w-4/5 rounded-lg">
          <div className="signin w-1/3 ">
            <UserForm
              userErr={userErr}
              errors={errors}
              className=""
              fields={signinFields}
              formTitle={"User Registration"}
              onSubmit={submitHandler}
              btnTitle="Signin"
            >
              <Button
                onClick={() => navigate("/auth/login")}
                className=" text-white bg-gray-700 rounded-xl"
                type="button"
              >
                Already User
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

export default SigninAuth;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPass = formData.get("confirm-password");

  const formColl = {
    "username": name,
    "email": email,
    "password": password,
  };

  const signinFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
      errorMessage: "Name is required",
    },
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
    {
      name: "confirm-password",
      placeholder: "Confirm password",
      label: "Password",
      type: "password",
      required: true,
      // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage: "Password did not match!!",
    },
  ];

  const validateForm = (form) => {
    const errors = {};
    signinFields.forEach((field, ind) => {
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
      if (field.name == "confirm-password" && password !== confirmPass) {
        errors[field.name] = field.errorMessage;
      }
    });
    return errors;
  };

  const errors = validateForm({
    email,
    password,
    name,
    "confirm-password": confirmPass,
  });
  if (Object.keys(errors).length != 0) {
    console.log(Object.keys(errors).length, "in action");
    const userErr = null
    return json({ errors, userErr }, { status: 400 });
  }

  const userRegister = async (formColl) => {
    const res = await api.postUser(formColl)
    console.log(res, res.ok)
    if (res.status == 201) {
      let data = await res.data.msg
      console.log(data, "login")
      return redirect("/auth/login");
    } else {
      console.log(res)
      const userErr = res.response.data.msg;
      return json({ userErr }, { status: 400 });
    }
  };

  return userRegister(formColl)
};
