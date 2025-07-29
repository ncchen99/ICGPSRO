import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, BarChart3, Utensils, Globe, Edit, Target, FileText, Mic, Clipboard, Wrench, Coffee, Trophy, MessageCircle, Building } from 'lucide-react';

const Agenda = () => {
    const [selectedDay, setSelectedDay] = useState(0);

    const schedule = [
        {
            date: "Monday, October 28",
            theme: "Opening & Foundations",
            sessions: [
                {
                    time: "09:00 - 09:30",
                    title: "Registration & Welcome Coffee",
                    type: "registration",
                    speaker: "",
                    description: "Network with fellow attendees"
                },
                {
                    time: "09:30 - 10:15",
                    title: "Opening Ceremony & Welcome Address",
                    type: "keynote",
                    speaker: "Conference Organizers",
                    description: "Official conference opening and overview"
                },
                {
                    time: "10:15 - 11:00",
                    title: "Missions and Programs Overview",
                    type: "keynote",
                    speaker: "Taiwan Space Agency",
                    description: "New missions and operations in GPS Radio Occultation"
                },
                {
                    time: "11:00 - 11:30",
                    title: "Coffee Break",
                    type: "break",
                    speaker: "",
                    description: "Networking and refreshments"
                },
                {
                    time: "11:30 - 12:30",
                    title: "Retrieval Methodology and Science",
                    type: "session",
                    speaker: "Technical Panel",
                    description: "Advanced data processing and retrieval techniques"
                },
                {
                    time: "12:30 - 14:00",
                    title: "Lunch Break",
                    type: "break",
                    speaker: "",
                    description: "Networking lunch"
                },
                {
                    time: "14:00 - 15:30",
                    title: "Numerical Weather Prediction Data Assimilation",
                    type: "session",
                    speaker: "Research Teams",
                    description: "Advances and validation studies in NWP"
                },
                {
                    time: "15:30 - 16:00",
                    title: "Afternoon Coffee",
                    type: "break",
                    speaker: "",
                    description: "Networking break"
                },
                {
                    time: "16:00 - 17:30",
                    title: "Student Poster Session I",
                    type: "poster",
                    speaker: "Student Participants",
                    description: "Research presentations by students"
                }
            ]
        },
        {
            date: "Tuesday, October 29",
            theme: "Atmospheric Physics & Space Weather",
            sessions: [
                {
                    time: "09:00 - 09:45",
                    title: "Atmospheric Physics and Climate Applications",
                    type: "keynote",
                    speaker: "International Experts",
                    description: "Climate monitoring and atmospheric studies"
                },
                {
                    time: "09:45 - 11:00",
                    title: "Space Weather Applications",
                    type: "session",
                    speaker: "Space Weather Panel",
                    description: "GNSS applications for space weather monitoring"
                },
                {
                    time: "11:00 - 11:30",
                    title: "Coffee Break",
                    type: "break",
                    speaker: "",
                    description: "Networking opportunity"
                },
                {
                    time: "11:30 - 12:30",
                    title: "GNSS-Reflectometry Session",
                    type: "session",
                    speaker: "GNSS-R Experts",
                    description: "Surface studies and ocean applications"
                },
                {
                    time: "12:30 - 14:00",
                    title: "Lunch & Networking",
                    type: "break",
                    speaker: "",
                    description: "Catered lunch with networking"
                },
                {
                    time: "14:00 - 15:30",
                    title: "Innovative GNSS Technologies",
                    type: "session",
                    speaker: "Technology Innovators",
                    description: "Cutting-edge GNSS technologies and applications"
                },
                {
                    time: "15:30 - 16:00",
                    title: "Afternoon Break",
                    type: "break",
                    speaker: "",
                    description: "Coffee and refreshments"
                },
                {
                    time: "16:00 - 17:00",
                    title: "Technical Workshop",
                    type: "workshop",
                    speaker: "Technical Experts",
                    description: "Hands-on workshop on data processing tools"
                },
                {
                    time: "19:00 - 22:00",
                    title: "Conference Dinner",
                    type: "social",
                    speaker: "",
                    description: "Traditional Tainan cuisine experience"
                }
            ]
        },
        {
            date: "Wednesday, October 30",
            theme: "Future Directions & Collaboration",
            sessions: [
                {
                    time: "09:00 - 10:30",
                    title: "International Collaboration Forum",
                    type: "forum",
                    speaker: "Global Partners",
                    description: "International cooperation in space sciences"
                },
                {
                    time: "10:30 - 11:00",
                    title: "Coffee Break",
                    type: "break",
                    speaker: "",
                    description: "Networking opportunity"
                },
                {
                    time: "11:00 - 12:00",
                    title: "Future Mission Planning",
                    type: "session",
                    speaker: "Space Agencies",
                    description: "Upcoming missions and planning initiatives"
                },
                {
                    time: "12:00 - 12:30",
                    title: "Student Awards Ceremony",
                    type: "awards",
                    speaker: "Awards Committee",
                    description: "Recognition of outstanding student contributions"
                },
                {
                    time: "12:30 - 14:00",
                    title: "Lunch Break",
                    type: "break",
                    speaker: "",
                    description: "Final networking lunch"
                },
                {
                    time: "14:00 - 15:30",
                    title: "Synthesis and Future Directions",
                    type: "synthesis",
                    speaker: "Conference Chairs",
                    description: "Summary of key findings and future research directions"
                },
                {
                    time: "15:30 - 16:00",
                    title: "Afternoon Coffee",
                    type: "break",
                    speaker: "",
                    description: "Last networking break"
                },
                {
                    time: "16:00 - 17:00",
                    title: "Closing Ceremony",
                    type: "closing",
                    speaker: "Conference Organizers",
                    description: "Conference wrap-up and closing remarks"
                }
            ]
        }
    ];

    const getSessionTypeColor = (type) => {
        const colors = {
            keynote: "bg-cosmic-teal",
            session: "bg-stellar-mint",
            poster: "bg-aurora-green",
            workshop: "bg-nebula-blue",
            break: "bg-gray-400",
            social: "bg-purple-500",
            panel: "bg-indigo-500",
            forum: "bg-pink-500",
            awards: "bg-yellow-500",
            breakout: "bg-green-500",
            synthesis: "bg-red-500",
            closing: "bg-cosmic-teal",
            cultural: "bg-orange-500",
            registration: "bg-gray-500"
        };
        return colors[type] || "bg-cosmic-teal";
    };

    const getSessionIcon = (type) => {
        const iconComponents = {
            keynote: Mic,
            session: BarChart3,
            poster: Clipboard,
            workshop: Wrench,
            break: Coffee,
            social: Utensils,
            panel: Users,
            forum: Globe,
            awards: Trophy,
            breakout: MessageCircle,
            synthesis: FileText,
            closing: Target,
            cultural: Building,
            registration: Edit
        };
        const IconComponent = iconComponents[type] || Calendar;
        return <IconComponent className="w-6 h-6" />;
    };

    return (
        <section id="agenda" className="min-h-screen flex flex-col justify-center py-16 bg-cosmic-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-space mb-6">
                        Conference <span className="text-cosmic-teal">Agenda</span>
                    </h2>
                    <div className="w-24 h-1 bg-cosmic-teal mx-auto mb-8"></div>
                    <p className="font-space text-xl text-dark-space max-w-4xl mx-auto leading-relaxed">
                        Three days of intensive scientific exchange, networking, and exploration in Tainan
                    </p>
                </motion.div>

                {/* Day selector tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {schedule.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDay(index)}
                            className={`px-6 py-3 rounded-full font-space font-semibold transition-all duration-300 ${selectedDay === index
                                ? 'bg-cosmic-teal text-white shadow-lg scale-105'
                                : 'bg-gray-200 text-dark-space hover:bg-stellar-mint hover:text-white'
                                }`}
                        >
                            Day {index + 1}
                        </button>
                    ))}
                </motion.div>

                {/* Selected day content */}
                <motion.div
                    key={selectedDay}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    {/* Day header */}
                    <div className="text-center mb-12">
                        <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dark-space mb-4">
                            {schedule[selectedDay].date}
                        </h3>
                        <p className="font-space text-xl text-cosmic-teal font-medium">
                            Theme: {schedule[selectedDay].theme}
                        </p>
                    </div>

                    {/* Sessions */}
                    <div className="space-y-6">
                        {schedule[selectedDay].sessions.map((session, sessionIndex) => (
                            <motion.div
                                key={sessionIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: sessionIndex * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cosmic-teal hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                                        <div className={`${getSessionTypeColor(session.type)} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}>
                                            {getSessionIcon(session.type)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <span className="font-space font-bold text-cosmic-teal text-lg">
                                                    {session.time}
                                                </span>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getSessionTypeColor(session.type)}`}>
                                                    {session.type.toUpperCase()}
                                                </span>
                                            </div>
                                            <h4 className="font-chaney text-lg sm:text-xl md:text-xl text-dark-space mb-2">
                                                {session.title}
                                            </h4>
                                            {session.speaker && (
                                                <p className="font-space text-cosmic-teal font-medium mb-2">
                                                    {session.speaker}
                                                </p>
                                            )}
                                            <p className="font-space text-dark-space opacity-80">
                                                {session.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="text-center p-6 bg-gradient-to-br from-cosmic-teal/5 to-stellar-mint/5 rounded-xl">
                        <div className="mb-4 flex justify-center">
                            <Clock className="w-10 h-10 text-cosmic-teal" />
                        </div>
                        <h4 className="font-chaney text-lg sm:text-xl text-dark-space mb-2">Sessions</h4>
                        <p className="font-space text-dark-space opacity-80">
                            20+ technical sessions covering all aspects of GPS RO
                        </p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-stellar-mint/5 to-cosmic-teal/5 rounded-xl">
                        <div className="mb-4 flex justify-center">
                            <Users className="w-10 h-10 text-cosmic-teal" />
                        </div>
                        <h4 className="font-chaney text-lg sm:text-xl text-dark-space mb-2">Networking</h4>
                        <p className="font-space text-dark-space opacity-80">
                            Multiple opportunities to connect with global experts
                        </p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-cosmic-teal/5 to-stellar-mint/5 rounded-xl">
                        <div className="mb-4 flex justify-center">
                            <Calendar className="w-10 h-10 text-cosmic-teal" />
                        </div>
                        <h4 className="font-chaney text-lg sm:text-xl text-dark-space mb-2">Free Attendance</h4>
                        <p className="font-space text-dark-space opacity-80">
                            No registration fees for all participants
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Agenda; 