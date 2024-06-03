import React from 'react'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Image from 'next/image';
import escudo from '../../../public/img/escudo.svg';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

function page() {
  return (
    <>
    <Navbar/>
      <main className='pt-10 bg-[#f5f5f5]'>
        <SubNav/>
        <section className="pt-44 text-center bg-[#f5f5f5]">
          <h1 className='mb-28 text-3xl md:text-5xl lg:text-7xl text-[#002d4e] font-bold uppercase'>Confían en nosotros</h1>
          <Carousel />
          <p className='mt-44 pb-36 flex flex-col justify-center items-center text-[#002d4e] text-lg md:text-2xl lg:text-4xl font-bold'><Image src={escudo} width={50} className='flex justify-center mb-10' />cuentan con contrato de mantenimiento en bioingenieria</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page