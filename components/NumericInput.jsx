export default function NumericInput({label, name, value, onChange}){
    const labelStyle = `text-subtitle text-3xl block mb-2`;
    const inputStyle = `bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`;
    const notifyStyle = `font-bold text-yellow text-xl`;
    return(
        <>
            <label htmlFor={`${name}`} className={labelStyle}>{label}</label>
            <input className={inputStyle} type="text" id={`${name}`} value={value} onChange={onChange}/>
            {isNaN(value) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </>
    );
}