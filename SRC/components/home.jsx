import { motion } from "framer-motion";

import damon from "../assets/images/home/damon.png";
import klaus from "../assets/images/home/klaus.png";
import { GothicSymbols } from "./backgroundeffects";

const upperFangs = [
  { width: 26, height: 38, rotate: -36, y: 36, radius: "72% 18% 50% 45%", clip: "polygon(0 0, 100% 0, 78% 100%, 6% 72%)" },
  { width: 25, height: 46, rotate: -28, y: 28, radius: "70% 18% 50% 45%", clip: "polygon(0 0, 100% 0, 76% 100%, 6% 72%)" },
  { width: 31, height: 58, rotate: -20, y: 16, radius: "65% 25% 55% 45%", clip: "polygon(0 0, 100% 0, 70% 100%, 8% 66%)" },
  { width: 36, height: 116, rotate: -10, y: 0, radius: "58% 28% 54% 42%", clip: "polygon(0 0, 100% 0, 62% 100%, 10% 54%)" },
  { width: 31, height: 66, rotate: -3, y: 0, radius: "48% 48% 50% 50%", clip: "polygon(0 0, 100% 0, 88% 84%, 50% 100%, 12% 84%)" },
  { width: 31, height: 66, rotate: 3, y: 0, radius: "48% 48% 50% 50%", clip: "polygon(0 0, 100% 0, 88% 84%, 50% 100%, 12% 84%)" },
  { width: 36, height: 116, rotate: 10, y: 0, radius: "28% 58% 42% 54%", clip: "polygon(0 0, 100% 0, 90% 54%, 38% 100%)" },
  { width: 31, height: 58, rotate: 20, y: 16, radius: "25% 65% 45% 55%", clip: "polygon(0 0, 100% 0, 92% 66%, 30% 100%)" },
  { width: 25, height: 46, rotate: 28, y: 28, radius: "18% 70% 45% 50%", clip: "polygon(0 0, 100% 0, 94% 72%, 24% 100%)" },
  { width: 26, height: 38, rotate: 36, y: 36, radius: "18% 72% 45% 50%", clip: "polygon(0 0, 100% 0, 94% 72%, 22% 100%)" },
];

const lowerFangs = [
  { width: 26, height: 38, rotate: 36, y: 36, radius: "45% 50% 72% 18%", clip: "polygon(6% 28%, 78% 0, 100% 100%, 0 100%)" },
  { width: 25, height: 46, rotate: 28, y: 28, radius: "45% 50% 70% 18%", clip: "polygon(6% 28%, 76% 0, 100% 100%, 0 100%)" },
  { width: 31, height: 58, rotate: 20, y: 16, radius: "45% 55% 65% 25%", clip: "polygon(8% 34%, 70% 0, 100% 100%, 0 100%)" },
  { width: 36, height: 116, rotate: 10, y: 0, radius: "42% 54% 58% 28%", clip: "polygon(10% 46%, 62% 0, 100% 100%, 0 100%)" },
  { width: 31, height: 66, rotate: 3, y: 0, radius: "50% 50% 48% 48%", clip: "polygon(12% 16%, 50% 0, 88% 16%, 100% 100%, 0 100%)" },
  { width: 31, height: 66, rotate: -3, y: 0, radius: "50% 50% 48% 48%", clip: "polygon(12% 16%, 50% 0, 88% 16%, 100% 100%, 0 100%)" },
  { width: 36, height: 116, rotate: -10, y: 0, radius: "54% 42% 28% 58%", clip: "polygon(38% 0, 90% 46%, 100% 100%, 0 100%)" },
  { width: 31, height: 58, rotate: -20, y: 16, radius: "55% 45% 25% 65%", clip: "polygon(30% 0, 92% 34%, 100% 100%, 0 100%)" },
  { width: 25, height: 46, rotate: -28, y: 28, radius: "50% 45% 18% 70%", clip: "polygon(24% 0, 94% 28%, 100% 100%, 0 100%)" },
  { width: 26, height: 38, rotate: -36, y: 36, radius: "50% 45% 18% 72%", clip: "polygon(22% 0, 94% 28%, 100% 100%, 0 100%)" },
];

