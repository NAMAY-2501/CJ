import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import BackgroundEffects from "./backgroundeffects";

import memory1 from "../assets/videos/1.mp4";
import memory2 from "../assets/images/memories/2.jpg";
import memory3 from "../assets/images/memories/3.jpg";
import memory4 from "../assets/videos/4.mp4";

const memories = [
  {
    type: "video",
    media: memory1,
    caption: "You looked happiest here while being somewhat irritated on me.",
    detail: "Some moments replay themselves forever.",
    tilt: -4,
  },

  {
    type: "image",
    media: memory2,
    caption: "I still replay this moment.",
    detail: "I don't think this memory will ever leave me.",
    tilt: 3,
  },

  {
    type: "image",
    media: memory3,
    caption: "This one never left my mind.",
    detail: "Some pictures hold entire emotions inside them.",
    tilt: -2,
  },

  {
    type: "video",
    media: memory4,
    caption: "Some moments stay quietly.",
    detail: "And somehow they become unforgettable.",
    tilt: 4,
  },
];

function Memories({ onNext }) {
  const [index, setIndex] = useState(0);

  const current = memories[index];
  const isFinal = index === memories.length - 1;

 const nextMemory = () => {

  document.querySelectorAll("video").forEach((video) => {
    video.pause();
  });

  if (!isFinal) {
    setIndex((prev) => prev + 1);
  }
};

 const prevMemory = () => {

  document.querySelectorAll("video").forEach((video) => {
    video.pause();
  });

  if (index > 0) {
    setIndex((prev) => prev - 1);
  }
};

  return (
    <section className="cinematic-page memories-page">

      <BackgroundEffects />

      <div className="fog fog-left" />
      <div className="fog fog-right" />

      {/* HEADING */}
      <motion.h1
        className="scene-heading"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: "Canterbury",
        }}
      >
        A small archive of what stayed.
      </motion.h1>

      {/* MEMORY STAGE */}
      <div className="memory-stage">

        <AnimatePresence>
          <motion.article
            key={current.media}
            className="polaroid"
            initial={{
  opacity: 0,
  x: "-50%",
  y: "calc(-50% + 80px)",
  scale: 0.78,
            }}
            animate={{
  opacity: 1,
  x: "-50%",
  y: "-50%",
  scale: 1,
  rotate: current.tilt,
}}
            exit={{
  opacity: 0,
  x: "-50%",
  y: "calc(-50% - 90px)",
            }}
            transition={{
              opacity: { duration: 0.65 },
              y: {
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: { duration: 0.8 },
              rotate: { duration: 0.8 },
            }}
          >

            {/* MEDIA */}
            <div
              className="memory-media"
              style={{
                width: "100%",
                height: "420px",
                overflow: "hidden",
                borderRadius: "12px",
                marginBottom: "22px",
                background: "black",
                boxShadow:
                  "0 0 30px rgba(255, 0, 60, 0.22), 0 0 60px rgba(168, 85, 247, 0.12)",
              }}
            >

              {current.type === "image" ? (
                <motion.img
                  key={current.media}
                  src={current.media}
                  alt={current.caption}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    background: "black",
                  }}
                />
              ) : (
                <motion.video
                  key={current.media}
                  src={current.media}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  autoPlay
                  controls
                  playsInline
                  onEnded={(e) => {
                    e.target.pause();
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    background: "black",
                  }}
                />
              )}

            </div>

            {/* TEXT */}
            <h2
              style={{
                fontFamily: "Canterbury",
              }}
            >
              {current.caption}
            </h2>

            <p
              style={{
                fontFamily: "Canterbury",
              }}
            >
              {current.detail}
            </p>

          </motion.article>
        </AnimatePresence>

        {/* NAVIGATION */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "28px",
            justifyContent: "center",
          }}
        >

          <button
            onClick={prevMemory}
            style={{
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid crimson",
              background: "rgba(0,0,0,0.45)",
              color: "white",
              cursor: "pointer",
              fontFamily: "Canterbury",
              fontSize: "18px",
            }}
          >
            Previous
          </button>

          <button
            onClick={nextMemory}
            style={{
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid crimson",
              background: "rgba(0,0,0,0.45)",
              color: "white",
              cursor: "pointer",
              fontFamily: "Canterbury",
              fontSize: "18px",
            }}
          >
            Next
          </button>

        </div>

      </div>

      {/* TIMELINE */}
      <div className="timeline-line">
        {memories.map((item, i) => (
          <button
            key={item.caption}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`Show memory ${i + 1}`}
          />
        ))}
      </div>

      {/* FINAL BUTTON */}
      <AnimatePresence>
        {isFinal && (
          <motion.button
            className="gothic-action"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            style={{
              fontFamily: "Canterbury",
            }}
          >
            Let's go to the final thing.
          </motion.button>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Memories;