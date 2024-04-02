import Image from 'next/image'
import monitores from '../../../../public/img/sliders/monitores.jpg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={monitores} width="400" className='mx-auto' alt='monitores'/>
      <embed src="/docs/monitores.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page