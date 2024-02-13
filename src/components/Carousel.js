import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../public/img/BioTrust_logo.png';
import img2 from '../../public/img/BioTrust_logo.png';
import img3 from '../../public/img/BioTrust_logo.png';
import img4 from '../../public/img/BioTrust_logo.png';
import img5 from '../../public/img/BioTrust_logo.png';
import img6 from '../../public/img/BioTrust_logo.png';
import img7 from '../../public/img/BioTrust_logo.png';
import img8 from '../../public/img/BioTrust_logo.png';
import img9 from '../../public/img/BioTrust_logo.png';
import img10 from '../../public/img/BioTrust_logo.png';
import Image from 'next/image';

function App() {
  return (
    <section className="mt-44 text-center">
        <h1 className='mb-28 text-3xl md:text-5xl lg:text-7xl text-[#002d4e] font-bold uppercase'>Confiaron en nosotros</h1>
      <div>
        <Marquee direction="left" speed={150} delay={5}>
          <div className="m-0 mx-auto">
            <Image src={img1} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img2} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img3} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img4} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img5} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img6} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img7} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img8} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img9} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img10} width={400} className='mx-auto w-2/3 lg:w-4/5' alt="" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default App;