const fangStyle = (fang, direction = 1) => ({
  width: `${fang.width}px`,
  height: `${fang.height}px`,
  background:
    "linear-gradient(115deg, #ff2448 0%, #9f0018 55%, #3b0008 100%)",
  borderRadius: fang.radius,
  clipPath: fang.clip,
  transform: `translateY(${direction * fang.y}px) rotate(${fang.rotate}deg)`,
  boxShadow:
    "inset 4px 0 6px rgba(255,100,120,0.55), inset -5px 0 8px rgba(0,0,0,0.34), 0 0 14px rgba(220,0,32,0.62)",
});

const batSilhouettes = [
  { top: "9%", left: "12%", size: 44, rotate: -18, color: "#7f0014", opacity: 0.6 },
  { top: "15%", left: "76%", size: 34, rotate: 18, color: "#a855f7", opacity: 0.5 },
  { top: "29%", left: "21%", size: 26, rotate: 12, color: "#b30016", opacity: 0.46 },
  { top: "38%", left: "82%", size: 52, rotate: -12, color: "#6d0010", opacity: 0.62 },
  { top: "58%", left: "14%", size: 30, rotate: 22, color: "#a855f7", opacity: 0.42 },
  { top: "68%", left: "73%", size: 40, rotate: -24, color: "#b30016", opacity: 0.54 },
  { top: "80%", left: "31%", size: 26, rotate: -8, color: "#760012", opacity: 0.5 },
  { top: "84%", left: "88%", size: 32, rotate: 16, color: "#a855f7", opacity: 0.38 },
];

const batStyle = (bat) => ({
  position: "absolute",
  top: bat.top,
  left: bat.left,
  width: `${bat.size}px`,
  height: `${bat.size * 0.38}px`,
  background: bat.color,
  opacity: bat.opacity,
  clipPath:
    "polygon(0 54%, 14% 12%, 31% 44%, 42% 8%, 50% 42%, 58% 8%, 69% 44%, 86% 12%, 100% 54%, 78% 48%, 63% 78%, 50% 54%, 37% 78%, 22% 48%)",
  transform: `rotate(${bat.rotate}deg)`,
  filter: "drop-shadow(0 0 10px rgba(255,0,55,0.75))",
  pointerEvents: "none",
});

