/**
 * React page for muscle composition
 * @returns {JSX.Element} - A JSX element representing the form for calculate muscle composition.
 */

"use client";
import Alert from '@/components/Alert';
import NumericInput from '@/components/NumericInput';
import OptionInput from '@/components/OptionInput';
import PastelChart from '@/components/PastelChart';
import TableChart from '@/components/TableChart';
import React, { useState } from "react"

function Composition(){
  /**
   * Creating hook for form data.
   */
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
  /**
   * Creating hook for results.
   */
  const [composition, setComposition] = useState({});
  /**
   * Creating hook for set errors.
   */
  const [error, setError] = useState(false);

  /**
 * Function calculateComposition
 * @param {object} - An object containing the form data.
 * @returns {object} - An object containing data to create tables and charts.
 */
  const calculateComposition = ({gender, weight, height, age, biceps, triceps, subscapularis, iliac, bistyloid, femur}) => {
    /**
    * Calculating fat percent.
    */
   //Adding all folds
    const folds = parseFloat(biceps) + parseFloat(triceps) + parseFloat(subscapularis) + parseFloat(iliac);
  //logarithm
    const logFolds = Math.log10(folds);
  //Calculating density
    const dc = gender === 'M'? 1.1765 - 0.0744 * logFolds: 1.1567 - 0.0717 * logFolds;
  //fat percentage
    const fatPercent = 495/dc - 450
  //Creating an array to storage the operands for osseusmass
    const osseusCm = [parseFloat(height), parseFloat(height), parseFloat(femur), parseFloat(bistyloid), 40000];
  //Converting to meters
    const osseusM = osseusCm.map((cm) => cm * 0.01);
  //Calculating osseus mass
    const prod = osseusM.reduce((ac, num)=> ac * num, 1);
    const osseus = Math.pow(prod, 0.712) * 3.02;
  //Defining residual mass constant
    const resConst = gender === 'M'? 0.24: 0.21;
  //Calculating residual mass
    const residual = weight * resConst;
  //Calculating percentages.
    const osseusPercent = osseus*100/weight;
    const residualPercent = residual*100/weight;
    const fat = fatPercent*.01*weight;
    const musclePercent = 100 - osseusPercent - residualPercent - fatPercent;
  //Calculating muscle mass.
    const muscle = weight * .01 * musclePercent;
  //Returning the object
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

  /**
   * A function that handles the input changes
   * @param {*} e - the event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  /**
   * A function that handles the form submit
   * @param {*} e - the event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const {gender, weight, height, age, biceps, triceps, subscapularis, iliac, bistyloid, femur} = formData;
    /**
     * Verify if the inputs are filled.
     */
    if([gender.trim(),weight.trim(),height.trim(),age.trim(),biceps.trim(),triceps.trim(),subscapularis.trim(),
      iliac.trim(),bistyloid.trim(),femur.trim()].includes('')){
      setError(true);
      return;
    }
    /**
     * Verify if the numeric inputs are filled with proper values.
     */
    if(isNaN(height) || isNaN(biceps) || isNaN(triceps) || isNaN(subscapularis) || isNaN(iliac) || isNaN(femur) 
      || isNaN(bistyloid)){
      setComposition({});
      return;
    }
    setError(false);
    /**
     * Refreshing the object.
     */
    setComposition({});
    const comp = calculateComposition(formData);
    /**
     * Setting the muscle composition object.
     */
    setComposition(comp)
  }

    /**
     * Form labels.
     */
  const labels = ['Género','Peso (kg)', 'Estatura (cm)', 'Edad', 'Bicipital (mm)', 'Tricipital (mm)', 'Subescapular (mm)', 'Cresta iliaca (mm)',
                  'Biestiloideo (cm)', 'Fémur (cm)'];
    /**
     * Tailwindcss styles.
     */
  const titleStyle = `text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary text-8xl`;
  const buttonStyle = ` bg-boxback border-2 border-line rounded-xl text-white text-2xl px-4 py-2 
                        hover:bg-gradient-to-r from-primary to-secondary`;
    /**
     * Returning the form
     */
  return(
  <div className=" bg-back w-full p-20">
    <h1 className={titleStyle}>Composición corporal</h1>
    <form onSubmit={handleSubmit}>
    {/**
     * Show an Alert if there are inputs missing.
    */}
    {error && (<Alert text="Llenar todos los campos"/>)}
      <div className='flex flex-col lg:flex-row flex-wrap gap-8 p-10 justify-start'>
          {
                /**
                * Creating the inputs
                */
            Object.keys(formData).map((property,index) => (
              <div key={index} className='basis-[30%]'>
                {
                  property === "gender"? 
                  /**Select gender */
                  <OptionInput label={labels[index]} options={['','M','F']}
                  value={formData[property]} name={property} onChange={e => handleInputChange(e)}/> :
                   /**Number inputs */
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
      /**Creating the table and chart */
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