import {useLazyLoad} from "../hooks/useLazyLoad.tsx";
import {useEffect, useRef} from "react";
type ImageProps = {
    src : string,
    alt : string,
    caption : string,
    style : {
        figure : string,
        image : string
    }
}

function Image( { src, alt , caption , style }  : ImageProps ){

    const [ref , visible] = useLazyLoad( { threshold : 0.5 } );
    const imageRef = useRef<HTMLImageElement>(null);
    const imageLoaderRef = useRef<HTMLDivElement>(null);
    const loadImage = () => {
        if(imageLoaderRef.current){
            imageLoaderRef.current.classList.add('fade');
            setTimeout(()=>{
                if(imageLoaderRef.current){
                    imageLoaderRef.current.remove();
                }
            } , 2000)
        }
    }
    useEffect( ()=> {
        if(imageRef.current && visible){
            imageRef.current.src = imageRef.current.getAttribute('data-src') as string;
        }
    } );

    return(
        <figure className={style.figure} ref={ref}>
            <div ref={imageLoaderRef} className="lazy-image-loader"></div>
            <img data-src={src} alt={alt} className={style.image} loading="lazy" ref={imageRef} onLoad={loadImage} />
            <figcaption className="sr-only">{caption}</figcaption>
        </figure>
    )

}
export type {ImageProps};
export default Image;