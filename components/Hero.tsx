import { motion } from "framer-motion"

const parentVariant = {
  initial: {
    x: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TextVariant = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

function Hero() {
  return (
    <div className="w-full overflow-hidden h-screen">
      {/* top-section */}
      <div  className="flex flex-col">
        <div  className="flex justify-between items-center p-4">
          <span className="md:text-8xl text-7xl  font-thin font-raleway">THE</span>
            <span className="text-sm hidden md:block text-[#fafafa] w-48">one of the largest and most influential museums of the modern art in the word</span>
          <span className="text-sm  hidden md:block text-[#fafafa] w-60">New York City, 53rd Street</span>
        </div>
      </div>

      {/* top-section end */}
      <motion.div variants={parentVariant} className="relative">
      <span className="md:text-8xl text-7xl  flex font-thin justify-center items-end font-raleway md:right-0 md:absolute">MUSEUM</span>
      </motion.div>
      {/* 3rd text  */}
      <motion.div variants={parentVariant} className="relative">
      <span className="md:text-8xl text-7xl  absolute md:top-14 top-0 font-thin font-raleway left-16 md:left-0">OF</span>
      </motion.div>

      <motion.div variants={parentVariant} className="relative ">
          <div className="absolute  top-20 md:top-40 space-x-28">
          <span className="md:text-8xl flex items-center text-7xl font-thin font-raleway">
            <span className="text-xs text-[#fafafa] mr-28 pt-16 text-start hidden md:block">since 1929 </span>MORDERN ART</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero