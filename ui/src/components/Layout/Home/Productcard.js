import React from "react";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component"
// import Rating from '@mui/material/Rating';

const ProductCard = ({pro}) => {
  const Option = {
    edit: false,
    color: "rgba(20,20,20,0,1)",
    activeColor: "tomato",
    value: pro.ratings,
  }
  return (
    <Link className="productCard" to={`/product/${pro._id}`}>
      <img src={pro.images[0]} alt={pro.name} />
      <p>{pro.name}</p>
      <div>
        <ReactStars {...Option} />
        <span> ({pro.numOfReviews} Reviews)</span>
      </div>
      <span>{`₹${pro.price}`}</span>
    </Link>
  );
};
export default ProductCard;
