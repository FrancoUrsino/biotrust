'use client'
import './globals.scss'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../public/img/Bio_logo-home.png'
import key from '../../public/img/key.png'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Footer from "@/components/Footer";


export default function Home() {

  const [nav, setNav] = useState(false)
  const [navbar, setNavbar] = useState(false);

  const scrollNavbar = () => {
    if (window.scrollY >= 20) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollNavbar)
    return () => { window.addEventListener('scroll', scrollNavbar) }
  }, [])

  return (
    <>
      <nav className={nav ? 'fixed top-0 w-full bg-sky-800/20 max-h-96 backdrop-blur-lg rounded-b-3xl z-50' : 'fixed bg-gradient-to-b from-[#289DAC] to-[#0E3A5D] to-80% top-0 rounded-b-3xl w-full max-h-96 z-50'}>

        <div className="justify-between px-1 mx-auto lg:w-11/12 md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between w-11/12 py-2 mx-auto md:block">
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <RiCloseLine className='text-white' />
                  ) : (
                    <RiMenu3Line className='text-white' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-base md:text-sm md:px-4 lg:text-lg xl:px-6 lg:px-6 text-white py-2 px-1 text-center border-b-2 md:border-b-0  hover:bg-700 border-sky-500  md:hover:text-white hover:font-bold md:hover:bg-transparent">
                  <Link href="/quienes-somos" onClick={() => setNavbar(!navbar)}>
                    QUIÉNES SOMOS
                  </Link>
                </li>
                <li className="text-base md:text-sm md:px-6 lg:text-lg lg:px-6 xl:px-10 xl:text-xl text-white py-2 px-1 text-center  border-b-2 md:border-b-0 border-sky-500  md:hover:text-white hover:font-bold md:hover:bg-transparent">
                  <Link href="/clientes" onClick={() => setNavbar(!navbar)}>
                    CLIENTES
                  </Link>
                </li>
                <li className="text-base md:text-sm md:px-6 lg:text-lg xl:px-6 lg:px-6 text-white py-2 px-1 text-center  border-b-2 md:border-b-0 border-sky-500  md:hover:text-white hover:font-bold md:hover:bg-transparent">
                  <Link href="/nuestra-app" onClick={() => setNavbar(!navbar)}>
                    NUESTRA APP
                  </Link>
                </li>
                <li className="text-base md:text-sm md:px-6 lg:text-lg xl:px-10 lg:px-6 xl:text-xl text-white py-2 px-1 text-center  border-b-2 md:border-b-0 border-sky-500  md:hover:text-white hover:font-bold md:hover:bg-transparent">
                  <Link href="/contactanos" onClick={() => setNavbar(!navbar)}>
                    CONTACTANOS
                  </Link>
                </li>
                <li className="text-base md:text-sm md:px-6 lg:text-lg xl:px-10 lg:px-6 xl:text-xl text-white py-2 px-1 text-center  border-b-2 md:border-b-0 border-sky-500  md:hover:text-white hover:font-bold md:hover:bg-transparent">
                  <Link href="http://biotrust-gestiondeclientes.com" target='_blank' onClick={() => setNavbar(!navbar)}>
                    DASHBOARD
                  </Link>
                </li>
                <li className="text-base md:text-sm md:px-6 lg:text-lg xl:px-10 lg:px-6 xl:text-xl text-white py-2 px-1 flex justify-center md:hover:text-white hover:font-bold md:hover:bg-transparent">
                  <Link href="http://66.97.36.141/biotrust/admin/" target='_blank' onClick={() => setNavbar(!navbar)}>
                    <Image src={key} width={30} alt='Logo' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero-bg">
        <main className="hero w-full mb-56 lg:mb-28">
          <section className="grid md:grid-cols-3 md:grid-rows-1 relative justify-center justify-items-center top-[250px] md:top-[300px] lg:top-[190px] xl:top-[290px] w-10/12 xl:w-9/12 mx-auto md:rounded-bl-3xl md:rounded-br-3xl md:rounded-tl-3xl md:rounded-tr-3xl md:shadow-2xl md:shadow-black">
            {/* CERTIFICADOS */}

            <article className='w-full h-32 md:h-64 lg:h-[270px] xl:h-[350px] object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl  bg-[#002D4EA1] group transition-all ease-in duration-500'>
              <Link href='/certificaciones' className='flex flex-col justify-center items-center group-hover:translate-y-8 group-hover:scale-125 duration-500'>
                <p className="py-2 text-sm lg:text-2xl xl:text-3xl text-white text-center uppercase lg:group-hover:text-2xl font-bold">certificaciones</p>
                <p className='w-5/6 text-center text-white md:text-lg lg:text-base xl:text-xl lg:mt-4 leading-5 group-hover:invisible'>Cumpliendo con las leyes nacionales y disposiciones del <span className='font-semibold'>ANMAT</span> </p>
              </Link>
            </article>

            {/* SERVICIO TECNICO */}
            <article className='w-full h-32 md:h-64 lg:h-[270px] xl:h-[350px] object-cover flex flex-col items-center justify-center bg-[#118CDF99] group transition-all ease-in duration-500'>
              <Link href='/servicio-tecnico' className='flex flex-col justify-center items-center group-hover:translate-y-8 group-hover:scale-125 duration-500'>
                <p className="py-1 mt-0 text-sm lg:text-2xl xl:text-3xl text-white text-center uppercase lg:group-hover:text-2xl font-bold">servico técnico</p>
                <p className='w-3/4 text-center text-white lg:text-base xl:text-xl lg:mt-4 lg:translate-y-2 group-hover:invisible'>Mantenimiento preventivo y correctivo</p>
              </Link>
            </article>

            {/* EQUIPAMIENTO */}

            <article className='w-full h-32 md:h-64 lg:h-[270px] xl:h-[350px] object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-[#27B2C4A8] group transition-all ease-in duration-500'>
              <Link href='/equipamiento' className='flex flex-col justify-center items-center group-hover:translate-y-8 group-hover:scale-125 duration-500'>
                <p className="py-2 text-sm lg:text-2xl xl:text-3xl text-white text-center uppercase font-bold -translate-y-2">equipamiento</p>
                <p className='w-3/4 text-center text-white lg:text-base xl:text-xl lg:mt-4 -translate-y-2 group-hover:invisible'>Venta y alquiler de equipamiento médico</p>
              </Link>
            </article>

          </section>
          <div className='flex flex- w-full absolute top-24 lg:top-20 xl:top-28 justify-center'>
          <Image src={logo} width={300} alt='logo' className='lg:w-[270px] xl:w-[400px]' />
        </div>
          <h1 className="mx-auto text-lg w-10/12 md:text-2xl lg:text-lg xl:text-4xl md:w-11/12 lg:w-full text-center relative top-[280px] md:top-[350px] lg:top-[210px] xl:top-[310px] 2xl:top-[350px] text-[#f1f1f1] uppercase font-bold">LA EXPERENCIA, TECNOLOGIA Y CONOCIMIENTO AL SERVICIO DE LA GESTIÓN DE EQUIPAMIENTO MEDICO</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}
