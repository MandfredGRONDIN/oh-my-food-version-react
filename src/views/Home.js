import React from "react";
import { Link } from "react-router-dom";
import Products from "../products.json";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Heart from "../components/Heart";
import "../styles/Home.css";

export default function Home() {
   return (
      <div>
         <Section1 />
         <Section2 />
         <Section3 />
         <section id="section4">
            <div className="card__menu-home">
               {Products.map((product, key) => (
                  <Link
                     to={`/menu/${product.title}`}
                     className="card-home"
                     item={product}
                     key={key}
                  >
                     <div className="card__img-home">
                        <img src={product.pictures} alt="" />
                        {product.new ? (
                           <p className="card__new">{product.new} </p>
                        ) : null}
                     </div>
                     <div className="card__body-home">
                        <div className="card__body-left-home">
                           <span className="card__title-home">
                              {product.title}
                           </span>
                           <p>{product.place}</p>
                        </div>
                        <div className="card__body-right-home">
                           <Heart />
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </section>
      </div>
   );
}
