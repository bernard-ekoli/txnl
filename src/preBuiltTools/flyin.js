import { useEffect, useRef, useState } from "react";

export const useInView = (options) => {
    const ref = useRef();
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIntersecting(true);
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    return [ref, isIntersecting];
};
