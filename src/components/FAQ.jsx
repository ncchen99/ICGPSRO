import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, Globe, Mail, Clock, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: "Registration & Participation",
            questions: [
                {
                    question: "Who can attend ICGPSRO 2023?",
                    answer: "The conference is open to researchers, scientists, students, and industry professionals working in or interested in GPS Radio Occultation, atmospheric sciences, space weather, and related fields. We welcome participants from academia, government agencies, and private sector organizations."
                },
                {
                    question: "What is included in the registration fee?",
                    answer: "Registration includes access to all conference sessions, welcome reception, coffee breaks, lunches, conference proceedings, networking events, and a certificate of attendance. Student registration also includes mentorship programs and special student events."
                },
                {
                    question: "Is there a virtual participation option?",
                    answer: "Yes, we offer virtual participation for $150 which includes live streaming access, virtual networking platform, digital proceedings, recorded session access, and a digital certificate. This option is perfect for those unable to travel to Taipei."
                },
                {
                    question: "Are there scholarships available for students?",
                    answer: "Yes, limited scholarships are available for qualified students, particularly those from developing countries or underrepresented groups. Applications are reviewed on a case-by-case basis. Contact cosmic-websites@ucar.edu for more information."
                }
            ]
        },
        {
            category: "Conference Content",
            questions: [
                {
                    question: "What topics will be covered at the conference?",
                    answer: "The conference covers GPS Radio Occultation data processing, weather prediction, climate monitoring, ionospheric studies, GNSS reflectometry, emerging technologies, and future mission planning. Sessions include keynotes, technical presentations, workshops, and panel discussions."
                },
                {
                    question: "Can I present my research at the conference?",
                    answer: "Yes, we encourage research presentations through oral sessions and poster presentations. Students have dedicated poster sessions and opportunities for oral presentations. Abstract submission guidelines are available on our website."
                },
                {
                    question: "Will conference proceedings be published?",
                    answer: "Yes, conference proceedings will be published and made available to all registered participants. Digital copies will be provided, and selected papers may be published in a special issue of a peer-reviewed journal."
                },
                {
                    question: "Are there hands-on workshops or tutorials?",
                    answer: "Yes, we offer technical workshops on data processing tools, software tutorials, and hands-on sessions with GNSS data. These sessions are designed to provide practical skills and enhance learning opportunities."
                }
            ]
        },
        {
            category: "Travel & Accommodation",
            questions: [
                {
                    question: "Where is the conference being held?",
                    answer: "ICGPSRO 2023 is being held in Taipei, Taiwan, from October 30 to November 3, 2023. The venue is at a modern conference center with state-of-the-art facilities and excellent accessibility."
                },
                {
                    question: "Do I need a visa to travel to Taiwan?",
                    answer: "Visa requirements depend on your nationality. Many countries have visa-free or visa-on-arrival arrangements with Taiwan. We recommend checking with the Taiwan embassy or consulate in your country well in advance of travel."
                },
                {
                    question: "Are there recommended hotels near the venue?",
                    answer: "Yes, we have partnered with several hotels offering special conference rates. A list of recommended accommodations with booking information will be provided to registered participants. Early booking is advised due to limited availability."
                },
                {
                    question: "What is the weather like in Taipei during the conference?",
                    answer: "Late October to early November in Taipei features mild and pleasant weather with temperatures ranging from 20-26°C (68-79°F). It's generally sunny with occasional rain showers. We recommend bringing light layers and a light rain jacket."
                }
            ]
        },
        {
            category: "Technical Information",
            questions: [
                {
                    question: "What level of technical expertise is expected?",
                    answer: "The conference caters to various expertise levels, from graduate students to senior researchers. Basic sessions provide foundational knowledge, while advanced sessions delve into cutting-edge research. All participants will find valuable content regardless of their background level."
                },
                {
                    question: "Will there be opportunities for collaboration?",
                    answer: "Absolutely! The conference is designed to foster collaboration through dedicated networking sessions, collaborative workshops, breakout discussions, and social events. We encourage participants to exchange ideas and form new research partnerships."
                },
                {
                    question: "How can I stay updated on conference announcements?",
                    answer: "Regular updates are sent to registered participants via email. You can also follow our website and social media channels for the latest announcements, program updates, and important information."
                },
                {
                    question: "Is there support for first-time conference attendees?",
                    answer: "Yes, we provide orientation sessions for first-time attendees, mentorship programs pairing newcomers with experienced researchers, and dedicated support staff to help navigate the conference program and activities."
                }
            ]
        }
    ];

    const toggleFAQ = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="min-h-screen flex flex-col justify-center py-16 bg-cosmic-white relative">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-space mb-6">
                        Frequently Asked <span className="text-cosmic-teal">Questions</span>
                    </h2>
                    <div className="w-24 h-1 bg-cosmic-teal mx-auto mb-8"></div>
                    <p className="font-space text-xl text-dark-space max-w-4xl mx-auto leading-relaxed">
                        Find answers to common questions about ICGPSRO 2023
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="font-chaney text-2xl md:text-3xl text-cosmic-teal border-b-2 border-cosmic-teal/20 pb-4">
                                {category.category}
                            </h3>

                            <div className="space-y-4">
                                {category.questions.map((faq, questionIndex) => {
                                    const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;

                                    return (
                                        <motion.div
                                            key={questionIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: questionIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                                                className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-cosmic-teal/5 hover:to-stellar-mint/5 transition-all duration-300"
                                            >
                                                <h4 className="font-space font-semibold text-lg text-dark-space pr-4">
                                                    {faq.question}
                                                </h4>
                                                <div className={`transform transition-transform duration-300 text-cosmic-teal ${isOpen ? 'rotate-180' : ''
                                                    }`}>
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </button>

                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isOpen ? 'auto' : 0,
                                                    opacity: isOpen ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6">
                                                    <div className="border-t border-gray-100 pt-4">
                                                        <p className="font-space text-dark-space leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-br from-cosmic-teal to-dark-space rounded-3xl p-12 text-white">
                        <div className="mb-6 flex justify-center">
                            <HelpCircle className="w-16 h-16 text-stellar-mint" />
                        </div>
                        <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
                            Still Have <span className="text-stellar-mint">Questions</span>?
                        </h3>
                        <p className="font-space text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                            Our team is here to help! Don't hesitate to reach out for any additional
                            information about the conference, registration, or travel arrangements.
                        </p>

                        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                            <button
                                onClick={() => window.open('mailto:cosmic-websites@ucar.edu', '_blank')}
                                className="cosmic-button px-8 py-4 rounded-full font-semibold font-space text-lg w-full sm:w-auto"
                            >
                                <span className="relative z-10">Contact Us</span>
                            </button>
                            <button className="px-8 py-4 border-2 border-stellar-mint rounded-full font-semibold text-stellar-mint hover:bg-stellar-mint hover:text-dark-space transition-all duration-300 font-space text-lg w-full sm:w-auto">
                                Download FAQ PDF
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="mb-2 flex justify-center">
                                        <Mail className="w-6 h-6 text-stellar-mint" />
                                    </div>
                                    <p className="font-space text-sm">
                                        <span className="font-semibold">Email:</span><br />
                                        cosmic-websites@ucar.edu
                                    </p>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-center">
                                        <Clock className="w-6 h-6 text-stellar-mint" />
                                    </div>
                                    <p className="font-space text-sm">
                                        <span className="font-semibold">Response Time:</span><br />
                                        24-48 hours
                                    </p>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-center">
                                        <Globe className="w-6 h-6 text-stellar-mint" />
                                    </div>
                                    <p className="font-space text-sm">
                                        <span className="font-semibold">Support:</span><br />
                                        Multiple Languages
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-cosmic-teal/10 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border border-stellar-mint/10 rounded-full"></div>
        </section>
    );
};

export default FAQ; 