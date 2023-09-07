export default function ContentTile({title, image, alt, content}){
    return(
            <div className='flex-1 text-center bg-primary'>
            <h3 className={`text-white text-2xl m-4`}>{title}</h3>
            <img className='object-cover w-full h-[300px]' src={image} alt={alt} />
            <p className={`text-white text-xl m-4`}>{content}</p>
        </div>
    );
}