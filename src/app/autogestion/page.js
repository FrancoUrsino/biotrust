'use client'
import React from 'react'
import Sidebar from '@/components/Sidebar'
import ShowMore from '@/components/ShowMore'
import autoGestion from '../../../public/img/autoGestion.svg'
import Image from 'next/image'
import Footer from '@/components/Footer'

function page() {
  return (
    <>
    <main>
      <h1 className='shadow-text text-[#002D4E] mt-28 text-center font-extrabold uppercase text-5xl md:text-6xl lg:text-8xl'>autogestión</h1>
      <h6 className='text-center text-[#002D4E] mt-10 w-10/12 mx-auto md:text-xl lg:text-2xl'>Control de Performance y Seguridad en Tecnología Sanitaria</h6>
      <Sidebar />
      <section className='w-10/12 mx-auto my-14 grid grid-cols-1 grid-rows-1 lg:grid-cols-3 justify-between justify-items-center'>
        <div className='rounded-2xl border-4 border-[#002d4e] col-span-2'>
          <p className='text-[#002d4e] md:text-lg px-10 py-10'>La plataforma de gestión <span className='font-semibold'>Software de Tecnología Sanitaria</span> (STS), permite el acceso remoto desde cualquier dispositivo que disponga acceso a internet. Con esta herramienta, se puede hacer seguimiento en tiempo real a los resultados de los controles de seguridad de cada equipo, al inventario de equipamiento, su ubicación física y disposición, una vez que los datos son relevados por los técnicos.</p>
        </div>
        <div className='justify-end'>
        <Image src={autoGestion} alt='autogestion icono' className='hidden lg:block'/>
        </div>
      </section>
      <section className='grid grid-rows-4 gap-y-10 lg:grid-cols-2 lg:grid-rows-2 lg:w-11/12 lg:mx-auto justify-items-center'>
        <div className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto bg-[#002d4e] rounded-2xl text-white">
          <p className="px-8 pt-12 md:text-lg lg:text-xl pb-5 font-semibold">Software de Tecnología Sanitaria (STS) <span className="font-light">te permite visualizar de manera, rápida, simple y efectiva el estado actual e histórico de su equipamiento.</span></p>
          <p className='px-8 pb-12 md:text-lg lg:text-xl font-semibold'>Facilitando tener el control del estado de Certificaciones y sus vencimientos como el monitoreo de las reparaciones, información de inventario y posibilitándole este acceso a cada uno de los responsables de servicios.</p>
        </div>
        <div className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto bg-[#118CDF] rounded-2xl text-white">
          <p className="px-8 pt-12 md:text-lg lg:text-xl pb-5">Toda esta información la podes consultar en cualquier momento desde tu computadora personal, con solo ingresar su clave personal.</p>
          <p className='px-8 pb-12 md:text-lg lg:text-xl'><span className="font-semibold">Todos tus equipos de Tecnología Sanitaria serán inventariados y etiquetados</span> con un código de identificación único que le permitirá una rápida lectura de la trazabilidad de su equipo.</p>
        </div>
        <div className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto bg-[#27B2C4] rounded-2xl text-white">
          <p className="px-8 pt-12 md:text-lg lg:text-2xl text-justify pb-5">A través de cualquier dispositivo móvil como un celular, podrá escanear ese código que lo llevará a nuestro software y visualizar el historial de certificaciones y entradas al taller.</p>
        </div>
        <div className="w-10/12 md:w-8/12 lg:w-10/12 mx-auto bg-[#76B8DA] rounded-2xl text-white">
          <p className="px-8 pt-12 md:text-lg lg:text-xl pb-12">Las tomas de inventarios son “barridas” in situ que permiten: <br/> -El contacto físico con el equipo y evaluación de su estado general.<br/> -Identificación del equipamiento, relevamiento través de todos sus parámetros, una etiqueta QR y un Chip de RFID (IDENTIFICACION POR RADIO Frecuencia) que permite visualizar en línea el movimiento y ubicación de todo el equipamiento para su control y seguridad.<br/> -Visualización en línea por tipo de equipos para gestionar una movilidad interna y una eficiente gestión del equipamiento.</p>
        </div>
      </section>
      <section className='my-20'>
        <article className='w-10/12 mx-auto rounded-3xl  bg-[#002D4E] mt-20 mb10 py-10 text-center transition-all duration-300 ease-in-out'>
          <ShowMore
            text={'¿Porqué realizar un control de Seguridad y Performance de Tecnología Sanitaria?'}
            moreText={'Todas las normas de calidad indican la necesidad de efectuar controles de seguridad en los equipos, ya que esta supervisión periódica permite adelantarse a la ocurrencia de fallas, previniendo errores de funcionamiento y averías, asegurando un eficiente rendimiento de los equipos y garantizando su seguridad. Así mismo, los entes reguladores y los ministerios de Salud, nacionales y provinciales, en concordancia con las normas internacionales, exigen la aplicación de las normas vigentes, para cumplir con las leyes y resoluciones que regulan el equipamiento médico.'}
          />
        </article>
        <article className='w-10/12 rounded-3xl mx-auto bg-[#118CDF] mt-20 mb10 py-10 text-center'>
          <ShowMore
            text={'Tener esta información y controles permite'}
            moreText={'• Desarrollar contratos de Service eficientes.'}
            moreText2={'• Detectar fallas preventivamente minimizando el impacto y costo correctivo.'}
            moreText3={'• Optimizar costos en reparaciones.'}
          />
        </article>
        <article className='w-10/12 rounded-3xl mx-auto bg-[#27B2C4] mt-20 mb10 py-10 text-center'>
          {/* <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-16 text-2xl lg:text-3xl'>Tener esta información y controles permite</h2> */}
          <ShowMore
            text={'¿Qué es??'}
            moreText={'Es la aplicación de protocolos y procedimientos, regulados según las normas correspondientes, sobre un equipo de uso médico con el propósito de determinar la capacidad de respuesta operativa correcta, permitiendo detectar las fallas que puedan implicar un riesgo para el paciente o el usuario.'}
          />
        </article>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default page