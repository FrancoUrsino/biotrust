import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import '../globals.scss'
import Image from 'next/image'
import Link from 'next/link'
import notes from '../../../public/img/notes.svg'
import person from '../../../public/img/person.svg'
import computer from '../../../public/img/computer.svg'
import arrow from '../../../public/img/arrow.svg'
import serCom from '../../../public/img/serviceComputer.svg'

function page() {
  return (
    <main className='w-full absolute bg-[#f0f0f5]'>
      <section>
        <h1 className='shadow-text text-[#002D4E] mt-28 text-center font-extrabold uppercase text-4xl md:text-6xl lg:text-8xl'>certificaciones</h1>
        <h6 className='text-center text-[#002D4E] mt-10 w-10/12 mx-auto md:text-xl lg:text-2xl'>Para realizar los protocolos y procedimientos Biotrust se basa en las siguientes normas</h6>
        <Sidebar />
        <section className="grid md:grid-cols-3 md:grid-rows-1 justify-center justify-items-center w-10/12 xl:w-9/12 mx-auto my-40 md:rounded-bl-3xl md:rounded-br-3xl md:rounded-tl-3xl md:rounded-tr-3xl md:shadow-2xl md:shadow-black">

          <article className='w-full h-48 object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl  bg-[#002D4E] group transition-all ease-in duration-500'>
            <div href='/certificaciones' className='flex flex-col justify-center items-center group-hover:-translate-y-8 duration-500'>
              <h2 className="py-2 text-2xl lg:text-2xl text-white text-center uppercase font-bold mt-36 lg:mt-32 group-hover:mt-10">seguridad eléctrica</h2>
              <Image src={arrow} width={40} alt='arrow' className='group-hover:hidden' />
              <p className='w-3/6 lg:w-5/6 text-center text-white leading-5 invisible group-hover:visible duration-100'>Norma de seguridad eléctrica <span className='font-semibold'>IEC 60601(IRAM 4220)</span>; mediciones de fugas de corriente, resistencia de protección, etc.</p>
            </div>
          </article>

          <article className='w-full h-48 object-cover flex flex-col items-center justify-center bg-[#118CDF] group transition-all ease-in duration-500'>
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
        <h2 className='text-[#118CDF] font-extrabold text-2xl md:text-3xl lg:text-6xl mb-4'>¿Cómo lo hacemos?</h2>
        <p className='font-light lg:text-2xl'>Nuestro equipo de certificación visita el establecimiento del cliente. <br />El técnico especializado realiza el <span>control de seguridad al Equipo Médico</span> en el lugar. <br />Los datos obtenidos luego del control de seguridad de guardan mediante el Software de Gestión en la NUBE</p>
        <h6 className='mt-10 text-xl md:text-2xl lg:text-4xl text-[#118CDF] font-extrabold'>Otorgamos:</h6>
        <div className='grid grid-rows-3 grid-cols-1 xl:grid-rows-1 xl:grid-cols-3 justify-center w-10/12 mx-auto my-20 gap-5 justify-items-center'>
          <article className=' border-4 rounded-3xl border-[#002d4e] w-72 h-[350px] lg:w-80 lg:h-96 flex flex-col items-center text-center group transition-all ease-in duration-500'>
            <Image src={notes} width={120} alt='notes' className='mt-10 md:w-36 xl:w-44 group-hover:translate-y-8 group-hover:scale-125 duration-500' />
            <p className='text-[#002d4e] text-lg mt-4 font-semibold group-hover:translate-y-8 duration-200 lg:group-hover:scale-75'>informe digital</p>
          </article>
          <article className=' border-4 rounded-3xl border-[#002d4e] w-72 h-[350px] lg:w-80 lg:h-96 flex flex-col items-center text-center group transition-all ease-in duration-500'>
            <Image src={person} width={120} alt='person' className='mt-10 md:w-36 xl:w-44 group-hover:translate-y-8 group-hover:scale-125 duration-500' />
            <p className='text-[#002d4e] text-lg mt-4 font-semibold w-11/12 group-hover:translate-y-8 duration-200 lg:group-hover:scale-75'>Informe final impreso y firmado por el técnico en el lugar</p>
          </article>
          <article className=' border-4 rounded-3xl border-[#002d4e] w-72 h-[350px] lg:w-80 lg:h-96 flex flex-col items-center text-center group transition-all ease-in duration-500'>
            <Image src={computer} width={120} alt='computer' className='mt-10 md:w-36 xl:w-44 group-hover:translate-y-8 group-hover:scale-125 duration-500' />
            <p className='text-[#002d4e] text-lg mt-4 font-semibold w-11/12 group-hover:translate-y-8 duration-200 lg:group-hover:scale-75'>El cliente podrá controlar el estado del equipo con su usuario y contraseña a través del software de gestión</p>
          </article>

        </div>

        <p className='font-extrabold lg:text-2xl my-4'>El cliente podrá controlar el estado del equipo con su usuario y contraseña a través del Software de Gestión.</p>
      </section>
      <section className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-10/12 mx-auto mt-10 mb-44'>
        <div className=''>
          <h2 className='text-[#118CDF] font-extrabold text-2xl md:text-3xl lg:text-4xl mt-4 mb-10'>Equipamiento de certificaciones</h2>
          <ul className='text-base lg:text-2xl'>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>ESA612</span> Electrical Safety Analyzer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>ESA620</span> Electrical Safety Analizer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>Impulse 6000D</span> Desfribilador/trascutaneus Pacemaker Analizer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>Impulse 7000DP</span> Desfribilador/trascutaneus Pacemaker Analizer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>INCU2</span> Analizador de Incubadoras.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>Pro SIM 8 Vitals Signs</span> Analizador/Simulador de Signos Vitales.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>Pro PS420</span> Analizador/Simulador de Signos Vitales.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>QA-ES3</span> Electrosugery Analizer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>RF30RS</span> Electrosugery Analizer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>VT Plus HF</span> Gas Flow Analyzer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>VT900</span> Gas Flow Analyzer.</li>
            <li className='py-1 ml-5 font-light'><span className='font-semibold'>X-Ray X2 Prestuges</span> Analzador de Equipos de Rayos X.</li>
          </ul>
        </div>
        <div className="align-middle">
          <div className='flex text-center items-center md:w-10/12 h-full md:justify-end lg:mx-auto  mt-12 lg:mt-16'>
            <p className="font-light text-xl md:text-2xl xl:text-4xl text-[#27B2C4] tracking-wider border-4 border-[#27B2C4] rounded-2xl p-10 w-10/12 mx-auto">TODO NUESTRO EQUIPAMIENTO ESTA CALIBRADO Y POSEE SU RESPECTIVO CERTIFICADO EMITIDO POR LA AUTORIDAD CORRESPONDIENTE.</p>
          </div>
          {/* <div className='w-full md:w-10/12 lg:mx-auto '>
            <Link href='/autogestion' className='flex w-full relative rounded-2xl pl-4 py-5 bg-[#002D4E] top-44 lg:top-20'>
              <Image src={serCom} alt='service computer logo'/>
              <p className='text-white pl-20 text-2xl lg:text-3xl py-5'>Sistema de autogestión</p>
            </Link>
          </div> */}
        </div>
      </section>
      <div className='bg-gradient-to-b from-[#289DAC] to-[#0E3A5D] to-80% text-white'>
        <Footer />
      </div>
    </main>
  )
}

export default page