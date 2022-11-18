import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Products from "../products.json";
import Header from "../components/Menu/Header";
import Heart from "../components/Heart";
import Starter from "../components/Menu/Starter";
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
      <div id="menu">
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
                        <div id="card__menu">
                           <Starter card={product.starter} title="ENTRÉES" />
                           <Starter card={product.dish} title="PLATS" />
                           <Starter card={product.dessert} title="DESSERTS" />
                        </div>
                        <div className="btn__commander">
                           <Link to={"/error"} className="commander survol">
                              Commander
                           </Link>
                        </div>
                     </div>
                  </section>
               </div>
            )
         )}
      </div>
   );
}
