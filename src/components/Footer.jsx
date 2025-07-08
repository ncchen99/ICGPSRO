import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Plane, Train, Bus, Car } from 'lucide-react';

const Footer = ({ lenis }) => {
    const scrollToTop = () => {
        lenis?.scrollTo(0, { duration: 2 });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "cosmic-websites@ucar.edu",
            link: "mailto:cosmic-websites@ucar.edu"
        },
        {
            icon: Globe,
            label: "Website",
            value: "www.cosmic.ucar.edu",
            link: "https://www.cosmic.ucar.edu"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+886-6-2757575",
            link: "tel:+886-6-2757575"
        }
    ];

    const quickLinks = [
        { label: "Conference Overview", href: "#conference-intro" },
        { label: "Speakers", href: "#speakers" },
        { label: "Agenda", href: "#agenda" },
        { label: "Registration", href: "#join" },
        { label: "FAQ", href: "#faq" }
    ];

    const partnerLinks = [
        { label: "UCAR COSMIC Program", href: "https://www.cosmic.ucar.edu" },
        { label: "Taiwan Space Agency", href: "https://www.tasa.org.tw" },
        { label: "National Science Foundation", href: "https://www.nsf.gov" },
        { label: "TASTI Conference", href: "https://tasti.org.tw" }
    ];

    const transportInfo = [
        {
            icon: Plane,
            title: "Taoyuan International Airport (TPE)",
            details: "45 minutes by Airport MRT or taxi to downtown Taipei"
        },
        {
            icon: Train,
            title: "Taipei Metro System",
            details: "Comprehensive subway network connecting all major areas"
        },
        {
            icon: Bus,
            title: "Conference Shuttle",
            details: "Daily shuttles from selected hotels to venue"
        },
        {
            icon: Car,
            title: "Taxi & Ride-sharing",
            details: "Uber and local taxi services widely available"
        }
    ];

    return (
        <footer className="bg-gradient-to-b from-dark-space to-deep-space relative overflow-hidden">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Conference Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="mb-6">
                            <h3 className="font-chaney text-2xl text-cosmic-white mb-4">
                                <span className="nebula-text">ICGPSRO</span>
                            </h3>
                            <p className="font-space text-stellar-mint leading-relaxed">
                                International Conference on GPS Radio Occultation - Advancing
                                GNSS-based remote sensing for atmospheric and space sciences.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-cosmic-teal rounded-full animate-pulse"></div>
                                <span className="font-space text-cosmic-white">October 30 - November 3, 2025</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-stellar-mint rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                <span className="font-space text-cosmic-white">Taipei, Taiwan</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-chaney text-xl text-cosmic-teal mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => lenis?.scrollTo(link.href, { duration: 2 })}
                                        className="font-space text-cosmic-white hover:text-stellar-mint transition-colors duration-300 text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Partner Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-chaney text-xl text-cosmic-teal mb-6">Partners</h4>
                        <ul className="space-y-3">
                            {partnerLinks.map((link, index) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-space text-cosmic-white hover:text-stellar-mint transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-chaney text-xl text-cosmic-teal mb-6">Contact</h4>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => {
                                const IconComponent = contact.icon;
                                return (
                                    <div key={contact.label} className="flex items-start space-x-3">
                                        <IconComponent className="w-5 h-5 text-cosmic-teal mt-0.5" />
                                        <div>
                                            <p className="font-space text-stellar-mint text-sm font-medium">
                                                {contact.label}
                                            </p>
                                            <a
                                                href={contact.link}
                                                className="font-space text-cosmic-white hover:text-stellar-mint transition-colors duration-300"
                                            >
                                                {contact.value}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Transportation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-12 border-t border-cosmic-teal/20"
                >
                    <h4 className="font-chaney text-lg sm:text-xl md:text-2xl text-cosmic-teal text-center mb-12">
                        Getting to Taipei
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {transportInfo.map((transport, index) => {
                            const IconComponent = transport.icon;
                            return (
                                <motion.div
                                    key={transport.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="space-card framer-animated rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300"
                                >
                                    <div className="mb-4 flex justify-center">
                                        <IconComponent className="w-10 h-10 text-cosmic-teal" />
                                    </div>
                                    <h5 className="font-space font-semibold text-cosmic-white mb-3 text-sm">
                                        {transport.title}
                                    </h5>
                                    <p className="font-space text-stellar-mint text-xs leading-relaxed">
                                        {transport.details}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-8">
                        <p className="font-space text-cosmic-white text-sm">
                            Detailed travel information and local recommendations will be provided to registered participants.
                        </p>
                    </div>
                </motion.div>

                {/* Newsletter signup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-12 border-t border-cosmic-teal/20"
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h4 className="font-chaney text-lg sm:text-xl md:text-2xl text-cosmic-teal mb-4">
                            Stay Updated
                        </h4>
                        <p className="font-space text-stellar-mint mb-8">
                            Subscribe to receive the latest conference updates and announcements
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-cosmic-teal/30 text-cosmic-white placeholder-cosmic-white/50 focus:outline-none focus:border-cosmic-teal font-space"
                            />
                            <button className="cosmic-button px-6 py-3 rounded-full font-semibold font-space">
                                <span className="relative z-10">Subscribe</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-cosmic-teal/20 bg-deep-space">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-6">
                            <p className="font-space text-cosmic-white text-sm">
                                © 2025 ICGPSRO Conference. All rights reserved.
                            </p>
                        </div>

                        <div className="flex items-center space-x-6">
                            <button
                                onClick={scrollToTop}
                                className="flex items-center space-x-2 text-cosmic-teal hover:text-stellar-mint transition-colors duration-300"
                            >
                                <span className="font-space text-sm">Back to top</span>
                                <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </div>
                            </button>

                            <div className="flex items-center space-x-4">
                                <span className="font-space text-cosmic-white text-sm">Follow us:</span>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-cosmic-teal hover:text-stellar-mint transition-colors duration-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <Globe className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="text-cosmic-teal hover:text-stellar-mint transition-colors duration-300">
                                        <span className="sr-only">Twitter</span>
                                        <Globe className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="text-cosmic-teal hover:text-stellar-mint transition-colors duration-300">
                                        <span className="sr-only">YouTube</span>
                                        <Globe className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-20 right-20 w-6 h-6 bg-cosmic-teal rounded-full animate-twinkle opacity-20"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 bg-stellar-mint rounded-full animate-twinkle opacity-20" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cosmic-white rounded-full animate-twinkle opacity-20" style={{ animationDelay: '2s' }}></div>
        </footer>
    );
};

export default Footer; 