import Image from "next/image";
import Link from "next/link";
import './globals.scss'
import logo from '../../public/img/logo.png'
import logo2 from '../../public/img/logo2.png'
import cerIcon from '../../public/img/certifIcon.png'
import kitIcon from '../../public/img/kitIcon.png'
import serIcon from '../../public/img/serIcon.png'
import Footer from "@/components/Footer";


export default function Home() {

  
  return (
    <>
    
      <main className="hero w-full mb-56 lg:mb-28">
        <section className="grid md:grid-cols-3 md:grid-rows-1 relative justify-center justify-items-center top-[250px] md:top-[500px] lg:top-[190px] w-10/12 xl:w-9/12 mx-auto md:rounded-bl-3xl md:rounded-br-3xl md:rounded-tl-3xl md:rounded-tr-3xl md:shadow-2xl md:shadow-black">
          {/* CERTIFICADOS */}

          <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[450px] object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl  bg-[#002D4E] group transition-all ease-in duration-500'>
            <Link href='/certificaciones' className='flex flex-col justify-center items-center group-hover:translate-y-8 group-hover:scale-125 duration-500'>
              <Image src={cerIcon} width={100} alt='icono de certificado' className='mt-4  lg:w-56' />
              <p className="py-2 text-sm lg:text-3xl text-white text-center uppercase font-bold">certificaciones</p>
              <p className='w-5/6 text-center text-white md:text-lg lg:text-normal lg:mt-4 leading-5 group-hover:invisible'>Cumpliendo con las leyes nacionales y disposiciones del <span className='font-semibold'>ANMAT</span> </p>
            </Link>
          </article>

          {/* SERVICIO TECNICO */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[450px] object-cover flex flex-col items-center justify-center bg-[#118CDF] group transition-all ease-in duration-500'>
            <Link href='/servicio-tecnico' className='flex flex-col justify-center items-center group-hover:translate-y-8 group-hover:scale-125 duration-500'>
              <Image src={serIcon} width={100} alt='icono de servicio tecnico' className='mt-4 md:-translate-y-3 lg:w-56' />
              <p className="py-1 mt-0 text-sm lg:text-3xl text-white text-center uppercase font-bold lg:translate-y-2">servico técnico</p>
              <p className='w-3/4 text-center text-white lg:text-2xl lg:mt-4 lg:translate-y-2 group-hover:invisible'>Mantenimiento preventivo y correctivo</p>
            </Link>
          </article>

          {/* EQUIPAMIENTO */}

          <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[450px] object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-[#27B2C4] group transition-all ease-in duration-500'>
            <Link href='/equipamiento' className='flex flex-col justify-center items-center group-hover:translate-y-8 group-hover:scale-125 duration-500'>
              <Image src={kitIcon} width={100} alt='icono de equipamientos' className='mt-4 -translate-y-2 lg:w-56' />
              <p className="py-2 text-sm lg:text-3xl text-white text-center uppercase font-bold -translate-y-2">equipamiento</p>
              <p className='w-3/4 text-center text-white lg:text-2xl lg:mt-4 -translate-y-2 group-hover:invisible'>Venta y alquiler de equipamiento médico</p>
            </Link>
          </article>

        </section>
        {/* <Image src={logo} width={300} alt='Logo BioTrust' className='object-contain invisible md:visible absolute ml-5 lg:left-[30%] xl:left-[35%] 2xl:left-[40%] lg:w-[450px] top-20 mx-auto' /> */}
        <div className='flex flex-col absolute right-10 top-28' >
          <Image src={logo2} width={200} alt='logo itaes' />
          <p className='flex justify-end font-extrabold text-sky-950 text-xl'>NOS AVALA</p>
        </div>
        <h1 className="mx-auto text-xl w-10/12 md:text-3xl md:w-11/12 xl:text-4xl lg:w-full text-center relative top-[280px] md:top-[550px] lg:top-[340px] 2xl:top-[260px] text-[#002D4E] uppercase font-bold">pioneros y líderes EN REPARACIÓN Y MANTENIMIENTO DE EQUIPAMIENTO MÉDICO</h1>
      </main>
      <Footer/>
    </>
  );
}
