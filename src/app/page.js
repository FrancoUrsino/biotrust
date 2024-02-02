import Image from "next/image";
import Link from "next/link";
import './globals.scss'
import logoG from '../../public/img/bioTrust_logoBlanco2.png'
import logo2 from '../../public/img/logo2.png'
import cerIcon from '../../public/img/certifIcon.png'
import kitIcon from '../../public/img/kitIcon.png'
import serIcon from '../../public/img/serIcon.png'


export default function Home() {
  return (
    <>
    {/* h-1/2 md:h-3/5 lg:h-5/6 */}
      <main className="hero w-full">
      <section className="grid md:grid-cols-3 md:grid-rows-1 relative justify-center justify-items-center top-[250px] md:top-[500px] lg:top-[300px] w-10/12 mx-auto">
          {/* CERTIFICADOS */}
          {/* <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[500px] object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-t-none md:rounded-l-3xl bg-[#002D4E]'>
            <Image src={cerIcon} width={100} alt='icono de certificado' className='mt-4  lg:w-44' />
            <Link href='/certificaciones' className="py-2 text-sm lg:text-3xl text-white text-center uppercase font-bold">certificaciones</Link>
            <p className='w-5/6 text-center text-white leading-5'>Cumpliendo con las leyes nacionales y disposiciones del <span className='font-semibold'>ANMAT</span> </p>
          </article> */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[500px] object-cover flex flex-col items-center justify-center rounded-t-3xl md:rounded-t-none md:rounded-l-3xl bg-[#002D4E]'>
            <Link href='/certificaciones' className='flex flex-col justify-center items-center'>
            <Image src={cerIcon} width={100} alt='icono de certificado' className='mt-4  lg:w-44' />
            <p className="py-2 text-sm lg:text-3xl text-white text-center uppercase font-bold">certificaciones</p>
            <p className='w-5/6 text-center text-white leading-5'>Cumpliendo con las leyes nacionales y disposiciones del <span className='font-semibold'>ANMAT</span> </p>
            </Link>
          </article>
          
          {/* SERVICIO TECNICO */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[500px] object-cover flex flex-col items-center justify-center  bg-[#118CDF]'>
            <Link href='/servico-tecnico' className='flex flex-col justify-center items-center'>
            <Image src={serIcon} width={100} alt='icono de servicio tecnico' className='mt-4 md:-translate-y-3 lg:w-44' />
            <p className="py-1 mt-0 text-sm lg:text-3xl text-white text-center uppercase font-bold lg:translate-y-2">servico técnico</p>
            <p className='w-3/4 text-center text-white lg:translate-y-2'>Mantenimiento preventivo y correctivo</p>
            </Link>
          </article>
          {/* <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[500px] object-cover flex flex-col items-center justify-center  bg-[#118CDF]'>
            <Image src={serIcon} width={100} alt='icono de servicio tecnico' className='mt-4 md:-translate-y-3 lg:w-44' />
            <Link href='/servico-tecnico' className="py-1 mt-0 text-sm lg:text-3xl text-white text-center uppercase font-bold lg:translate-y-2">servico técnico</Link>
            <p className='w-3/4 text-center text-white lg:translate-y-2'>Mantenimiento preventivo y correctivo</p>
          </article> */}
          {/* EQUIPAMIENTO */}
          {/* <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[500px] object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl  bg-[#27B2C4]'>
            <Image src={kitIcon} width={100} alt='icono de equipamientos' className='mt-4 -translate-y-4 lg:w-44' />
            <Link href='/equipamiento' className="py-2 text-sm lg:text-3xl text-white text-center uppercase font-bold -translate-y-2">equipamiento</Link>
            <p className='w-3/4 text-center text-white'>Venta y alquiler de equipamiento médico</p>
          </article> */}
          <article className='w-full h-48 md:h-64 lg:h-[380px] xl:h-[500px] object-cover flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl  bg-[#27B2C4]'>
            <Link href='/equipamiento' className='flex flex-col justify-center items-center'>
            <Image src={kitIcon} width={100} alt='icono de equipamientos' className='mt-4 -translate-y-4 lg:w-44' />
            <p className="py-2 text-sm lg:text-3xl text-white text-center uppercase font-bold -translate-y-2">equipamiento</p>
            <p className='w-3/4 text-center text-white'>Venta y alquiler de equipamiento médico</p>
            </Link>
          </article>
        </section>
        <Image src={logoG} width={260} alt='Logo en blanco' className='object-contain absolute ml-5 lg:left-[30%] xl:left-[35%] 2xl:left-[40%] lg:w-96 top-14 mx-auto'/>
        <div className='flex flex-col absolute right-10 top-28' >
          <Image src={logo2} width={200} alt='logo itaes'/>
          <p className='flex justify-end font-extrabold text-sky-950 text-xl'>NOS AVALA</p>
        </div>
        <h1 className="mx-auto text-2xl md:text-3xl md:w-11/12 xl:text-5xl lg:w-full text-center relative top-[280px] md:top-[550px] lg:top-80 text-[#002D4E] uppercase font-bold">la más avanzada tecnología en equipamiento médico</h1>
      </main>
    </>
  );
}
