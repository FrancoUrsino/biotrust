import Image from 'next/image'
import respiradoresCon from '../../../../public/img/sliders/respiradoresCon.jpg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={respiradoresCon} width="400" className='mx-auto' alt='respiradoresCon'/>
      <embed src="/docs/respirador.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page