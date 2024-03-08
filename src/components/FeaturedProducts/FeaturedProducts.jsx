import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

 const data =[{id:1,img1:'/img/p5.png',img2:'',title:'HOME GYM EQUIPMENT',price:666},
              {id:2,img1:'/img/p1.jpg',img2:'',title:'CARDIO MACHINE',price:544},
              {id:3,img1:'/img/p7.jpg',img2:'/img/p8.jpg',title:'WORK OUT PRODUCT',price:989},
              {id:4,img1:'/img/p12.jpg',img2:'/img/p5.png',title:'MULTI FUNCTION MACHINE',price:999},
              ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
