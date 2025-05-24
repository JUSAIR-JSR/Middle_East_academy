"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface ParticleInterface {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update: () => void;
  draw: () => void;
}

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const particles: ParticleInterface[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60;

    class Particle implements ParticleInterface {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(220, 38, 38, ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Particle Background */}
      <canvas
        id="particle-canvas"
        className="absolute inset-0 w-full h-full opacity-30"
      />

      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-8 lg:pt-24 lg:pb-12 z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center w-full mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-28">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
              Master New Skills
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-white font-light">
              at Middle East Academy
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Transform your career with our industry-relevant courses and expert guidance in Manjeri.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer"
            >
              <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-medium shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:brightness-110">
                Explore Courses
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full mt-12"
        >
          <div className="flex justify-center items-center gap-6 sm:gap-10 lg:gap-16">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative">
              <Image
                src="/images/study01.webp"
                alt="Student studying"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 relative z-10">
              <Image
                src="/images/MEA_ADDVER.jpeg"
                alt="Middle East Academy building"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative">
              <Image
                src="/images/interview_person.webp"
                alt="Graduate attending interview"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
