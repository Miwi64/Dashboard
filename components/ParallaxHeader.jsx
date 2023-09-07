export default function ParallaxHeader({image, title}){
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