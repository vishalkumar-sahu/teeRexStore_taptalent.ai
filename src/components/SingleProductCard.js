import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_cart_item } from "../Redux/CartConstant";

const SingleProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((store) => store.CartReducer);
  
  return (
    <>
      <div className="product_card">
        <div className="firstsec" >
          <p className="product_title">{item.name}</p>
          <div className="imgdiv">
            <img src={`${item.imageURL}`} alt=" PRODUCT IMAGES" />
          </div>
        </div>

        <div className="item_details">
          <p>Rs {item.price}</p>
          {
            (cartData.findIndex((e) => e.id === item.id) !== -1) ?
              (<button disabled style={{backgroundColor:'grey', cursor:'initial'}}>Added</button>)
            :
            ( 
              <button
                onClick={() => {
                  dispatch(add_cart_item(item));
                }}
              >
                Add to Cart
              </button>
            )
          }
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
