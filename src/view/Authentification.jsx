import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const Authentification = () => {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isLogginIn, setIsLogginIn] = useState(false)
    const [loginError, setLogginError] = useState('')

    const handleLogin = async () => {
        setIsLogginIn(true);
        try{
            // Ici, ajoutez le véritable appel d'API pour s'authentifier
            // (en attendant, on va juste simuler avec un setTimeout)

            await new Promise(resolve => setTimeout(resolve, 1000))

            // A la place de 'notreToken', sauvegarder le Token reçu en réponse a notre requete POST
            const authToken = 'notreToken'

            // localStorage -> clé/value
            localStorage.setItem('authToken', authToken)
            
            // Si je veux récupérer mon token je dois faire 'localStorage.getItem(Ma_clé)':
            console.log(localStorage.getItem('authToken'))

            // Je simule une erreur
            throw new Error ("Erreur d'authentification")
        }
        catch (error){
            setLogginError("Nom d'utilisateur ou mot de passe incorrect")
        } 
        finally {
            setIsLogginIn(false)
        }
    }

    useEffect( () => {
        // Logique à exécuter après la tentative de connexion
        if(!isLogginIn && !loginError){
            console.log('Authentification réussi')

            // Ce que fait quand on a réussi à se connecter

        }
    }, [isLogginIn, loginError])

    return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 bg-white rounded shadow-md w-96">
          <h2 className="mb-6 text-2xl font-bold">Connexion</h2>
          <div className="mb-4" >
            <label htmlFor="username" className="block font-semibold text-gray-700">Nom d'utilisateur</label>
            
            <input 
            type="text"
            id='username'
            className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-700">Mot de passe</label>
            <input 
                type="password" 
                id="password"
                className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded"
                value={password}
                onChange={ (e) => setPassword(e.target.value) }
            />
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
            disabled={isLogginIn}
            >  
          </button>
        </div>
      </div>
    </>
  );
};
