import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cerIcon from '../../public/img/certifIcon.png'
import kitIcon from '../../public/img/kitIcon.png'
import serIcon from '../../public/img/serIcon.png'

function Sidebar() {
  return (
    <div className='fixed w-28 md:w-[130px] lg:w-[160px] h-96 md:h-[470px] lg:h-[600px] right-0 flex flex-col z-30'>
      <Link href="/certificaciones" className='bg-[#002D4E] rounded-tl-2xl lg:rounded-tl-3xl px-2 py-5 flex justify-center'>
        <Image src={cerIcon} width={50} alt='icono de certificado' className='md:w-16 lg:w-28'/>
      </Link>
      <Link href="/servicio-tecnico" className='bg-[#118CDF] px-2 py-5 flex justify-center'>
        <Image src={serIcon} width={50} alt='icono de certificado' className='md:w-16 lg:w-28'/>
      </Link>
      <Link href="/equipamiento" className='bg-[#27B2C4] rounded-bl-2xl lg:rounded-bl-3xl px-2 py-5 flex justify-center'>
        <Image src={kitIcon} width={50} alt='icono de certificado' className='md:w-16 lg:w-28'/>
      </Link>
    </div>
  )
}

export default Sidebar