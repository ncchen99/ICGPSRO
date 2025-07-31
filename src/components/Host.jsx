import { motion } from 'framer-motion';
import { Satellite, Rocket, Microscope, Globe, Radio, Cloud, User } from 'lucide-react';
import TASAImage from '../assets/images/TASA.png';
import HMSSTCImage from '../assets/images/hmsstc.png';

const Host = () => {
    const organizerInfo = {
        organizer: {
            name: "Taiwan Space Agency",
            image: TASAImage
        },
        coOrganizer: {
            name: "Han-Min Hsia Space Tech. Center, NCKU",
            image: HMSSTCImage
        }
    };

    const committeeMembers = [
        {
            name: "Charles Lin (NCKU)",
            icon: User
        },
        {
            name: "Jan-Peter Weiss (UCAR COSMIC)",
            icon: User
        },
        {
            name: "Vick Chu (Executive Vice Director of TASA)",
            icon: User
        },
        {
            name: "Cheng-Yun Huang (FORMOSAT-7/COSMIC-2 Program Director, TASA)",
            icon: User
        },
        {
            name: "Wen-Hao Yeh (TRITON Mission Program Director, TASA)",
            icon: User
        },
        {
            name: "Shu-Chih Yang (Department of Atmosphere Science, NCU)",
            icon: User
        },
        {
            name: "Shu-Ya Chen (GPS-ARC, NCU)",
            icon: User
        },
        {
            name: "Nick Pedatella (NCAR HAO)",
            icon: User
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
                    className="text-center mb-16"
                >
                    <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cosmic-white mb-6">
                        <span className="nebula-text">Organizers & Committee</span>
                    </h2>
                    <div className="section-divider max-w-md mx-auto"></div>
                </motion.div>

                {/* Main Organizers - Side by side layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Organizer */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center"
                        >
                            <h3 className="font-chaney text-2xl md:text-3xl text-cosmic-teal mb-8">
                                Organizer
                            </h3>
                            <div className="space-card framer-animated rounded-3xl p-8 group hover:cosmic-glow transition-all duration-500">
                                <div className="mb-6 flex justify-center">
                                    <img
                                        src={organizerInfo.organizer.image}
                                        alt={organizerInfo.organizer.name}
                                        className="h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </div>
                                <h4 className="font-space font-semibold text-lg text-cosmic-white group-hover:text-stellar-mint transition-colors duration-300">
                                    {organizerInfo.organizer.name}
                                </h4>
                            </div>
                        </motion.div>

                        {/* Co-organizer */}
                        <motion.div
                            variants={itemVariants}
                            className="text-center"
                        >
                            <h3 className="font-chaney text-2xl md:text-3xl text-cosmic-teal mb-8">
                                Co-organizer
                            </h3>
                            <div className="space-card framer-animated rounded-3xl p-8 group hover:cosmic-glow transition-all duration-500">
                                <div className="mb-6 flex justify-center">
                                    <img
                                        src={organizerInfo.coOrganizer.image}
                                        alt={organizerInfo.coOrganizer.name}
                                        className="h-20 object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-space font-semibold text-lg text-cosmic-white group-hover:text-stellar-mint transition-colors duration-300">
                                    {organizerInfo.coOrganizer.name}
                                </h4>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Organizing Committee */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-chaney text-2xl md:text-3xl text-cosmic-teal text-center mb-12">
                        Organizing Committee
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {committeeMembers.map((member, index) => {
                            const IconComponent = member.icon;
                            return (
                                <motion.div
                                    key={member.name}
                                    variants={itemVariants}
                                    className="space-card framer-animated rounded-2xl p-6 group hover:cosmic-glow transition-all duration-500"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="mb-4 group-hover:animate-float flex justify-center">
                                        <IconComponent className="w-10 h-10 text-cosmic-teal group-hover:text-stellar-mint transition-colors duration-300" />
                                    </div>
                                    <h4 className="font-space font-semibold text-sm text-cosmic-white group-hover:text-stellar-mint transition-colors duration-300 leading-snug text-center">
                                        {member.name}
                                    </h4>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-6 h-6 bg-cosmic-teal rounded-full animate-twinkle opacity-50"></div>
                <div className="absolute bottom-20 left-20 w-4 h-4 bg-stellar-mint rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-10 w-2 h-2 bg-cosmic-white rounded-full animate-twinkle opacity-50" style={{ animationDelay: '2s' }}></div>

                {/* Partnership statement
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="space-card framer-animated rounded-3xl p-8 max-w-4xl mx-auto">
                        <p className="font-space text-lg md:text-xl text-stellar-mint leading-relaxed">
                            "The 7th International Conference on GPS Radio Occultation brings together the global community
                            to advance the scientific progress of radio occultation missions and GNSS technologies for
                            meteorology, climate, and space science applications."
                        </p>
                        <div className="mt-6">
                            <div className="w-16 h-1 bg-cosmic-teal mx-auto rounded-full"></div>
                        </div>
                        <div className="mt-4 text-sm text-cosmic-teal">
                            <p>Charles Lin and Jan-Peter Weiss on behalf of the organizing committee</p>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Host; 