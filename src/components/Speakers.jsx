import { motion } from 'framer-motion';
import { User, UserCheck, BarChart3, Users, Award, GraduationCap } from 'lucide-react';

const Speakers = () => {
    const keynoteJSpeakers = [
        {
            name: "Dr. Sarah Chen",
            title: "Director of GNSS Research",
            organization: "NASA Jet Propulsion Laboratory",
            expertise: "Atmospheric Remote Sensing",
            icon: User,
            talk: "Future Perspectives in GPS Radio Occultation"
        },
        {
            name: "Prof. Michael Torres",
            title: "Chair of Space Physics",
            organization: "European Space Agency",
            expertise: "Ionospheric Studies",
            icon: User,
            talk: "GNSS Applications in Space Weather Monitoring"
        },
        {
            name: "Dr. Liu Wei",
            title: "Lead Scientist",
            organization: "Taiwan Space Agency",
            expertise: "Climate Research",
            icon: User,
            talk: "Regional Climate Monitoring Using RO Data"
        }
    ];

    const featuredSpeakers = [
        {
            name: "Dr. Anna Kowalski",
            organization: "UCAR COSMIC Program",
            expertise: "Data Assimilation",
            icon: UserCheck
        },
        {
            name: "Prof. James Rodriguez",
            organization: "MIT Atmospheric Sciences",
            expertise: "Numerical Weather Prediction",
            icon: UserCheck
        },
        {
            name: "Dr. Hiroshi Tanaka",
            organization: "JAXA Earth Observation",
            expertise: "Satellite Technology",
            icon: UserCheck
        },
        {
            name: "Dr. Emma Thompson",
            organization: "MetOffice Research",
            expertise: "Climate Modeling",
            icon: UserCheck
        },
        {
            name: "Prof. Carlos Silva",
            organization: "ESA Climate Office",
            expertise: "Long-term Climate Records",
            icon: UserCheck
        },
        {
            name: "Dr. Priya Sharma",
            organization: "ISRO Space Applications",
            expertise: "Tropical Meteorology",
            icon: UserCheck
        }
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
        <section id="speakers" className="min-h-screen flex flex-col justify-center py-16 stars-bg relative">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cosmic-white mb-6">
                        Distinguished <span className="nebula-text">Speakers</span>
                    </h2>
                    <div className="section-divider max-w-md mx-auto"></div>
                    <p className="font-space text-xl text-stellar-mint max-w-4xl mx-auto leading-relaxed">
                        Learn from world-renowned experts in GPS Radio Occultation and atmospheric sciences
                    </p>
                </motion.div>

                {/* Keynote Speakers */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-teal text-center mb-8">
                        Keynote Speakers
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {keynoteJSpeakers.map((speaker, index) => {
                            const IconComponent = speaker.icon;
                            return (
                                <motion.div
                                    key={speaker.name}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="space-card framer-animated rounded-3xl p-6 text-center group hover:cosmic-glow transition-all duration-500"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative mb-4">
                                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cosmic-teal to-stellar-mint rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-10 h-10 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-cosmic-teal rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">K</span>
                                        </div>
                                    </div>

                                    <h4 className="font-chaney text-lg text-cosmic-white mb-2 group-hover:text-stellar-mint transition-colors duration-300">
                                        {speaker.name}
                                    </h4>
                                    <p className="font-space text-cosmic-teal font-medium mb-1 text-sm">{speaker.title}</p>
                                    <p className="font-space text-stellar-mint text-xs mb-3">{speaker.organization}</p>

                                    <div className="border-t border-cosmic-teal/20 pt-3 mt-3">
                                        <p className="font-space text-cosmic-white text-xs mb-2">
                                            <span className="text-cosmic-teal font-semibold">Expertise:</span> {speaker.expertise}
                                        </p>
                                        <p className="font-space text-stellar-mint text-xs italic">
                                            "{speaker.talk}"
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Featured Speakers */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-teal text-center mb-8">
                        Featured Speakers
                    </h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {featuredSpeakers.map((speaker, index) => {
                            const IconComponent = speaker.icon;
                            return (
                                <motion.div
                                    key={speaker.name}
                                    variants={itemVariants}
                                    className="space-card framer-animated rounded-2xl p-4 text-center group hover:cosmic-glow transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-stellar-mint to-cosmic-teal rounded-full flex items-center justify-center mb-3 group-hover:animate-float">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="font-chaney text-base text-cosmic-white mb-1 group-hover:text-stellar-mint transition-colors duration-300">
                                        {speaker.name}
                                    </h4>
                                    <p className="font-space text-stellar-mint text-xs mb-1">{speaker.organization}</p>
                                    <p className="font-space text-cosmic-teal text-xs">{speaker.expertise}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Student Program Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="space-card framer-animated rounded-3xl p-8 max-w-4xl mx-auto">
                        <div className="mb-4 flex justify-center">
                            <GraduationCap className="w-12 h-12 text-cosmic-teal" />
                        </div>
                        <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-white mb-4">
                            Student <span className="text-cosmic-teal">Program</span>
                        </h3>
                        <p className="font-space text-base text-stellar-mint mb-6 leading-relaxed">
                            Special opportunities for undergraduate and graduate students to present their research,
                            network with experts, and gain valuable insights into GPS Radio Occultation applications.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="space-y-2">
                                <div className="flex justify-center">
                                    <BarChart3 className="w-6 h-6 text-cosmic-teal" />
                                </div>
                                <h4 className="font-space font-semibold text-cosmic-white text-sm">Poster Sessions</h4>
                                <p className="font-space text-xs text-stellar-mint">Present your research</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-center">
                                    <Users className="w-6 h-6 text-cosmic-teal" />
                                </div>
                                <h4 className="font-space font-semibold text-cosmic-white text-sm">Networking</h4>
                                <p className="font-space text-xs text-stellar-mint">Connect with experts</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-center">
                                    <Award className="w-6 h-6 text-cosmic-teal" />
                                </div>
                                <h4 className="font-space font-semibold text-cosmic-white text-sm">Awards</h4>
                                <p className="font-space text-xs text-stellar-mint">Recognition for excellence</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-cosmic-teal rounded-full animate-twinkle opacity-30"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-stellar-mint rounded-full animate-twinkle opacity-30" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cosmic-white rounded-full animate-twinkle opacity-30" style={{ animationDelay: '2s' }}></div>
        </section>
    );
};

export default Speakers; 