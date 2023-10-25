import WorkGrid from "../WorkGrid"

export default function Work() {
  return (
    <section className="OurWork my-10">
        <h2 className="text-mob-h2 uppercase font-semibold text-center md:text-left tracking-wider">Our Work</h2>
        <div className="workSection my-5">
            <WorkGrid />
        </div>
    </section>
  )
}
