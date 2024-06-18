import StartSection from "@/components/sections/start/StartSection";

export default function Home() {
  return <>
    <StartSection />
    <section className="h-20 bg-darkGreen">
      Specialist Section
    </section>
    <section className="h-20 bg-lighGreen">
      CV Section
    </section>
    <section className="h-20 bg-light">
      Contact Section
    </section>
  </>
}
