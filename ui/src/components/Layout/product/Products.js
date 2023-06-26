import React, { Fragment, useEffect, useState } from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, clearErrors } from "../../../actions/productAction";
import Loader from "../Loader/Loader";
import ProductCard from "../Home/Productcard";
import Metadata from "../Metadata";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../Metadata.js";

const Products = ({match}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products,productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);

  console.log("this is products", products)

  const keyword = match.params.keyword
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword,currentPage,price));
  }, [dispatch,keyword, error, alert,currentPage,price]);

  // let count = filteredProductsCount;

  return (
  <Fragment>
    {loading? 
      <Loader /> :
      <Fragment>
         <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((pro) => (
                <ProductCard key={pro._id} pro={pro} />
              ))}
          </div>
          {/* <div className="filterBox">
          <Typography>Price</Typography>
            <Slider
               value={price}
               onChange={priceHandler}
               valueLabelDisplay="auto"
               aria-labelledby="range-slider"
               min={0}
               max={25000}
            />
          </div> */}
          {/* {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )} */}

      </Fragment>
    }
  </Fragment>
  )
}

export default Products