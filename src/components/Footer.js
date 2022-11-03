import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <div id="footer">
         <h3>ohmyfood</h3>
         <ul id="footer__info">
            <li>
               <Link to="/error">
                  <i className="fa-solid fa-utensils icone__footer"></i>
                  Proposer un restaurant
               </Link>
            </li>
            <li>
               <Link to="/error">
                  <i className="fa-solid fa-handshake-angle icone__footer"></i>
                  Devenir partenaire
               </Link>
            </li>
            <li>
               <Link to="/error">Mentions légales</Link>
            </li>
            <li>
               <Link to="/error">Contact</Link>
            </li>
         </ul>
      </div>
   );
}
