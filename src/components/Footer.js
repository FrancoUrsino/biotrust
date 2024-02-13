import Image from 'next/image'
import React from 'react'
import logo from '../../public/img/BioTrust_logoBlanco.png'

function Footer() {
  return (
    <footer className='grid grid-rows-2 gap-y-5 md:grid-rows-1 md:grid-cols-2 z-50 w-11/12 text-center mx-auto'>
      {/* SECTION 1 */}
      <div className='grid grid-rows-2 gap-y-5 md:grid-rows-1 md:grid-cols-2 z-50 w-11/12 text-center mx-auto'>
        <Image src={logo} width={250} alt='Logo blanco Biotrust' className='flex justify-self-center md:justify-self-start mt-8'/>
        <div className='flex gap-6 items-center justify-around'>
          <ul className='flex flex-col justify-start col-span-2'>
            <li>Quíenes somos</li>
            <li>Clientes</li>
            <li>Contáctanos</li>
          </ul>
          <ul className='flex flex-col justify-end'>
            <li>Certificaciones</li>
            <li>Servicio técnico</li>
            <li>Equipamiento</li>
          </ul>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className='grid grid-rows-2 gap-y-5 md:grid-rows-1 md:grid-cols-2 z-50 w-11/12 text-center mx-auto'>
        <div className='flex flex-col md:mb-4 lg:text-left'>
          <h3 className='font-bold mt-2 md:mt-6 mb-2'>Contacto</h3>
          <p>Asistencia técnica: <a href="mailto:info@biotrust.com.ar" target="_blank" className='text-sm md:text-base xl:text-lg hover:text-[#27B2C4]' rel="noopener noreferrer">info@biotrust.com.ar</a></p>
          <p>Asistencia comercial: -equipamiento médico, insumos: <a href="mailto:administracion@biotruts.com.ar" className=' hover:text-[#27B2C4]' target="_blank" rel="noopener noreferrer">administracion@biotruts.com.ar</a></p>
          <p>Tel/Fax: <a href="" target="_blank" rel="noopener noreferrer">5273 8995</a></p>
        </div>
        <div>
          <h2 className='font-bold mt-2 md:mt-6 mb-2'>Nuestras sedes</h2>
          <address>Rodríguez Peña 4444 - Villa Lynch, San Martin - PBA</address>
          <address>Alicia Moreau de Justo 1120 Piso 3° Oficina A306 - CABA</address>
        </div>
      </div>
    </footer>
  )
}

export default Footer