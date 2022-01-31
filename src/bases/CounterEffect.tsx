import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5)
    const counterHTMLElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
      if(counter < MAXIMUN_COUNT)
        setCounter(prev => prev + 1)
    }
  
    useEffect(() => {
     if(counter < MAXIMUN_COUNT) return

     console.log('%cMaximum value reached', 'color:red')
    
     const timeline = gsap.timeline()

     timeline.to(counterHTMLElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
             .to(counterHTMLElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
     
     
    }, [counter]);
    


    return (
      <>
        <h1>Counter Effect: { counter }</h1>
        <h2 ref={ counterHTMLElement }>{ counter }</h2>
        <button onClick={ handleClick }>
            +1
        </button>
      </>
  );

};
