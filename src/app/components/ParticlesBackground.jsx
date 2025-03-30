'use client';

import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Using loadSlim instead of loadFull to avoid compatibility issues
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 30, // Zmniejszona wartość FPS dla wolniejszej animacji
        particles: {
          number: {
            value: 50, // Zmniejszona liczba cząsteczek
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.5, // Zmniejszona nieprzezroczystość
            random: true,
            anim: {
              enable: true,
              speed: 0.5, // Wolniejsza animacja przezroczystości
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 2, // Wolniejsza animacja rozmiaru (jeśli włączona)
              size_min: 0.1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3, // Mniej widoczne linie
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5, // Znacznie niższa prędkość ruchu (było 6)
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
            bounce: false,
            attract: { // Dodanie delikatnego przyciągania
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { // Dodanie efektu paralaksy 
                enable: true,
                force: 40,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.8, // Dłuższy czas trwania odpychania
            },
            push: {
              quantity: 2, // Mniej cząsteczek dodawanych po kliknięciu
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;