import { Link } from "react-router-dom";

export default function Section2() {
   return (
      <div>
         <section id="section2">
            <h1>Réservez le menu qui vous convient</h1>
            <p>
               Découvrez des restaurants d'exception, séléctionnés par nos
               soins.
            </p>
            <Link to="/error" className="exploration survol">
               Explorer nos restaurants
            </Link>
         </section>
      </div>
   );
}
