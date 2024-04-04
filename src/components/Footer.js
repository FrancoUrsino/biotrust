import Image from 'next/image'
import React from 'react'
import logo from '../../public/img/BioTrust_logoBlanco.png'
import linkedin from '../../public/img/linkedin.svg'
import maps from '../../public/img/maps.svg'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='grid grid-rows-2 gap-y-5 md:grid-rows-1 md:grid-cols-2 z-20 w-full text-center mx-auto bg-gradient-to-b from-[#289DAC] to-[#0E3A5D] to-80% text-white'>
      {/* SECTION 1 */}
      <div className='grid grid-rows-2 gap-y-5 lg:grid-rows-1 lg:grid-cols-2 z-20 w-11/12 text-center mx-auto'>
        <a href="/"><Image src={logo} width={230} alt='Logo blanco Biotrust' loading='lazy' className='flex mx-auto md:justify-self-start mt-12'/></a>
        <div className='flex gap-6 items-center justify-around'>
          <ul className='flex flex-col justify-start col-span-2 text-lg'>
            <li className='hover:font-semibold'><Link href="/quienes-somos">Quíenes somos</Link></li>
            <li className='hover:font-semibold'><Link href="/clientes">Clientes</Link></li>
            <li className='hover:font-semibold'><Link href="/contactanos">Contáctanos</Link></li>
          </ul>
          <ul className='flex flex-col justify-end text-lg'>
            <li className='hover:font-semibold'><Link href="/certificaciones">Certificaciones</Link></li>
            <li className='hover:font-semibold'><Link href="/servicio-tecnico">Servicio técnico</Link></li>
            <li className='hover:font-semibold'><Link href="/equipamiento">Equipamiento</Link></li>
          </ul>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className='grid grid-rows-2 gap-y-5 lg:grid-rows-1 lg:grid-cols-2 z-50 w-11/12 text-center mx-auto'>
        <div className='flex flex-col md:mb-4 lg:text-left'>
          <h3 className='font-bold mt-2 md:mt-6 mb-2'>Contacto</h3>
          <p>Asistencia técnica: <a href="mailto:info@biotrust.com.ar" target="_blank" className='text-sm md:text-base xl:text-lg hover:text-[#27B2C4]' rel="noopener noreferrer">info@biotrust.com.ar</a></p>
          <p>Asistencia comercial: -equipamiento médico, insumos: <a href="mailto:administracion@biotruts.com.ar" className='hover:text-[#27B2C4]' target="_blank" rel="noopener noreferrer">administracion@biotruts.com.ar</a></p>
          <p>Tel/Fax: <a href="tel:52738995" target="_blank" rel="noopener noreferrer" className='hover:text-[#27B2C4]'>5273 8995</a></p>
        </div>
        <div className='lg:text-left'>
          <h2 className='font-bold mt-2 md:mt-6 mb-2'>Nuestras sedes</h2>
          <address>Rodríguez Peña 4444 - Villa Lynch, San Martin - PBA</address>
          <address>Alicia Moreau de Justo 1120 Piso 3° Oficina A306 - CABA</address>
          <div className='flex my-3 justify-center lg:justify-start'>
          <Link href='https://www.linkedin.com/company/biotrust-services-technology-sa/mycompany/' target='_blank'><Image src={linkedin} width={30} loading='lazy' alt='linkedin icon'/></Link>
          <Link href='https://www.google.com/maps/place/Biotrust+Services+Technology+SA/@-34.5909802,-58.5354033,16.41z/data=!4m6!3m5!1s0x95bcb9ef34c5e79f:0xd6cee60a7c64fdca!8m2!3d-34.5908905!4d-58.5316679!16s%2Fg%2F11h40z8qbm?entry=ttu'  target='_blank'><Image src={maps} width={30} loading='lazy' alt='maps icon'/></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer