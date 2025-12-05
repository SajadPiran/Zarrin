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
                    <small className="text-xs text-[#666666] font-bold">ABOUT US</small>
                    <h2 className="max-w-[195px] md:max-w-[768px] font-bold text-2xl text-black-2 md:text-3xl xl:text-5xl text-center md:leading-16">Creative Blog Writting and publishing site</h2>
                    <p className="max-w-[1000px] text-xs xl:text-base text-[#666666] text-center mt-2.5 leading-6 xl:leading-8">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                </header>
                <Image src="assets/images/cherrydeck-UpsEF48wAgk-unsplash.webp" alt="how-we-work" caption="how-we-work" style={
                    {
                        figure : 'container h-[clamp(200px,40vw,600px)] rounded-2xl overflow-hidden',
                        image : 'w-full h-full'
                    }
                } />
                <section className="w-full flex flex-col items-center mt-16 gap-10 padding-x">
                    <header className="container flex flex-col gap-8">
                        <small className="text-xs text-[#666666] font-bold">HOW WE WORK</small>
                        <h2 className="max-w-[500px] font-bold text-2xl text-black-2 md:text-3xl xl:text-5xl md:leading-16">I will show you how our team works</h2>
                    </header>
                    <div className="container grid gap-4 grid-cols-1 md:grid-cols-3">

                        <section className="w-full flex flex-col gap-3 bg-primary p-4 rounded-2xl">
                            <header className="w-full flex flex-col gap-6">
                                <span className="font-bold text-5xl text-white">01</span>
                                <h3 className="font-bold text-white">Brainstorming</h3>
                            </header>
                            <p className="text-xs text-white/70 leading-5">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated</p>
                            <Link to="#" className="w-fit text-xs font-bold text-white mt-auto pb-2 border-b-[3px] border-b-white">Learn More</Link>
                        </section>
                        <section className="w-full flex flex-col gap-3 p-4 rounded-2xl">
                            <header className="w-full flex flex-col gap-6">
                                <span className="font-bold text-5xl text-[#666666]">02</span>
                                <h3 className="font-bold text-primary">Analysing</h3>
                            </header>
                            <p className="text-xs text-[#666666] leading-5">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.</p>
                        </section>
                        <section className="w-full flex flex-col gap-3 p-4 rounded-2xl">
                            <header className="w-full flex flex-col gap-6">
                                <span className="font-bold text-5xl text-[#666666]">02</span>
                                <h3 className="font-bold text-primary">Analysing</h3>
                            </header>
                            <p className="text-xs text-[#666666] leading-5">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.</p>
                        </section>

                    </div>

                </section>

            </main>
            <Footer/>
        </>
    )
}
export default AboutUs