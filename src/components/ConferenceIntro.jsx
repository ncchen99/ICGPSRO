import { motion } from 'framer-motion';
import { Satellite, Globe, Star, Microscope } from 'lucide-react';

const ConferenceIntro = ({ lenis }) => {
    const highlights = [
        {
            icon: Satellite,
            title: "Missions & Programs",
            description: "New missions and operations in GPS Radio Occultation"
        },
        {
            icon: Globe,
            title: "Retrieval Methodology",
            description: "Advanced science and data processing techniques"
        },
        {
            icon: Star,
            title: "Space Weather",
            description: "GNSS applications for space weather monitoring"
        },
        {
            icon: Microscope,
            title: "Innovative GNSS",
            description: "Cutting-edge GNSS technologies and applications"
        }
    ];

    const themes = [
        "Missions and programs (new missions and operations)",
        "Retrieval methodology and science",
        "Numerical weather prediction data assimilation advances and validation studies",
        "Atmospheric physics and climate",
        "Space weather",
        "GNSS-Reflectometry",
        "Innovative GNSS technologies"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="conference-intro" className="min-h-screen flex flex-col justify-center py-20 bg-cosmic-white relative overflow-hidden">
            {/* Simplified background decorative elements */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-20 left-20 w-96 h-96 border border-cosmic-teal/5 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 border border-stellar-mint/5 rounded-full"></div>
            </div>

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
                    <p className="font-space text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-space max-w-5xl mx-auto leading-relaxed font-light">
                        The 7th International Conference on GPS Radio Occultation addresses scientific progress
                        of radio occultation missions and advanced GNSS technologies for meteorology, climate, and space science exploration.
                    </p>
                </motion.div>

                {/* Conference highlights with improved layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24"
                >
                    {highlights.map((highlight, index) => {
                        const IconComponent = highlight.icon;
                        return (
                            <motion.div
                                key={highlight.title}
                                variants={itemVariants}
                                className="text-center group"
                            >
                                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-cosmic-teal to-stellar-mint rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <IconComponent className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="font-chaney text-lg sm:text-xl md:text-2xl text-dark-space mb-6 group-hover:text-cosmic-teal transition-colors duration-300">
                                    {highlight.title}
                                </h3>
                                <p className="font-space text-dark-space opacity-80 leading-relaxed text-lg">
                                    {highlight.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

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
                        <div className="space-y-8 font-space text-dark-space">
                            <p className="text-xl leading-relaxed font-light">
                                We are pleased to announce the 7th International Conference on GPS Radio Occultation (ICGPSRO) 2025.
                                The conference will be held on 28-30 October 2025 at the National Cheng Kung University, Tainan, Taiwan.
                            </p>
                            <p className="text-xl leading-relaxed font-light">
                                This is the first time we will host the conference in Tainan, the first capital of Taiwan,
                                only 1.5 hours from Taipei by high speed rail. The conference will address the scientific
                                progresses of radio occultation missions and advanced GNSS technologies for the exploration
                                of meteorology, climate, and space science.
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
                        <div className="space-y-6">
                            {themes.map((theme, index) => (
                                <motion.div
                                    key={theme}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-6 p-6 bg-gradient-to-r from-cosmic-teal/5 to-stellar-mint/5 rounded-2xl border-l-4 border-cosmic-teal hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-4 h-4 bg-cosmic-teal rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="font-space text-dark-space font-medium text-lg leading-relaxed">{theme}</span>
                                </motion.div>
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
                    <div className="bg-gradient-to-br from-cosmic-teal to-dark-space rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-black opacity-10"></div>
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