export default function SimpleSection({title, content}){
    return(
        <section className= 'p-20 bg-back flex items-center text-center justify-center flex-wrap'>
        <h2 className={`text-subtitle text-5xl mb-8`}>{title}</h2>
        <p className={`text-white text-3xl`}>{content}</p>
        </section>
    );
}