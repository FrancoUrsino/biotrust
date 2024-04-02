import Image from 'next/image'
import servocuna from '../../../../public/img/sliders/servocuna.webp'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={servocuna} width="400" className='mx-auto' alt='Incubadora'/>
      <embed src="/docs/servocuna.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page