/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { ShoppingBag } from "react-feather";
import { HeaderItem } from "./HeaderItem";

export const Navbar = () => {
  return (
    <>
      <header className="relative py-5 shadow shadow-neutral">
        <div className="container flex items-center justify-between px-4 mx-auto">
        
          {/* La balise <Link> est élément de react-router-dom, c'est l'équivalent d'un <a> en HTML.
            A la différence qu'avec un <Link/> on ne rafraichit pas la page mais on charge juste le composant appelé
          */}
          <Link to={"/"} title="Allez sur la page d'accueil">
              {/* Logo */}
            <img src={logo} alt="dwShop" className="h-16 w-29" />
          </Link>
          
          <nav>
            <ul className="flex items-center gap-10">
               <HeaderItem href={'/products'} title="Mes produits"/>
               <HeaderItem href={'/contact'} title="Contact"/>
               <HeaderItem href={'/login'} title="Se connecter"/>
               <HeaderItem href={'/register'} title="S'inscrire"/>
                <li>
                    <button className="p-2 rounded-full hover:bg-neutral hover:text-secondary hover:scale-105">
                        {/* Attention ! <ShoppingBag /> n'est pas un de mes composants, il est importé de la biblio. 'react-feather' */}
                        <ShoppingBag />
                    </button>
                </li>
            </ul>

          </nav>
        </div>
      </header>
    </>
  );
};
