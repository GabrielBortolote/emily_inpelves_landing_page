import { theme } from "@/../tailwind.config";

// SVG's
import Mail from "./Mail";
import Phone from "./Phone";
import ShinningWomanFace from "./ShiningWomanFace";
import Waves from "./Waves";

export default function ContactSection(){
  return <section className='
    bg-light
    p-12 md:p-24 lg:p-36
    pb-48 xs:pb-56
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
        text-6xl sm:text-8xl md:text-7xl lg:text-9xl
        font-doulaise
        pb-12 sm:pb-24
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
      w-[60%] md:w-[40%]
      right-0 bottom-[15%]
      translate-x-[55%] md:translate-x-[30%]
      md:translate-y-[40%]
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
        theme.extend.colors.darkGreen,
        theme.extend.colors.lightSkin,
      ]} />
    </div>
  </section>
}

function ContactInfoItem({children, text}){
  return <div className='
    font-meow
    text-2xl xs:text-4xl lg:text-5xl
    flex flex-row
    items-center
  '>
    <div className='
      w-16 sm:w-24
      flex-grow-0
      pr-2 xs:pr-4
    '>
      {children}
    </div>
    <div>
      {text}
    </div>
  </div>
}