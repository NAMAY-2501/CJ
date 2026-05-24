import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Appreciation from "./components/appreciation";
import FinalPage from "./components/finalpage";
import Home from "./components/home";
import Letter from "./components/letter";
import Memories from "./components/memories";

const pages = [Home, Letter, Appreciation, Memories, FinalPage];

const transitionMist = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 0.82, 0], scale: [0.92, 1.08, 1.16] },
  transition: { duration: 1.15, ease: "easeInOut" },
};

function App() {
  const [page, setPage] = useState(0);
  const CurrentPage = pages[page];

  const goNext = () => setPage((current) => Math.min(current + 1, pages.length - 1));

  return (
    <div className="sorry-bestu-app">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, filter: "blur(18px)", scale: 1.025 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(24px)", scale: 0.98 }}
          transition={{ duration: 1.05, ease: "easeInOut" }}
          className="scene-shell"
        >
          <CurrentPage onNext={goNext} />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={`mist-${page}`}
          className="transition-mist"
          {...transitionMist}
        />
      </AnimatePresence>
    </div>
  );
}

export default App;
