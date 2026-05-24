import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import damonScroll from "../assets/images/home/damon-scroll.png";
import scrollPaper from "../assets/images/home/scroll.png";

import { GothicSymbols } from "./backgroundeffects";

const letterLines = [
  "Dear ChupJaaa",
  "My bestest friend in the world , my Bestu",
  "I am writing you this to express how sorry I am for what i did after the exam , it was very low of me . I was'nt exactly in the right space of mind and I've got no words for the act I did , I should'nt have left and i should have waited for you . But you know what despite everything i do , every mistake i make , you forgive me each time , that is so good of you.",
  "I just want to ask for your forgiveness , please forgive me , I'm childish sometimes . Please don't be angry with me , I can't live like that with you being so angry and ignoring me.",
  "Tujhe hi bss best friend kaha hai maine aur tu hi rahegi , I like every fucking thing about you , I can't stay for a minute if your message does'nt reflect on my screen.",
  "Please forgive me yrrrrr. My cutu dost , and everything i did here is purely out of friendship. ",
];

const gothicObjects = [
  { type: "bat", top: "10%", left: "9%", size: 42, rotate: -18 },
  { type: "bat", top: "37%", left: "86%", size: 58, rotate: 14 },
  { type: "bat", top: "84%", left: "28%", size: 36, rotate: -8 },
];

function Letter({ onNext }) {
  const [opened, setOpened] = useState(false);

  return (
    <section className="cinematic-page letter-page">

      {/* BACKGROUND */}
      <div className="scene-bg letter-galaxy-bg" />

      {[...Array(950)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 3 + 0.5 + "px",
            height: Math.random() * 3 + 0.5 + "px",
            background:
              i % 6 === 0
                ? "#ff003c"
                : i % 6 === 1
                ? "#a855f7"
                : i % 6 === 2
                ? "#ffffff"
                : i % 6 === 3
                ? "#7a0000"
                : i % 6 === 4
                ? "#ff6b8a"
                : "#d8b4fe",
            borderRadius: "50%",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.82 + 0.18,
            boxShadow:
              i % 9 === 0
                ? "0 0 20px currentColor"
                : "0 0 10px currentColor",
          }}
        />
      ))}

      {gothicObjects.map((bat, i) => (
        <motion.span
          key={i}
          className="gothic-object bat"
          style={{
            top: bat.top,
            left: bat.left,
            "--object-size": `${bat.size}px`,
            "--object-rotate": `${bat.rotate}deg`,
          }}
          animate={{
            y: [0, i % 2 === 0 ? -10 : 10, 0],
            opacity: [0.32, 0.62, 0.32],
          }}
          transition={{
            duration: 4 + i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <GothicSymbols />

      <div className="fog fog-left" />
      <div className="fog fog-right" />

      {/* MAIN LAYOUT */}
      <div
        className="letter-layout"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          overflow: "hidden",
        }}
      >

        {/* SCROLL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            rotateX: -18,
            scale: 0.84,
          }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
            rotateX: 0,
            rotateZ: [-1.5, -0.5, -1.5],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 1.2 },
            y: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            position: "relative",
            width: "620px",
            height: opened ? "720px" : "360px",
            transition: "height 1s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >

          {/* SCROLL IMAGE */}
          <img
            src={scrollPaper}
            alt="scroll"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter:
                "drop-shadow(0 0 35px rgba(255,220,160,0.2)) brightness(0.97)",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* CONTENT */}
          <div
            style={{
              position: "relative",
              width: "58%",
              height: "52%",
              overflowY: "auto",
              paddingTop: "55px",
              paddingBottom: "30px",
              zIndex: 5,
              textAlign: "center",
              scrollbarWidth: "none",
            }}
          >

            {/* RIBBON */}
            <AnimatePresence>
              {!opened && (
                <motion.div
                  className="ribbon"
                  exit={{
                    opacity: 0,
                    scaleX: 1.4,
                    filter: "blur(12px)",
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <span />
                </motion.div>
              )}
            </AnimatePresence>

            {opened ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.8 }}
              >

                {/* TITLE */}
                <h1
                  style={{
                    fontFamily: "Canterbury",
                    color: "#5c0000",
                    fontSize: "36px",
                    marginBottom: "28px",
                    textShadow: "0 0 12px rgba(120,0,0,0.2)",
                  }}
                >
                  A letter kept in the dark.
                </h1>

                {/* LETTER */}
                {letterLines.map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.85 + i * 0.35,
                      duration: 0.8,
                    }}
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.7",
                      color: "#2a1208",
                      fontFamily: "Canterbury",
                      marginBottom: "18px",
                    }}
                  >
                    {line}
                  </motion.p>
                ))}

                {/* BUTTON */}
                <div
                  style={{
                    marginTop: "28px",
                    marginBottom: "20px",
                  }}
                >
                  <motion.button
                    className="vampire-mouth-action letter-mouth-action no-fangs inside-scroll next-letter-button"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onNext}
                  >
                    <span className="mouth-darkness">
                      <span>Let's move further</span>
                    </span>
                  </motion.button>
                </div>

              </motion.div>
            ) : (
              <div
                style={{
                  position: "relative",
                  top: "82px",
                  zIndex: 6,
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Canterbury",
                    color: "#5c0000",
                    fontSize: "34px",
                    textShadow: "0 0 10px rgba(120,0,0,0.25)",
                  }}
                >
                  Sorry Bestu
                </span>
              </div>
            )}
          </div>

          {/* OPEN BUTTON */}
          {!opened && (
            <motion.button
              className="vampire-mouth-action letter-mouth-action no-fangs below-scroll-open"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpened(true)}
              style={{
                position: "absolute",
                bottom: "-48px",
                zIndex: 10,
              }}
            >
              <span className="mouth-darkness">
                <span>Open it.</span>
              </span>
            </motion.button>
          )}
        </motion.div>

        {/* DAMON */}
        <motion.img
          src={damonScroll}
          alt="Damon sitting"
          className="letter-damon"
          initial={{
            opacity: 0,
            x: 100,
            filter: "brightness(35%) blur(8px)",
          }}
          animate={{
            opacity: 0.9,
            x: 30,
            filter: "brightness(58%) blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.25,
          }}
          style={{
            height: "560px",
            objectFit: "contain",
          }}
        />

      </div>
    </section>
  );
}

export default Letter;