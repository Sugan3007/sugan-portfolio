import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000, suffix = "" }) {

  const [count, setCount] = useState(0);

  const counterRef = useRef(null);

  const started = useRef(false);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;

        const increment = end / (duration / 16);

        const timer = setInterval(() => {

          start += increment;

          if (start >= end) {

            setCount(end);

            clearInterval(timer);

          } else {

            setCount(Math.floor(start));

          }

        }, 16);

      },

      {
        threshold: 0.5,
      }

    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();

  }, [end, duration]);

  return (

    <span ref={counterRef}>

      {count}{suffix}

    </span>

  );

}

export default Counter;