import React, { useState } from 'react';
import personsEntreprise from '../JSON/personsEntreprise.json'
import '../CSS/AppPersons.css'

const AddPerson = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [dateEntreeEntreprise, setDateEntreeEntreprise] = useState('');
    const [service, setService] = useState('');

    const handleAddPerson = () => {
        const newPerson = {
            nom,
            prenom,
            dateNaissance,
            dateEntreeEntreprise,
            service
        };

        const storedPersons = JSON.parse(localStorage.getItem('personsEntreprise')) || [];
        
        storedPersons.push(newPerson);

        localStorage.setItem('personsEntreprise', JSON.stringify(storedPersons));

        setNom('');
        setPrenom('');
        setDateNaissance('');
        setDateEntreeEntreprise('');
        setService('');
    };

    return (
        <div className='addPersons'>
            <h2>Ajouter une personne</h2>
            <form className='form_addPersons'>
                <div className='div_form_addPersons'>
                    <div className='div_addPersons_nom_prenom'>
                        <input
                            className='input_addPersons input_nom'
                            type="text"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        <input
                            className='input_addPersons input_prenom'
                            type="text"
                            placeholder="Prénom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                    </div>
                    <div className='div_addPersons_dates'>
                        <input
                            className='input_addPersons input_dates input_date_dateNaissance'
                            type="date"
                            value={dateNaissance}
                            onChange={(e) => setDateNaissance(e.target.value)}
                        />
                        <input
                            className='input_addPersons input_dates input_date_dateEntreprise'
                            type="date"
                            value={dateEntreeEntreprise}
                            onChange={(e) => setDateEntreeEntreprise(e.target.value)}
                        />
                    </div>
                    <div className='div_addPersons_service'>
                        <input
                            className='input_addPersons input_service'
                            type="text"
                            placeholder="Service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                        /> 
                        <input
                            className='input_addPersons input_service_suite'
                            type="text"
                            placeholder="Service suite"
                        /> 
                    </div>
                </div>
                <div className='div_btn_ajouter'>
                    <button className='btn_ajouter' type="button" onClick={handleAddPerson}>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default AddPerson;
