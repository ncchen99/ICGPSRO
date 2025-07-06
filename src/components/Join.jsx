import { motion } from 'framer-motion';
import { User, GraduationCap, Monitor, Star, Users, BookOpen, Award, Rocket, Clock, CheckCircle, Calendar, Timer } from 'lucide-react';

const Join = () => {
    const registrationOptions = [
        {
            title: "Regular Registration",
            price: "$450",
            includes: [
                "All conference sessions",
                "Welcome reception",
                "Coffee breaks & lunch",
                "Conference proceedings",
                "Certificate of attendance",
                "Networking opportunities"
            ],
            icon: User,
            popular: false
        },
        {
            title: "Student Registration",
            price: "$200",
            includes: [
                "All conference sessions",
                "Student poster sessions",
                "Mentorship program",
                "Student networking events",
                "Conference proceedings",
                "Certificate of attendance"
            ],
            icon: GraduationCap,
            popular: true
        },
        {
            title: "Virtual Participation",
            price: "$150",
            includes: [
                "Live streaming access",
                "Virtual networking platform",
                "Digital proceedings",
                "Recorded session access",
                "Virtual exhibition hall",
                "Digital certificate"
            ],
            icon: Monitor,
            popular: false
        }
    ];

    const keyDates = [
        {
            label: "Early Bird Registration",
            date: "August 15, 2023",
            status: "ended",
            discount: "Save $100"
        },
        {
            label: "Regular Registration",
            date: "September 30, 2023",
            status: "active",
            discount: "Standard rates"
        },
        {
            label: "Late Registration",
            date: "October 20, 2023",
            status: "upcoming",
            discount: "+$75 late fee"
        },
        {
            label: "Conference Dates",
            date: "October 30 - November 3, 2023",
            status: "event",
            discount: "Taipei, Taiwan"
        }
    ];

    const benefits = [
        {
            icon: Star,
            title: "World-Class Speakers",
            description: "Learn from leading experts in GPS Radio Occultation"
        },
        {
            icon: Users,
            title: "Global Networking",
            description: "Connect with researchers and professionals worldwide"
        },
        {
            icon: BookOpen,
            title: "Latest Research",
            description: "Access cutting-edge research and methodologies"
        },
        {
            icon: Award,
            title: "Professional Growth",
            description: "Advance your career in atmospheric sciences"
        }
    ];

    return (
        <section id="join" className="min-h-screen flex flex-col justify-center py-16 stars-bg relative">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cosmic-white mb-6">
                        Join <span className="nebula-text">ICGPSRO 2023</span>
                    </h2>
                    <div className="section-divider max-w-md mx-auto"></div>
                    <p className="font-space text-xl text-stellar-mint max-w-4xl mx-auto leading-relaxed">
                        Secure your place at the premier international conference on GPS Radio Occultation
                    </p>
                </motion.div>

                {/* Registration options */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
                >
                    {registrationOptions.map((option, index) => (
                        <motion.div
                            key={option.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`space-card framer-animated rounded-3xl p-8 text-center relative ${option.popular ? 'cosmic-glow ring-2 ring-cosmic-teal' : ''
                                } hover:cosmic-glow transition-all duration-500`}
                            whileHover={{ scale: 1.02 }}
                        >
                            {option.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-cosmic-teal text-white px-6 py-2 rounded-full font-space font-bold text-sm">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            <div className="mb-6 flex justify-center">
                                <option.icon className="w-16 h-16 text-cosmic-teal" />
                            </div>
                            <h3 className="font-chaney text-lg sm:text-xl md:text-2xl text-cosmic-white mb-4">
                                {option.title}
                            </h3>
                            <div className="text-4xl font-chaney text-cosmic-teal mb-6">
                                {option.price}
                            </div>

                            <ul className="space-y-3 mb-8 text-left">
                                {option.includes.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-stellar-mint rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="font-space text-cosmic-white">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => window.open('https://forms.google.com/icgpsro2023', '_blank')}
                                className="cosmic-button w-full py-4 rounded-full font-semibold font-space text-lg relative z-20 cursor-pointer"
                            >
                                <span className="relative z-10">Select Plan</span>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Key dates timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-teal text-center mb-12">
                        Important Dates
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {keyDates.map((date, index) => (
                            <motion.div
                                key={date.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`space-card framer-animated rounded-2xl p-6 text-center border-l-4 ${date.status === 'active' ? 'border-cosmic-teal cosmic-glow' :
                                    date.status === 'ended' ? 'border-gray-500 opacity-60' :
                                        date.status === 'event' ? 'border-stellar-mint' :
                                            'border-cosmic-teal/50'
                                    }`}
                            >
                                <div className={`mb-3 flex justify-center ${date.status === 'active' ? 'animate-pulse' : ''
                                    }`}>
                                    {date.status === 'ended' ? <Clock className="w-6 h-6 text-gray-500" /> :
                                        date.status === 'active' ? <CheckCircle className="w-6 h-6 text-green-500" /> :
                                            date.status === 'event' ? <Calendar className="w-6 h-6 text-cosmic-teal" /> : <Timer className="w-6 h-6 text-stellar-mint" />}
                                </div>
                                <h4 className="font-chaney text-lg text-cosmic-white mb-2">
                                    {date.label}
                                </h4>
                                <p className="font-space text-stellar-mint text-sm mb-2">
                                    {date.date}
                                </p>
                                <p className="font-space text-cosmic-teal text-xs">
                                    {date.discount}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-teal text-center mb-12">
                        Why Attend ICGPSRO?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center group"
                                >
                                    <div className="mb-4 group-hover:animate-bounce flex justify-center">
                                        <IconComponent className="w-12 h-12 text-cosmic-teal" />
                                    </div>
                                    <h4 className="font-chaney text-lg sm:text-xl text-cosmic-white mb-3 group-hover:text-stellar-mint transition-colors duration-300">
                                        {benefit.title}
                                    </h4>
                                    <p className="font-space text-stellar-mint leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Registration CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="space-card framer-animated rounded-3xl p-12 max-w-4xl mx-auto">
                        <div className="mb-6 flex justify-center">
                            <Rocket className="w-16 h-16 text-cosmic-teal" />
                        </div>
                        <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-white mb-6">
                            Ready to <span className="text-cosmic-teal">Launch</span> Your Journey?
                        </h3>
                        <p className="font-space text-lg text-stellar-mint mb-8 leading-relaxed">
                            Don't miss this opportunity to be part of the global GPS Radio Occultation community.
                            Register now and join us in Taipei for an unforgettable scientific experience.
                        </p>

                        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                            <button
                                onClick={() => window.open('https://forms.google.com/icgpsro2023', '_blank')}
                                className="cosmic-button px-8 py-4 rounded-full font-semibold font-space text-lg w-full sm:w-auto relative z-20 cursor-pointer"
                            >
                                <span className="relative z-10">Register Now</span>
                            </button>
                            <button
                                onClick={() => {
                                    // 創建一個下載鏈接
                                    const link = document.createElement('a');
                                    link.href = '/brochure/ICGPSRO2023-Brochure.pdf';
                                    link.download = 'ICGPSRO2023-Brochure.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                className="px-8 py-4 border-2 border-stellar-mint rounded-full font-semibold text-stellar-mint hover:bg-stellar-mint hover:text-dark-space transition-all duration-300 font-space text-lg w-full sm:w-auto relative z-20 cursor-pointer"
                            >
                                Download Brochure
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-cosmic-teal/20">
                            <p className="font-space text-cosmic-white text-sm">
                                <span className="text-cosmic-teal font-semibold">Contact:</span> cosmic-websites@ucar.edu
                            </p>
                            <p className="font-space text-stellar-mint text-xs mt-2">
                                For questions about registration, accommodations, or student programs
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-cosmic-teal rounded-full animate-twinkle opacity-30"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-stellar-mint rounded-full animate-twinkle opacity-30" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cosmic-white rounded-full animate-twinkle opacity-30" style={{ animationDelay: '2s' }}></div>
        </section>
    );
};

export default Join; 