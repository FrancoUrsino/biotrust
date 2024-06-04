import Form from '@/components/Form'
import Image from 'next/image'
import React from 'react'
import sobre from '../../../public/img/sobre.svg'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SubNav from '@/components/SubNav'


function page() {
  return (
    <>
      <Navbar/>
      <main className='bg-[#f5f5f5] pt-6'>
      <div className='mt-48'>
      <SubNav/>
      </div>
        <section className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center w-11/12 mx-auto pb-28'>
          <div className='mx-auto w-11/12'>
            <h2 className='text-[#002d4e] font-bold text-2xl lg:text-4xl uppercase pt-10 lg:pt-0 mt-4 lg:mt-20 mb-4'>contáctanos</h2>
            <p className='py-2 lg:py-4 text-lg lg:text-2xl font-bold'>Asistencia técnica: <a href="mailto:info@biotrust.com.ar" target="_blank" className=' font-normal hover:text-[#27B2C4]' rel="noopener noreferrer">info@biotrust.com.ar</a></p>
            <p className='py-2 lg:py-4 text-lg lg:text-2xl font-bold'>Asistencia comercial: -equipamiento médico, insumos: <a href="mailto:administracion@biotruts.com.ar" className='font-normal hover:text-[#27B2C4]' target="_blank" rel="noopener noreferrer">administracion@biotruts.com.ar</a></p>
            <p className='py-2 lg:py-4 text-lg lg:text-2xl'>Rodríguez Peña 4444 - Villa Lynch, San Martin - PBA<br />Alicia Moreau de Justo 1120 Piso 3° Oficina A306 - CABA</p>
            <p className='py-2 lg:pt-4 lg:pb-6 text-lg lg:text-2xl font-bold'>Tel/Fax: <a href="tel:52738995" target="_blank" className='font-normal hover:text-[#27b2c4]' rel="noopener noreferrer">5273 8995</a></p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.098920962982!2d-58.5316679!3d-34.5908905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9ef34c5e79f%3A0xd6cee60a7c64fdca!2sBiotrust%20Services%20Technology%20SA!5e0!3m2!1ses-419!2sar!4v1707686205689!5m2!1ses-419!2sar" width="360" height="300" className='w-full lg:h-[400px] mx-auto my-4' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <p className='lg:mt-20 text-[#002d4e] font-bold text-lg md:text-xl lg:text-2xl flex text-center justify-center items-center'><Image src={sobre} alt='icono sobre' width={40} className='mr-3 -translate-y-3 lg:-translate-y-3 md:-translate-y-0 xl:-translate-y-0' />Dejanos tu mensaje y será respondido a la brevedad</p>
            <Form />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page