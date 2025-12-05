import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Image, {type ImageType} from "../../components/Image.tsx";
import Post, {type PostType} from "../../components/Post.tsx";
import {Link} from "react-router-dom";

function SinglePost() {

    const postImage : ImageType = {
        src : './assets/images/posts/minh-pham-HI6gy-p-WBI-unsplash.webp',
        alt : 'how-to-make-a-game-look-more-attractive-with-new-vr-and-ai-technology',
        caption : 'how-to-make-a-game-look-more-attractive-with-new-vr-and-ai-technology',
        style : {
            figure : 'w-full h-[clamp(200px,40vw,600px)] rounded-2xl overflow-hidden mt-3',
            image : 'w-full h-full'
        }
    };
    const popularPosts : Array<PostType> = [
        {
            id : 8 , category : 'Travel' , date : '13 March 2023' ,
            title : 'Who is the best singer on chart?Know him?',
            description : 'chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  ',
            src : './assets/images/posts/austin-neill-hgO1wFPXl3I-unsplash.webp',
            alt : 'who-is-the-best-singer-on-chart-know-him',
            caption : 'who-is-the-best-singer-on-chart-know-him',
            link : '/post',
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
            link : '/post',
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
            link : '/post',
            style : {
                figure : 'w-full h-[250px] xl:h-[300px] 2xl:h-[360px] rounded-2xl overflow-hidden',
                image : 'w-full h-full'
            }
        },
    ];

    return (

        <>
            <Header />
            <main className="flex flex-col items-center padding-x">

                <header className="container flex flex-col items-center gap-5 mt-12">

                    <ul className="w-full max-w-[1280px] flex gap-3">
                        <li className="text-xs font-bold text-black-2">DEVELOPMENT</li>
                        <li className="text-xs font-medium text-[#999999]">16 March 2023</li>
                    </ul>

                    <h1 className="max-w-[1280px] font-bold text-2xl md:text-3xl xl:text-5xl xl:leading-16">How to make a Game look more attractive with New VR & AI Technology</h1>

                    <Image {...postImage} />

                </header>

                {/* Content */}
                <section className="container flex flex-col items-center gap-5 post-content lg:px-16 xl:px-24">
                    <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                    </p>
                    <div className="quote">
                        <p>“People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.”</p>
                        <small className="font-medium text-sm">– Pedro Domingos</small>
                    </div>
                    <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                        \\Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                    </p>
                    <Image src="assets/images/posts/image.png" alt="post-image" caption="post-image" style={{
                        figure : 'w-full  h-[clamp(200px,35vw,500px)] rounded-2xl overflow-hidden',
                        image : 'w-full h-full'
                    }}/>
                    <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                    </p>
                </section>

                {/* Popular Posts */}
                <section className="w-full flex flex-col items-center gap-10 mt-20">

                    <header className="container flex items-center justify-between">

                        <h2 className="text-2xl lg:text-4xl font-bold">Popular Post</h2>
                        <Link to='popular-posts' className="w-fit font-bold text-xs lg:text-sm text-white bg-primary px-8 lg:px-12 py-3 rounded-md">
                            Read more
                        </Link>

                    </header>

                    <div className="container grid gap-x-4 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        { popularPosts.map( post => <Post key={`popularPost-${post.id}`} {...post} />  ) }
                    </div>

                </section>


            </main>
            <Footer/>
        </>
    );
}

export default SinglePost;