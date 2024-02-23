/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ title, href }) => {
  // useLocation : Hook de React-dom-router qui renvoie un objet lié à la 'localisation', qui représente l'URL actuel
  const { pathname } = useLocation();
  console.log("pathname: ", pathname);

  return (
    <>
      <li>
        {/* Contenu de votre composant */}
        <Link
          to={href}
          className={`${
            pathname === href && "border-b-4 border-secondary"
          } pb-1 text-lg hover:text-secondary font-semibold`}
        >
          {title}
        </Link>
      </li>
    </>
  );
};
