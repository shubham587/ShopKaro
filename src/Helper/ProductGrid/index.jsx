import React from "react";
import Card from "../Card";
const ProductGrid = ({data}) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols
      -3 xl:grid-cols-4 gap-4 "
    >
      {data.map((ele) => (
        <div className="cloth-card border-black-500 border-2 h-96 w-64 m-auto">
          <Card data={ele} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
