import Image from 'next/image';
import { theme } from "@/../tailwind.config";

// Images
import SkillsEmilyImage from './SkillsSectionImage1.png';

// SVG's
import ElegantItemMark from './ElegantItemMark';
import Separator from '@/components/common/Separator';


export default function SkillsSection(){
  return <section className='
    bg-darkGreen
    flex flex-row
    flex-wrap-reverse md:flex-nowrap
    font-goudy
    overflow-hidden
    relative
  '>
    <div className='
      absolute md:relative
      top-0 left-0
      w-full md:max-w-[40%]
      h-full md:h-auto
      opacity-[12%] md:opacity-100
      z-10
    '>
      <Image 
        src={SkillsEmilyImage}
        alt={'Emily Picture'}
        className='
          object-cover
          h-full
          w-full md:w-auto
        '
      />
    </div>
    <div className='
      flex flex-col
      justify-between
      px-6 lg:px-12 xl:px-24
      pb-12 md:pb-0
      text-light
      z-20
    '>
      <div className='
        flex flex-col
      '>
        <h3 className='
          font-meow
          text-5xl xs:text-7xl lg:text-8xl
          py-20 xs:py-12 lg:py-24
          text-center md:text-start
        '>
          Especialidades
        </h3>
        <Skills />
      </div>
      <div className='
        hidden md:block
        w-[60%]
        max-w-[500px]
        self-center
        pb-6
      '>
        <Separator fill={theme.extend.colors.lightSkin} />
      </div>
    </div>
  </section>
}

function Skills(){
  const skillSet = [
    'Reabilitação das multiplas disfunções do assoalho pélvico;',
    'Facilitação de parto (independente da via);',
    'Dispareunia;',
    'Incontinência urinária e fecal;',
    'Constipação;',
    'Disfunções sexuais femininas e masculinas;',
    'Pós prostatectomia;',
    'Fortalecimento abdominal e dos músculos do assoalho pélvico.',
  ]

  return <>
    {skillSet.map((item, index) => (
      <div key={index} className='
        flex flex-row
        pb-8 md:pb-12
        items-center segunda você co
        text-xl xl:text-3xl
      '>
        <div className='
          flex-shrink-0
          w-[30px] xs:w-[60px] md:w-[40px] xl:w-[60px]
          mr-6
        '>
          <ElegantItemMark fill={theme.extend.colors.lightSkin} />
        </div>
        {item}
      </div>
    ))}
  </>
}