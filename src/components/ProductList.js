import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  get_product_request,
  product_filter,
  product_search,
  product_search_filter,
  product_filter_search,
} from "../Redux/ProductConstant";

import "../Styles/styles.css";
import SingleProductCard from "./SingleProductCard";
import loader from "../assets/loader.gif";

import Navbar from "./Navbar";

const ProductList = () => {
  const dispatch = useDispatch();
  const { fetchedData, filterData, loading, error } = useSelector(
    (store) => store.productReducer
  );

  const [mappingData, setMappingData] = useState(fetchedData)

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const selectCategoryHandler = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setSelectedCategory([...selectedCategory, value]);
    } else  {
      setSelectedCategory([...selectedCategory.filter((e) => e !== value)]);
    }
  };

  useEffect(() => {
    dispatch(product_filter(selectedCategory));
    if(searchInput.length > 0){
        dispatch(product_search_filter((searchInput.toLowerCase()).split(" ")))
    }
  }, [selectedCategory]);

  useEffect(() => {
    dispatch(product_search((searchInput.toLowerCase()).split(" ")));
    dispatch(product_filter_search(selectedCategory));
  }, [searchInput]);

  useEffect(() => {
    setMappingData(filterData)
  }, [filterData]);

  useEffect(() => {
    dispatch(get_product_request());
  }, []);

  return (
    <>
      <Navbar />

      <div className="searchDiv">
        <input
          type="text"
          placeholder="Search for products..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />
      </div>

      <div className="contentDiv">
        <div className="filter_div">
          {/* color filter box */}
          <div className="checkBoxDiv">
            <h4>Color</h4>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Red"}
              />{" "}
              <label htmlFor="">Red</label>
            </div>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Blue"}
              />{" "}
              <label htmlFor="">Blue</label>
            </div>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Green"}
              />{" "}
              <label htmlFor="">Green</label>
            </div>
          </div>
          {/* gender filter box */}
          <div className="checkBoxDiv">
            <h4>Gender</h4>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Men"}
              />{" "}
              <label htmlFor="">Men</label>
            </div>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Women"}
              />{" "}
              <label htmlFor="">Women</label>
            </div>
          </div>
          {/* price filter box */}
          <div className="checkBoxDiv">
            <h4>Price</h4>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"250"}
              />{" "}
              <label htmlFor="">0- Rs 250</label>
            </div>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"251"}
              />{" "}
              <label htmlFor="">251- Rs 450</label>
            </div>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"450"}
              />{" "}
              <label htmlFor=""> Rs 450</label>
            </div>
          </div>
          {/* type filter div */}
          <div className="checkBoxDiv">
            <h4>Type</h4>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Polo"}
              />{" "}
              <label htmlFor="">Polo</label>
            </div>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Hoodie"}
              />{" "}
              <label htmlFor="">Hoodie</label>
            </div>
            <div className="check_box">
              <input
                type="checkbox"
                name=""
                onChange={selectCategoryHandler}
                value={"Basic"}
              />{" "}
              <label htmlFor="">Basic</label>
            </div>
          </div>
        </div>
        <div className="product_list_div">
          {loading ? (
            <div className="loading">
              <img src={loader} alt="loader" />
            </div>
          ) : mappingData.length > 0 ? (
            mappingData.map((item) => {
              return <SingleProductCard item={item} key={item.id} />;
            })
          ) : (
            <div className="loading">
              No result 
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
