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
                    question: "Who can attend ICGPSRO 2025?",
                    answer: "The conference is open to researchers, scientists, students, and industry professionals working in or interested in GPS Radio Occultation, atmospheric sciences, space weather, and related fields. We welcome participants from academia, government agencies, and private sector organizations worldwide."
                },
                {
                    question: "Is there a registration fee?",
                    answer: "No, ICGPSRO 2025 is completely free to attend! There are no registration fees for any participants, whether attending in person or virtually. This includes access to all sessions, materials, and networking opportunities."
                },
                {
                    question: "Is there a virtual participation option?",
                    answer: "Yes, we offer virtual participation options including live streaming access, virtual networking platform, digital proceedings, recorded session access, and a digital certificate. This option is also free of charge."
                },
                {
                    question: "How do I register for the conference?",
                    answer: "A meeting website will soon be opened for registrations and abstract submissions. We will keep you updated through this website and official announcements from the organizing committee."
                }
            ]
        },
        {
            category: "Conference Content",
            questions: [
                {
                    question: "What topics will be covered at the conference?",
                    answer: "The conference will address seven main topics: (1) Missions and programs, (2) Retrieval methodology and science, (3) Numerical weather prediction data assimilation advances, (4) Atmospheric physics and climate, (5) Space weather, (6) GNSS-Reflectometry, and (7) Innovative GNSS technologies."
                },
                {
                    question: "Can I present my research at the conference?",
                    answer: "Yes, we encourage research presentations through oral sessions and poster presentations. Abstract submission guidelines will be available when the conference website opens. Both students and professionals are welcome to submit their research."
                },
                {
                    question: "Will conference proceedings be published?",
                    answer: "Yes, conference proceedings will be published and made available to all registered participants. Digital copies will be provided, and selected papers may be published in a special issue of a peer-reviewed journal."
                },
                {
                    question: "Are there hands-on workshops or tutorials?",
                    answer: "Yes, we plan to offer technical workshops on data processing tools, software tutorials, and hands-on sessions with GNSS data. These sessions are designed to provide practical skills and enhance learning opportunities."
                }
            ]
        },
        {
            category: "Travel & Accommodation",
            questions: [
                {
                    question: "Where is the conference being held?",
                    answer: "ICGPSRO 2025 is being held at the National Cheng Kung University in Tainan, Taiwan, from 28-30 October 2025. This is the first time the conference will be hosted in Tainan, the first capital of Taiwan, only 1.5 hours from Taipei by high speed rail."
                },
                {
                    question: "Do I need a visa to travel to Taiwan?",
                    answer: "Visa requirements depend on your nationality. Many countries have visa-free or visa-on-arrival arrangements with Taiwan. We recommend checking with the Taiwan embassy or consulate in your country well in advance of travel."
                },
                {
                    question: "Are there recommended hotels near the venue?",
                    answer: "Yes, we will provide a list of recommended accommodations near National Cheng Kung University with information about booking. Tainan offers various accommodation options from budget to luxury hotels. Details will be available when registration opens."
                },
                {
                    question: "What is the weather like in Tainan during the conference?",
                    answer: "Late October in Tainan features pleasant weather with temperatures ranging from 22-28°C (72-82°F). It's generally sunny with occasional rain showers. We recommend bringing light layers and a light rain jacket. The weather is ideal for exploring the historic city."
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
                    answer: "Updates will be posted on this website and sent to registered participants via email. Follow our official announcements for the latest information about the program, speakers, and important deadlines."
                },
                {
                    question: "Is there support for first-time conference attendees?",
                    answer: "Yes, we provide orientation information for first-time attendees and welcome opportunities for newcomers to connect with experienced researchers. The organizing committee and volunteers will be available to help navigate the conference program and activities."
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
                        Find answers to common questions about ICGPSRO 2025 in Tainan, Taiwan
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
                            <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl text-cosmic-teal border-b-2 border-cosmic-teal/20 pb-4">
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
                                                <h4 className="font-space font-semibold text-base sm:text-lg text-dark-space pr-4">
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
                            Our organizing committee is here to help! Don't hesitate to reach out for any additional
                            information about the conference, registration, or travel arrangements.
                        </p>

                        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
                            <button
                                onClick={() => window.open('mailto:10810048@gs.ncku.edu.tw')}
                                className="cosmic-button px-8 py-4 rounded-full font-semibold font-space text-lg w-full sm:w-auto"
                            >
                                <span className="relative z-10">Email Organizers</span>
                            </button>
                            <button className="px-8 py-4 border-2 border-stellar-mint rounded-full font-semibold text-stellar-mint hover:bg-stellar-mint hover:text-dark-space transition-all duration-300 font-space text-lg w-full sm:w-auto">
                                Download Information
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="mb-2 flex justify-center">
                                        <Mail className="w-6 h-6 text-stellar-mint" />
                                    </div>
                                    <p className="font-space text-sm">
                                        <span className="font-semibold">Contact:</span><br />
                                        <a href="mailto:10810048@gs.ncku.edu.tw" className="underline">10810048@gs.ncku.edu.tw</a>
                                    </p>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-center">
                                        <Clock className="w-6 h-6 text-stellar-mint" />
                                    </div>
                                    <p className="font-space text-sm">
                                        <span className="font-semibold">Conference Dates:</span><br />
                                        28-30 October 2025
                                    </p>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-center">
                                        <Globe className="w-6 h-6 text-stellar-mint" />
                                    </div>
                                    <p className="font-space text-sm">
                                        <span className="font-semibold">Location:</span><br />
                                        Tainan, Taiwan
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