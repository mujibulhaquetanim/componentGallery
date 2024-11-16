import { motion } from "framer-motion";

export default function FramerMotion() {
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
          <motion.div className="rounded-lg w-20 h-20 bg-slate-600" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: "backOut", delay: 0.7 }}></motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-md flex justify-center items-center gap-10"
        ></motion.div>
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
