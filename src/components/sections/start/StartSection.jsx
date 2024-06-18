import { theme } from "@/../tailwind.config";
import Image from 'next/image';

// images
import EmilyImage from '@/static/EmilyInPelves.png';
import BgImage from '@/static/StartPageBackgroundCropped.png';

// svg's
import CircleFlowers from './CircleFlowers';
import InkSplash from "@/components/common/InkSplash";
import ManFace from './ManFace';
import Separator from '@/components/common/Separator';
import WomanFace from './WomanFace';


export default function StartSection({}){
  return <section className="
    w-full
    overflow-hidden
    flex flex-col
    justify-center
    items-center
    py-24
    font-goudy
    relative
  ">
    <Introduction />
    <Presentation />
    <Background />
  </section>
}

function Introduction(){
  return <>
    <p className='text-3xl tracking-superWide'>Fisioterapeuta</p>
    <p className='text-8xl tracking-superWide pt-4'>Pélvica</p>
    <div className='
      w-[600px]
      pt-14
      relative
      '>
      <div className='
        rounded-b-full
        overflow-hidden
        '>
        <Image
          src={EmilyImage}
          alt={'Emily In Pelvis Image'}
        />
      </div>
      <div className='
        absolute
        -bottom-[43px]
        w-full h-full
        left-0
        '>
        <CircleFlowers fill={theme.extend.colors.darkGreen}/>
      </div>
    </div>
    <div className='
      absolute
      -right-[200px] top-40
      w-[500px]
    '>
      <ManFace fill={theme.extend.colors.darkGreen}/>
    </div>
    <div className='
      absolute
      -left-[200px] top-40
      w-[550px]
    '>
      <WomanFace fill={theme.extend.colors.darkGreen}/>
    </div>
  </>
}

function Presentation(){
  return <>
    <div className="
      w-[500px]
      pt-24
      pb-12
    ">
      <Separator fill={theme.extend.colors.darkGreen}/>
    </div>
    <h1 className='
      font-meow
      text-6xl
      text-darkGreen
    '>
      Olá,
    </h1>
    <p className='
      text-2xl text-darkGreen
      pt-12
      tracking-wider
      w-[1000px]
      text-center
    '>
      Meu nome é Emily Leal, sou fisioterapeuta, tenho anos de experiência, estou sempre comprometida a trazer a melhor qualidade de vida para os meus pacientes. Tenho anos de experiência em ortopedia e estou migrando minha carreira para fisioterapia pélvica, minha grande paixão.
    </p>
  </>
}

function Background(){
  return <div className='
    w-full h-full
    absolute top-0 right-0
    bg-light
    -z-20
  '>
    <div className='
      bg-gradient-to-b from-light to-transparent
      absolute
      inset-x-0 top-0
      h-[80%]
    '/>
    <div className='
      absolute
      inset-x-0 bottom-0
      h-[20%]
      bg-gradient-to-t from-light to-transparent
    '/>
    <div className='
      w-[300px] absolute right-0 bottom-0 translate-x-2/4 translate-y-2/4
    '>
      <InkSplash fill={theme.extend.colors.darkGreen} />
    </div>
    <Image
      alt="Grass"
      src={BgImage}
      placeholder="blur"
      quality={100}
      className='-z-10 opacity-65 absolute top-0 left-0'
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
  </div>
}