// import React, { useState } from 'react';
import personsEntreprise from '../JSON/personsEntreprise.json'
import '../CSS/PersonsEntreprise.css'


const PersonsEntreprise = () => {
    const entrepriseNew = personsEntreprise

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date de naissance</th>
                        <th>Date entrée dans l'entreprise</th>
                        <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                    {entrepriseNew.map((entreprise, id) => (
                        <tr key={id}>
                            <td>{entreprise.nom}</td>
                            <td>{entreprise.prenom}</td>
                            <td>{entreprise.dateNaissance}</td>
                            <td>{entreprise.dateEntreeEntreprise}</td>
                            <td>{entreprise.service}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonsEntreprise;