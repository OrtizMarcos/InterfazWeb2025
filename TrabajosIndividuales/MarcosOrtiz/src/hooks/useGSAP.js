import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registramos el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  // Referencias para los elementos que queremos animar
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Animación inicial para el hero
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      }
    );

    // Animación de píxeles para transición entre secciones
    const pixelateIn = (element, trigger) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        }
      });

      // Efecto de pixelado al entrar en la vista
      tl.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.8,
          filter: "blur(20px)"
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out"
        }
      );

      return tl;
    };

    // Aplicamos animaciones a las diferentes secciones
    pixelateIn(aboutRef.current, aboutRef.current);
    pixelateIn(menuRef.current, menuRef.current);
    pixelateIn(contactRef.current, contactRef.current);

    // Limpieza de animaciones cuando se desmonta el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { heroRef, aboutRef, menuRef, contactRef };
};