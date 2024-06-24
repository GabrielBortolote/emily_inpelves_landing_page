import { theme } from "@/../tailwind.config";

// SVG's
import Mail from "./Mail";
import Phone from "./Phone";
import ShinningWomanFace from "./ShiningWomanFace";
import Waves from "./Waves";

export default function ContactSection(){
  return <section className='
    bg-light
    p-[10%]
    pb-[30%] md:pb-12
    text-darkGreen
    flex flex-col
    justify-center md:justify-start
    relative
    overflow-hidden
  '>
    <div className='
      flex flex-col
    '>
      <h2 className='
        text-4xl xs:text-7xl lg:text-9xl
        font-doulaise
        pb-8 xs:pb-12 sm:pb-24
        text-center md:text-start
      '>
        Meus contatos
      </h2>
      <ContactInfoItem text="+55 (61) 8183-8132">
        <Phone fill={theme.extend.colors.lightSkin} />
      </ContactInfoItem>
      <ContactInfoItem text="emilylealg@gmail.com">
        <Mail fill={theme.extend.colors.lightSkin} />
      </ContactInfoItem>
    </div>
    <div className='
      absolute
      w-[400px] lg:w-[500px]
      right-0
      -bottom-[100px]
      translate-x-[30%]
      hidden md:block
      z-20
    '>
      <ShinningWomanFace fill={theme.extend.colors.darkGreen} />
    </div>
    <div className='
      md:hidden
      absolute
      w-full
      bottom-0
      left-0
      translate-y-[40%]
      z-10
    '>
      <Waves fill={[
        theme.extend.colors.darkGreen,
        theme.extend.colors.lightGreen,
        theme.extend.colors.darkGreen,
      ]} />
    </div>
  </section>
}

function ContactInfoItem({children, text}){
  return <div className='
    font-meow
    text-xl xs:text-3xl sm:text-4xl
    flex flex-row
    items-center
  '>
    <div className='
      w-8 xs:w-12 sm:w-24
      flex-grow-0
      pr-2 xs:pr-4
      shrink-0
    '>
      {children}
    </div>
    <div>
      {text}
    </div>
  </div>
}