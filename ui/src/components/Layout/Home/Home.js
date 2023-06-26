import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./Productcard.js";
import MetaData from "../Metadata.js";
import { CgMouse } from "react-icons/cg";
import { getProduct, clearErrors } from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";


const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products } = useSelector((state) => state.products);

  console.log("this is products", products)

  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    
    <Fragment>
      {loading ? (
        <Loader />
      ):(
          <Fragment>
          <MetaData title="ECOMMERCE" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
          {products &&
                products.map((pro) => (
                  <ProductCard key={pro._id} pro={pro} />
                ))}
            
            
          </div>
        </Fragment>
      
      )}
    </Fragment>
  );
};
export default Home;
