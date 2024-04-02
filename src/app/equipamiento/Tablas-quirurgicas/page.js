import Image from 'next/image'
import tablas from '../../../../public/img/sliders/tablas.jpeg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={tablas} width="400" className='mx-auto' alt='tablas'/>
      <embed src="/docs/tabla_quirurgica.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page