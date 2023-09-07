/**
 * React Component for Alert boxes
 * @param {string} text - The content of the Alert box.
 * @returns {JSX.Element} - A JSX element representing the Alert box. 
 */
function Alert({text}){
    return(
        <div className='p-5 bg-boxback border-2 border-line rounded-xl text-center mt-4'>
            <p className={`text-2xl text-white`}>{text}</p>
        </div>
    )
  }
  export default Alert;