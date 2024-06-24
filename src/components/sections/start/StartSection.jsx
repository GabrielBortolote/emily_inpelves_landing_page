import { theme } from "@/../tailwind.config";
import Image from 'next/image';

// images
import EmilyImage from './EmilyInPelves.png';
import BgImage from './StartPageBackground.png';

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
    <p className='
      text-2xl sm:text-3xl tracking-superWide
    '>Fisioterapeuta</p>
    <p className='
      text-6xl sm:text-8xl tracking-superWide pt-4
    '>Pélvica</p>
    <div className='
      w-[300px] xs:w-[400px] md:w-[600px]
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
      hidden lg:block
      top-[200px] right-0
      translate-x-2/4
      w-[30%]
    '>
      <ManFace fill={theme.extend.colors.darkGreen}/>
    </div>
    <div className='
       absolute
       hidden lg:block
       top-[180px] left-0
       -translate-x-2/4
       w-[40%]
    '>
      <WomanFace fill={theme.extend.colors.darkGreen}/>
    </div>
  </>
}

function Presentation(){
  return <>
    <div className="
      w-[250px] sm:w-[500px]
      pt-12 sm:pt-24
      pb-12
    ">
      <Separator fill={theme.extend.colors.darkGreen}/>
    </div>
    <h1 className='
      font-meow
      text-4xl sm:text-6xl
      text-darkGreen
    '>
      Olá,
    </h1>
    <p className='
      text-md `xs:text-lg sm:text-xl lg:text-2xl 
      text-darkGreen
      pt-8 sm:pt-12
      px-4 xs:px-12
      tracking-wider
      max-w-[1000px]
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
      h-[40%] sm:h-[20%]
      bg-gradient-to-t from-light to-transparent
    '/>
    <div className='
      hidden md:block
      w-[150px] lg:w-[250px]
      absolute right-0 bottom-0
      translate-x-2/4 translate-y-2/4
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