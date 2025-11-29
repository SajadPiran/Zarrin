import Header from "../../components/Header.tsx";
import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            <Header />
            <main className="flex flex-col items-center">

                {/* Hero Section */}
                <section className="w-full flex flex-col items-center bg-primary py-10 xl:py-24 padding-x *:text-white" id="hero-section">

                    {/* Post */}
                    <article className="container flex flex-col justify-center md:flex-row md:items-center gap-14">

                        <header className="w-full flex flex-col gap-5 lg:gap-7">

                            <h1 className="text-xs lg:text-base font-bold tracking-wider mb-4">Featured Post</h1>
                            <h2 className="max-w-[280px] lg:max-w-[540px] font-bold text-4xl lg:text-5xl xl:text-6xl lg:leading-16 xl:leading-18">How AI will Change the Future</h2>
                            <p className="max-w-[450px] text-xs lg:text-base leading-6 lg:leading-8">The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
                            <Link to='post' className="w-fit font-bold text-xs lg:text-sm text-black bg-white px-8 lg:px-12 py-3 lg:py-4 rounded-md">
                                Read more
                            </Link>

                        </header>
                        <figure className="w-full max-w-[608px] max-h-[576px] rounded-xl overflow-hidden z-[2]">
                            <img src="./assets/images/ai.webp" alt="how-ai-will-change-the-future" className="w-full h-full md:min-h-[300px] lg:min-h-[400px] xl:min-h-[576px]"/>
                            <figcaption className="sr-only">how-ai-will-change-the-future</figcaption>
                        </figure>

                    </article>

                </section>

            </main>
        </>
    )

}
export default Home;