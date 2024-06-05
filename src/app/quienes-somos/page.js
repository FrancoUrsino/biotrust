import Footer from '@/components/Footer'
import React from 'react'
import Navbar from '@/components/Navbar'
import SubNav from '@/components/SubNav'
import CarouselNosotros from '@/components/CarouselNosotros'

function page() {
  return (
    <>
      <Navbar />
      <main className='w-full bg-[#f0f0f5] pt-4 pb-1 text-left overflow-x-hidden'>
        <section className='title-bg-nosotros'>
          <h1 className='shadow-text text-[#f5f5f5] relative top-[200px] md:top-[190px] 2xl:top-64 left-4 lg:left-10 mt-28 font-extrabold uppercase text-3xl md:text-4xl lg:text-6xl'>nosotros</h1>
        </section>
        <SubNav />
        <section className='w-10/12 mx-auto my-10'>
          <div>
            <h2 className='text-[#002d4e] font-bold text-3xl md:text-4xl lg:text-5xl mb-10 uppercase'>somos</h2>
            <p className='text-xl w-3/4 lg:w-full lg:text-2xl leading-8 lg:leading-9'>Líderes, pioneros en gestionar, proveer y mantener el equipamiento médico. Décadas en el mercado de la salud, inspiran nuestro desarrollo constante como partners fundamentales en el desarrollo de herramientas para el éxito y la eficiencia de la gestión</p>
          </div>
          <h2 className='text-[#002d4e] mt-14 lg:mt-10 font-bold text-3xl md:text-4xl lg:text-5xl mb-10 uppercase'>hacemos</h2>
          <p className='text-xl lg:text-2xl w-3/4 lg:w-11/12 leading-8'>Del desafío de permanecer y crecer en un rubro tan vertiginoso como el de salud, la fuerza que nos empuja a desarrollarnos como proveedores de múltiples marcas, técnicos en Mantenimiento y reparación, Gestores especializados en el seguimiento e implementación de las normas vigentes locales e internacionales y facilitadores de las herramientas para acompañar a nuestros clientes.</p>
        </section>
      <CarouselNosotros/>
      <section className='w-10/12 mx-auto my-10'>
      <h2 className='text-[#002d4e] text-lg lg:text-2xl 2xl:text-4xl font-extrabold'>Nuestras oficinas</h2>
      <p>Rodríguez Peña 4444 - Villa Lynch, San Martin - PBA </p>
      <p>Alicia Moreau de Justo 1120 Piso 3° Oficina A306 – CABA</p>
      </section>
      </main>
      <Footer />
    </>
  )
}

export default page