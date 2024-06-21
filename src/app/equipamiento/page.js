'use client'
import Footer from '@/components/Footer'
import SubNav from '@/components/SubNav'
import React from 'react'
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
      <section className='title-bg-equip'>
          <h1 className='shadow-text text-[#f5f5f5] relative top-[220px] lg:top-36 2xl:top-60 left-4 lg:left-10 mt-28 font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl'>Equipamiento</h1>
        </section>
      <SubNav/>
        <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 justify-center justify-items-center top-[250px] md:top-[500px] mt-10 lg:top-[300px] w-10/12 xl:w-9/12 mx-auto md:rounded-bl-3xl md:rounded-br-3xl md:rounded-tl-3xl md:rounded-tr-3xl md:shadow-2xl md:shadow-black">
          {/* Neonatología */}

          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl  bg-[#547189] group transition-all ease-in duration-500'>
            <a href='#neonatologia' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <p className="py-2 text-sm lg:text-2xl text-white text-center uppercase font-bold">Neonatología</p>
            </a>
          </article>

          {/* Cuidados Intensivos */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center bg-[#5FAFE7] group transition-all ease-in duration-500'>
            <a href='#cuidadosIntensivos' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <p className="py-1 mt-0 text-sm lg:text-xl text-white text-center uppercase font-bold ">Cuidados Intensivos</p>
            </a>
          </article>
          {/* Quirófanos */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center bg-[#6DC8D5] group transition-all ease-in duration-500'>
            <a href='#quirofanos' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <p className="py-1 mt-0 text-sm lg:text-2xl text-white text-center uppercase font-bold">Quirófanos</p>
            </a>
          </article>

          {/* Emergencias */}

          <article className='w-full h-48 md:h-64 lg:h-[380px] object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-[#1C718999] group transition-all ease-in duration-500'>
            <a href='#emergencias' className='flex flex-col justify-center items-center group-hover:translate-y-4 group-hover:scale-125 duration-500'>
              <p className="py-2 text-sm lg:text-2xl text-white text-center uppercase font-bold ">Emergencias</p>
            </a>
          </article>

        </section>

        <section className='mt-20 w-11/12 mx-auto'>   
          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#002D4E] font-extrabold uppercase' id='neonatologia'>Neonatología</h3>
            <Neoslider/> 
          
          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#002D4E] font-extrabold' id='cuidadosIntensivos'>Cuidados Intensivos</h3>
            <Cislider/>

          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#002D4E] font-extrabold' id='quirofanos'>Quirófanos</h3>
            <Slider />


          <h3 className='mt-10 text-2xl md:text-3xl lg:text-5xl text-[#002D4E] font-extrabold' id='emergencias'>Emergencias</h3>
            <Emslider/>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page