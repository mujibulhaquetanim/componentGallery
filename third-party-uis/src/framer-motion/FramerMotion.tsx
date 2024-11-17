import { motion, useScroll } from "framer-motion";

export default function FramerMotion() {
  const { scrollYProgress: completionProgress } = useScroll();
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const gridSquareVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="flex flex-col overflow-x-hidden gap-5">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        >
          <motion.div
            className="rounded-full w-20 h-20 bg-slate-600"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "backOut", delay: 0.7 }}
          ></motion.div>
          <motion.div
            className="rounded-lg w-20 h-20 bg-slate-600"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "backOut", delay: 0.7 }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
              transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-rose-400 cursor-grab rounded-md"
            drag
            dragConstraints={{ top: -100, right: 100, bottom: 100, left: -100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        >
          <motion.div className="aspect-square w-40 bg-gray-400/25 rounded-xl fixed">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-top"
              style={{ scaleY: completionProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        ></motion.div>
      </motion.section>
    </div>
  );
}
