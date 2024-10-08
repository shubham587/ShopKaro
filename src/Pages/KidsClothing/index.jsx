import React, { useEffect } from "react";
import { json, useLoaderData } from "react-router-dom";
import ProductGrid from "../../Helper/ProductGrid";
import api from "../../service/api";
const KidsClothingPage = () => {
  let loaderData = useLoaderData();
  console.log("loaderData", loaderData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container h-5/6 border-2  m-auto">
      <div>WomenClothingPage</div>
      <ProductGrid data={loaderData.msg} />
    </div>
  );
};

export default KidsClothingPage;

export const loader = async ({ request, params }) => {

  let url = new URL(request.url).searchParams.get("category");
  let apiURL = "";
  let apiParam = {}
  if (url != null) {
    // apiURL = `http://127.0.0.1:5001/product?gender=women&category=${url}`;
    apiParam["gender"] = "kids"
    apiParam["category"] = url
  } else {
    // apiURL = `http://127.0.0.1:5001/product?gender=women`;
    apiParam["gender"] = "kids"
  }
  // const res = await fetch(apiURL, { method: "GET" });
  const res = await api.getProduct(apiParam).then((res) => {return res.data})
  return json(res)
};
