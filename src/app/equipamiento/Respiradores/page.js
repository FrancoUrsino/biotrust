import Image from 'next/image'
import respiradores from '../../../../public/img/sliders/respiradores.jpeg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={respiradores} width="400" className='mx-auto' alt='respiradores'/>
      <embed src="/docs/respirador.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page