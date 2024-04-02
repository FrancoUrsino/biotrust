import Image from 'next/image'
import blenders from '../../../../public/img/sliders/blenders.jpg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={blenders} width="400" className='mx-auto' alt='blenders'/>
      <embed src="/docs/bilirrubinometro.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page