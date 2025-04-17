import React from 'react';
import { useState } from 'react';
import PersonsEntreprise from '../JSON/personsEntreprise.json'
import '../CSS/SelectEmployee.css'

const SelectEmployee = () => {

    const personsNew = PersonsEntreprise

    const [ companyDatePersons, setcompanyDatePersons ] = useState(null)

    const [ birthDatePersons, setBirthPersons ] = useState(null)

    const [ serviceCompanyPersons, setServiceCompanyPersons ] = useState(null)

    const handleChange = (e) => {
        const personsName = e.target.value;

        const companyDate = personsNew.find(u => u.nom === personsName);
        setcompanyDatePersons(companyDate)

        const birthPersons = personsNew.find(n => n.nom === personsName)
        setBirthPersons(birthPersons)

        const serviceCompagny = personsNew.find(m => m.nom === personsName);
        setServiceCompanyPersons(serviceCompagny)

    }

    return (
        <div className='div_persons'>
            <div className='div div_choosePersons'>
                <span className='div_label_persons'>Chercher une personne &nbsp;</span>
                <select name="choose" className='div_label_select_persons'
                onChange={handleChange}>
                    {personsNew.map((persons, id) => (
                        <option value={persons.nom} key={id}>{persons.nom.toUpperCase()} {persons.prenom}</option>
                    ))}
                </select>&nbsp; 
            </div>
            <div className='div div_span div_birthPersons'>
                {birthDatePersons && (
                    <>
                    <span className='span_div_span'>. née le : </span>
                    <p className='label_p_birth'>&nbsp;{birthDatePersons.dateNaissance}&nbsp;</p> 
                    </>
                )}
            </div>
            <div className='div div_span div_companyDatePersons'>
                {companyDatePersons && (
                    <>
                    <span className='span_div_span'>. date d'entrée dans l'entreprise : </span>
                    <p className='label_p_companyDate'>&nbsp;{companyDatePersons.dateEntreeEntreprise}</p>
                    </>
                )}
            </div>
            <div className='div div_span div_serviceCompagnyPersons'>
                {serviceCompanyPersons && (
                    <>
                    <span className='span_div_span'>. service : </span>
                    <p>&nbsp;{serviceCompanyPersons.service}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default SelectEmployee;