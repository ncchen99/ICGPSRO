import { motion } from 'framer-motion';
import FORMOSAT7Image from '../assets/images/FORMOSAT-7.png';
import TRITONImage from '../assets/images/TRITON.png';

const Banner = ({ lenis }) => {
    const scrollToAgenda = () => {
        lenis?.scrollTo('#agenda', { duration: 2 });
    };

    const scrollToSpeakers = () => {
        lenis?.scrollTo('#speakers', { duration: 2 });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center stars-bg overflow-hidden py-20 px-6">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-cosmic-teal/10 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-stellar-mint/10 rounded-full"></div>
                <div className="absolute top-20 left-20 w-2 h-2 bg-cosmic-teal rounded-full animate-twinkle opacity-40"></div>
                <div className="absolute top-40 right-32 w-1 h-1 bg-stellar-mint rounded-full animate-twinkle opacity-40" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cosmic-white rounded-full animate-twinkle opacity-40" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating satellite images - Made larger */}
            <motion.div
                className="absolute top-16 right-8 w-48 h-48 md:w-56 md:h-56 opacity-25 z-5"
                animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img
                    src={FORMOSAT7Image}
                    alt="FORMOSAT-7 Satellite"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            <motion.div
                className="absolute bottom-16 left-8 w-52 h-52 md:w-64 md:h-64 opacity-20 z-5"
                animate={{
                    y: [15, -15, 15],
                    rotate: [0, -3, 3, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            >
                <img
                    src={TRITONImage}
                    alt="TRITON Satellite"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Main content container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="text-center space-y-16">

                    {/* Main title section */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-12 pt-20"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="font-chaney text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-cosmic-white leading-tight tracking-tight nebula-text mb-16"
                        >
                            ICGPSRO 2025
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="space-y-8 mb-16 px-8"
                        >
                            <h2 className="font-space text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-stellar-mint font-light leading-relaxed">
                                7th International Conference on GPS Radio Occultation
                            </h2>
                        </motion.div>
                    </motion.div>

                    {/* Conference details */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="space-y-12 mb-24 px-12"
                    >
                        {/* Date and location */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-lg md:text-xl lg:text-2xl font-space">
                            <div className="flex items-center space-x-6">
                                <div className="w-6 h-6 bg-cosmic-teal rounded-full"></div>
                                <span className="text-cosmic-white">28-30 October 2025</span>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="w-6 h-6 bg-stellar-mint rounded-full"></div>
                                <span className="text-cosmic-white">National Cheng Kung University, Tainan, Taiwan</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-4xl mx-auto px-8">
                            <p className="text-lg md:text-xl lg:text-2xl text-stellar-mint leading-relaxed font-space font-light text-center">
                                Advancing GNSS-based remote sensing for meteorology, climate, and space science applications
                            </p>
                        </div>
                    </motion.div>
                    {/* Scroll indicator - 放在描述文字下方 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex flex-col items-center space-y-4 text-stellar-mint"
                    >

                        <div className="w-8 h-12 border-2 border-stellar-mint rounded-full flex justify-center hover:border-cosmic-teal transition-colors duration-300 cursor-pointer">
                            <div className="w-2 h-4 bg-stellar-mint rounded-full animate-bounce mt-3"></div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Banner; 