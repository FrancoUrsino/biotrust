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
      <Navbar />
      <main className='pt-10 bg-[#f5f5f5] overflow-hidden'>
      <section className='title-bg-clientes'>
        <h1 className='shadow-text text-[#f5f5f5] relative top-[220px] lg:top-48 2xl:top-60 left-4 lg:left-10 mt-28 font-extrabold text-3xl md:text-4xl lg:text-6xl uppercase'>Confían en nosotros</h1>
      </section>
        <section className="text-center bg-[#f5f5f5]">
          <Carousel />
          <p className='mt-20 pb-36 flex flex-col justify-center items-center text-[#002d4e] text-lg md:text-2xl lg:text-4xl font-bold'><Image src={escudo} width={50} className='flex justify-center mb-10' />cuentan con contrato de mantenimiento en bioingenieria</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page