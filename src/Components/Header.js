import React from "react";
import "./Css/Header.css";
import girl_img from './Images/girl_img.png'

export const Header = () => {
  return (
    <div className="header-container">
            <div className="header_data_details">
          <h5 className="summer_heading">Summer2020 </h5>
          <h1>NEW COLLECTION</h1>
          <h4>
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="shop_now">
            <button className="btn_shop_now">SHOP NOW</button>
          </div>
        </div>
        <div className="header_data_image">
          {/* <div className="hero_cover">
            <div className="eclipse_1 eclipse"></div>
            <div className="eclipse_2 eclipse"></div>
            <div className="eclipse_3 eclipse"></div> */}
            <div className="girl_img">
                <img src={girl_img} alt="" srcSet="" />
            </div>
            {/* <div className="eclipse_4 eclipse"></div>
            <div className="eclipse_5 eclipse"></div>
          </div> */}
        </div> 
      
    </div>
  );
};
