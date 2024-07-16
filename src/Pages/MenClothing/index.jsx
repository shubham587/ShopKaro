import React, { useEffect } from "react";
import { json, useLoaderData } from "react-router-dom";
import ProductGrid from "../../Helper/ProductGrid";
import api from "../../services/api";
const MenClothingPage = () => {
  let loaderData = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("loaderData", loaderData);
  return (
    <div className="container h-5/6 border-2  m-auto">
      <div>WomenClothingPage</div>
      <ProductGrid data={loaderData.msg} />
    </div>
  );
};

export default MenClothingPage;

export const loader = async ({ request, params }) => {
  let url = new URL(request.url).searchParams.get("category");
  let apiParam = {}
  let apiURL = "";
  if (url != null) {
    // apiURL = `http://127.0.0.1:5001/product?gender=male&category=${url}`;
    apiParam["gender"] = "male"
    apiParam["category"] = url
  } else {
    // apiURL = `http://127.0.0.1:5001/product?gender=male`;
    apiParam["gender"] = "male"
  }
  // const res = await fetch(apiURL, { method: "GET" });
  // const data = await res.json();
  const res = await api.getProduct(apiParam)
  const data = res.data
  return json(data);
};
