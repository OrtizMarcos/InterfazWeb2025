import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../PixelScroll.css';

gsap.registerPlugin(ScrollTrigger);

const PixelScroll = () => {
  useEffect(() => {
    // Crear un canvas para el efecto de píxeles
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Configurar el canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = 'pixel-canvas';
    canvas.className = 'pixel-canvas';
    document.body.appendChild(canvas);

    // Variables para el efecto de píxeles
    const pixelSize = 10;
    const columns = Math.ceil(canvas.width / pixelSize);
    const rows = Math.ceil(canvas.height / pixelSize);

    // Función para dibujar el efecto de píxeles
    const drawPixelEffect = (progress) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar píxeles con opacidad basada en el scroll
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * pixelSize;
          const y = j * pixelSize;

          // Calcular opacidad basada en la posición y el progreso
          const distance = Math.sqrt(
            Math.pow((i - columns / 2) / columns, 2) +
            Math.pow((j - rows / 2) / rows, 2)
          );

          const opacity = Math.max(0, Math.sin(distance * 10 + progress * Math.PI * 2));

          // Dibujar píxel
          ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.1})`;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    };

    // Crear ScrollTrigger para cada sección
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          // Actualizar efecto de píxeles basado en el progreso del scroll
          drawPixelEffect(self.progress + index * 0.25);
        }
      });
    });

    // Limpiar al desmontar
    return () => {
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // Este componente no renderiza nada visible directamente
};

export default PixelScroll;