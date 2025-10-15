"use client";

import React from "react";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import Particles from "./components/Particles/Particles";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import Threads from "./components/Threads/Threads";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Image from "next/image";
import purli from "../assets/purli.png";
import GradientText from "./components/GradientText/GradientText";
import ShinyText from "./components/ShinyText/ShinyText";
import "./globals.css";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-x-5 items-center">
        <GooeyNav
          initialActiveIndex={0}
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      <section
        className="relative flex h-screen w-full items-center justify-center"
        id="home"
      >
        <div className="absolute -z-10 h-full w-full">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 items-center gap-12 text-center md:grid-cols-2 md:gap-16 md:text-left">
            <div
              className="flex flex-col items-center gap-4 md:items-start order-last md:order-first"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold text-white md:text-2xl">
                  Hi, I'm
                </h1>
                <TrueFocus
                  sentence="Berlian Purli Novarianto"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="white"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
              <div>
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-sm md:text-xl font-extrabold lg:text-6xl"
                >
                  Website Developer
                </GradientText>
              </div>
            </div>
            <div
              className="flex items-center justify-center"
              data-aos="fade-left"
            >
              <Image
                src={purli}
                alt="Foto Berlian Purli"
                className="h-48 w-48 rounded-full object-cover md:h-72 md:w-72 lg:h-96 lg:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full min-h-screen flex items-center justify-center py-16 px-4"
        id="about"
      >
        <div className="absolute top-0 left-0 -z-10 w-full h-full">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Kolom Profile Card */}
            <div
              className="flex items-center justify-center"
              data-aos="fade-right"
            >
              <ProfileCard
                name="B.P. Novarianto"
                title="Website Developer"
                handle="purlicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl={purli}
                miniAvatarUrl={purli}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
            {/* Kolom Teks About Me */}
            <div className="text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                About Me
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Hello Strangers! I am Berlian Purli Novarianto, a Full Stack
                Developer with a passion for creating dynamic and responsive web
                applications. With expertise in both front-end and back-end
                technologies, I enjoy building seamless user experiences and
                robust server-side solutions. My goal is to leverage my skills
                to contribute to innovative projects that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full min-h-screen flex items-center justify-center px-4"
        id="contact"
      >
        <div className="container mx-auto text-center">
          <ShinyText
            text="Contact Me"
            disabled={false}
            speed={2}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
          />
          <p className="text-base md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, inquiries, or just a
            friendly chat!
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-10 mt-8">
            <a
              href="https://github.com/BerlianPurliN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
                className="h-10 w-10 md:h-12 md:w-12 transition-transform hover:scale-110"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/berlian-purli-novarianto-8b0077345/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
                className="h-10 w-10 md:h-12 md:w-12 transition-transform hover:scale-110"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a
              href="https://wa.me/6285730560388"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
                className="h-10 w-10 md:h-12 md:w-12 transition-transform hover:scale-110"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
