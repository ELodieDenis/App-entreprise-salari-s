import React from 'react';
import ExProfil from '../Components/ExProfil.jsx';

function ExAddPerson() {


    return (
        <div>
            <h1>Liste des profils :</h1>

            <ExProfil nom="Durand" prenom="Alice"/>
            <ExProfil nom="Dupond" prenom="Frédéric"/>
            <ExProfil nom="Toul" prenom="Théo"/>
        </div>
    );
};

export default ExAddPerson;