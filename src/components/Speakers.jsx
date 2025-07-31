import { motion } from 'framer-motion';
import { User, UserCheck, BarChart3, Users, Award, GraduationCap } from 'lucide-react';

const Speakers = () => {
    const organizingCommittee = [
        {
            name: "Charles Lin",
            title: "Conference Co-Chair",
            organization: "Department of Earth Sciences, NCKU",
            expertise: "Radio Occultation Applications",
            icon: User,
            talk: "Local Organizing Committee Chair"
        },
        {
            name: "Jan-Peter Weiss",
            title: "Conference Co-Chair",
            organization: "UCAR COSMIC",
            expertise: "GNSS Technology",
            icon: User,
            talk: "International Program Committee Chair"
        },
        {
            name: "Vick Chu",
            title: "Executive Vice Director",
            organization: "Taiwan Space Agency (TASA)",
            expertise: "Space Missions",
            icon: User,
            talk: "Mission Planning and Operations"
        }
    ];

    const committeeMembers = [
        {
            name: "Cheng-Yun Huang",
            organization: "FORMOSAT-7/COSMIC-2 Program Director, TASA",
            expertise: "Satellite Programs",
            icon: UserCheck
        },
        {
            name: "Wen-Hao Yeh",
            organization: "TRITON Mission Program Director, TASA",
            expertise: "Mission Development",
            icon: UserCheck
        },
        {
            name: "Shu-Chih Yang",
            organization: "Department of Atmospheric Sciences, NCU",
            expertise: "Atmospheric Science",
            icon: UserCheck
        },
        {
            name: "Shu-Ya Chen",
            organization: "GPS-ARC, NCU",
            expertise: "GPS Applications",
            icon: UserCheck
        },
        {
            name: "Nick Pedatella",
            organization: "NCAR HAO",
            expertise: "Space Weather",
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
                        Organizing <span className="nebula-text">Committee</span>
                    </h2>
                    <div className="section-divider max-w-md mx-auto"></div>
                    <p className="font-space text-xl text-stellar-mint max-w-4xl mx-auto leading-relaxed">
                        Meet the dedicated team organizing ICGPSRO 2025 in Tainan, Taiwan
                    </p>
                </motion.div>

                {/* Conference Chairs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-teal text-center mb-8">
                        Conference Chairs
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {organizingCommittee.map((member, index) => {
                            const IconComponent = member.icon;
                            return (
                                <motion.div
                                    key={member.name}
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
                                            <span className="text-white text-xs font-bold">C</span>
                                        </div>
                                    </div>

                                    <h4 className="font-chaney text-lg text-cosmic-white mb-2 group-hover:text-stellar-mint transition-colors duration-300">
                                        {member.name}
                                    </h4>
                                    <p className="font-space text-cosmic-teal font-medium mb-1 text-sm">{member.title}</p>
                                    <p className="font-space text-stellar-mint text-xs mb-3">{member.organization}</p>

                                    <div className="border-t border-cosmic-teal/20 pt-3 mt-3">
                                        <p className="font-space text-cosmic-white text-xs mb-2">
                                            <span className="text-cosmic-teal font-semibold">Expertise:</span> {member.expertise}
                                        </p>
                                        <p className="font-space text-stellar-mint text-xs italic">
                                            {member.talk}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Committee Members */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-teal text-center mb-8">
                        Committee Members
                    </h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {committeeMembers.map((member, index) => {
                            const IconComponent = member.icon;
                            return (
                                <motion.div
                                    key={member.name}
                                    variants={itemVariants}
                                    className="space-card framer-animated rounded-2xl p-4 text-center group hover:cosmic-glow transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-stellar-mint to-cosmic-teal rounded-full flex items-center justify-center mb-3 group-hover:animate-float">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="font-chaney text-base text-cosmic-white mb-1 group-hover:text-stellar-mint transition-colors duration-300">
                                        {member.name}
                                    </h4>
                                    <p className="font-space text-stellar-mint text-xs mb-1">{member.organization}</p>
                                    <p className="font-space text-cosmic-teal text-xs">{member.expertise}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Conference Information */}
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
                            Conference <span className="text-cosmic-teal">Information</span>
                        </h3>
                        <p className="font-space text-base text-stellar-mint mb-6 leading-relaxed">
                            A meeting website will soon be opened for registrations and abstract submissions.
                            We will keep you updated as we finalize the program details and speaker lineup.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="space-y-2">
                                <div className="flex justify-center">
                                    <BarChart3 className="w-6 h-6 text-cosmic-teal" />
                                </div>
                                <h4 className="font-space font-semibold text-cosmic-white text-sm">Call for Papers</h4>
                                <p className="font-space text-xs text-stellar-mint">Abstract submissions opening soon</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-center">
                                    <Users className="w-6 h-6 text-cosmic-teal" />
                                </div>
                                <h4 className="font-space font-semibold text-cosmic-white text-sm">International Participation</h4>
                                <p className="font-space text-xs text-stellar-mint">Global community welcome</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-center">
                                    <Award className="w-6 h-6 text-cosmic-teal" />
                                </div>
                                <h4 className="font-space font-semibold text-cosmic-white text-sm">Free Registration</h4>
                                <p className="font-space text-xs text-stellar-mint">No registration fees</p>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-cosmic-teal/20">
                            <p className="font-space text-sm text-cosmic-teal italic">
                                "Looking forward to seeing you in Tainan, Taiwan."
                            </p>
                            <p className="font-space text-xs text-stellar-mint mt-2">
                                - Charles Lin and Jan-Peter Weiss on behalf of the organizing committee
                            </p>
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