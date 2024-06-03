import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'
import nosIcon from '../../../public/img/nosIcon.png'
import Navbar from '@/components/Navbar'
import SubNav from '@/components/SubNav'

function page() {
  return (
    <>
    <Navbar/>
      <main className='w-full bg-[#f0f0f5] pt-4 pb-1 text-left'>
            <SubNav />
        <h1 className='shadow-text text-[#002D4E] mt-0 pt-44 text-center font-extrabold uppercase text-5xl md:text-6xl lg:text-8xl'>nosotros</h1>
        <section className='w-10/12 mx-auto my-28'>
          <div className='grid lg:grid-cols-2'>
            <div>
              <h2 className='text-[#002d4e] font-bold text-3xl md:text-4xl lg:text-5xl mb-10'>¿Quiénes somos?</h2>
              <p className='text-xl w-3/4 lg:w-full lg:text-2xl leading-8 lg:leading-9'>Somos <span className='font-bold'>pioneros y líderes en proveer, reparar y mantener el equipamiento médico</span> de múltiples centros de salud.<br />Nos encargamos de distribuir y poner en funcionamiento nuestros productos en centros hospitalarios, clínicas, obras sociales, entre otros.<br />Contamos con un amplio catálogo de artículos acorde a la satisfacción de las necesidades del cliente.</p>
            </div>
            <div className='flex justify-self-end 2xl:justify-self-center'>
              <Image src={nosIcon} width={500} alt='icono de equipo' className='hidden lg:flex relative -top-14' />
            </div>
          </div>
          <h2 className='text-[#002d4e] mt-14 lg:mt-0 font-bold text-3xl md:text-4xl lg:text-5xl mb-10'>¿Por qué lo hacemos?</h2>
          <p className='text-xl lg:text-2xl w-3/4 lg:w-11/12 leading-8'>Creemos que el desafío es integrar, por esto usted tiene la opción de contratar un servicio integral en la gestión del equipamiento médico. Usted podrá adquirir los productos o alquilarlos, contratar el mantenimiento del mismo, realizar la certificación que corresponde según normas vigentes y todo controlarlo a través del sistema de autogestión.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page