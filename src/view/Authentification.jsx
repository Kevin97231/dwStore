/* eslint-disable react/no-unescaped-entities */
export const Authentification = () => {
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
            value={}
            onChange={}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-700">Mot de passe</label>
            <input 
                type="password" 
                id="password"
                className="w-full px-3 py-2 mt-1 text-black border border-gray-300 rounded"
                value={}
                onChange={}
            />
          </div>

          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={}
            disabled={false}
            >
                
          </button>
        </div>
      </div>
    </>
  );
};
