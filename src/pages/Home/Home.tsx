import Header from "../../components/Header.tsx";
import {Link} from "react-router-dom";
import Image from "../../components/Image.tsx";
import Post, {type PostType} from "../../components/Post.tsx";
import Footer from "../../components/Footer.tsx";

function Home() {

    const recentPosts : Array<PostType> = [
        {
            id : 1 , category : 'DEVELOPMENT' , date : '16March 2023' ,
            title : 'How to make a Game look more attractive with New VR & AI Technology',
            description : 'Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.\n',
            src : './assets/images/posts/minh-pham-HI6gy-p-WBI-unsplash.webp',
            alt : 'how-to-make-a-game-look-more-attractive-with-new-vr-and-ai-technology',
            caption : 'how-to-make-a-game-look-more-attractive-with-new-vr-and-ai-technology',
            link : 'post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }

        },
        {
            id : 2 , category : 'Travel' , date : '13March 2023' ,
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
            id : 3 , category : 'DEVELOPMENT' , date : '11March 2023' ,
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
            id : 4 , category : 'Sports' , date : '11March 2023' ,
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
    let firstRecentPost : PostType | undefined = undefined;
    if( recentPosts.length >= 4 ){
        firstRecentPost = recentPosts.shift();
        firstRecentPost!.style = {
            figure : 'w-full xl:min-w-[700px] h-[300px] md:h-[420px] rounded-2xl overflow-hidden',
            image : 'w-full h-full'
        }
    }

    const popularPosts : Array<PostType> = [
        {
            id : 5 , category : 'Travel' , date : '13 March 2023' ,
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
            id : 6 , category : 'DEVELOPMENT' , date : '11 March 2023' ,
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
            id : 7 , category : 'Sports' , date : '10 March 2023' ,
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
            id : 8 , category : 'Travel' , date : '13 March 2023' ,
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
            id : 9 , category : 'DEVELOPMENT' , date : '13 March 2023' ,
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
            id : 10 , category : 'Sports' , date : '10 March 2023' ,
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
    ];

    return (
        <>
            <Header />
            <main className="flex flex-col items-center">

                <h1 className="sr-only">Hero Section</h1>

                {/* Hero Section */}
                <section className="w-full flex flex-col items-center bg-primary py-10 xl:py-24 padding-x *:text-white" id="hero-section">

                    {/* Post */}
                    <article className="container flex flex-col justify-center md:flex-row md:items-center gap-14">

                        <header className="w-full flex flex-col gap-5 lg:gap-7">

                            <h2 className="text-xs lg:text-base font-bold tracking-wider mb-4">Featured Post</h2>
                            <h3 className="max-w-[280px] lg:max-w-[540px] font-bold text-4xl lg:text-5xl xl:text-6xl lg:leading-16 xl:leading-18">How AI will Change the Future</h3>
                            <p className="max-w-[450px] text-xs lg:text-base leading-6 lg:leading-8">The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
                            <Link to='post' className="w-fit font-bold text-xs lg:text-sm text-black bg-white px-8 lg:px-12 py-3 lg:py-4 rounded-md">
                                Read more
                            </Link>

                        </header>
                        <Image
                            src="./assets/images/posts/ai.webp"
                            alt="how-ai-will-change-the-future"
                            caption="how-ai-will-change-the-future"
                            style={ {
                                figure : 'w-full min-h-[200px] max-w-[608px] max-h-[576px] rounded-xl overflow-hidden z-[2]',
                                image : 'w-full h-full md:min-h-[300px] lg:min-h-[400px] xl:min-h-[576px]'
                            } }
                        />

                    </article>

                </section>

                {/* Recent Posts */}
                <section className="w-full flex flex-col items-center gap-18 mt-20 padding-x">

                    <header className="container flex items-center justify-between">

                        <h2 className="text-2xl lg:text-4xl font-bold">Our Recent Post</h2>
                        <Link to='recent-posts' className="w-fit font-bold text-xs lg:text-sm text-white bg-primary px-8 lg:px-12 py-3 rounded-md">
                            Read more
                        </Link>

                    </header>

                    <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        {/* First Recent Posts */}
                        { (firstRecentPost && recentPosts.length >= 3) &&
                            <article className="w-full flex flex-col md:flex-row gap-6 xl:gap-14 md:col-span-2 lg:col-span-3 mb-16">

                                <Image src={firstRecentPost.src} alt={firstRecentPost.alt} caption={firstRecentPost.caption} style={firstRecentPost.style} />

                                <section className="w-full flex flex-col gap-5">

                                    <header className="w-full flex flex-col gap-3">

                                        <div className="w-full flex gap-3 mt-5">
                                            <p className="text-xs font-bold text-black-2">{firstRecentPost.category}</p>
                                            <p className="text-xs font-medium text-[#999999]">{firstRecentPost.date}</p>
                                        </div>

                                        <h3 className="font-bold md:text-lg lg:text-3xl">{firstRecentPost.title}</h3>
                                    </header>

                                    <p className="text-xs md:text-sm lg:text-base text-[#666666] leading-7 line-clamp-6">
                                        {firstRecentPost.description}
                                    </p>

                                    <Link to={firstRecentPost.link} className="font-bold text-primary border border-primary rounded-lg px-7 py-2.5 w-fit">
                                        Read More...
                                    </Link>

                                </section>

                            </article>
                        }

                        { recentPosts.map( post => <Post key={`recentPost-${post.id}`} {...post} />  ) }
                    </div>

                </section>

                {/* Popular Posts */}
                <section className="w-full flex flex-col items-center gap-10 mt-20 padding-x">

                    <header className="container flex items-center justify-between">

                        <h2 className="text-2xl lg:text-4xl font-bold">Popular Post</h2>
                        <Link to='popular-posts' className="w-fit font-bold text-xs lg:text-sm text-white bg-primary px-8 lg:px-12 py-3 rounded-md">
                            Read more
                        </Link>

                    </header>

                    <div className="container grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        { popularPosts.map( post => <Post key={`popularPost-${post.id}`} {...post} />  ) }
                    </div>

                </section>

            </main>
            <Footer/>
        </>
    )

}
export default Home;