/**
 * React Component for a Header that uses Parallax Effect.
 * @param {string} image - Source path to the image.
 * @param {string} title - Header's title.
 * @returns {JSX.Element} - A JSX element representing a Header. 
 */
export default function ParallaxHeader({image, title}){
  /**
   * Tailwindcss styles
   */
    const header_style = 'w-full h-[500px] bg-cover bg-no-repeat bg-center bg-fixed';
    const header_image = `url(${image})`;
    const container_style = 'w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center'; 
    const title_style = 'text-transparent bg-clip-text bg-gradient-to-t from-[#ef0e9d] to-[#f15417] text-8xl'
    
    return(
    <header className={header_style} style={{backgroundImage: header_image}}>
        <div className={container_style}>
          <h1 className={title_style}>{title}</h1>
        </div>
    </header>
    );
}