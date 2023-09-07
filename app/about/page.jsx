/**
 * React page for About Page
 * @returns {JSX.Element} - A JSX element representing the About Page.
 */
import ContentTile from '@/components/ContentTile';
import CustomFooter from '@/components/CustomFooter';
import ParallaxHeader from '@/components/ParallaxHeader';
import SimpleSection from '@/components/SimpleSection';

function About(){
  /**
   * Sections content
   */
  const mission = `Nuestra misión es transformar ideas en realidades digitales a 
                  través de soluciones de software innovadoras. Estamos comprometidos con la excelencia
                   en el desarrollo de aplicaciones y sistemas que impulsen el progreso tecnológico y mejoren
                    la vida de las personas y las empresas en todo el mundo.`;
  const collab = `Si compartes nuestra pasión y te gustaría contribuir, ¡nos encantaría saber de ti! 
                  Visita nuestra página para obtener más información sobre cómo puedes involucrarte.`;
  const dividerStyle = 'w-[45%] m-auto border-subtitle';
  /**
   * Section tiles data
   */
  const services = [
    {
      title: 'Desarrollo de Aplicaciones Móviles',
      image: '/images/mobile.webp',
      alt: 'app-movil',
      content: `Transformamos tus ideas en aplicaciones móviles atractivas y funcionales. 
      Creamos soluciones que brindan experiencias de usuario excepcionales y cumplen con tus objetivos.`
    },
    {
      title: 'Desarrollo Web Personalizado para ti',
      image: '/images/web.webp',
      alt: 'app-web',
      content: `Desde sitios web informativos hasta plataformas de comercio electrónico, creamos sitios web 
      personalizados que se adaptan a las necesidades únicas de tu negocio. Nuestro enfoque en el diseño intuitivo y 
      el rendimiento garantiza que tus visitantes tengan una experiencia web excepcional.`
    },
    {
      title: 'Desarrollo de Software Empresarial',
      image: '/images/bussiness.webp',
      alt: 'empresarial',
      content: `Optimiza tus operaciones comerciales con software personalizado. Creamos soluciones de 
      software empresarial que automatizan procesos, mejoran la eficiencia y permiten un mejor control de los datos.`
    }
  ]
  return(
  <div className="bg-back h-full w-full">
    {/**Header */}
      <ParallaxHeader title={'Acerca de'} image={'/images/banner.webp'}/>
    {/**Mission section */}
      <SimpleSection title={'Nuestra Misión'} content={mission}/>
    {/**Divider */}
      <hr className={dividerStyle}/>
      <section className= 'p-10 text-center'>
    {/**Services section */}
      <h2 className={`text-subtitle text-5xl mb-8`}>Lo que ofrecemos</h2>
        <div className='lg:flex flex-row gap-8 flex-wrap'>
          {services.map((tile, index)=>(<ContentTile key={index} title={tile.title} image={tile.image} content={tile.content} alt={tile.alt}/>))}
        </div>
      </section>
      {/**Divider */}
      <hr className={dividerStyle}/>
    {/**Collab section */}
      <SimpleSection title={'Colabora con nosotros'} content={collab}/>
    {/**Adding a Footer */}
      <CustomFooter/>
  </div>);
}
export default About;