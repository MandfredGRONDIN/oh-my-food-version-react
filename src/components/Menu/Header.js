import { Link } from "react-router-dom";
import Logo from "../../assets/ohmyfood.png";

export default function Header() {
   return (
      <div id="header">
         <Link to="/" className="back__index">
            <i className="fa-solid fa-arrow-left"></i>
         </Link>
         <div className="header__logo">
            <img src={Logo} alt="menu"></img>
         </div>
      </div>
   );
}
