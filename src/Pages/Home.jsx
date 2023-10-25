import Hero from "../Components/Home components/Hero"
import Work from "../Components/Home components/Worksection"
import Services from "../Components/Home components/Services"
export default function Home() {
  return (
    <section className="Hero">
      <Hero/>  
      <Work/>  
      <Services />
    </section>
  )
}
