'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cerIcon from '../../public/img/certifIcon.png'
import kitIcon from '../../public/img/kitIcon.png'
import serIcon from '../../public/img/serIcon.png'

function Sidebar() {
  const [side, setSide] = useState(false)

  const scrollSidebar = () => {
    if (window.scrollY >= 800) {
      setSide(true)
    } else {
      setSide(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollSidebar)
    return () => { window.addEventListener('scroll', scrollSidebar) }
  }, [])

  return (
    <div className={side ?'hidden': 'fixed -right-[130px] lg:-right-[85px] flex flex-col z-30 w-[400px] group'}>
      {/* CERTIFICACIONES */}
      <div className='w-28 md:w-[130px]  relative -right-[175px] md:-right-[195px] hover:!w-[450px] lg:group-hover:w-40 hover:!-right-0 duration-500 group/card'>
      <Link href="/certificaciones" className='bg-[#002D4E] rounded-tl-2xl lg:rounded-tl-3xl px-2 py-5 md:py-3 flex justify-center transition-all ease-in-out delay-0'>
        <Image src={cerIcon} width={50} alt='icono de certificado' className='md:w-16 relative transition-all ease-in-out duration-500 translate-x-0 group-hover/card:-translate-x-10 lg:group-hover/card:-translate-x-4 group-hover/card:!invisible'/>
        <p className='translate-x-[100%] group-hover/card:w-[300px] w-0 invisible group-hover/card:-translate-x-24 lg:group-hover/card:-translate-x-36 group-hover/card:visible relative -right-16 transition-all duration-700 text-xl justify-center items-center lg:text-2xl lg:5 text-white font-bold uppercase'>certificaciones</p>
      </Link>
      </div>
      {/* SERVICIO-TECNICO */}
      <div className='w-28 md:w-[130px]  relative -right-[175px] md:-right-[195px] hover:!w-[450px] lg:hover:!w-[450px] lg:group-hover:w-40 hover:!-right-0 duration-500 group/card'>
      <Link href="/servicio-tecnico" className='bg-[#118CDF] px-2 py-5 md:py-3 flex justify-center transition-all ease-in-out delay-0'>
        <Image src={serIcon} width={50} alt='icono de certificado' className='md:w-20 transition-all ease-in-out duration-500  group-hover/card:-translate-x-10  lg:group-hover/card:-translate-x-4 group-hover/card:!invisible'/>
        <p className='translate-x-[100%] group-hover/card:w-[300px] w-0 invisible group-hover/card:-translate-x-64 group-hover/card:visible relative -right-36 transition-all ease-in-out duration-700 text-xl justify-center items-center lg:text-2xl lg:py-5 text-white font-bold uppercase flex'>servicio <span className='pl-2'> técnico</span></p>
      </Link>
      </div>
      {/* EQUIPAMIENTO */}
      <div className='w-28 md:w-[130px]  relative -right-[175px] md:-right-[195px] hover:!w-[450px] lg:hover:!w-[450px] lg:group-hover:w-40 hover:!-right-0 duration-500 group/card'>
      <Link href="/equipamiento" className='bg-[#27B2C4] rounded-bl-2xl lg:rounded-bl-3xl px-2 py-5 md:py-3 flex justify-center transition-all ease-in-out delay-0 '>
        <Image src={kitIcon} width={50} alt='icono de certificado' className='md:w-16 transition-all ease-in-out duration-500  group-hover/card:-translate-x-10 lg:group-hover/card:-translate-x-4 group-hover/card:!invisible'/>
        <p className='translate-x-[100%] group-hover/card:w-[300px] w-0 invisible group-hover/card:-translate-x-20 lg:group-hover/card:-translate-x-32 group-hover/card:visible relative -right-10 transition-all duration-700 text-xl justify-center items-center lg:text-2xl lg:py-5 text-white font-bold uppercase'>equipamiento</p>
      </Link>
      </div>
    </div>
  )
}

export default Sidebar