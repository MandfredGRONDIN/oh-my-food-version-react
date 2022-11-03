import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../products.json";
import Header from "../components/Menu/Header";

export default function Menu() {
   const params = useParams();

   const navigate = useNavigate();
   useEffect(() => {
      let product = Products.find((product) => params.id === product.title);
      if (!product) {
         navigate("/error");
      }
   });

   return (
      <div>
         {Products.filter((product) => params.id === product.title).map(
            (product, index) => (
               <Header data={product} key={index} />
            )
         )}
      </div>
   );
}
