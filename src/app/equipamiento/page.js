'use client'
import Footer from '@/components/Footer'
import SubNav from '@/components/SubNav'
import React from 'react'
import Image from 'next/image'
import medIcon from '../../../public/img/medIcon.svg'
import healIcon from '../../../public/img/healIcon.svg'
import esIcon from '../../../public/img/esIcon.svg'
import emIcon from '../../../public/img/emIcon.svg'
import '../globals.scss'
import Neoslider from '@/components/Slider/Neoslider'
import Slider from '@/components/Slider/Slider'
import Cislider from '@/components/Slider/Cislider'
import Emslider from '@/components/Slider/Emslider'
import Navbar from '@/components/Navbar'


function page() {
  return (
    <>
    <Navbar/>
      <main>
      <div className='mt-48'>
      <SubNav/>
      </div>
        <h1 className='shadow-text text-[#002D4E] mt-28 text-center font-extrabold uppercase text-5xl md:text-6xl lg:text-8xl'>Equipamiento</h1>
        <h2 className='text-[#002D4E] mt-4 mb-14 text-center lg:text-2xl'>Dentro de nuestra línea de productos ofrecemos</h2>
        <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 justify-center justify-items-center top-[250px] md:top-[500px] lg:top-[300px] w-10/12 xl:w-9/12 mx-auto md:rounded-bl-3xl md:rounded-br-3xl md:rounded-tl-3xl md:rounded-tr-3xl md:shadow-2xl md:shadow-black">
          {/* Neonatología */}

          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl  bg-[#002D4E] group transition-all ease-in duration-500'>
            <a href='#neonatologia' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <Image src={medIcon} width={80} alt='icono de certificado' loading='lazy' className='lg:w-56' />
              <p className="py-2 text-sm lg:text-2xl text-white text-center uppercase font-bold">Neonatología</p>
            </a>
          </article>

          {/* Cuidados Intensivos */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center bg-[#118CDF] group transition-all ease-in duration-500'>
            <a href='#cuidadosIntensivos' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <Image src={healIcon} width={80} alt='icono de servicio tecnico' loading='lazy' className=' md:-translate-y-3 lg:w-64' />
              <p className="py-1 mt-0 text-sm lg:text-2xl text-white text-center uppercase font-bold lg:-translate-y-4">Cuidados Intensivos</p>
            </a>
          </article>
          {/* Quirófanos */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center bg-[#27B2C4] group transition-all ease-in duration-500'>
            <a href='#quirofanos' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <Image src={esIcon} width={80} alt='icono de servicio tecnico' loading='lazy' className='md:-translate-y-3 lg:w-56' />
              <p className="py-1 mt-0 text-sm lg:text-2xl text-white text-center uppercase font-bold lg:-translate-y-2">Quirófanos</p>
            </a>
          </article>

          {/* Emergencias */}

          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-[#1C7189] group transition-all ease-in duration-500'>
            <a href='#emergencias' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <Image src={emIcon} width={80} alt='icono de equipamientos' loading='lazy' className='-translate-y-2 lg:w-56' />
              <p className="py-2 text-sm lg:text-2xl text-white text-center uppercase font-bold -translate-y-2">Emergencias</p>
            </a>
          </article>

        </section>

        <section className='mt-20 w-11/12 mx-auto'>   
          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#118CDF] font-extrabold uppercase' id='neonatologia'>Neonatología</h3>
            <Neoslider/> 
          
          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#118CDF] font-extrabold' id='cuidadosIntensivos'>Cuidados Intensivos</h3>
            <Cislider/>

          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#118CDF] font-extrabold' id='quirofanos'>Quirófanos</h3>
            <Slider />


          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#118CDF] font-extrabold' id='emergencias'>Emergencias</h3>
            <Emslider/>
        </section>
        <SubNav />
      </main>
      <Footer />
    </>
  )
}

export default page