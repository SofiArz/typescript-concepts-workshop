import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap'

export const useCounter = ({ maxCount = 10 }) => {

    const [counter, setCounter] = useState(0)
    const elementToAnimate = useRef<any>(null);

    const timeline = useRef( gsap.timeline() )

    const handleClick = () => {
      if(counter < maxCount)
        setCounter(prev => prev + 1)
    }
  
    useLayoutEffect(() => {
        if(!elementToAnimate.current) return

        timeline.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                        .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
                        .pause()
    }, []);
    
    useEffect(() => {
        timeline.current.play(0)   
    }, [counter]);
    
    return{
        counter,
        handleClick,
        elementToAnimate
    }

}