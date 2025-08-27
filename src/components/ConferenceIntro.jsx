import { motion } from 'framer-motion';

const ConferenceIntro = ({ lenis }) => {
    const themes = [
        "Missions and programs (new missions and operations)",
        "Retrieval methodology and science",
        "Numerical weather prediction data assimilation advances and validation studies",
        "Atmospheric physics and climate",
        "Space weather",
        "GNSS-Reflectometry",
        "Innovative GNSS technologies"
    ];

    // Removed highlights and variants to reduce repetition and unused code

    return (
        <section id="conference-intro" className="min-h-screen flex flex-col justify-center py-20 bg-cosmic-white">

            <div className="max-w-8xl mx-auto px-8 lg:px-16 relative z-10 w-full">
                {/* Hero section with better spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-space mb-8 leading-tight">
                        <span className="text-cosmic-teal">Advancing</span> GNSS Science
                        <br />
                        <span className="text-dark-space">in Taiwan</span>
                    </h2>
                    <div className="w-32 h-1 bg-cosmic-teal mx-auto mb-12"></div>
                    <p className="font-space text-xl text-dark-space max-w-4xl mx-auto leading-relaxed font-light">
                        ICGPSRO 2025 focuses on GNSS-based remote sensing for meteorology, climate, and space science.
                    </p>

                    {/* Key tags */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {['Missions', 'Retrieval', 'Data Assimilation', 'Atmosphere & Climate', 'Space Weather', 'GNSS-R', 'Innovation'].map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full text-sm font-space bg-cosmic-teal/10 text-dark-space border border-cosmic-teal/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
                {/* Highlights removed to reduce repetition */}

                {/* Conference overview with modern grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-space mb-8 leading-tight">
                            About <span className="text-cosmic-teal">ICGPSRO 2025</span>
                        </h3>
                        <div className="space-y-6 font-space text-dark-space">
                            <p className="text-xl leading-relaxed font-light">
                                28–30 October 2025 · National Cheng Kung University, Tainan, Taiwan
                            </p>
                            <p className="text-xl leading-relaxed font-light">
                                Program highlights: Missions, Retrieval, Data Assimilation, Atmosphere & Climate, Space Weather, GNSS-R, Innovation
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-space mb-8 leading-tight">
                            Conference <span className="text-cosmic-teal">Topics</span>
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {themes.map((theme) => (
                                <span key={theme} className="px-3 py-2 rounded-xl bg-cosmic-teal/5 text-dark-space border border-cosmic-teal/20 font-space text-sm">
                                    {theme}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Call to action with modern design */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-br from-cosmic-teal to-dark-space rounded-3xl p-12 text-white relative overflow-hidden shadow-xl">
                        <div className="relative z-10 space-y-8">
                            <h3 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight">
                                Join Us in <span className="text-stellar-mint">Tainan</span>
                            </h3>
                            <p className="font-space text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                Be part of the global community advancing GPS Radio Occultation science in the historic city of Tainan
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    className="cosmic-button px-10 py-4 rounded-full font-semibold font-space text-lg hover:scale-105 transition-transform duration-300"
                                    onClick={() => lenis?.scrollTo('#agenda', { duration: 2 })}
                                >
                                    <span className="relative z-10">View Agenda</span>
                                </button>
                                <button
                                    className="px-10 py-4 border-2 border-stellar-mint rounded-full font-semibold text-stellar-mint hover:bg-stellar-mint hover:text-dark-space transition-all duration-300 font-space text-lg hover:scale-105"
                                    onClick={() => lenis?.scrollTo('#join', { duration: 2 })}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConferenceIntro; 