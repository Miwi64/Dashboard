"use client";
import Alert from '@/components/Alert';
import NumericInput from '@/components/NumericInput';
import OptionInput from '@/components/OptionInput';
import PastelChart from '@/components/PastelChart';
import TableChart from '@/components/TableChart';
import React, { useState } from "react"

function Composition(){
  const [formData, setFormData] = useState({
    gender: '',
    weight: '',
    height: '',
    age: '',
    biceps: '',
    triceps: '',
    subscapularis: '',
    iliac: '',
    bistyloid: '',
    femur: ''
  });
  const [composition, setComposition] = useState({});
  const [error, setError] = useState(false);

  const calculateComposition = ({gender, weight, height, age, biceps, triceps, subscapularis, iliac, bistyloid, femur}) => {
    const folds = parseFloat(biceps) + parseFloat(triceps) + parseFloat(subscapularis) + parseFloat(iliac);
    const logfolds = Math.log10(folds);
    const dc = gender === 'M'? 1.1765 - 0.0744 * logfolds: 1.1567 - 0.0717 * logfolds;
    const fatPercent = 495/dc - 450

    const osseuscm = [parseFloat(height), parseFloat(height), parseFloat(femur), parseFloat(bistyloid), 40000];
    const osseusm = osseuscm.map((cm) => cm * 0.01);
    const prod = osseusm.reduce((ac, num)=> ac * num, 1);
    const osseus = Math.pow(prod, 0.712) * 3.02;

    const resconst = gender === 'M'? 0.24: 0.21;
    const residual = weight * resconst;

    const osseusPercent = osseus*100/weight;
    const residualPercent = residual*100/weight;
    const fat = fatPercent*.01*weight;
    const musclePercent = 100 - osseusPercent - residualPercent - fatPercent;
    const muscle = weight * .01 * musclePercent;
    return {
      table: [{title: 'Masa Grasa', percentage: fatPercent, quantity: fat},
              {title: 'Masa Ósea', percentage: osseusPercent, quantity: osseus},
              {title: 'Masa Residual', percentage: residualPercent, quantity: residual},
              {title: 'Masa Muscular', percentage: musclePercent, quantity: muscle}],
      percentages: {
        labels: ['Masa Grasa', 'Masa Ósea', 'Masa Residual', 'Masa Muscular'],
        values: [fatPercent, osseusPercent, residualPercent, musclePercent]
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {gender, weight, height, age, biceps, triceps, subscapularis, iliac, bistyloid, femur} = formData;
    if([gender.trim(),weight.trim(),height.trim(),age.trim(),biceps.trim(),triceps.trim(),subscapularis.trim(),
      iliac.trim(),bistyloid.trim(),femur.trim()].includes('')){
      setError(true);
      return;
    }
    if(isNaN(height) || isNaN(biceps) || isNaN(triceps) || isNaN(subscapularis) || isNaN(iliac) || isNaN(femur) 
      || isNaN(bistyloid)){
      setComposition({});
      return;
    }
    setError(false);
    setComposition({});
    const comp = calculateComposition(formData);
    setComposition(comp)
  }

  const labels = ['Género','Peso (kg)', 'Estatura (cm)', 'Edad', 'Bicipital (mm)', 'Tricipital (mm)', 'Subescapular (mm)', 'Cresta iliaca (mm)',
                  'Biestiloideo (cm)', 'Fémur (cm)'];

  const titleStyle = `text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary text-8xl`;
  const buttonStyle = ` bg-boxback border-2 border-line rounded-xl text-white text-2xl px-4 py-2 
                        hover:bg-gradient-to-r from-primary to-secondary`;
  
  return(
  <div className=" bg-back w-full p-20">
    <h1 className={titleStyle}>Composición corporal</h1>
    <form onSubmit={handleSubmit}>
    {error && (<Alert text="Llenar todos los campos"/>)}
      <div className='flex flex-col lg:flex-row flex-wrap gap-8 p-10 justify-start'>
          {
            Object.keys(formData).map((property,index) => (
              <div key={index} className='basis-[30%]'>
                {
                  property === "gender"? 
                  <OptionInput label={labels[index]} options={['','M','F']}
                  value={formData[property]} name={property} onChange={e => handleInputChange(e)}/> : 
                  <NumericInput label={labels[index]} 
                  value={formData[property]} name={property} onChange={e => handleInputChange(e)}/>
                }
              </div>
            ))
          }
      </div>
      <div className='text-center'>
          <button className={buttonStyle}
           type="submit">Aceptar</button>
        </div>
    </form>
    {
    !error && composition.table && composition.percentages && (
      <div className='m-5 border-2 border-line rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center'>
          <TableChart headers={['Componente', '%', 'kg']} data={composition.table}></TableChart>
          <div className=''>
            <PastelChart data={composition.percentages}></PastelChart>
          </div>
      </div>
    )}
  </div>);
}
export default Composition;