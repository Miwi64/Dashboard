export default function OptionInput({name, label, options, value, onChange}){
    const labelStyle = `text-subtitle text-3xl block mb-2`;
    const inputStyle = `bg-boxback border-2 text-white border-line w-full px-4 py-2 ml-1 rounded-lg`;
    return(
        <>
            <label htmlFor={name} className={labelStyle}>{label}</label>
            <select id={name} className={inputStyle} value={value} onChange={onChange}>
                {options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
            </select>
        </>
    );
}