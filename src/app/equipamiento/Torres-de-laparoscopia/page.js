import Image from 'next/image'
import torre from '../../../../public/img/sliders/torre.jpeg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={torre} width="400" className='mx-auto' alt='torre'/>
      {/* <embed src="/docs/camillas.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" /> */}
    </main>
    <Footer/>
    </>
  )
}

export default page