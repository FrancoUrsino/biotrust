'use client'
import React from 'react'
import Link from 'next/link'

function subNav() {
  return (
    <section className="grid md:grid-cols-3 md:grid-rows-1 justify-center justify-items-center w-11/12  lg:w-1/2 mx-auto md:rounded-bl-2xl md:rounded-br-2xl md:rounded-tl-2xl md:rounded-tr-2xl md:shadow-2xl md:shadow-black mt-24">
      {/* CERTIFICADOS */}

      <article className='w-full h-14 object-cover flex flex-col items-center justify-center rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl  bg-[#002D4EA1] group transition-all ease-in duration-500'>
        <Link href='/certificaciones' className='flex flex-col justify-center items-center group-hover:translate-y-2 group-hover:scale-125 duration-500'>
          <p className="py-2 text-sm px-10 lg:px-0 lg:text-xl text-white text-center uppercase font-bold">certificaciones</p>
        </Link>
      </article>

      {/* SERVICIO TECNICO */}
      <article className='w-full h-14 object-cover flex flex-col items-center justify-center bg-[#118CDF99] group transition-all ease-in duration-500'>
        <Link href='/servicio-tecnico' className='flex flex-col justify-center items-center group-hover:translate-y-2 group-hover:scale-125 duration-500'>
          <p className="py-1 mt-0 text-sm lg:text-xl text-white text-center uppercase font-bold">servico técnico</p>
        </Link>
      </article>

      {/* EQUIPAMIENTO */}

      <article className='w-full h-14 object-cover flex flex-col items-center justify-center rounded-b-2xl md:rounded-b-none md:rounded-r-2xl bg-[#27B2C4A8] group transition-all ease-in duration-500'>
        <Link href='/equipamiento' className='flex flex-col justify-center items-center group-hover:translate-y-2 group-hover:scale-125 duration-500'>
          <p className="py-2 text-sm lg:text-xl text-white text-center uppercase font-bold">equipamiento</p>
        </Link>
      </article>

    </section>
  )
}

export default subNav