import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../public/img/galenoLogo.png';
import img2 from '../../public/img/sanTrinidadLogo.png';
import img3 from '../../public/img/DupuytrenLogo.png';
import img4 from '../../public/img/sanJoseLogo.png';
import img5 from '../../public/img/independenciaLogo.png';
import img6 from '../../public/img/mendezLogo.png';
import img7 from '../../public/img/cemicLogo.png';
import img8 from '../../public/img/guemesLogo.png';
import img9 from '../../public/img/calchaquiLogo.png';
import img10 from '../../public/img/urquizaLogo.png';
import img11 from '../../public/img/materDaiLogo.jpeg';
import img12 from '../../public/img/sjdDiosLogo.png';
import img13 from '../../public/img/ministerioLogo.png';
import img14 from '../../public/img/pedroMallo.png';
import img15 from '../../public/img/jcPaz.png';
import Image from 'next/image';


function App() {
  return (
      <div>
        <Marquee direction="left" speed={100} delay={0.3}>
          <div className="m-0 mx-auto">
            <Image src={img1} width={800} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Galeno" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img2} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Sanatorio Trinidad" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img3} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Dupuytren" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img4} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo San Jose" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img5} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Independencia" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img6} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Mendez" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img7} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Cemic" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img8} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Güemes" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img9} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Calchaqui" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img10} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Urquiza" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img11} width={300} className='mx-4 w-2/3 lg:w-3/5 object-fill' alt="Logo Mater Dai" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img12} width={500} className='mx-4 w-2/3 lg:w-4/6 object-fill' alt="Logo San Juan de Dios" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img13} width={300} className='mx-4 w-2/3 lg:w-4/5' alt="Logo Ministerio de Saluds" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img14} width={2500} className='mx-4 w-2/3 lg:w-4/5' alt="Logo Ministerio de Saluds" />
          </div>
          <div className="m-0 mx-auto">
            <Image src={img15} width={400} className='mx-4 w-2/3 lg:w-4/5' alt="Logo Ministerio de Saluds" />
          </div>
        </Marquee>
      </div>
  )
}

export default App;