import Image, {type ImageProps} from "./Image.tsx";
import {Link} from "react-router-dom";

type PostType = ImageProps & {
    id : string | number;
    title : string;
    description : string;
    category : string;
    date : string;
    link : string;
}
function Post( { title , description , category , date , link , src , alt , caption , style } : PostType ){

    return(
        <article className="w-full flex flex-col gap-5">

            <header className="w-full flex flex-col gap-3">
                <Image src={src} alt={alt} caption={caption} style={style} />

                <div className="w-full flex gap-3 mt-5">
                    <span className="text-xs font-bold text-black-2">{category}</span>
                    <span className="text-xs font-medium text-[#999999]">{date}</span>
                </div>

                <h3 className="font-bold md:text-lg lg:text-2xl">{title}</h3>
            </header>

            <section className="w-full flex flex-col gap-5">

                <p className="text-xs md:text-sm lg:text-base text-[#666666] leading-7">
                    {description}
                </p>

                <Link to={link} className="font-bold lg:text-lg text-primary underline">
                    Read More...
                </Link>

            </section>

        </article>
    )

}
export type { PostType };
export default Post;