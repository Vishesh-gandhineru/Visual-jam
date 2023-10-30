import Hero from "../Components/Home components/Hero"
import Work from "../Components/Home components/Worksection"
import Services from "../Components/Home components/Services"
import { Helmet } from "react-helmet"
export default function Home() {
  return (
    <section className="Hero">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Visual Jam</title>
            </Helmet>
      <Hero/>  
      <Work/>  
      <Services />
    </section>
  )
}
