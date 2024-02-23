/* eslint-disable react/no-unescaped-entities */
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Authentification } from "./view/Authentification";

function App () {
  
  // Notre const 'router' contiendra toutes les routes du projets
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <>Erreur !! </>,
      children: [
        {
            path: '',
            element: <>Homepage</>
        },
        {
          path:'products',
          element: <>products</>,
        },
        {
          path: 'contact',
          element: <>contact</>
        },
        {
          path: 'login',
          element: <Authentification/>
        },
        {
          path: 'register',
          element: <>s'inscrire</>
        },
      ]
    }
  ])

  // Notre élément root sera l'élément racine du projet
  function Root() {
    return(
      <>
        <div>
          <Navbar/>
          {/* <Outlet /> une balise qui appartient à la biblio react-router-dom 
              -> à la place de 'outlet' s'affichera les composants liés à nos routes
          */}
          <Outlet />
        </div>
      </>
    )
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;