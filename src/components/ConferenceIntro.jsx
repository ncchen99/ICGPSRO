import { motion } from 'framer-motion';
import { Satellite, Globe, Star, Microscope } from 'lucide-react';

const ConferenceIntro = ({ lenis }) => {
    const highlights = [
        {
            icon: Satellite,
            title: "GNSS Technology",
            description: "Advanced GPS Radio Occultation techniques and applications"
        },
        {
            icon: Globe,
            title: "Weather & Climate",
            description: "Atmospheric observations for meteorological and climatological research"
        },
        {
            icon: Star,
            title: "Space Weather",
            description: "Ionospheric monitoring and space environment characterization"
        },
        {
            icon: Microscope,
            title: "Scientific Innovation",
            description: "Cutting-edge research methodologies and data processing techniques"
        }
    ];

    const themes = [
        "Radio Occultation Data Processing and Quality Control",
        "Weather Prediction and Data Assimilation",
        "Climate Monitoring and Long-term Trends",
        "Ionospheric and Space Weather Applications",
        "GNSS Reflectometry and Surface Studies",
        "Emerging Technologies and Future Missions"
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
                        <span className="text-cosmic-teal">Exploring</span> the Future
                        <br />
                        <span className="text-dark-space">of Space Science</span>
                    </h2>
                    <div className="w-32 h-1 bg-cosmic-teal mx-auto mb-12"></div>
                    <p className="font-space text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-space max-w-5xl mx-auto leading-relaxed font-light">
                        ICGPSRO 2025 brings together the global community to advance GPS Radio Occultation
                        and GNSS-based remote sensing for atmospheric and space sciences.
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
                            About <span className="text-cosmic-teal">ICGPSRO</span>
                        </h3>
                        <div className="space-y-8 font-space text-dark-space">
                            <p className="text-xl leading-relaxed font-light">
                                The International Conference on GPS Radio Occultation focuses on GNSS-based
                                remote sensing, including radio occultation and reflectometry, and their
                                applications to weather, climate, and space weather science.
                            </p>
                            <p className="text-xl leading-relaxed font-light">
                                As part of the Taiwan International Assembly of Space Science, Technology,
                                and Industry (TASTI), this conference serves as a premier platform for
                                researchers, scientists, and industry professionals to share cutting-edge
                                developments and foster international collaboration.
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
                            Conference <span className="text-cosmic-teal">Themes</span>
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
                                Ready to <span className="text-stellar-mint">Explore</span>?
                            </h3>
                            <p className="font-space text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                Be part of the global community advancing GPS Radio Occultation science
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
                                    onClick={() => lenis?.scrollTo('#speakers', { duration: 2 })}
                                >
                                    Meet Speakers
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