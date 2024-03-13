import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
  return (
    <>
      <main className=''>
        <h1 className='shadow-text text-[#002D4E] mt-28 text-center font-extrabold uppercase text-5xl md:text-6xl lg:text-8xl'>Servicio técnico</h1>
        <Sidebar />
        <p className='pt-48 w-10/12 mx-auto h-[65vh]'>El equipamiento médico y el capital humano son los activos más valiosos de las instituciones prestadoras de salud y si desean minimizar cualquier riesgo se ha de estar seguro del proveedor de servicio de asistencia técnica que proveerá el servicio. Los sistemas y equipamientos médicos, en su uso diario deben proporcionar alta calidad de servicios y estar disponibles en todo momento. Somos el principal proveedor de soluciones en equipamientos médicos.</p>
      </main>
      <Footer />
    </>
  )
}

export default page