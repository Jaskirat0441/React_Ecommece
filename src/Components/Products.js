import React, { useState, useEffect } from "react";
import "./Css/Product.css";

const Products = ({setCartNumber}) => {
  const [productData, setproductData] = useState();
  let productDetails;
  const productsArr = [];
  const getProductDetails = async () => {
    let api =
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json";

    let res = await fetch(api);
    productDetails = await res.json();
    let api_length = Object.keys(productDetails).length;

    // console.log(api_length);
    // console.log(productDetails["-NDEoHcGCp88kdn4dixa"].id);
    for (const prod in productDetails) {
      productsArr.push({
        id: productDetails[prod].id,
        img: productDetails[prod].productImage,
        name: productDetails[prod].productName,
        oldPrice: productDetails[prod].oldPrice,
        newPrice: productDetails[prod].newPrice,
      });
    }
    setproductData(productsArr);
    // console.log(...productsArr);
  };

  const addItems =()=> {
    setCartNumber(prevCount=> prevCount+1)
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
            <div className="product_container" >
          <h3 className="product_heading">Products</h3>
          <div className="all_product_details">
          {
         
            productData && (
                productData.map(item => {
                  return (
              <div className="product_details" key={item.id}>
                <div className="product_img">
                  <img
                    src={item.img}
                    alt="product_img"
                 
                  />
                </div>
                <div className="product_desc">
                  <h4 className="product_name">{item.name}</h4>
                  <div className="product_other_details">
                    <div className="product_review">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"></path></svg>
                    </div>
                    <div className="product_price">
                      <div className="old_price">{item.oldPrice}/-</div>
                      <div className="new_price">{item.newPrice}/-</div>
                    </div>
                  </div>
                </div>
                <div className="add_to_cart"></div>
                <button className="cart_btn" key={item.id} onClick={() => addItems()}>ADD TO CART</button>
            </div>
            )
          })
          )
        }
        </div>
        </div>
  );
};

export default Products;
