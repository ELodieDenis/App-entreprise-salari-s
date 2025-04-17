import React from 'react';
import { useState, useEffect } from 'react';
import PersonsEntreprise from '../JSON/personsEntreprise.json'
import '../CSS/SelectEmployee.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SelectEmployee = () => {

    const personsNew = PersonsEntreprise;

    const [companyDatePersons, setcompanyDatePersons] = useState(null);
    const [birthDatePersons, setBirthPersons] = useState(null);
    const [serviceCompanyPersons, setServiceCompanyPersons] = useState(null);
    const [salaryCompagnyPersons, setSalaryCompagnyPersons] = useState(null);
    const [ averageSalaries, setAverageSalaries ] = useState(null)
    const [ chartWidth, setChartWidth ] = useState(600);

    const handleChange = (e) => {
        const personsName = e.target.value;

        const companyDate = personsNew.find(u => u.nom === personsName);
        setcompanyDatePersons(companyDate);

        const birthPersons = personsNew.find(n => n.nom === personsName);
        setBirthPersons(birthPersons);

        const serviceCompagny = personsNew.find(m => m.nom === personsName);
        setServiceCompanyPersons(serviceCompagny);

        const salaryCompagny = personsNew.find(s => s.nom === personsName);
        setSalaryCompagnyPersons(salaryCompagny);
    };

    useEffect(() => {
        const updateChartWidth = () => {
            const width = window.innerWidth * 0.6;
            setChartWidth(width);
        };

        updateChartWidth();

        window.addEventListener('resize', updateChartWidth);

        return () => {
            window.removeEventListener('resize', updateChartWidth);
        };
    }, []);

    useEffect(() => {
        const salaryPerYear = {};

        personsNew.forEach(person => {
            person.salaires.forEach(salaire => {
                if (!salaryPerYear[salaire.annee]) {
                    salaryPerYear[salaire.annee] = [];
                }
                salaryPerYear[salaire.annee].push(salaire.salaire);
            });
        });

        const computedAverageSalaries = Object.keys(salaryPerYear).map(annee => ({
            annee: parseInt(annee),
            Salaire_Moyen: salaryPerYear[annee].reduce((a, b) => a + b, 0) / salaryPerYear[annee].length
        }));
          
        setAverageSalaries(computedAverageSalaries);
        
    }, [personsNew]);
        
    const formattedSalaryData = salaryCompagnyPersons?.salaires?.map((entry) => ({
        annee: entry.annee,
        Salaire_Employé: entry.salaire
    })) || [];

    const mergedData = (averageSalaries || [])
    .filter(avg => {
      if (!salaryCompagnyPersons || !salaryCompagnyPersons.dateEntreeEntreprise) return false;
  
      const yearOfEntry = parseInt(salaryCompagnyPersons.dateEntreeEntreprise.split('/')[2]);
      return avg.annee >= yearOfEntry;
    })
    .map(avg => {
      const salaireEmploye = formattedSalaryData.find(e => e.annee === avg.annee);
      return {
        annee: avg.annee,
        Salaire_Moyen: avg.Salaire_Moyen,
        Salaire_Employé: salaireEmploye ? salaireEmploye.Salaire_Employé : null
      };
    });

    return (
        <div className='div_persons'>
            <div className='div div_choosePersons'>
                <span className='div_label_persons'>Rechercher un employé : &nbsp;</span>
                <select name="choose" className='div_label_select_persons' onChange={handleChange}>
                    {personsNew.sort((a, b) => a.nom.localeCompare(b.nom)).map((persons, id) => (
                        <option value={persons.nom} key={id}>
                            {persons.nom.toUpperCase()} {persons.prenom}
                        </option>
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
            <div className='div_salaryPersons'>
                {salaryCompagnyPersons && (
                    <>
                        <h3>Salaires de {salaryCompagnyPersons.nom.toUpperCase()} {salaryCompagnyPersons.prenom}</h3>
                        <LineChart height={300} width={chartWidth}data={mergedData}>
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="annee" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Salaire_Employé" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Salaire_Moyen" stroke="#ff7300" />
                        </LineChart>
                    </>
                )}
            </div>
        </div>
    );
};

export default SelectEmployee;
