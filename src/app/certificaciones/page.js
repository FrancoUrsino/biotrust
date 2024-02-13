import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import '../globals.scss'

function page() {
  return (
    <main className='w-full absolute bg-[#f0f0f5]'>
      <section>
        <h1 className='shadow-text text-[#002D4E] mt-28 text-center font-extrabold uppercase text-5xl md:text-6xl lg:text-8xl'>certificaciones</h1>
        <h6 className='text-center text-[#002D4E] md:text-xl lg:text-2xl'>Biotrust se basa en las siguientes normas:</h6>
        <Sidebar />
        <div className='grid grid-cols-1 grid-rows-3 gap-5 lg:grid-rows-1 lg:grid-cols-3 w-10/12 lg:w-9/12 2xl:w-7/12 mx-auto justify-center items-center justify-items-center my-20'>
          <article className='w-[270px] md:w-[280px] lg:w-[270px] xl:w-[320px] 2xl:w-[400px] h-[270px] md:h-[300px] xl:h-[320px] 2xl:h-[400px] bg-[#F0F0F5] border-[#27B2C4] border-4 rounded-xl shadow-xl flex flex-col 2xl:justify-center'>
            <h2 className='w-10/12 lg:w-9/12 mx-auto mt-14 2xl:mt-4 text-center text-xl 2xl:text-3xl font-semibold'>Norma de Seguridad eléctrica IEC 60601(IRAM 4220):</h2>
            <p className='w-10/12 lg:w-9/12 mx-auto text-center text-lg 2xl:text-3xl font-light'>mediciones de fugas de corriente, resistencia de protección, etc.</p>
          </article>
          <article className='w-[270px] md:w-[280px] lg:w-[270px] xl:w-[320px] 2xl:w-[400px] h-[270px] md:h-[300px] xl:h-[320px] 2xl:h-[400px] bg-[#F0F0F5] border-[#27B2C4] border-4 rounded-xl shadow-xl flex flex-col 2xl:justify-center'>
            <h2 className='w-10/12 lg:w-9/12 mx-auto mt-14 2xl:mt-0 text-center text-xl 2xl:text-3xl font-semibold'>Norma de performance para evaluación post reparación de equipamiento médico IEC 62.353.</h2>
          </article>
          <article className='w-[270px] md:w-[280px] lg:w-[270px] xl:w-[320px] 2xl:w-[400px] h-[270px] md:h-[300px] xl:h-[320px] 2xl:h-[400px] bg-[#F0F0F5] border-[#27B2C4] border-4 rounded-xl shadow-xl flex flex-col 2xl:justify-center'>
            <h2 className='w-11/12 lg:w-9/12 mx-auto mt-14 2xl:mt-1 text-center text-xl 2xl:text-3xl font-semibold'>Recomendaciones de los fabricantes,<span className='font-normal text-lg 2xl:text-2xl'>mediciones recurrentes, Inspección visual detallada, condiciones ambientales para pruebas in situ.</span></h2>
          </article>
        </div>
      </section>
      <section className='w-10/12 mx-auto'>
        <h2 className='text-[#118CDF] font-extrabold text-2xl md:text-3xl lg:text-6xl mb-4'>¿Cómo lo hacemos?</h2>
        <p className='font-light lg:text-2xl'>Nuestro equipo de certificación visita el establecimiento del cliente. <br />El técnico especializado realiza el <span>control de seguridad al Equipo Médico</span> en el lugar. <br />Los datos obtenidos luego del control de seguridad de guardan mediante el Software de Gestión en la NUBE</p>
        <h6 className='mt-10 font-light lg:text-2xl'>Otorgamos:</h6>
        <ul className='list-disc font-light lg:text-2xl mb-12'>
          <li className='ml-5 lg:text-2xl'>Informe digital.</li>
          <li className='ml-5 lg:text-2xl'>Informe final impreso y firmado por el técnico en el lugar.</li>
        </ul>
        <p className='font-extrabold lg:text-2xl my-4'>El cliente podrá controlar el estado del equipo con su usuario y contraseña a través del Software de Gestión.</p>
      </section>
        <section className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-10/12 mx-auto mt-10 mb-64'>
        <div>
        <h2 className='text-[#118CDF] font-extrabold text-2xl md:text-3xl lg:text-5xl mt-4 mb-8'>¿Qué equipamiento utilizamos?</h2>
        <ul className='lg:text-2xl'>
          <li className='py-1 ml-5 font-light'>Analizador Desfibriladores/Marcapasos Impulse 6000D/7000DP.</li>
          <li className='py-1 ml-5 font-light'>Analizador de Electrobisturí RF303RS.</li>
          <li className='py-1 ml-5 font-light'>Analizador de Flujos/Respiradores VT PLUS HP con pulmón artificial.</li>
          <li className='py-1 ml-5 font-light'>Analizador de Flujos/Respiradores VT MOBILE.</li>
          <li className='py-1 ml-5 font-light'>Simulador de Presión Sanguínea No invasiva BP Pump 2.</li>
          <li className='py-1 ml-5 font-light'>Simulador de Paciente PS420.</li>
          <li className='py-1 ml-5 font-light'>Simulador de SPO2 Index 2.</li>
          <li className='py-1 ml-5 font-light'>Analizador de Seguridad Eléctrica ESA620/612.</li>
          <li className='py-1 ml-5 font-light'>Analizador de incubadoras INCU.</li>
          <li className='py-1 ml-5 font-light'>Tacómetro Digital Vamos 31.</li>
          <li className='py-1 ml-5 font-light'>RaySafe X2 Survey.</li>
        </ul>
        </div>
        <div className='flex text-center items-center md:w-10/12 md:justify-end lg:mx-auto border-4 border-[#27B2C4] rounded-2xl mt-12 lg:mt-28'>
          <p className="font-bold text-xl md:text-2xl xl:text-4xl text-[#27B2C4] tracking-wider w-10/12 mx-auto">TODO NUESTRO EQUIPAMIENTO ESTA CALIBRADO Y POSEE SU RESPECTIVO CERTIFICADO EMITIDO POR LA AUTORIDAD CORRESPONDIENTE.</p>
        </div>
        </section>
      <div className='bg-gradient-to-b from-[#289DAC] to-[#0E3A5D] to-80% text-white'>
        <Footer/>
      </div>
    </main>
  )
}

export default page