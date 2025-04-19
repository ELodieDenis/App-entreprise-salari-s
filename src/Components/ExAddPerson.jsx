import React from 'react';
import ExProfil from '../Components/ExProfil.jsx';
import { useState, useEffect } from 'react';

function ExAddPerson() {

    const [ valueInput, setValueInput ] = useState("")
    const [ valueInputPrenom, setValueInputPrenom ] = useState("")
    const[ profession, setProfession ] = useState([])
    const [ prenom, setPrenom ] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfession(prevProfessions => [...prevProfessions, valueInput])
        setValueInput("")
        console.log(valueInput)
    }

    const handleSubmitPrenom = (e) => {
        e.preventDefault();
        setPrenom(prevPrenom => [...prevPrenom, valueInputPrenom])
        setValueInputPrenom("");
        console.log(valueInputPrenom)
    }

    const handleChange = (e) => {
        setValueInput(e.target.value)
    }

    const handleChangePrenom = (e) => {
        setValueInputPrenom(e.target.value)
    }

    useEffect(() => {
        if(profession.length > 0) {
            console.log(profession);
            console.log(profession.length)
        }
    }, [profession])

    useEffect(() => {
        if(prenom.length > 0) {
            console.log(prenom);
            console.log(prenom.length)
        }
    }, [prenom])

    return (
        <div>
            {/* <h1>Liste des profils :</h1>

            <ExProfil nom="Durand" prenom="Alice"/>
            <ExProfil nom="Dupond" prenom="Frédéric"/>
            <ExProfil nom="Toul" prenom="Théo"/> */}
            <div className='form_input' style={{display:'flex'}}>
            <form action="" style={{
                padding: '50px'}} onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='Prénom'
                    value={valueInput}
                    onChange={handleChange}
                    />
                </label>
                <button style={{
                    marginLeft:'10px'
                }}>Créer</button>
            </form>
            <form action="" style={{
                padding: '50px'}} onSubmit={handleSubmitPrenom}>
                <label>
                    <input type="text" placeholder='Profession'
                    value={valueInput}
                    onChange={handleChangePrenom}
                    />
                </label>
                <button style={{
                    marginLeft:'10px'
                }}>Créer</button>
            </form>
            </div>
            <table className='table_form_input' style={{marginBottom:'80px'}}>
                <thead>
                    <tr>
                        <th>Exemple</th>
                        <th>Prénom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{profession[0]}</th>
                        <th>{prenom[0]}</th>
                    </tr>
                    <tr>
                        <th>{profession[1]}</th>
                        <th>{prenom[1]}</th>
                    </tr>
                    <tr>
                        <th>{profession[2]}</th>
                        <th>{prenom[2]}</th>
                    </tr>
                    <tr>
                        <th>{profession[3]}</th>
                        <th>{prenom[3]}</th>
                    </tr>
                    <tr>
                        <th>{profession[4]}</th>
                        <th>{prenom[4]}</th>
                    </tr>
                    <tr>
                        <th>{profession[5]}</th>
                        <th>{prenom[5]}</th>
                    </tr>
                    <tr>
                        <th>{profession[6]}</th>
                        <th>{prenom[6]}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ExAddPerson;