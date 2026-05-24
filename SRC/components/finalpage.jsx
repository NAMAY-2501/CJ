import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import damon from "../assets/images/home/damon.png";
import klaus from "../assets/images/finalpage/klaus.png";
import elijah from "../assets/images/finalpage/elijah.png";
import group from "../assets/images/finalpage/group.png";
import BackgroundEffects from "./backgroundeffects";

const finalSteps = [
  {
    speech: "Am I still your favorite person?",
    buttons: ["Yes", "No"],
  },
  {
    speech: "I knew it.",
    buttons: ["Now... the final question."],
  },
  {
    speech:
      "Do you forgive Namay for what happened after the exam yesterday?",
    aside: "Because honestly... hurting you was never intentional.",
    buttons: ["Yes.", "Maybe I already did."],
  },
  {
    speech: "Thanks for staying after everything.",
    aside:
      "You are the truest and best person Namay has right now. And trust me... he really doesn't want to lose you.",
    buttons: [],
  },
];

function FinalPage() {
  const [step, setStep] = useState(0);
  const current = finalSteps[step];
  const completed = step === finalSteps.length - 1;

  return (
    <section className={`cinematic-page final-page ${completed ? "is-complete" : ""}`}>
      <BackgroundEffects />
      <div className="fog fog-left" />
      <div className="fog fog-right" />

      <motion.img
        src={damon}
        alt="Damon"
        className="final-damon"
        initial={{ opacity: 0, y: 90, scale: 0.82, filter: "brightness(25%) blur(10px)" }}
        animate={{ opacity: 0.86, y: 0, scale: 1, filter: "brightness(52%) blur(0px)" }}
        transition={{ duration: 1.35, ease: "easeOut" }}
        />
        <motion.img
  src={klaus}
  alt="Klaus"
  className="final-klaus"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 0.26, x: 0 }}
  transition={{ duration: 1.4 }}
/>

<motion.img
  src={elijah}
  alt="Elijah"
  className="final-elijah"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 0.24, x: 0 }}
  transition={{ duration: 1.4 }}
/>

<motion.img
  src={group}
  alt="Group"
  className="final-group"
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.09 }}
  transition={{ duration: 2 }}
/>
    

      <AnimatePresence mode="wait">
        <motion.div
          key={current.speech}
          className="thought-cloud"
          initial={{ opacity: 0, y: 28, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, scale: 1.04, filter: "blur(12px)" }}
          transition={{ duration: 0.72, ease: "easeInOut" }}
        >
          <p>{current.speech}</p>
          {current.aside && <span>{current.aside}</span>}
        </motion.div>
      </AnimatePresence>

      <div className="final-actions">
        {current.buttons.map((button) => (
          <motion.button
            key={button}
            className="gothic-action compact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStep((value) => Math.min(value + 1, finalSteps.length - 1))}
          >
            {button}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {completed && (
          <motion.p
            className="tiny-ending-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
          >
            Now please give this man a good review after all this effort.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FinalPage;
