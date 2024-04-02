import Image from 'next/image'
import bilirubinometro from '../../../../public/img/sliders/bilirubinometro.jpg'
import React from 'react'
import Footer from '@/components/Footer'


function page() {
  return (
    <>
    <main className='my-20'>
      <Image src={bilirubinometro} width="400" className='mx-auto' alt='bilirubinometro'/>
      <embed src="/docs/bilirrubinometro.pdf" className="w-3/4 mx-auto" height="700" type="application/pdf" />
    </main>
    <Footer/>
    </>
  )
}

export default page