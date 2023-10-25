import WorkGrid from "../Components/WorkGrid"

export default function Work() {
  return (
    <main>
      <section className="my-[50px]">
        <div className="WorktitleSection mb-2 md:mb-20 ">
          <h1 className="text-center font-semibold text-mob-h1 md:text-[80px] md:mt-[30px] uppercase">
          WORK
          </h1>
          <h4 className="text-center text-mob-h7 mt-3 font-normal md:text-[35px] ">
          The applications of our art are limited only by your imagination
          </h4>
        </div>
        <WorkGrid />
        </section>
    </main>
  )
}
