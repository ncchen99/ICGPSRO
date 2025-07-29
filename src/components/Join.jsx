import { motion } from 'framer-motion';
import { User, GraduationCap, Monitor, Star, Users, BookOpen, Award, Rocket, Clock, CheckCircle, Calendar, Timer, FileText, Download } from 'lucide-react';

const Join = () => {
    const keyDates = [
        {
            label: "Abstract Submission Opens",
            date: "Spring 2025",
            status: "upcoming",
            discount: "Call for papers"
        },
        {
            label: "Registration Opens",
            date: "Summer 2025",
            status: "upcoming",
            discount: "Free registration"
        },
        {
            label: "Abstract Deadline",
            date: "September 2025",
            status: "upcoming",
            discount: "Submit your research"
        },
        {
            label: "Conference Dates",
            date: "28-30 October 2025",
            status: "event",
            discount: "Tainan, Taiwan"
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
                        Join <span className="nebula-text">ICGPSRO 2025</span>
                    </h2>
                    <div className="section-divider max-w-md mx-auto"></div>
                    <p className="font-space text-xl text-stellar-mint max-w-4xl mx-auto leading-relaxed">
                        Free registration for the premier international conference on GPS Radio Occultation in Tainan, Taiwan
                    </p>
                </motion.div>

                {/* Registration Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="space-card framer-animated rounded-3xl p-12 max-w-4xl mx-auto">
                        <div className="mb-6 flex justify-center">
                            <Rocket className="w-16 h-16 text-cosmic-teal" />
                        </div>
                        <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cosmic-white mb-8">
                            Registration Information
                        </h3>
                        <div className="space-y-6 text-stellar-mint font-space text-lg leading-relaxed">
                            <p>
                                A meeting website will soon be opened for registrations and abstract submissions.
                                We will keep you updated.
                            </p>
                            <p className="text-cosmic-teal font-medium italic">
                                Looking forward to seeing you in Tainan, Taiwan.
                            </p>
                        </div>
                    </div>
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
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-cosmic-teal rounded-full animate-twinkle opacity-30"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-stellar-mint rounded-full animate-twinkle opacity-30" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cosmic-white rounded-full animate-twinkle opacity-30" style={{ animationDelay: '2s' }}></div>
        </section>
    );
};

export default Join; 