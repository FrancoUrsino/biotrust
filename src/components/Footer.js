import React from 'react'

function Footer() {
  return (
    <footer className='grid grid-rows-2 gap-y-5 md:grid-rows-1 md:grid-cols-2 z-50 text-[#002D4E] w-11/12  mx-auto mt-6'>
      <div className='flex flex-col'>
        <p>Asistencia técnica: <a href="" target="_blank" className='text-sm md:text-base xl:text-lg' rel="noopener noreferrer">info@biotrust.com.ar</a></p>
        <p>Asistencia comercial: -equipamiento médico, insumos: <a href="" target="_blank" rel="noopener noreferrer">administracion@biotruts.com.ar</a></p>
        <p>Tel/Fax: <a href="" target="_blank" rel="noopener noreferrer">5273 8995</a></p>
      </div>
      <div>
        <h2 className='font-bold'>Nuestras sedes</h2>
        <address>Rodríguez Peña 4444 - Villa Lynch, San Martin - PBA</address>
        <address>Alicia Moreau de Justo 1120 Piso 3° Oficina A306 - CABA</address>
      </div>
    </footer>
  )
}

export default Footer