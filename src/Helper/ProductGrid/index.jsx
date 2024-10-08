import React, { useEffect, useMemo, useState } from "react";
import Card from "../Card";
const ProductGrid = ({ data }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols
      -3 xl:grid-cols-4 gap-8 "
    >
      {data.map((ele, ind) => (
        <div key={ind} className="cloth-card border-2 p-4 border-orange-200  rounded-lg max-h-screen w-64 m-auto">
          {/* <Card data={ele} fillData={favCart?.includes(ele["_id"]["$oid"])} /> */}
          <Card data={ele} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
