import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS_PATH } from './config';

const images = [
  'couple1.jpeg',
  'couple2.jpeg',
  'couple3.jpeg',
  'couple4.jpeg',
  'couple5.jpeg',
  'couple6.jpeg',
  'couple7.jpeg',
  'couple8.jpeg',
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg card mx-auto my-12">
      <AnimatePresence>
        <motion.img
          key={current}
          src={`${ASSETS_PATH}/images/${images[current]}`}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}
