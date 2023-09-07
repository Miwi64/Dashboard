/**
 * React Component for a Select element.
 * @param {string} label - Label's text.
 * @param {string} name - Name for Label and Select.
 * @param {[string]} options - String Array that represents the Select's options.
 * @param {string} value - Input value.
 * @param {function} onChange - onChange event.
 * @returns {JSX.Element} - A JSX element representing an user input. 
 */
export default function OptionInput({name, label, options, value, onChange}){
    const labelStyle = `text-subtitle text-3xl block mb-2`;
    const inputStyle = `bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`;
    return(
        <>
            <label htmlFor={name} className={labelStyle}>{label}</label>
            <select id={name} name={name} className={inputStyle} value={value} onChange={onChange}>
                {options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
            </select>
        </>
    );
}