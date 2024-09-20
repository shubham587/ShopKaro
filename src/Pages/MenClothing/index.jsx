import React, { useEffect } from "react";
import { json, useLoaderData } from "react-router-dom";
import ProductGrid from "../../Helper/ProductGrid";
import api from "../../service/api";
import { useSelector } from "react-redux";
import { store } from "../../store";
import userSlice from "../../store/userSlice";
const MenClothingPage = () => {
  const loaderData = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("loaderData", loaderData);
  return (
    <div className="container h-5/6 border-2  m-auto">
      <div>WomenClothingPage</div>
      <ProductGrid data={loaderData.msg}  />
    </div>
  );
};

export default MenClothingPage;

export const loader = async ({ request, params }) => {

  let url = new URL(request.url).searchParams.get("category");
  let apiURL = "";
  let apiParam = {}
  if (url != null) {
    // apiURL = `http://127.0.0.1:5001/product?gender=women&category=${url}`;
    apiParam["gender"] = "male"
    apiParam["category"] = url
  } else {
    // apiURL = `http://127.0.0.1:5001/product?gender=women`;
    apiParam["gender"] = "male"
  }
  // const res = await fetch(apiURL, { method: "GET" });
  const res = await api.getProduct(apiParam).then((res) => {return res.data})
  return json(res)
};
