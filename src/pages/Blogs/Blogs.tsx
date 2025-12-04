import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Post, {type PostType} from "../../components/Post.tsx";

function Blogs(){

    const posts : Array<PostType> = [
        {
            id : 11 , category : 'Travel' , date : '13 March 2023' ,
            title : 'Train Or Bus Journey?Which one suits?',
            description : 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ',
            src : './assets/images/posts/martin-sanchez-pfkzBUh4KyA-unsplash.webp',
            alt : 'train-or-bus-journey-which-one-suits',
            caption : 'train-or-bus-journey-which-one-suits',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }
        },
        {
            id : 12 , category : 'DEVELOPMENT' , date : '11 March 2023' ,
            title : 'Best Website to research for your  next project',
            description : 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs',
            src : './assets/images/posts/igor-miske-JVSgcV8_vb4-unsplash.webp',
            alt : 'best-website-to-research-for-your-next-project',
            caption : 'best-website-to-research-for-your-next-project',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }
        },
        {
            id : 13 , category : 'Sports' , date : '10 March 2023' ,
            title : 'How to Be a Dancer in 2023 with proper skills?',
            description : 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ',
            src : './assets/images/posts/breakreate-tFA3kJcMUco-unsplash.webp',
            alt : 'how-to-be-a-dancer-in-2023-with-proper-skills',
            caption : 'how-to-be-a-dancer-in-2023-with-proper-skills',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }
        },
        {
            id : 14 , category : 'Travel' , date : '13 March 2023' ,
            title : 'Who is the best singer on chart?Know him?',
            description : 'chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  ',
            src : './assets/images/posts/austin-neill-hgO1wFPXl3I-unsplash.webp',
            alt : 'who-is-the-best-singer-on-chart-know-him',
            caption : 'who-is-the-best-singer-on-chart-know-him',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }
        },
        {
            id : 15 , category : 'DEVELOPMENT' , date : '13 March 2023' ,
            title : 'How to start export import business from home?',
            description : 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ',
            src : './assets/images/posts/Image Placeholder.png',
            alt : 'how-to-start-export-import-business-from-home',
            caption : 'how-to-start-export-import-business-from-home',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }
        },
        {
            id : 16 , category : 'Sports' , date : '10 March 2023' ,
            title : 'Make some drinks with chocolates chocolates and milk',
            description : 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive',
            src : './assets/images/posts/Image Placeholder2.png',
            alt : 'make-some-drinks-with-chocolates-chocolates-and-milk',
            caption : 'make-some-drinks-with-chocolates-chocolates-and-milk',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }
        },
        {
            id : 17 , category : 'Travel' , date : '13March 2023' ,
            title : '8 Rules of Travelling In Sea You Need To Know ',
            description : 'Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ',
            src : './assets/images/posts/shifaaz-shamoon-qtbV_8P_Ksk-unsplash.webp',
            alt : 'travelling-in-sea-you-need-to-know',
            caption : 'travelling-in-sea-you-need-to-know',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }

        },
        {
            id : 18 , category : 'DEVELOPMENT' , date : '11March 2023' ,
            title : 'How to build strong portfolio and get a Job in UI/UX',
            description : 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ',
            src : './assets/images/posts/carl-heyerdahl-KE0nC8-58MQ-unsplash.webp',
            alt : 'how-to-build-strong-portfolio-and-get-a-job-in-ui-ux',
            caption : 'how-to-build-strong-portfolio-and-get-a-job-in-ui-ux',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }

        },
        {
            id : 19 , category : 'Sports' , date : '11March 2023' ,
            title : 'How to Be a Professional Footballer in 2023',
            description : 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive',
            src : './assets/images/posts/jack-monach-5gcM189YA7o-unsplash.webp',
            alt : 'how-to-be-a-professional-footballer-in-2023',
            caption : 'how-to-be-a-professional-footballer-in-2023',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }

        }
    ];

    return (
        <>
            <Header />
            <main className="flex flex-col items-center mt-10 lg:mt-18 gap-14 lg:gap-y-28 ">

                <h1 className="sr-only">Blogs Page</h1>
                <header className="w-full flex flex-col items-center gap-3 padding-x">
                    <small className="text-xs text-[#666666] font-bold">OUR BLOGS</small>
                    <h2 className="max-w-[195px] md:max-w-none font-bold text-2xl text-black-2 md:text-3xl xl:text-4xl text-center">Find our all blogs from here</h2>
                    <p className="max-w-[531px] text-xs text-[#666666] text-center mt-2.5 leading-6">our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along</p>
                </header>

                <section className="container grid gap-x-4 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 padding-x">
                    { posts.map( post => <Post key={`post-${post.id}`} {...post} />  ) }
                </section>

            </main>
            <Footer />
        </>
    )
}
export default Blogs;