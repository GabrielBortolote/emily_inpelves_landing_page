import { theme } from '@/../tailwind.config';
import Image from 'next/image';

// images
import BgImage from './ResumeSectionBackground.png';
import ResumeImagePreview from './ResumePreview.png'

// svg's
import DownloadIcon from "./Download";


export default function ResumeSection(){
  return <section className='
    flex flex-col
    p-[10%]
    relative
  '>
    <h2 className='
      font-doulaise
      text-[2em] xs:text-[3em] sm:text-[5em] xl:text-[8em]
      text-light
    '>
      Meu Currículo
    </h2>
    <div className='
      flex flex-row
      items-end
      pt-4 sm:pt-12
      pb-1 sm:pb-2
    '>
      <span className='
        text-darkSkin
        font-goudy
        text-[1em] sm:text-[2em] xl:text-[3em]
        font-bold
      '>
        Baixar
      </span>
      <div className='
        w-4 sm:w-8 xl:w-12
        pb-1 sm:pb-2
        ml-2
      '>
        <DownloadIcon fill={theme.extend.colors.darkSkin} />
      </div>
    </div>
    <a href='/resume.pdf' className='
      flex flex-col
    '>
      <div className='
        w-full
        p-[4%]
        rounded-md
        border-4 border-darkSkin border-dashed
      '>
        <ResumePreview />
      </div>
    </a>
    <Background />
  </section>
}

function Background() {
  return <div className='
    w-full
    h-full
    absolute
    top-0
    left-0
    bg-darkGreen
    -z-20
  '>
    <Image
      alt='Resume Flowers Background'
      src={BgImage}
      placeholder='blur'
      quality={100}
      className='-z-10 opacity-[0.14] absolute top-0 left-0'
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
  </div>
}

function ResumePreview(){
  return <div className='
    w-full
  '>
    <Image
      alt='resume image preview'
      src={ResumeImagePreview}
      style={{
        width: '100%',
      }}
    />
  </div>
}