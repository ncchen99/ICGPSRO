import { motion } from 'framer-motion';

const Banner = ({ lenis }) => {
    const scrollToNext = () => {
        lenis?.scrollTo('#conference-intro', { duration: 2 });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center stars-bg overflow-hidden py-20 px-6">
            {/* Tailwind CSS v4 Test - VERY OBVIOUS */}
            <div className="absolute top-8 left-8 z-50">
                <div className="bg-red-500 text-white p-8 rounded-xl shadow-2xl border-4 border-yellow-400">
                    <h3 className="text-2xl font-bold mb-4">🎯 Tailwind CSS v4 Test</h3>
                    <div className="space-y-4">
                        <div className="bg-blue-600 p-4 rounded-lg">Test 1: Colors Working!</div>
                        <div className="mt-8 mb-8 p-4 bg-green-500 rounded">Test 2: Spacing Working!</div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                            <div className="w-12 h-12 bg-pink-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-cosmic-teal/10 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-stellar-mint/10 rounded-full"></div>
                <div className="absolute top-20 left-20 w-2 h-2 bg-cosmic-teal rounded-full animate-twinkle opacity-40"></div>
                <div className="absolute top-40 right-32 w-1 h-1 bg-stellar-mint rounded-full animate-twinkle opacity-40" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cosmic-white rounded-full animate-twinkle opacity-40" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main content container with ENHANCED spacing to test */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="text-center space-y-24">

                    {/* Main title section with MASSIVE spacing */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-16 pt-20"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="font-chaney text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cosmic-white leading-tight tracking-tight nebula-text mb-40"
                        >
                            ICGPSRO
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="space-y-12 mb-32 px-8"
                        >
                            <h2 className="font-space text-2xl md:text-3xl lg:text-4xl text-stellar-mint font-light leading-relaxed">
                                International Conference on GPS Radio Occultation
                            </h2>
                        </motion.div>
                    </motion.div>

                    {/* Conference details with HUGE spacing */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="space-y-20 mb-32 px-12"
                    >
                        {/* Date and location */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-16 text-xl md:text-2xl font-space">
                            <div className="flex items-center space-x-8">
                                <div className="w-6 h-6 bg-cosmic-teal rounded-full"></div>
                                <span className="text-cosmic-white">October 30 - November 3, 2023</span>
                            </div>
                            <div className="flex items-center space-x-8">
                                <div className="w-6 h-6 bg-stellar-mint rounded-full"></div>
                                <span className="text-cosmic-white">Taipei, Taiwan</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-4xl mx-auto px-12">
                            <p className="text-xl md:text-2xl text-stellar-mint leading-relaxed font-space font-light text-center">
                                Advancing GNSS-based remote sensing for weather, climate, and space weather applications
                            </p>
                        </div>
                    </motion.div>

                    {/* Action buttons with MASSIVE gaps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap justify-center items-center gap-20 mb-32 px-12"
                    >
                        <button
                            onClick={scrollToNext}
                            className="btn-primary text-lg font-semibold px-16 py-8"
                        >
                            <span className="relative z-10">Explore Conference</span>
                        </button>
                        <button
                            onClick={() => lenis?.scrollTo('#join', { duration: 2.5 })}
                            className="btn-secondary text-lg font-semibold px-16 py-8"
                        >
                            Register Now
                        </button>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
                >
                    <div className="flex flex-col items-center space-y-6 text-stellar-mint">
                        <div className="w-8 h-12 border-2 border-stellar-mint rounded-full flex justify-center">
                            <div className="w-2 h-4 bg-stellar-mint rounded-full animate-bounce mt-3"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner; 