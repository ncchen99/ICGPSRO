import { motion } from 'framer-motion';
import { User, GraduationCap, Monitor, Star, Users, BookOpen, Award, Rocket, Clock, CheckCircle, Calendar, Timer, FileText, Download } from 'lucide-react';

const Join = () => {
    const keyDates = [
        // {
        //     label: "Abstract Submission Opens",
        //     date: "Summer  2025",
        //     status: "upcoming",
        //     discount: "Call for papers",
        //     link: "https://forms.gle/9eYfqbZGWEBB54CD6"
        // },
        {
            label: "Registration Opens",
            date: "Summer 2025",
            status: "upcoming",
            discount: "Free registration"
        },
        {
            label: "Abstract Submission Deadline",
            date: "24 September 2025",
            status: "upcoming",
            discount: "Submit your research"
        },
        {
            label: "Program Release",
            date: "10 October 2025",
            status: "upcoming",
            discount: "Program release"
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

                {/* Registration Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="bg-white/95 backdrop-blur-sm border border-cosmic-teal/20 shadow-2xl rounded-3xl max-w-5xl mx-auto overflow-hidden">
                        {/* Header section with padding */}
                        <div className="p-8 pb-0">
                            <div className="mb-6 flex justify-center">
                                <Rocket className="w-16 h-16 text-cosmic-teal" />
                            </div>
                            <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-8">
                                Registration & Abstract Submission
                            </h3>
                            <div className="mb-8">
                                <p className="text-gray-700 font-space text-lg leading-relaxed mb-4">
                                    Register and submit your abstract for ICGPSRO 2025 in Tainan, Taiwan
                                </p>
                                <p className="text-gray-700 font-space text-lg leading-relaxed mb-4">
                                    Abstract submission deadline: <span className="font-semibold">24 September 2025</span>. Program will be released on <span className="font-semibold">10 October 2025</span>.
                                </p>
                                <p className="text-cosmic-teal font-medium italic">
                                    Free registration - Looking forward to seeing you there!
                                </p>
                            </div>
                        </div>

                        {/* Registration Form Iframe - Full width, mobile scrollable */}
                        <div
                            className="w-full"
                            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'auto' }}
                            data-lenis-prevent="true"
                        >
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSftXCnJUxhKbCc8NsmthL3YZXl4Wonj1df25626dmEcICUoNQ/viewform?embedded=true"
                                width="100%"
                                height="720"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className="w-full overflow-auto"
                                title="ICGPSRO 2025 Registration Form"
                                scrolling="yes"
                            >
                                Loading...
                            </iframe>
                        </div>
                    </div>
                </motion.div>

                {/* Abstract Submission Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="space-card framer-animated rounded-3xl p-8 max-w-5xl mx-auto relative overflow-hidden border-2 border-stellar-mint cosmic-glow">
                
                        <div className="absolute inset-0 bg-gradient-to-br from-stellar-mint/10 via-cosmic-teal/5 to-transparent"></div>

                        <div className="relative z-10">
                            <div className="mb-6 flex justify-center">
                                <FileText className="w-16 h-16 text-stellar-mint animate-pulse" />
                            </div>
                            <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-stellar-mint mb-6">
                                Abstract Submission
                            </h3>
                            <div className="space-y-4 text-cosmic-white font-space text-lg leading-relaxed mb-8">
                                <p className="text-stellar-mint font-semibold text-xl">
                                    Call for Papers - Submit Your Research!
                                </p>
                                <p>
                                    Share your latest research in GPS Radio Occultation, atmospheric sciences,
                                    and related fields with the global community.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-left">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-stellar-mint mt-1 flex-shrink-0" />
                                        <span>Original research papers</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-stellar-mint mt-1 flex-shrink-0" />
                                        <span>Technical innovations</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-stellar-mint mt-1 flex-shrink-0" />
                                        <span>Case studies & analysis</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-stellar-mint mt-1 flex-shrink-0" />
                                        <span>Review papers welcome</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => window.open("https://forms.gle/9eYfqbZGWEBB54CD6", '_blank')}
                                className="cosmic-button px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl group"
                            >
                                <span className="flex items-center space-x-3">
                                    <FileText className="w-6 h-6 group-hover:animate-bounce" />
                                    <span>Submit Abstract Now</span>
                                    <div className="w-2 h-2 bg-stellar-mint rounded-full animate-ping"></div>
                                </span>
                            </button>
                        </div>

                        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-stellar-mint/30 rounded-full animate-spin"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-stellar-mint/20 rounded-full animate-pulse"></div>
                    </div>
                </motion.div> */}

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
                                className={`space-card framer-animated rounded-2xl p-6 text-center border-l-4 ${date.link ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''} ${date.status === 'active' ? 'border-cosmic-teal cosmic-glow' :
                                    date.status === 'ended' ? 'border-gray-500 opacity-60' :
                                        date.status === 'event' ? 'border-stellar-mint' :
                                            'border-cosmic-teal/50'
                                    }`}
                                onClick={() => date.link && window.open(date.link, '_blank')}
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