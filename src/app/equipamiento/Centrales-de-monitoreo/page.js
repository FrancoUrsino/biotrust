import Image from 'next/image'
import centrales from '../../../../public/img/sliders/centrales.jpeg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={centrales} width="400" className='mx-auto' alt='centrales'/>
      {/* <embed src="/docs/camillas.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" /> */}
    </main>
    <Footer/>
    </>
  )
}

export default page