import React, { useEffect, useState } from "react";
import { json, useLoaderData, useNavigation, useParams } from "react-router-dom";
import Card from "../../Helper/Card";
import ProductGrid from "../../Helper/ProductGrid";
import api from "../../service/api.js";
const WomenClothingPage = () => {
  const [loading, setLoading] = useState(false)
  const { state } = useNavigation()
  let loaderData = useLoaderData();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  
  console.log("loaderData", loaderData);
  return (
    <>
      <div className="container h-3/6 border-2  m-auto">
        {
          <div className="cloth-section">
            {
                <>
                  <div>WomenClothingPage</div>
                  <ProductGrid data={loaderData.msg} />
                </>
            }
          </div>
        }

        {/* <>
          <div>WomenClothingPage</div>
          <ProductGrid data={loaderData.msg} />
        </> */}
      </div>
    </>
  );
};

export default WomenClothingPage;

export const loader = async ({ request, params }) => {

  let url = new URL(request.url).searchParams.get("category");
  let apiURL = "";
  let apiParam = {}
  if (url != null) {
    // apiURL = `http://127.0.0.1:5001/product?gender=women&category=${url}`;
    apiParam["gender"] = "women"
    apiParam["category"] = url
  } else {
    // apiURL = `http://127.0.0.1:5001/product?gender=women`;
    apiParam["gender"] = "women"
  }
  // const res = await fetch(apiURL, { method: "GET" });
  const res = await api.getProduct(apiParam).then((res) => {return res.data})
  return json(res)
};
