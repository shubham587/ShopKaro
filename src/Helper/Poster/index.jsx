import React from "react";
import PosterCard from "../PosterCard";
import classNames from "classnames";
import { createRoutesFromElements } from "react-router-dom";

const Poster = ({ className, postCardClass,  posterName, posterMap }) => {
  let posterClass = classNames(className, "posters")
  return (
    <div className="poster-section mt-6">
      {posterName ? <h1 className="text-xl">{posterName}</h1> : ""}
      {posterName? <hr className="w-16 h-4 bg-color border-orange-300" />: ""}
      <div className={posterClass}>
        {posterMap.map((ele, ind) => (
          <PosterCard
            key={ind}
            posterImg={ele.img}
            posterName={ele.name}
            posterPath={ele.path}
            className={postCardClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Poster;
