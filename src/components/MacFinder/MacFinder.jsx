import React, { useState } from 'react';
import axios from 'axios';
import MacAddressDetails from '../MacData/MacData';

const MacFinder = () => {
    const [macAddress, setMacAddress] = useState('');
    const [macDetails, setMacDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setError('');
        setMacDetails(null); // Reset des détails avant chaque recherche
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}?apiKey=${import.meta.env.VITE_API_KEY}&output=json&search=${macAddress}`);
            setMacDetails(response.data); // Sauvegarder toutes les données
        } catch (err) {
            setError('Erreur lors de la récupération des données.');
        }
    };

    const handleTitleClick = () => {
        window.location.reload(); // Recharger la page
    };

    return (
        <div className="p-6">
            <h1
                className="text-3xl font-bold mb-4 text-center text-white bg-green-800 py-4 cursor-pointer"
                onClick={handleTitleClick}
            >
                Bienvenue sur MacFinder
            </h1>
            <h1 className="text-lg sm:text-xl font-medium m-7 text-center text-gray-500">
                Découvrez facilement le fabricant de votre carte réseau en entrant simplement l'adresse MAC.
                Notre outil rapide et intuitif vous fournit des détails précis sur les appareils réseau pour une identification instantanée.
            </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault(); // Empêche le rechargement de la page
                    handleSearch(); // Appelle votre fonction de recherche
                }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-5"
            >
                <input
                    type="text"
                    value={macAddress}
                    onChange={(e) => setMacAddress(e.target.value)}
                    placeholder="Entrez l'adresse MAC"
                    className="border p-3 rounded-md w-full sm:w-1/2 text-base sm:text-lg focus:border-green-500 focus:outline-none"
                />
                <button
                    type="submit" // Définit le bouton comme bouton de soumission
                    className="bg-green-500 text-white p-3 rounded-lg w-full sm:w-fit text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-green-600 active:bg-green-700 transform hover:scale-105 active:scale-95"
                >
                    Rechercher
                </button>
            </form>

            {error && <p className="text-red-500 mt-5 text-center text-lg sm:text-xl">{error}</p>}

            {/* Afficher les détails du résultat */}
            {macDetails && <MacAddressDetails data={macDetails} />}
        </div>
    );
};

export default MacFinder;
