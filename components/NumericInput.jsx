/**
 * React Component for a Custom Input that accepts numbers.
 * @param {string} label - Label's text.
 * @param {string} name - Name for Label and Text Input.
 * @param {string} value - Input value.
 * @param {function} onChange - onChange event.
 * @returns {JSX.Element} - A JSX element representing an user input. 
 */

export default function NumericInput({label, name, value, onChange}){
    /*
        tailwindcss styles
    */
    const labelStyle = `text-subtitle text-3xl block mb-2`;
    const inputStyle = `bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`;
    const notifyStyle = `font-bold text-yellow text-xl`;
    return(
        <>
            <label htmlFor={`${name}`} className={labelStyle}>{label}</label>
            <input id={name} className={inputStyle} type="text" name={`${name}`} value={value} onChange={onChange}/>
            {isNaN(value) && (<p className={notifyStyle}>El valor introducido no es numerico</p>)}
        </>
    );
}