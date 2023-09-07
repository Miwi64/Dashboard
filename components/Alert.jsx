function Alert({text}){
    return(
        <div className='p-5 bg-boxback border-2 border-line rounded-xl text-center mt-4'>
            <p className={`text-2xl text-white`}>{text}</p>
        </div>
    )
  }
  export default Alert;