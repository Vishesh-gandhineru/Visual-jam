import TeamsGrid from "../Components/TeamsGrid"

export default function Team() {
  return (
    <main>
      <section className="my-[50px]">
        <div className="WorktitleSection mb-2 md:mb-20 ">
          <h1 className="text-center font-semibold text-mob-h1 md:text-[80px] md:mt-[30px] uppercase">
          OUR CREW
          </h1>
          <h4 className="text-center text-mob-h7 mt-3 font-normal md:text-[35px] ">
          TEAM WORK MAKES DREAM WORK.
          </h4>
        </div>
        <TeamsGrid />
        </section>
    </main>
  )
}
