import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../styles/PixelTransition.css';

const PixelTransition = ({ children, delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Configuración inicial
    gsap.set(element, {
      opacity: 0,
      scale: 0.9,
      filter: "url(#pixel-filter)"
    });

    // Crea la animación pero la pausa inicialmente
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      }
    });

    // Secuencia de animación
    animation
      .to(element, {
        opacity: 1,
        duration: 0.5,
        delay
      })
      .to(element, {
        scale: 1,
        duration: 0.5
      }, "-=0.3")
      .to(element, {
        filter: "none",
        duration: 0.8
      }, "-=0.3");

    return () => {
      animation.kill();
    };
  }, [delay]);

  return (
    <>
      {/* SVG Filter para efecto pixelado */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="pixel-filter">
          <feFlood x="4" y="4" height="2" width="2"/>
          <feComposite width="10" height="10"/>
          <feTile result="a"/>
          <feComposite in="SourceGraphic" in2="a" operator="in"/>
          <feMorphology operator="dilate" radius="1"/>
        </filter>
      </svg>

      <div ref={elementRef} className="pixel-transition">
        {children}
      </div>
    </>
  );
};

export default PixelTransition;
