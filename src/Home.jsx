import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_pt_BR_1x._CB412256579_.jpg"
          alt="Amazon's cover"
        />
      </div>
      <div className="homeRow">
        <Product
          id={1233}
          image="https://images-na.ssl-images-amazon.com/images/I/61m38wVMbSL._AC_UX679_.jpg"
          title="Óculos Ray-Ban original"
          author="Ray-Ban Brasil"
          description="Este óculos irá revolucionar a sua visão!"
          price={14.99}
          rating={4}
          addItem
        />

        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="homeRow">
        <Product
          id={1234}
          image="https://images-na.ssl-images-amazon.com/images/I/61m38wVMbSL._AC_UX679_.jpg"
          title="Testing"
          description="Hello, World"
          price={14.99}
          rating={4}
          addItem
        />{" "}
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="homeRow">
        {/*Product*/}
        <Product
          id={1235}
          image="https://images-na.ssl-images-amazon.com/images/I/61m38wVMbSL._AC_UX679_.jpg"
          title="Testing"
          description="Hello, World"
          price={14.99}
          rating={4}
          addItem
        />{" "}
        {/*Product*/}
      </div>
      <div className="homeRow">
        <Product
          id={1236}
          image="https://images-na.ssl-images-amazon.com/images/I/61m38wVMbSL._AC_UX679_.jpg"
          title="Testing"
          description="Hello, World"
          price={14.99}
          rating={4}
          addItem
        />{" "}
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="homeRow">{/*Product*/}</div>
    </div>
  );
}
