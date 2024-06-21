import Image from 'next/image';
import { theme } from "@/../tailwind.config";

// Images
import SkillsEmilyImage from '@/static/SkillsSectionImage1.png';

// SVG's
import ElegantItemMark from './ElegantItemMark';
import Separator from '@/components/common/Separator';


export default function SkillsSection(){
  return <section className='
    bg-darkGreen
    flex flex-row
    flex-wrap-reverse md:flex-nowrap
    font-goudy
    text-xl lg:text-3xl
    overflow-hidden
  '>
    <div className='
      w-full md:max-w-[40%]
      pt-12 md:pt-0
    '>
      <Image 
        src={SkillsEmilyImage}
        alt={'Emily Picture'}
        className='
          object-cover
          h-auto md:h-full
          w-full md:w-auto
        '
      />
    </div>
    <div className='
      flex flex-col
      justify-between
      px-6 lg:px-12 xl:px-24
      text-light
    '>
      <div className='
        flex flex-col
      '>
        <h3 className='
          font-meow
          text-5xl xs:text-7xl lg:text-8xl
          py-20 xs:py-12 lg:py-24
        '>
          Especialidades
        </h3>
        <Skills />
      </div>
      <div className='
        hidden md:block
        w-[80%] 
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
    'Facilitação de parto;',
    'Disfunção Erétil;',
    'Lorem Ipsum Lorem Ipsum',
  ]

  return <>
    {skillSet.map((item, index) => (
      <div key={index} className='
        flex flex-row
        pb-6 md:pb-12
        items-center
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