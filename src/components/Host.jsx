import { motion } from 'framer-motion';
import { Satellite, Rocket, Microscope, Globe, Radio, Cloud } from 'lucide-react';

const Host = () => {
    const hosts = [
        {
            category: "Proudly Presented By",
            organizations: [
                { name: "UCAR COSMIC Program Office", icon: Satellite },
                { name: "Taiwan Space Agency (TASA)", icon: Rocket }
            ]
        },
        {
            category: "Sponsored By",
            organizations: [
                { name: "National Science Foundation", icon: Microscope },
                { name: "Taiwan International Assembly of Space Science", icon: Globe },
                { name: "University Corporation for Atmospheric Research", icon: Cloud }
            ]
        },
        {
            category: "Special Thanks To",
            organizations: [
                { name: "GPS Radio Occultation Community", icon: Radio },
                { name: "International GNSS Research Partners", icon: Globe },
                { name: "Taiwan Meteorological Administration", icon: Cloud }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
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
        <section className="min-h-screen flex flex-col justify-center py-16 bg-gradient-to-b from-dark-space to-deep-space relative">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cosmic-white mb-6">
                        <span className="nebula-text">Partners & Supporters</span>
                    </h2>
                    <div className="section-divider max-w-md mx-auto"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {hosts.map((section, sectionIndex) => (
                        <motion.div
                            key={section.category}
                            variants={itemVariants}
                            className="text-center"
                        >
                            <h3 className="font-chaney text-2xl md:text-3xl text-cosmic-teal mb-6">
                                {section.category}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {section.organizations.map((org, orgIndex) => {
                                    const IconComponent = org.icon;
                                    return (
                                        <motion.div
                                            key={org.name}
                                            variants={itemVariants}
                                            className="space-card framer-animated rounded-2xl p-6 group hover:cosmic-glow transition-all duration-500"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="mb-4 group-hover:animate-float flex justify-center">
                                                <IconComponent className="w-12 h-12 text-cosmic-teal group-hover:text-stellar-mint transition-colors duration-300" />
                                            </div>
                                            <h4 className="font-space font-semibold text-base text-cosmic-white group-hover:text-stellar-mint transition-colors duration-300 leading-snug">
                                                {org.name}
                                            </h4>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-6 h-6 bg-cosmic-teal rounded-full animate-twinkle opacity-50"></div>
                <div className="absolute bottom-20 left-20 w-4 h-4 bg-stellar-mint rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-10 w-2 h-2 bg-cosmic-white rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2s' }}></div>

                {/* Partnership statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="space-card framer-animated rounded-3xl p-8 max-w-4xl mx-auto">
                        <p className="font-space text-lg md:text-xl text-stellar-mint leading-relaxed">
                            "ICGPSRO 2025 brings together the global community of researchers, scientists, and
                            industry professionals to advance the field of GPS Radio Occultation and its
                            applications in atmospheric and space sciences."
                        </p>
                        <div className="mt-6">
                            <div className="w-16 h-1 bg-cosmic-teal mx-auto rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Host; 