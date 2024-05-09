
import {ReactComponent as ImgEyes } from "../../Assets/img-eyes.svg"
import {ReactComponent as ImgFeets } from "../../Assets/img-feets.svg"
import {ReactComponent as ImgHands } from "../../Assets/img-hands.svg"
import { VanishText } from "../VanishText"
import { motion } from 'framer-motion';


function RetroGuy() {

    const textAnimation = {
        hidden: { opacity: 0, x: -1000 }, 
        visible: { opacity: 1, x: 0 },
      };

    return (
    
        <div className='text-left  w-full flex flex-col items-center'>
            

            {/* <ImgEyes className='md:h-[96px] h-[48px]' /> */}
            <div className='relative md:text-[128px] text-[64px] font-black mt-6 mb-8' style={{letterSpacing: "-0.1em", lineHeight: ".9em"}}>

                <motion.div
                    animate={{ y: 10}}
                    transition={{
                     duration: 2,
                     repeatType: 'reverse', 
                     repeat: Infinity,
                     ease: "easeInOut"
                    }}>

      YENCHIA<br />CHEN
                    <p className='text-3xl tracking-wide font-bold mt-6 ml-4'><VanishText /></p>
                </motion.div>
                <motion.div
                animate={{ rotate: [ -3, 3 ] }}
                transition={{
                 duration: 2,
                 repeatType: 'reverse', 
                 repeat: Infinity,
                 ease: "easeInOut"
                }}
                className="absolute lg:left-[75%] top-[50%] md:left-[70%] left-[60%] md:block hidden"
                >
                    <ImgHands className='md:h-[128px] h-[96px] md:block hidden' />
                </motion.div>
            </div>

            <motion.div
                animate={{ y: 15, scaleY: 0.9}}
                transition={{
                 duration: 2,
                 repeatType: 'reverse', 
                 repeat: Infinity,
                 ease: "easeInOut"
                }}>

                <ImgFeets  className='md:h-[300px] h-[256px]' />
            </motion.div>
            
        </div>
    );
  }
  
  export default RetroGuy;