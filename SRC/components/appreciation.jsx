import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import page3Character from "../assets/images/home/page3-character.png";
import BackgroundEffects from "./backgroundeffects";

const traits = [
  {
    trait: "How she stayed",
    habit: "She stayed after all that happened and happens , that's brave.",
    note: "I never want you to leave Chupjaa,you are way too important to me. ",
  },
  {
    trait: "Her jealousy",
    habit: "The best thing about you , i like it a lot when u get jealous over me. ",
    note: "You look like a cute little angry child when you are jealous ldkiii. ",
  },
  {
    trait: "Her care",
    habit: "You care like my mom , you are no different than her.",
    note: "The tiny details, the mood shifts, the silences, you notice all of that.",
  },
  {
    trait: "Her smile",
    habit: "It changes everything , when u are happy , i am too.",
    note: "You have changed me i a way i did'nt even expect , trust me when I say sometimes I can't even stay without you messaging me. ",
  },
  {
    trait: "Her reactions",
    habit: "The best thing i love about you , your excitement around me.",
    note: "The kind of person whose smallest response can stay in someone's mind all day, when I say trust me , tu hi chalti h mere dimaag me sara din , I can't stay angry or I can't fight with you.",
  },
];

function Appreciation({ onNext }) {
  const [index, setIndex] = useState(0);
  const isFinal = index === traits.length - 1;
  const current = traits[index];

  const advance = () => {
    if (!isFinal) setIndex((value) => value + 1);
  };

  return (
    <section className="cinematic-page appreciation-page" onWheel={advance}>
      <BackgroundEffects />
      <div className="fog fog-left" />
      <div className="fog fog-right" />

      <motion.img
        src={page3Character}
        alt="Character"
        className="appreciation-character"
        initial={{ opacity: 0, x: 90, filter: "brightness(28%) blur(8px)" }}
        animate={{ opacity: 0.86, x: 0, filter: "brightness(58%) blur(0px)" }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
      />

      <motion.h1
        className="scene-heading appreciation-heading"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The little things I could never ignore.
      </motion.h1>

      <div className="card-stage" onClick={advance}>
        <AnimatePresence mode="wait">
          <motion.article
            key={current.trait}
            className="trait-card"
            initial={{ opacity: 0, y: 70, scale: 0.76, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -70, scale: 1.08, filter: "blur(16px)" }}
            transition={{ duration: 0.82, ease: "easeInOut" }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{current.trait}</h2>
            <h3>{current.habit}</h3>
            <p>{current.note}</p>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="progress-dots">
        {traits.map((item, i) => (
          <button
            key={item.trait}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`Show ${item.trait}`}
          />
        ))}
      </div>

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
          >
            Shall we move further?
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Appreciation;
