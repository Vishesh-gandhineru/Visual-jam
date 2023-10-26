export default function Layout (props) {
    return  (
        <main className="Layout  max-w-[1600px] m-auto p-4 md:p-9  bg-[#e8e8e8]">
            <section className="bg-[#fff] px-6 md:px-9 pt-5">
            {props.children}
            </section>
        </main>
    )
    
}