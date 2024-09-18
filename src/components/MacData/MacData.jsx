import React from 'react';

const MacAddressDetails = ({ data }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-6 p-4 mt-7">

            {/* Section Détails du fournisseur */}
            <div className="md:w-1/3 bg-white p-4 rounded-lg border border-transparent hover:border-green-500 transition-all duration-300 ease-in-out">
                <h2 className="text-lg font-bold mb-4 text-green-500">Détails du fournisseur</h2>
                <p><strong>OUI :</strong> {data.vendorDetails.oui}</p>
                <p><strong>Est privé :</strong> {data.vendorDetails.isPrivate ? 'Oui' : 'Non'}</p>
                <p><strong>Nom de l'entreprise :</strong> {data.vendorDetails.companyName}</p>
                <p><strong>Adresse de l'entreprise :</strong> {data.vendorDetails.companyAddress}</p>
                <p><strong>Code du pays :</strong> {data.vendorDetails.countryCode}</p>
            </div>

            {/* Section Détails du bloc */}
            <div className="md:w-1/3 bg-white p-4 rounded-lg border border-transparent hover:border-green-500 transition-all duration-300 ease-in-out">
                <h2 className="text-lg font-bold mb-4 text-green-500">Détails du bloc</h2>
                <p><strong>Est enregistré :</strong> {data.blockDetails.isRegistered ? 'Oui' : 'Non'}</p>
                <p><strong>Bord gauche :</strong> {data.blockDetails.borderLeft}</p>
                <p><strong>Bord droit :</strong> {data.blockDetails.borderRight}</p>
                <p><strong>Taille du bloc :</strong> {data.blockDetails.blockDetailsSize}</p>
                <p><strong>Taille du bloc d'attribution :</strong> {data.blockDetails.assignmentblockDetailsSize}</p>
                <p><strong>Date de création :</strong> {data.blockDetails.dateCreated}</p>
                <p><strong>Date de mise à jour :</strong> {data.blockDetails.dateUpdated}</p>
            </div>

            {/* Section Détails de l'adresse MAC */}
            <div className="md:w-1/3 bg-white p-4 rounded-lg border border-transparent hover:border-green-500 transition-all duration-300 ease-in-out">
                <h2 className="text-lg font-bold mb-4 text-green-500">Détails de l'adresse MAC</h2>
                <p><strong>Est valide :</strong> {data.macAddressDetails.isValid ? 'Oui' : 'Non'}</p>
                <p><strong>Machine virtuelle :</strong> {data.macAddressDetails.virtualMachine ? 'Détectée' : 'Non détectée'}</p>
                <p><strong>Type de transmission :</strong> {data.macAddressDetails.transmissionType}</p>
                <p><strong>Type d'administration :</strong> {data.macAddressDetails.administrationType}</p>
                <p><strong>Applications :</strong> {data.macAddressDetails.applications}</p>
                <p><strong>Notes Wireshark :</strong> {data.macAddressDetails.wiresharkNotes}</p>
            </div>
        </div>
    );
};

export default MacAddressDetails;
