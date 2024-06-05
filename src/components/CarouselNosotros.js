import React from 'react'
import Marquee from 'react-fast-marquee';
import nos1 from '../../public/img/nos1.jpg';
import nos2 from '../../public/img/nos2.jpg';
import nos3 from '../../public/img/nos3.png';
import nos4 from '../../public/img/nos4.jpg';
import nos5 from '../../public/img/nos5.jpg';
import Image from 'next/image';

export default function CarouselNosotros() {
  return (
    <div>
      <Marquee direction="left" speed={200} delay={0

      }>
        <div className="mx-auto">
          <Image src={nos1} width={600} className='mx-4 object-fill' alt="medix" />
        </div>
        <div className="mx-auto">
          <Image src={nos2} width={600} className='mx-4 object-fill' alt="medix" />
        </div>
        <div className="mx-auto">
          <Image src={nos3} width={900} className='mx-4 object-cover' alt="medix" />
        </div>
        <div className="mx-auto">
          <Image src={nos4} width={650} className='mx-4 object-fill' alt="medix" />
        </div>
        <div className="mx-auto">
          <Image src={nos5} width={650} className='mx-4 object-fill' alt="medix" />
        </div>

      </Marquee>
    </div>
)
}