function Home({ onNext }) {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 48%, #330008 0%, #17000a 34%, #050006 68%, #000000 100%)",
        color: "white",
      }}
    >

      {/* GALAXY MIST */}
      <div
        style={{
          position: "absolute",
          inset: "-12%",
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(168,85,247,0.22), transparent 28%), radial-gradient(ellipse at 78% 22%, rgba(255,0,68,0.22), transparent 30%), radial-gradient(ellipse at 50% 78%, rgba(110,0,22,0.36), transparent 34%)",
          filter: "blur(22px)",
          opacity: 0.9,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "-12%",
          top: "16%",
          width: "124%",
          height: "48%",
          background:
            "linear-gradient(115deg, transparent 0%, rgba(168,85,247,0.08) 18%, rgba(255,0,76,0.2) 46%, rgba(95,0,22,0.12) 68%, transparent 100%)",
          filter: "blur(34px)",
          transform: "rotate(-9deg)",
          opacity: 0.95,
        }}
      />

      {/* GALAXY STARS */}
      {[...Array(950)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 3.6 + 0.6 + "px",
            height: Math.random() * 3.6 + 0.6 + "px",
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
                ? "0 0 20px currentColor, 0 0 42px currentColor"
                : "0 0 12px currentColor",
          }}
        />
      ))}

      {/* BAT SYMBOLS */}
      {batSilhouettes.map((bat, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, i % 2 === 0 ? -10 : 10, 0],
            opacity: [bat.opacity * 0.65, bat.opacity, bat.opacity * 0.65],
          }}
          transition={{
            duration: 4 + i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={batStyle(bat)}
        />
      ))}

      <GothicSymbols />

      {/* LEFT GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          background: "rgba(255,0,0,0.15)",
          filter: "blur(150px)",
          borderRadius: "50%",
        }}
      />

      {/* RIGHT GLOW */}
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          background: "rgba(255,0,0,0.15)",
          filter: "blur(150px)",
          borderRadius: "50%",
        }}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 42px",
          boxSizing: "border-box",
        }}
      >

        {/* KLAUS */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.82, x: 0 }}
          transition={{ duration: 2 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignSelf: "stretch",
            alignItems: "flex-end",
          }}
        >
          <img
            src={klaus}
            alt="Klaus"
            style={{
              height: "100vh",
              width: "34vw",
              objectFit: "cover",
              objectPosition: "center top",
              filter:
                "brightness(45%) contrast(145%) drop-shadow(0 0 55px crimson)",
            }}
          />
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          style={{
            flex: 1,
            textAlign: "center",
            marginBottom: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "100vh",
          }}
        >

          {/* MAIN TEXT */}
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 5vw, 58px)",
              lineHeight: "1.05",
              color: "#ff284d",
              textShadow:
                "0 0 8px rgba(255,255,255,0.32), 0 0 22px rgba(255,0,55,0.95), 0 0 48px rgba(255,0,0,0.9)",
              fontFamily: "Canterbury",
              fontWeight: "normal",
              letterSpacing: "0",
            }}
          >
            This is for the
            <br />
            person
            <br />
            I never wanted
            <br />
            to hurt.
          </h1>

          {/* SUBTEXT */}
          <p
            style={{
              margin: "14px 0 0",
              color: "#ff5f7d",
              fontSize: "24px",
              letterSpacing: "0",
              textShadow:
                "0 0 8px rgba(255,255,255,0.3), 0 0 18px crimson, 0 0 34px rgba(255,0,55,0.85)",
              fontFamily: "Canterbury",
            }}
          >
            For Chupjaa.
          </p>

          {/* VAMPIRE MOUTH BUTTON */}
          <motion.div
            onClick={onNext}
            whileHover={{
              scale: 1.03,
            }}
            style={{
              marginTop: "28px",
              position: "relative",
              width: "430px",
              height: "238px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >

            {/* TOP FANGS */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                width: "380px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "0",
                zIndex: 5,
              }}
            >
              {upperFangs.map((fang, i) => (
                <div
                  key={i}
                  style={fangStyle(fang, 1)}
                />
              ))}
            </div>

            {/* MOUTH */}
            <div
              style={{
                width: "338px",
                height: "148px",
                background:
                  "radial-gradient(circle at center, #000000 0%, #050000 55%, #160000 100%)",
                borderRadius: "46% 46% 50% 50% / 38% 38% 56% 56%",
                border: "2px solid rgba(130,0,18,0.65)",
                boxShadow:
                  "0 0 55px rgba(122,0,0,0.95), inset 0 0 70px rgba(255,0,0,0.18)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                padding: "0 34px",
              }}
            >

              {/* INNER GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "75%",
                  height: "75%",
                  background:
                    "radial-gradient(circle, rgba(255,0,0,0.22), transparent)",
                  filter: "blur(25px)",
                }}
              />

              {/* BUTTON TEXT */}
              <span
                style={{
                  position: "relative",
                  zIndex: 4,
                  color: "#ff2f55",
                  fontSize: "26px",
                  fontFamily: "Canterbury",
                  lineHeight: 1.1,
                  textShadow:
                    "0 0 7px rgba(255,255,255,0.35), 0 0 14px #ff0033, 0 2px 0 #240000, 0 0 26px rgba(255,0,60,0.95)",
                }}
              >
                Read what I couldn't say
              </span>
            </div>

            {/* BOTTOM FANGS */}
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                width: "380px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "0",
                zIndex: 5,
              }}
            >
              {lowerFangs.map((fang, i) => (
                <div
                  key={i}
                  style={fangStyle(fang, -1)}
                />
              ))}
            </div>

          </motion.div>

        </motion.div>

        {/* DAMON */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.82, x: 0 }}
          transition={{ duration: 2 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignSelf: "stretch",
            alignItems: "flex-end",
          }}
        >
          <img
            src={damon}
            alt="Damon"
            style={{
              height: "100vh",
              width: "34vw",
              objectFit: "cover",
              objectPosition: "center top",
              filter:
                "brightness(45%) contrast(145%) drop-shadow(0 0 55px crimson)",
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}

export default Home;
