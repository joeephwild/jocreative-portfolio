import { motion } from "framer-motion"
import { Fade } from 'react-reveal';

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

const textVariant = {
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
    <div className="">
      {/* top-section */}
      
      <div  className="flex flex-col">
        <motion.div variants={parentVariant} initial="initial"
  animate="animate"
   className="flex justify-between items-center p-4">
          <motion.h1  
          className="md:text-8xl text-7xl  font-thin font-raleway">THE</motion.h1>
            <span className="hidden md:block text-xs text-[#fafafa] w-48">one of the largest and most influential museums of the modern art in the word</span>
          <span className="text-xs  hidden md:block text-[#fafafa] w-60">New York City, 53rd Street</span>
        </motion.div>
      </div>
      {/* top-section end */}
      <motion.div variants={parentVariant} className="">
      <span className="md:text-8xl text-7xl  flex font-thin justify-center items-end font-raleway md:pl-[50%]">MUSEUM</span>
      </motion.div>
      {/* 3rd text  */}
      <motion.div variants={parentVariant} className="">
      <span className="md:text-8xl text-7xl pl-[10%] md:pl-[2%]  font-thin font-raleway">OF</span>
      </motion.div>

      <motion.div variants={parentVariant} className="">
          <div className=" space-x-28">
          <span className="md:text-8xl pl-[6%] lg:pl-[10%] flex items-center text-7xl font-thin font-raleway">
            <span className="text-xs text-[#fafafa] mr-28 pt-16 text-start hidden md:block">since 1929 </span>MORDERN ART</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero