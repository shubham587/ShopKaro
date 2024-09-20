import React, { useEffect, useState } from "react";
import Card from "../Card";
import { useLocation } from "react-router-dom";
import { store } from "../../store";
import api from "../../service/api";
import { setUser } from "../../store/userSlice";
const ProductGrid = ({data}) => {
  const [param, setParam] = useState("")
  const [loading, setLoading] = useState(true)
  let location = useLocation()
  let favCart = store.getState().user["fav-cart"]

  const favArr = favCart?.map((ele, ind) => {return ele["prod_id"]})
  
  console.log("favCart____", favArr)
  // console.log("prod-id", data[0])
  // console.log("location", location);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols
      -3 xl:grid-cols-4 gap-8 "
    >
      {data.map((ele, ind) => (
        <div key={ind} className="cloth-card border-2 p-4 border-orange-200  rounded-lg max-h-screen w-64 m-auto">
          <Card data={ele} fillData={favArr?.includes(ele["_id"]["$oid"])} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
