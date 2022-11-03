import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../products.json";
import Header from "../components/Menu/Header";
import Heart from "../components/Heart";
import "../styles/Menu.css";

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
               <div key={index}>
                  <Header />
                  <section className="section1">
                     <img src={product.pictures} alt="menu"></img>
                  </section>
                  <section className="section2">
                     <div className="card__big">
                        <div className="card__header">
                           <h1>{product.title}</h1>
                           <div className="card__heart">
                              <div className="card__heart-menu">
                                 <Heart />
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            )
         )}
      </div>
   );
}
