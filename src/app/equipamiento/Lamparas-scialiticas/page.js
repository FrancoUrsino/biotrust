import Image from 'next/image'
import lamparas from '../../../../public/img/sliders/lamparas.jpeg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={lamparas} width="400" className='mx-auto' alt='lamparas'/>
      <embed src="/docs/lamparas.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page