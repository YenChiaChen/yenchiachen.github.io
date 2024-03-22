import { SimpleFloatingNav } from "../Components/Header";
import {ReactComponent as ImgEyes } from "../Assets/img-eyes.svg"
import {ReactComponent as ImgFeets } from "../Assets/img-feets.svg"
import {ReactComponent as ImgHands } from "../Assets/img-hands.svg"
import {ReactComponent as ImgArrowDown } from "../Assets/img-arrow-down.svg"
import { VanishText } from "../Components/VanishText";
import { motion } from 'framer-motion';
function LandingPage() {
    return (
      <div className='bg-[#ededed]'>
        <SimpleFloatingNav />
        <div className='container mx-auto pt-16 min-h-screen flex justify-center items-center flex-col'>
          <div className='text-left  w-full flex flex-col items-center'>
            <ImgEyes />
            <div className='relative text-[128px] font-black mt-6 mb-8' style={{letterSpacing: "-0.1em", lineHeight: ".9em"}}>
              YENCHIA<br />CHEN
              <p className='text-3xl tracking-wide font-bold mt-6 ml-4'><VanishText /></p>
              <motion.div
                 animate={{ rotate: [ -5, 10 ] }}
                 transition={{
                  duration: 2,
                  repeatType: 'reverse', 
                  repeat: Infinity,
                  ease: "easeInOut"
    
                }}
                className="absolute"
                style={{left: '85%', top: '50%', transform: 'translateY(-0%)'}}
              >
                <ImgHands />
              </motion.div>
            </div>
            <ImgFeets />
          </div>
        </div>
        <div className='h-[200vh]'></div>
      </div>
    );
  }
  
  export default LandingPage;
  