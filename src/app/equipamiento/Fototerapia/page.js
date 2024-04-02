import Image from 'next/image'
import fototerapia from '../../../../public/img/sliders/fototerapia.jpg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={fototerapia} width="400" className='mx-auto' alt='fototerapia'/>
      <embed src="/docs/Fototerapia.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page