/**
 * React Component for tiles
 * @param {string} title - The Tile title.
 * @param {string} image - The source path of the Tile's image.
 * @param {string} alt - The help text of the Tile's image.
 * @param {string} content - The Tile text content.
 * @returns {JSX.Element} - A JSX element representing the Alert box. 
 */
export default function ContentTile({title, image, alt, content}){
    return(
            <div className='flex-1 text-center bg-primary'>
            <h3 className={`text-white text-2xl m-4`}>{title}</h3>
            <img className='object-cover w-full h-[300px]' src={image} alt={alt} />
            <p className={`text-white text-xl m-4`}>{content}</p>
        </div>
    );
}