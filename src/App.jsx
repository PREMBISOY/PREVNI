import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SITE_PASSWORD } from "./config";
import { traits } from "./data";

// Import assets
import avniImg from "../assets/images/avni_intro.png";
import premImg from "../assets/images/prem_intro.png";
import bgMusic from "../assets/audio/itni_si_baat_hai.mp3";
import ganesha from "../assets/svgs/ganpati.png";
import elephantLeft from "../assets/svgs/elephants-left.png";
import elephantRight from "../assets/svgs/elephants-right.png";
import avni_intro2 from "../assets/images/avni_intro2.jpeg";
import prem_intro2 from "../assets/images/prem_intro2.png";
import flute from "../assets/svgs/flute2.png";
import peacock from "../assets/svgs/peacock.png";

// Couple images for slideshow
import couple1 from "../assets/images/couple1.jpeg";
import couple2 from "../assets/images/couple2.jpeg";
import couple3 from "../assets/images/couple3.jpeg";
import couple4 from "../assets/images/couple4.jpeg";
import couple5 from "../assets/images/couple5.jpeg";
import couple6 from "../assets/images/couple6.jpeg";
import couple7 from "../assets/images/couple7.jpeg";
import couple8 from "../assets/images/couple8.jpeg";
import couple9 from "../assets/images/couple9.jpeg";
import couple10 from "../assets/images/couple10.jpeg";
import couple11 from "../assets/images/couple11.jpeg";
import couple12 from "../assets/images/couple12.jpeg";
import couple13 from "../assets/images/couple13.jpeg";
import couple14 from "../assets/images/couple14.jpeg";
import couple15 from "../assets/images/couple15.jpeg";
import couple16 from "../assets/images/couple16.jpeg";
import couple17 from "../assets/images/couple17.jpeg";
import couple18 from "../assets/images/couple18.jpeg";
import couple19 from "../assets/images/couple19.jpeg";
import couple20 from "../assets/images/couple20.jpeg";
import bg from "../assets/svgs/bg.png";

import communication from "../assets/images/Communication.jpeg"
import trust from "../assets/images/Trust.jpeg"
import fun from "../assets/images/Fun.jpeg"
import growth from "../assets/images/growth.jpeg"
import longterm from "../assets/images/Longterm.jpeg"
import emotional from "../assets/images/Emotional.jpeg"


const traitImgs = {communication, trust, fun, growth,longterm, emotional}


const images = [
  couple20, couple19, couple18, couple17, couple16, couple15, couple14,
  couple13, couple12, couple11, couple10, couple9, couple8, couple7, 
  couple6, couple5, couple4, couple3, couple2, couple1
];

// ---------------- Password Gate ----------------
function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);
  const audioRef = useRef(new Audio(bgMusic));

  function tryUnlock() {
    if (value.trim() === SITE_PASSWORD) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(() => console.log("Autoplay blocked"));
      onUnlock();
    } else {
      setErr(true);
      setTimeout(() => setErr(false), 2000);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ornamental relative">
      {/* Elephants */}
      <img src={elephantLeft} alt="Elephant Left" className="absolute left-20 top-60 w-80" />
      <img src={elephantRight} alt="Elephant Right" className="absolute right-20 top-60 w-80" />
      {/* Ganpati */}
      <img src={ganesha} alt="Ganpati" className="absolute top-10 w-48 mx-auto left-1/2 -translate-x-1/2" />

      <img
        src={flute}
        alt="Flute"
        className="absolute top-24 right-20 w-40 opacity-100 transform -translate-y-1/2"
      />
      <img
        src={peacock}
        alt="Peacock Feather"
        className="absolute top-24 left-20 w-40 opacity-100 transform -translate-y-1/2"
      />

      <div className="card p-8 text-center z-20 max-w-lg">
        <h2 className="text-2xl font-semibold" style={{ color: "#5A1A1A" }}>
          Private — Prem & Avni
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Enter the password to unlock this private profile
        </p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Password"
          className="mt-4 p-3 rounded-lg w-full border"
        />
        <div className="mt-4 flex gap-3 justify-center">
          <button
            onClick={tryUnlock}
            className="px-4 py-2 rounded-lg"
            style={{ background: "#C38F5A", color: "#fff" }}
          >
            Unlock
          </button>
        </div>
        {err && <div className="mt-3 text-red-600">Incorrect password</div>}
      </div>
    </div>
  );
}

