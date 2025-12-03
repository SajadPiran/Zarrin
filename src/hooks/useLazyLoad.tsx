import {type RefObject, useEffect, useRef, useState} from "react";

let observer : IntersectionObserver | null = null;
const callbacks = new Map();

function getObserver( options : IntersectionObserverInit ): IntersectionObserver {
    if (observer) return observer;

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const callback = callbacks.get(entry.target);
                    if (callback && observer) {
                        callback();
                        observer.unobserve(entry.target);
                        callbacks.delete(entry.target);
                    }
                }
            });
        },
        options
    );

    return observer;
}

export function useLazyLoad( options : IntersectionObserverInit ): [ RefObject<HTMLElement | null>, boolean ] {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);
 
    useEffect( () => {
        const el = ref.current;
        if (!el) return;

        const obs = getObserver(options);
        callbacks.set(el, () => setVisible(true) );
        obs.observe(el);

        return () => {
            obs.unobserve(el);
            callbacks.delete(el);
        };
    }, [options] );

    return [ref, visible];
}
