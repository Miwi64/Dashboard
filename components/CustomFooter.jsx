export default function CustomFooter(){
    return(
        <footer className='bg-footerback p-8 flex flex-row gap-20 w-full'>
        <div className='flex-1'>
          <h2 className={`text-subtitle text-4xl mb-5`}>Contacto</h2>
          <address className={`text-white text-2xl`}>          
            Dirección: 123 Calle Ficticia, Ciudad Imaginaria, País Inexistente <br />
            Teléfono: +123 456 7890 <br />
            Correo Electrónico: info@sitioficticio.com 
          </address>
        </div>
        <div className='flex-1'>
          <h2 className={`text-subtitle text-4xl mb-5`}>Horario de atencion</h2>
          <address className={`text-white text-2xl`}>
            Lunes - Viernes: 9:00 AM - 6:00 PM <br />
            Sábados: 10:00 AM - 2:00 PM <br />
            Domingos: Cerrado <br />
          </address>
        </div>
      </footer>
    );
}