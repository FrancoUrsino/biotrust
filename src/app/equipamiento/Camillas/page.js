import Image from 'next/image'
import camillas from '../../../../public/img/sliders/camillas.jpeg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={camillas} width="400" className='mx-auto' alt='camillas'/>
      <embed src="/docs/camillas.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page