import React from "react";
import { Link } from "react-router-dom";
import Products from "../products.json";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Card from "../components/Home/Card";
import Heart from "../components/Heart";

export default function Home() {
   console.log(Products);
   return (
      <div>
         <Section1 />
         <Section2 />
         <Section3 />
         <section id="section4">
            <div className="card__menu">
               {Products.map((product) => (
                  <Link to={`/menu/${product.title}`}>
                     <div className="cart__img">
                        <img src={product.pictures} alt="" />
                        <p className="card__new">Nouveau</p>
                     </div>
                     <div className="cart__body">
                        <div className="card__body-left">
                           <span className="card__title">{product.title}</span>
                           <p>Ménilmontant</p>
                        </div>
                     </div>
                     <div className="card__body-right">
                        <Heart />
                     </div>
                     <Card item={product} />
                  </Link>
               ))}
            </div>
         </section>
      </div>
   );
}
