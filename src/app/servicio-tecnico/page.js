import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function page() {
  return (
    <>
    <header className='h-1/4 w-full bg-gradient-to-r from-[#118CDF] to-[#002e4e08]'>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    <p>hi</p>
    </header>
    <main>
      <Sidebar/>
    </main>
    <div className='bg-gradient-to-b from-[#289DAC] to-[#0E3A5D] to-80% text-white'>
    <Footer/>
    </div>
    </>
  )
}

export default page