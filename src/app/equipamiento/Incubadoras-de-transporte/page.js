import Image from 'next/image'
import incubadora from '../../../../public/img/sliders/incubadora.jpg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={incubadora} width="400" className='mx-auto' alt='incubadora'/>
      <embed src="/docs/incubadoras.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page