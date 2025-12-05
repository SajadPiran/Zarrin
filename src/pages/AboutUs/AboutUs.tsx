import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Image from "../../components/Image.tsx";
import {Link} from "react-router-dom";

function AboutUs(){
    return(
        <>
            <Header/>
            <main className="flex flex-col items-center mt-10 lg:mt-18 gap-14 lg:gap-y-28">

                <h1 className="sr-only">AboutUs Page</h1>
                <header className="w-full flex flex-col items-center gap-3 padding-x">
                    <p className="text-xs text-[#666666] font-bold">ABOUT US</p>
                    <h2 className="max-w-[195px] md:max-w-[768px] font-bold text-2xl text-black-2 md:text-3xl xl:text-5xl text-center md:leading-16">Creative Blog Writting and publishing site</h2>
                    <p className="max-w-[1000px] text-xs xl:text-base text-[#666666] text-center mt-2.5 leading-6 xl:leading-8">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                </header>
                <Image src="assets/images/cherrydeck-UpsEF48wAgk-unsplash.webp" alt="how-we-work" caption="how-we-work" style={
                    {
                        figure : 'container h-[clamp(200px,40vw,600px)] rounded-2xl overflow-hidden',
                        image : 'w-full h-full'
                    }
                } />
                <section id="how-we-work" className="w-full flex flex-col items-center mt-16 gap-10 padding-x">
                    <header className="container flex flex-col gap-4">
                        <p className="text-xs text-[#666666] font-bold">HOW WE WORK</p>
                        <h2 className="max-w-[500px] font-bold text-2xl text-black-2 md:text-3xl xl:text-5xl md:leading-16">
                            I will show you how our team works
                        </h2>
                    </header>

                    <ol className="container grid gap-4 grid-cols-1 md:grid-cols-3">
                        <li className="w-full flex flex-col gap-3 bg-primary p-4 rounded-2xl">
                            <span className="font-bold text-5xl text-white">01</span>
                            <h3 className="font-bold text-white">Brainstorming</h3>
                            <p className="text-xs text-white/70 leading-5">
                                Bring to the table win-win survival strategies to ensure proactive domination...
                            </p>
                            <Link to="/brainstorming" className="w-fit text-xs font-bold text-white mt-auto pb-2 border-b-[3px] border-b-white">
                                Learn More
                            </Link>
                        </li>

                        <li className="w-full flex flex-col gap-3 p-4 rounded-2xl">
                            <span className="font-bold text-5xl text-[#666666]">02</span>
                            <h3 className="font-bold text-primary">Analysing</h3>
                            <p className="text-xs text-[#666666] leading-5">Capitalize on low hanging fruit...</p>
                        </li>

                        <li className="w-full flex flex-col gap-3 p-4 rounded-2xl">
                            <span className="font-bold text-5xl text-[#666666]">03</span>
                            <h3 className="font-bold text-primary">Planning</h3>
                            <p className="text-xs text-[#666666] leading-5">Override the digital divide...</p>
                        </li>
                    </ol>
                </section>

            </main>
            <Footer/>
        </>
    )
}
export default AboutUs