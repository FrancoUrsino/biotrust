'use client'
import React from 'react'
import ShowMore from '@/components/ShowMore'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SubNav from '@/components/SubNav'
import app1 from '../../../public/img/app1.png'
import app2 from '../../../public/img/app2.png'
import app3 from '../../../public/img/app3.png'
import "../globals.scss";
import Image from 'next/image'

function page() {
  return (
    <>
      <Navbar />
      <main>
        <section className='title-bg-app'>
          <h1 className='shadow-text text-[#f5f5f5] relative top-[220px] lg:top-36 2xl:top-60 left-4 lg:left-10 mt-28 font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl'>nuestra app</h1>
        </section>
        <SubNav />
        <section className='w-11/12 mx-auto my-14 grid grid-cols-1 grid-rows-1 justify-between justify-items-center'>
          <div className='rounded-2xl border-4 border-[#002d4e] col-span-2'>
            <p className='text-[#002d4e] md:text-lg px-10 py-10'>La plataforma de gestión <span className='font-semibold'>Software de Tecnología Sanitaria</span> (STS), permite el acceso remoto desde cualquier dispositivo que disponga acceso a internet. <br></br> Con esta herramienta, se puede hacer seguimiento en tiempo real a los resultados de los controles de seguridad de cada equipo, al inventario de equipamiento, su ubicación física y disposición, una vez que los datos son relevados por los técnicos.</p>
          </div>
        </section>
        <section className="grid md:grid-cols-3 md:grid-rows-1 gap-2 justify-center justify-items-center w-11/12 lg:10/12 mx-auto md:rounded-bl-2xl md:rounded-br-2xl md:rounded-tl-2xl md:rounded-tr-2xl mt-20">
          {/* CERTIFICADOS */}

          <article className='w-full h-60 md:h-[350px] lg:h-[400px] object-cover flex flex-col items-center justify-center rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl  bg-[#002D4EA1] group transition-all ease-in duration-500'>
            <p className="px-8 text-white pt-12 md:text-sm lg:text-base pb-5 font-semibold">Software de Tecnología Sanitaria (STS) <span className="font-light">te permite visualizar de manera, rápida, simple y efectiva el estado actual e histórico de su equipamiento.</span></p>
            <p className='px-8 text-white pb-12 md:text-sm lg:text-base font-semibold'>Facilitando tener el control del estado de Certificaciones y sus vencimientos como el monitoreo de las reparaciones, información de inventario y posibilitándole este acceso a cada uno de los responsables de servicios.</p>
          </article>

          {/* SERVICIO TECNICO */}
          <article className='w-full h-60 md:h-[350px] lg:h-[400px] object-cover flex flex-col items-center justify-center bg-[#118CDF99] group transition-all ease-in duration-500'>
            <p className="px-8 text-white pt-12 md:text-sm lg:text-lg pb-5">Toda esta información la podes consultar en cualquier momento desde tu computadora personal, con solo ingresar su clave personal.</p>
            <p className='px-8 text-white pb-12 md:text-sm lg:text-base'><span className="font-semibold">Todos tus equipos de Tecnología Sanitaria serán inventariados y etiquetados</span> con un código de identificación único que le permitirá una rápida lectura de la trazabilidad de su equipo.</p>
          </article>

          {/* EQUIPAMIENTO */}

          <article className='w-full h-60 md:h-[350px] lg:h-[400px] object-cover flex flex-col items-center justify-center rounded-b-2xl md:rounded-b-none md:rounded-r-2xl bg-[#27B2C4A8] group transition-all ease-in duration-500'>
            <p className="px-8 text-white pt-12 md:text-base lg:text-xl pb-5">A través de cualquier dispositivo móvil como un celular, podrá escanear ese código que lo llevará a nuestro software y visualizar el historial de certificaciones y entradas al taller.</p>
          </article>

        </section>
        <section className='grid md:grid-cols-3 md:grid-rows-1 gap-2 justify-center justify-items-center w-11/12 mx-auto my-14'>
          <article>
            <Image src={app1} alt='paso 1' loading='lazy' />
          </article>
          <article>
          <Image src={app2} alt='paso 2' loading='lazy' />
          </article>
          <article>
          <Image src={app3} alt='paso 3' loading='lazy' />
          </article>
        </section>

        <section className='mt-20 mb-10 w-11/12 mx-auto'>
          <h2 className='text-[#002d4e] font-semibold text-2xl lg:text-3xl pb-6'>¿Cómo funciona?</h2>
          <p className='pb-4'>Las tomas de inventarios son "barridas" in situ que permiten:</p>
          <ul className='list-disc pl-6'>
            <li className='pb-1'>El contaco físico con el equipo y evaluación de su estado general.</li>
            <li className='pb-1'>Identificación del equipamiento, relevamiento a través de todos sus párametros, una <span className='font-semibold'>etiqueta QR</span> y hasta <span className='font-semibold'>Chip de RFID (IDENTIFICACIÓN POR RADIO Frecuencia)</span> que permite visualizar en línea el movimiento y ubicación de todo el equipamiento para su control y seguridad.</li>
            <li className='pb-1'>Visualización en línea por tipo de equipos para gestionar una movilidad interna y una eficiente gestión del equipamiento.</li>
          </ul>
          <article className='w-10/12 mx-auto rounded-3xl  bg-[#002D4E] mt-10 mb-4 pt-10 pb-6 text-center transition-all duration-300 ease-in-out'>
            <ShowMore
              text={'¿Porqué realizar un control de Seguridad y Performance de Tecnología Sanitaria?'}
              moreText={'Todas las normas de calidad indican la necesidad de efectuar controles de seguridad en los equipos, ya que esta supervisión periódica permite adelantarse a la ocurrencia de fallas, previniendo errores de funcionamiento y averías, asegurando un eficiente rendimiento de los equipos y garantizando su seguridad. Así mismo, los entes reguladores y los ministerios de Salud, nacionales y provinciales, en concordancia con las normas internacionales, exigen la aplicación de las normas vigentes, para cumplir con las leyes y resoluciones que regulan el equipamiento médico.'}
            />
          </article>
          <article className='w-10/12 rounded-3xl mx-auto bg-[#118CDF] mt-10 mb-4 pt-10 pb-6 text-center'>
            <ShowMore
              text={'Tener esta información y controles permite'}
              moreText={'• Desarrollar contratos de Service eficientes.'}
              moreText2={'• Detectar fallas preventivamente minimizando el impacto y costo correctivo.'}
              moreText3={'• Optimizar costos en reparaciones.'}
            />
          </article>
          <article className='w-10/12 rounded-3xl mx-auto bg-[#27B2C4] mt-10 mb-4 pt-10 pb-6 text-center'>
            {/* <h2 className='font-semibold text-white pl-5 py-3 md:pl-8 lg:pl-11 xl:pl-16 text-2xl lg:text-3xl'>Tener esta información y controles permite</h2> */}
            <ShowMore
              text={'¿Qué es?'}
              moreText={'Es la aplicación de protocolos y procedimientos, regulados según las normas correspondientes, sobre un equipo de uso médico con el propósito de determinar la capacidad de respuesta operativa correcta, permitiendo detectar las fallas que puedan implicar un riesgo para el paciente o el usuario.'}
            />
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page