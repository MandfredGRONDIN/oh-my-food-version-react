import React from "react";
import { Link } from "react-router-dom";
import Products from "../products.json";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Footer from "../components/Footer";
import Heart from "../components/Heart";
import "../styles/Home.css";

export default function Home() {
   return (
      <div>
         <Section1 />
         <Section2 />
         <Section3 />
         <section id="section4">
            <div className="card__menu">
               {Products.map((product, key) => (
                  <Link
                     to={`/menu/${product.title}`}
                     className="card"
                     item={product}
                     key={key}
                  >
                     <div className="card__img">
                        <img src={product.pictures} alt="" />
                        <p className="card__new">Nouveau</p>
                     </div>
                     <div className="card__body">
                        <div className="card__body-left">
                           <span className="card__title">{product.title}</span>
                           <p>{product.place}</p>
                        </div>
                        <div className="card__body-right">
                           <Heart />
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </section>
         <Footer />
      </div>
   );
}