// ---------------- Header ----------------
function Header() {
  return (
    <header className="w-full py-6 px-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur z-50">
      <div>
        <div style={{ color: "#5A1A1A", fontWeight: 700 }}>Avni ♥ Prem</div>
        <div className="text-sm text-gray-600">
          A private, romantic compatibility preview
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }} // FIXED
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold" style={{ color: "#fff" }}>
          ✨ Avni ❤️ Prem ✨
        </h1>
        <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-lg md:text-xl">
          A private space that holds our laughter, our silences, and the connection that words can’t capture.
        </p>
      </motion.div>
    </section>
  );
}

// ---------------- Intro Section ----------------
function IntroSection() {
  return (
    <section className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="p-6 card relative"
        >
          <img
            src={avniImg}
            alt="avni"
            className="w-100 h-800 object-cover rounded-lg"
          />
          <img
            src={avni_intro2}
            alt="feather"
            className="absolute top-10 right-5 w-80 h-100 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-2xl font-semibold" style={{ color: "#5A1A1A" }}>
            Avni Ashok Pandey
          </h3>
          <p className="text-gray-600 mt-2">
            Avni is grace woven with strength, a girl whose laughter feels like music and whose silence speaks volumes. She carries dreams in her heart, courage in her soul, and love in every little gesture. To Prem, she is not just a person — she is the poetry he always believed existed.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="p-6 card relative"
        >
          <img
            src={premImg}
            alt="prem"
            className="w-60 h-100 object-cover rounded-lg"
          />
          <img
            src={prem_intro2}
            alt="flute"
            className="absolute top-5 right-20 w-80 h-100 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-2xl font-semibold" style={{ color: "#5A1A1A" }}>
            Prem Arunkumar Bisoy
          </h3>
          <p className="text-gray-600 mt-2">
            Prem is passion balanced with patience, a boy who dreams big yet never forgets the beauty of small moments. His love is steady, his care is boundless, and his spirit burns with determination. To Avni, he isn’t just her anchor — he’s the safe haven her soul calls home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- Slideshow ----------------
function CoupleSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto my-12 w-[60%] h-[600px] overflow-hidden rounded-xl shadow-lg">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        />
      ))}
    </div>
  );
}

// ---------------- Traits ----------------
function TraitRow({ trait, index }) {
  const imgSide = index % 2 === 0 ? "left" : "right";
  return (
    <motion.section
      className="container mx-auto py-10 px-6"
      initial={{ x: imgSide === "left" ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {imgSide === "left" && (
          <div>
            <img
              src={traitImgs[trait.key]} alt={trait.title}
              className="rounded-lg w-80 h-80 object-cover card"
            />
          </div>
        )}
        <div className="p-6 card">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold" style={{ color: "#5A1A1A" }}>
              {trait.title} — {trait.score}/10
            </h4>
            <div className="w-48">
              <div className="bg-[#fff1ea] rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: (trait.score / 10) * 100 + "%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-3 rounded-full"
                  style={{ background: "linear-gradient(90deg,#ffb4a2,#c38f5a)" }}
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-600">{trait.text}</p>
        </div>
        {imgSide === "right" && (
          <div>
            <img
              src={traitImgs[trait.key]} alt={trait.title}
              className="rounded-lg w-80 h-80 object-cover card"
            />
          </div>
        )}
      </div>
    </motion.section>
  );
}

// ---------------- Main App ----------------
export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (unlocked) {
      audioRef.current = new Audio(bgMusic);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked, needs interaction");
      });
    }
  }, [unlocked]);

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  return (
    <>
      <Header />
      <Hero />
      <IntroSection />
      <CoupleSlideshow />
      {traits.map((t, i) => (
        <TraitRow key={t.key} trait={t} index={i} />
      ))}

      <motion.div
        className="container mx-auto py-12 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are two hearts quietly in sync, finding comfort in laughter, in silences, and in small moments that only we understand. Together, the world feels lighter, colors seem brighter, and every ordinary day carries a touch of magic. Our bond is gentle yet unshakable, a space where we can be ourselves, dream together, and simply exist in the joy of “us.”
        </p>
      </motion.div>

      <div className="text-center py-12 text-gray-600">
        Made with ❤️ for Avni by Prem
      </div>
      <div className="text-center py-2 text-gray-600">
        Jai Shree Krishna!!
      </div>
      <div className="text-center py-2 text-gray-600">
        🧿🌸Radhe Radhe!!🌸🙏
      </div>
    </>
  );
}
