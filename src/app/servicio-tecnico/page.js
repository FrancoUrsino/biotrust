import Footer from '@/components/Footer'
import Carousel2 from '@/components/Carousel2'
import React from 'react'
import Navbar from '@/components/Navbar'
import SubNav from '@/components/SubNav'
import "../globals.scss";

function page() {
  return (
    <>
      <Navbar />
      <main className=''>
        <section className='title-bg-service'>
          <h1 className='shadow-text text-[#f5f5f5] relative top-[280px] md:top-[260px] lg:top-60 left-4 lg:left-10 mt-28 font-extrabold uppercase text-4xl md:text-6xl lg:text-8xl'>servicio técnico</h1>
        </section>
          <SubNav />
          <section className='w-full mx-auto my-10'>
          <iframe width="300" height="215" src="https://www.youtube.com/embed/oz16bKZZAB0?si=FUA00yi3wp5CMgQr" title="YouTube video player" className='mx-auto lg:w-[800px] lg:h-[615px]' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen loading='lazy'></iframe>
          </section>
        <section className='w-11/12 mx-auto grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center gap-1 my-10 rounded-3xl'>
          <article className='w-full mx-auto bg-[#002D4EA1] py-10 lg:rounded-tl-2xl lg:rounded-bl-2xl'>
            <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-16 text-2xl lg:text-3xl'>¿Cómo lo hacemos?</h2>
            <p className='w-11/12 mx-auto py-6 text-xl text-white lg:text-2xl'>Contamos con personal altamente capacitado, ingenieros y bio ingenieros, que se encargan del relevamiento del estado general del equipamiento evaluando las necesidades de los mismos.</p>
          </article>
          <article className='w-full mx-auto bg-[#118CDF99] py-10 lg:rounded-tr-2xl lg:rounded-br-2xl'>
            <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-14 text-2xl lg:text-3xl'>¿Porqué es importante?</h2>
            <p className='w-11/12 mx-auto py-6 text-xl text-white lg:text-2xl'>El equipamiento médico y el capital humano son los activos más valiosos de las instituciones prestadoras de salud y si desean minimizar cualquier riesgo se ha de estar seguro del proveedor de servicio de asistencia técnica que proveerá el servicio. Los sistemas y equipamientos médicos, en su uso diario deben proporcionar alta calidad de servicios y estar disponibles en todo momento.</p>
          </article>
        </section>
        <section className='w-11/12 mx-auto rounded-xl bg-[#27B2C4A8] my-10 py-10'>
          <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-14 text-2xl lg:text-3xl'>Service oficial</h2>
          <Carousel2 />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page