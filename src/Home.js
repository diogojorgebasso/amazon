import React from "react";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="homeConteiner">
        <img
          className="bannerInitialImg"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_pt_BR_1x._CB412256579_.jpg"
          alt=""
        />
      </div>
      <div className="homeRow">
        <Product />
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="homeRow">
        {/*Product*/}
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="homeRow">
        {/*Product*/}
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="homeRow">
        {/*Product*/}
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="homeRow">{/*Product*/}</div>
    </div>
  );
}
