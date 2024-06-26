import { motion,AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store/index.js';
import CustomButton from '../components/CustomButton.jsx';


import {
    
    headContainerAnimation ,
    slideAnimation,
    headTextAnimation
} from "../config/motion.js"



const Home = () => {
    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {
            snap.intro && (
                <motion.section className='home' {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain'/>
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {... headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden'/>DO IT.
                        </h1>
                    </motion.div>
                    <motion.div  {...headContainerAnimation} className='flex flex-col gap-5 '>
                        <p className='max-w-md font-large text-yellow-600 text-base'>create your unique and exlucive shirt with our brand-new 3D customization tool.<strong> Unlesh your imagination</strong>{" "}and define your own style</p>

                    <CustomButton 
                            type="filled"
                            title="Customize It"
                            customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                            handleClick ={()=> state.intro = false}
                    />
                    </motion.div>
                    </motion.div>
                </motion.section>
            )
        }
    </AnimatePresence>
  )
}

export default Home
