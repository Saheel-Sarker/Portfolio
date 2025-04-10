"use client";

import { use, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Slim version for smaller bundle size
import { useTheme } from "next-themes"; // Import useTheme

export function Fireflies() {
  const [init, setInit] = useState(false);
  const count= 25 // Default particle count
  const { resolvedTheme } = useTheme(); // Get the current theme
  console.log("Current theme:", resolvedTheme); // Log the current theme

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles Loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false, mode: ["repulse"] },
          // onHover: { enable: false, mode: "repulse" },
          onHover: { enable: true, mode: ["attract", "bubble"] },
        },
        modes: {
          push: { quantity: 1 },
          repulse: { distance: 100, duration: 1 },
          grab: { distance: 150, links: { opacity: 0.5 } },
          attract: { distance: 125, duration: 0.1, factor: 1 },
          bubble: { distance: 125, size: 6, duration: 1 },
          trail: { delay: 0.1, quantity: 5, length: 10 },
        },
      },
      particles: {
        color: { value: resolvedTheme === "dark" ? "#FFFFFF" : "#000000" }, 
        move: {
          enable: true,
          speed: 0.5, // Slower movement for floating effect
          random: false, // Adds variation to motion
          straight: false,
          direction: "none",
          outModes: {
            default: "bounce",
          },
          attract: {
            enable: false, // Disabling this makes movement more fluid
          },
        },
        number: {
          value: count, // Adjust the number of particles here
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: 0.8,
          random: true,
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 4,
          random: true,
        },
      },
      detectRetina: true,
    }),
    [resolvedTheme, count] // Add count to dependencies
  );
  
  if (init) {
    return <Particles id="fireflies" particlesLoaded={particlesLoaded} options={options} className="absolute inset-0 w-full h-full pointer-events-none"/>;
  }

  return null;
}
