import { motion } from "framer-motion";

import gothicCup from "../assets/images/home/gothic-cup.png";
import gothicNecklace from "../assets/images/home/gothic-necklace.png";

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

const gothicSymbols = [
  { type: "necklace", top: "7%", left: "29%", size: 42, rotate: -18, tint: "crimson", opacity: 0.28 },
  { type: "cup", top: "17%", left: "91%", size: 34, rotate: 14, tint: "black", opacity: 0.3 },
  { type: "necklace", top: "31%", left: "5%", size: 30, rotate: 22, tint: "black", opacity: 0.26 },
  { type: "cup", top: "46%", left: "67%", size: 28, rotate: -12, tint: "crimson", opacity: 0.24 },
  { type: "necklace", top: "63%", left: "18%", size: 36, rotate: 10, tint: "crimson", opacity: 0.3 },
  { type: "cup", top: "78%", left: "82%", size: 42, rotate: 18, tint: "black", opacity: 0.28 },
  { type: "necklace", top: "87%", left: "45%", size: 28, rotate: -8, tint: "black", opacity: 0.22 },
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

export function GothicSymbols() {
  return (
    <div className="gothic-symbol-layer">
      {gothicSymbols.map((symbol, index) => (
        <motion.img
          key={`${symbol.type}-${index}`}
          src={symbol.type === "cup" ? gothicCup : gothicNecklace}
          alt=""
          className={`tiny-gothic-symbol ${symbol.tint}`}
          style={{
            top: symbol.top,
            left: symbol.left,
            width: `${symbol.size}px`,
            opacity: symbol.opacity,
            "--symbol-rotate": `${symbol.rotate}deg`,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -8 : 8, 0],
            rotate: [symbol.rotate - 2, symbol.rotate + 2, symbol.rotate - 2],
          }}
          transition={{
            duration: 5 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function BackgroundEffects() {
  return (
    <>
      <div className="scene-bg shared-galaxy-bg" />

      <div
        style={{
          position: "absolute",
          inset: "-12%",
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(168,85,247,0.22), transparent 28%), radial-gradient(ellipse at 78% 22%, rgba(255,0,68,0.22), transparent 30%), radial-gradient(ellipse at 50% 78%, rgba(110,0,22,0.36), transparent 34%)",
          filter: "blur(22px)",
          opacity: 0.9,
          pointerEvents: "none",
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
          pointerEvents: "none",
        }}
      />

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
            pointerEvents: "none",
          }}
        />
      ))}

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
          pointerEvents: "none",
        }}
      />

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
          pointerEvents: "none",
        }}
      />
    </>
  );
}

export default BackgroundEffects;
