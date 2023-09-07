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
    const headerStyle = 'w-full h-[500px] bg-cover bg-no-repeat bg-center bg-fixed';
    const headerImage = `url(${image})`;
    const containerStyle = 'w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center'; 
    const titleStyle = 'text-transparent bg-clip-text bg-gradient-to-t from-[#ef0e9d] to-[#f15417] text-8xl'
    
    return(
    <header className={headerStyle} style={{backgroundImage: headerImage}}>
        <div className={containerStyle}>
          <h1 className={titleStyle}>{title}</h1>
        </div>
    </header>
    );
}