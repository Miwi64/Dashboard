"use client";
import Alert from '@/components/Alert';
import PastelChart from '@/components/PastelChart';
import TableChart from '@/components/TableChart';
import React, { useState } from "react"

function Composition(){
  const [gender,setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bicipital, setBicipital] = useState('');
  const [tricipital, setTricipital] = useState('');
  const [subescapular, setSubescapular] = useState('');
  const [cresta, setCresta] = useState('');
  const [biestiloideo, setBiestiloideo] = useState('');
  const [femur, setFemur] = useState('');
  const [composition, setComposition] = useState({});
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if([gender.trim(),weight.trim(),height.trim(),age.trim(),bicipital.trim(),tricipital.trim(),subescapular.trim(),
      cresta.trim(),biestiloideo.trim(),femur.trim()].includes('')){
      setError(true);
      return;
    }
    if(isNaN(height) || isNaN(bicipital) || isNaN(tricipital) || isNaN(subescapular) || isNaN(cresta) || isNaN(femur) 
      || isNaN(biestiloideo)){
      return;
    }
    setError(false);
    setComposition({});

    const folds = parseFloat(bicipital) + parseFloat(tricipital) + parseFloat(subescapular) + parseFloat(cresta);
    const logfolds = Math.log10(folds);
    const dc = gender === 'M'? 1.1765 - 0.0744 * logfolds: 1.1567 - 0.0717 * logfolds;
    const pfat = 495/dc - 450

    const osseuscm = [parseFloat(height), parseFloat(height), parseFloat(femur), parseFloat(biestiloideo), 40000];
    const osseusm = osseuscm.map((cm) => cm * 0.01);
    const prod = osseusm.reduce((ac, num)=> ac * num, 1);
    const osseus = Math.pow(prod, 0.712) * 3.02;

    const resconst = gender === 'M'? 0.24: 0.21;
    const residual = weight * resconst;

    const posseus = osseus*100/weight;
    const presidual = residual*100/weight;
    const fat = pfat*.01*weight;
    const pmuscle = 100 - posseus - presidual - pfat;
    const muscle = weight * .01 * pmuscle;

    const comp = {
      table: [{title: 'Masa Grasa', percentage: pfat, quantity: fat},
              {title: 'Masa Osea', percentage: posseus, quantity: osseus},
              {title: 'Masa Residual', percentage: presidual, quantity: residual},
              {title: 'Masa Muscular', percentage: pmuscle, quantity: muscle}],
      percentages: {
        labels: ['Masa Grasa', 'Masa Osea', 'Masa Residual', 'Masa Muscular'],
        values: [pfat, posseus, presidual, pmuscle]
      }
    }
    setComposition(comp)
    //limpiar();
  }

  const limpiar = () =>{
    setGender('');
    setWeight('');
    setAge('');
    setTalla('');
    setBicipital('');
    setTricipital('');
    setSubescapular('');
    setCresta('');
  }
  const titleStyle = `text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary text-8xl`;
  const labelStyle = `text-subtitle text-3xl block mb-2`;
  const inputStyle = `bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`;
  const buttonStyle = ` bg-boxback border-2 border-line rounded-xl text-white text-2xl px-4 py-2 
                        hover:bg-gradient-to-r from-primary to-secondary`;
  const notifyStyle = `font-bold text-yellow text-xl`;
  

  return(
  <div className=" bg-back w-full p-20">
    <h1 className={titleStyle}>
        Composicion corporal</h1>
    <form onSubmit={handleSubmit}>
    {error && (<Alert/>)}
      <div className='flex flex-col lg:flex-row flex-wrap gap-8 p-10 justify-start'>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Genero</label>
          <select className={inputStyle}
           value={gender} onChange={e => setGender(e.target.value)}>
            <option value=""></option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Peso (kg)</label>
          <input className={inputStyle}
           type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
          {isNaN(weight) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Estatura (cm)</label>
          <input className={inputStyle}
           type="text" name="talla" value={height} onChange={(e) => setHeight(e.target.value)}/>
           {isNaN(height) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Edad</label>
          <input className={inputStyle}
           type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
          {isNaN(age) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Bicipital (mm)</label>
          <input className={inputStyle}
           type="text" name="bicipital" value={bicipital} onChange={(e) => setBicipital(e.target.value)}/>
          {isNaN(bicipital) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Tricipital (mm)</label>
          <input className={inputStyle}
           type="text" name="tricipital" value={tricipital} onChange={(e) => setTricipital(e.target.value)}/>
          {isNaN(tricipital) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Subescapular (mm)</label>
          <input className={inputStyle}
           type="text" name="subescapular" value={subescapular} onChange={(e) => setSubescapular(e.target.value)}/>
          {isNaN(subescapular) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Cresta Iliaca (mm)</label>
          <input className={inputStyle}
           type="text" name="cresta" value={cresta} onChange={(e) => setCresta(e.target.value)}/>
          {isNaN(cresta) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Biestiloideo (cm)</label>
          <input className={inputStyle}
           type="text" name="biestiloideo" value={biestiloideo} onChange={(e) => setBiestiloideo(e.target.value)}/>
          {isNaN(biestiloideo) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
        <div className='basis-[30%]'>
          <label className={labelStyle}>Femur (cm)</label>
          <input className={inputStyle}
           type="text" name="femur" value={femur} onChange={(e) => setFemur(e.target.value)}/>
          {isNaN(femur) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </div>
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
          <div className='w-1/2'>
            <PastelChart data={composition.percentages}></PastelChart>
          </div>
      </div>
    )}
  </div>);
}
export default Composition;