import React from 'react';
import Marquee from 'react-fast-marquee';
import img2 from '../../public/img/covidien.png';
import img3 from '../../public/img/draguer.png';
import img4 from '../../public/img/mindray.png';
import img5 from '../../public/img/vinno.png';
import img6 from '../../public/img/leistung.png';
import img7 from '../../public/img/medix.jpeg';
import Image from 'next/image';


function carousel2() {
  return (
      <div>
        <Marquee direction="left" speed={100} delay={0.3}>
          <div className="m-0 mx-auto">
            <Image src={img2} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="covidien" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img3} width={300} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="draguer" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img4} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="mindray" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img5} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="vinno" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img6} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="leistung" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img7} width={400} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="medix" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img2} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="covidien" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img3} width={300} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="draguer" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img4} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="mindray" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img5} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="vinno" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img6} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="leistung" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img7} width={400} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="medix" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img2} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="covidien" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img3} width={300} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="draguer" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img4} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="mindray" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img5} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="vinno" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img6} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="leistung" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img7} width={400} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="medix" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img2} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="covidien" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img3} width={300} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="draguer" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img4} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="mindray" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img5} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="vinno" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img6} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="leistung" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img7} width={400} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="medix" />
          </div>

        </Marquee>
      </div>
  )
}

export default carousel2;