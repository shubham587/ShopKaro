import React, { useState } from "react";
import UserForm from "../../Component/UserForm";
import logo from "../../assets/logo/BuyKarooLogo.png";
import Button from "../../Helper/Button";
import { useNavigate } from "react-router-dom";
const SigninAuth = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
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

  const submitHandler = (formData) => {
    console.log("formData", formData);
    setFormData(formData);
  };

  return (
    <>
      <div
        style={{ height: "90vh" }}
        className="signin-container grid place-items-center bg-gray-900 "
      >
        <div className="signin-section border-black border-4 flex justify-evenly align-middle items-center bg-white  h-4/5 w-4/5 rounded-lg">
          <div className="signin w-1/3 ">
            <UserForm
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
