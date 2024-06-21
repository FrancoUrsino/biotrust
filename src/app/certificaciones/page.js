import Footer from '@/components/Footer'
import React from 'react'
import '../globals.scss'
import Image from 'next/image'
import arrow from '../../../public/img/arrow.svg'
import Navbar from '@/components/Navbar'
import SubNav from '@/components/SubNav'


function page() {
  return (
    <>
    <Navbar/>
    <main className='w-full absolute bg-[#f0f0f5]'>
    <section className='title-bg-certificaciones'>
          <h1 className='shadow-text text-[#f5f5f5] relative top-[220px] lg:top-36 2xl:top-60 left-4 lg:left-10 mt-28 font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl'>certificaciones</h1>
        </section>
      <SubNav/>
      <section>
        <section className="grid md:grid-cols-3 md:grid-rows-1 justify-center justify-items-center w-10/12 xl:w-9/12 mx-auto my-20 md:rounded-bl-3xl md:rounded-br-3xl md:rounded-tl-3xl md:rounded-tr-3xl md:shadow-2xl md:shadow-black">

          <article className='w-full h-48 object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl  bg-[#547189] group transition-all ease-in duration-500'>
            <div href='/certificaciones' className='flex flex-col justify-center items-center group-hover:-translate-y-8 duration-500'>
              <h2 className="py-2 text-2xl lg:text-2xl text-white text-center uppercase font-bold mt-36 lg:mt-32 group-hover:mt-10">seguridad eléctrica</h2>
              <Image src={arrow} width={40} alt='arrow' className='group-hover:hidden' />
              <p className='w-3/6 lg:w-5/6 text-center text-white leading-5 invisible group-hover:visible duration-100'>Norma de seguridad eléctrica <span className='font-semibold'>IEC 60601(IRAM 4220)</span>; mediciones de fugas de corriente, resistencia de protección, etc.</p>
            </div>
          </article>

          <article className='w-full h-48 object-cover flex flex-col items-center justify-center bg-[#5FAFE7] group transition-all ease-in duration-500'>
            <div href='/servicio-tecnico' className='flex flex-col justify-center items-center group-hover:-translate-y-8 duration-500'>
              <h2 className="py-2 text-2xl lg:text-2xl text-white text-center uppercase font-bold mt-36 lg:mt-32 group-hover:mt-8">performance</h2>
              <Image src={arrow} width={40} alt='arrow' className='group-hover:hidden' />
              <p className='w-3/6 lg:w-5/6 text-center text-white leading-5 invisible group-hover:visible duration-100'>Norma de performance para evaluación recurrente y evaluación post reparación de equipamiento médico <span className='font-semibold'>IEC 62353.</span></p>
            </div>
          </article>

          <article className='w-full h-48 object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-[#27B2C4] group transition-all ease-in duration-500'>
            <div href='/equipamiento' className='flex flex-col justify-center items-center group-hover:-translate-y-8 duration-500'>
              <h2 className="py-2 text-2xl lg:text-2xl text-white text-center uppercase font-bold mt-36 lg:mt-32 group-hover:mt-8">recomendaciones</h2>
              <Image src={arrow} width={40} alt='arrow' className='group-hover:hidden' />
              <p className='w-3/6 lg:w-5/6 text-center text-white leading-5 invisible group-hover:visible duration-100'><span className='font-semibold'>Recomendaciones de los fabricantes,</span> mediciones recurrentes, inspección visual detallada, condiciones ambientales para pruebas in situ.</p>
            </div>
          </article>

        </section>

      </section>
      <section className='w-10/12 mx-auto'>
        <h2 className='text-[#002D4E] font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-4'>¿Cómo lo hacemos?</h2>
        <p className='font-light lg:text-lg xl:text-2xl'><span className='font-bold'>Nuestro equipo de certificación visita el establecimiento del cliente.</span>  <br />El técnico especializado realiza el <span>control de seguridad al Equipo Médico</span> en el lugar. <br />Los datos obtenidos luego del control de seguridad de guardan mediante el Software de Gestión en la NUBE</p>
        <h6 className='mt-10 text-xl md:text-2xl lg:text-2xl xl:text-4xl text-[#002D4E] font-extrabold'>Otorgamos:</h6>
        <section className="grid md:grid-cols-3 md:grid-rows-1 justify-center gap-2 justify-items-center w-10/12 xl:w-full mx-auto my-10 md:rounded-bl-3xl md:rounded-br-3xl md:rounded-tl-3xl md:rounded-tr-3xl">

          <article className='w-full h-48 lg:h-64 object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl  bg-[#547189] group transition-all ease-in duration-500'>
            <div href='/certificaciones' className='flex flex-col justify-center items-center'>
              <p className='text-white font-semibold lg:text-xl 2xl:text-3xl'>INFORME DIGITAL</p>
            </div>
          </article>

          <article className='w-full h-48 lg:h-64 object-cover flex flex-col items-center justify-center bg-[#5FAFE7] group transition-all ease-in duration-500'>
            <div href='/servicio-tecnico' className='flex flex-col justify-center items-center text-center'>
              <p className='text-white font-semibold lg:text-xl 2xl:text-3xl px-6'>INFORME FINAL IMPRESO Y FIRMADO POE EL TÉCNICO EN EL LUGAR</p>
            </div>
          </article>

          <article className='w-full h-48 lg:h-64 object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-[#27B2C4] group transition-all ease-in duration-500'>
            <div href='/equipamiento' className='flex flex-col justify-center items-center text-center'>
              <p className='text-white font-semibold lg:text-base 2xl:text-2xl px-6'>EL CLIENTE PODRÁ CONTROLAR EL ESTADO DEL EQUIPO CON SU USUARIO Y CONTRASEÑA A TRAVÉS DEL SOFTWARE DE GESTIÓN</p>
            </div>
          </article>

        </section>
      </section>
      <section className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-10/12 mx-auto mt-10 mb-44'>
        <div className=''>
          <h2 className='text-[#002D4E] font-extrabold text-2xl md:text-3xl lg:text-3xl xl:text-4xl mt-4 mb-8'>Equipamiento de certificaciones</h2>
          <ul className='text-base lg:text-base xl:text-2xl'>
            <li className='py-1 font-light'><span className='font-semibold'>ESA612</span> Electrical Safety Analyzer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>ESA620</span> Electrical Safety Analizer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>Impulse 6000D</span> Desfribilador/trascutaneus Pacemaker Analizer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>Impulse 7000DP</span> Desfribilador/trascutaneus Pacemaker Analizer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>INCU2</span> Analizador de Incubadoras.</li>
            <li className='py-1 font-light'><span className='font-semibold'>Pro SIM 8 Vitals Signs</span> Analizador/Simulador de Signos Vitales.</li>
            <li className='py-1 font-light'><span className='font-semibold'>Pro PS420</span> Analizador/Simulador de Signos Vitales.</li>
            <li className='py-1 font-light'><span className='font-semibold'>QA-ES3</span> Electrosugery Analizer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>RF30RS</span> Electrosugery Analizer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>VT Plus HF</span> Gas Flow Analyzer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>VT900</span> Gas Flow Analyzer.</li>
            <li className='py-1 font-light'><span className='font-semibold'>X-Ray X2 Prestuges</span> Analzador de Equipos de Rayos X.</li>
          </ul>
        </div>
        <div className="align-middle">
          <div className='flex text-center items-center md:w-10/12 h-full md:justify-end lg:mx-auto  mt-12 lg:mt-16'>
            <p className="font-light text-xl md:text-2xl lg:text-xl xl:text-3xl 2xl:text-4xl text-black tracking-wider border-4 border-[#002D4E] rounded-2xl p-10 w-10/12 mx-auto">TODO NUESTRO EQUIPAMIENTO ESTA CALIBRADO Y POSEE SU RESPECTIVO CERTIFICADO EMITIDO POR LA AUTORIDAD CORRESPONDIENTE.</p>
          </div>
        </div>
      </section>
      <div className='bg-gradient-to-b from-[#289DAC] to-[#0E3A5D] to-80% text-white'>
        <Footer />
      </div>
    </main>
    </>
  )
}

export default page