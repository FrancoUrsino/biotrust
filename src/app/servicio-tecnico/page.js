import Footer from '@/components/Footer'
import SubNav from '@/components/SubNav'
import Carousel2 from '@/components/Carousel2'
import React from 'react'
import Navbar from '@/components/Navbar'

function page() {
  return (
    <>
    <Navbar/>
      <main className=''>
        <SubNav />
        <h1 className='shadow-text text-[#002D4E] mt-28 text-center font-extrabold uppercase text-5xl md:text-6xl lg:text-8xl'>Servicio técnico</h1>
        <h3 className='text-center text-[#002D4E] mt-4 w-10/12 font-semibold mx-auto md:text-xl lg:text-2xl'>Para realizar los protocolos y procedimientos Biotrust se basa en las siguientes normas</h3>
        <section className='w-10/12 rounded-xl ml-6 bg-[#002D4E] mt-20 mb10 py-10'>
          <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-16 text-2xl lg:text-3xl'>¿Cómo lo hacemos?</h2>
          <p className='w-11/12 mx-auto py-6 text-xl text-white lg:text-2xl'>Contamos con personal altamente capacitado, ingenieros y bio ingenieros, que se encargan del relevamiento del estado general del equipamiento evaluando las necesidades de los mismos.</p>
        </section>
        <section className='w-10/12 ml-6 rounded-xl bg-[#118CDF] my-10 py-10'>
          <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-14 text-2xl lg:text-3xl'>¿Porqué es importante?</h2>
          <p className='w-11/12 mx-auto py-6 text-xl text-white lg:text-2xl'>El equipamiento médico y el capital humano son los activos más valiosos de las instituciones prestadoras de salud y si desean minimizar cualquier riesgo se ha de estar seguro del proveedor de servicio de asistencia técnica que proveerá el servicio. Los sistemas y equipamientos médicos, en su uso diario deben proporcionar alta calidad de servicios y estar disponibles en todo momento.</p>
        </section>
        <section className='w-10/12 ml-6 rounded-xl bg-[#27B2C4] my-10 py-10'>
          <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-14 text-2xl lg:text-3xl'>Servis oficial</h2>
          <Carousel2 />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page