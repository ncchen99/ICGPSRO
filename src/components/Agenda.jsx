import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, BarChart3, Utensils, Globe, Edit, Target, FileText, Mic, Clipboard, Wrench, Coffee, Trophy, MessageCircle, Building } from 'lucide-react';

const Agenda = () => {
    const [selectedDay, setSelectedDay] = useState(0);

    const schedule = [
        {
            date: "Monday, October 30",
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
                    title: "Future Perspectives in GPS Radio Occultation",
                    type: "keynote",
                    speaker: "Dr. Sarah Chen, NASA JPL",
                    description: "Keynote presentation on the future of RO technology"
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
                    title: "RO Data Processing Techniques",
                    type: "session",
                    speaker: "Multiple Speakers",
                    description: "Latest advances in data processing methodologies"
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
                    title: "Quality Control and Validation",
                    type: "session",
                    speaker: "Technical Panel",
                    description: "Ensuring data quality and validation procedures"
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
                    description: "Undergraduate and graduate student research presentations"
                }
            ]
        },
        {
            date: "Tuesday, October 31",
            theme: "Weather & Climate Applications",
            sessions: [
                {
                    time: "09:00 - 09:45",
                    title: "GNSS Applications in Space Weather Monitoring",
                    type: "keynote",
                    speaker: "Prof. Michael Torres, ESA",
                    description: "Ionospheric studies and space weather applications"
                },
                {
                    time: "09:45 - 11:00",
                    title: "Numerical Weather Prediction",
                    type: "session",
                    speaker: "Meteorological Panel",
                    description: "Integration of RO data in weather forecasting models"
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
                    title: "Data Assimilation Techniques",
                    type: "session",
                    speaker: "Dr. Anna Kowalski",
                    description: "Advanced methods for incorporating RO data"
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
                    title: "Climate Monitoring Applications",
                    type: "session",
                    speaker: "Climate Research Group",
                    description: "Long-term climate studies using RO data"
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
                    title: "Industry Panel Discussion",
                    type: "panel",
                    speaker: "Industry Leaders",
                    description: "Commercial applications and future opportunities"
                }
            ]
        },
        {
            date: "Wednesday, November 1",
            theme: "Technical Innovations",
            sessions: [
                {
                    time: "09:00 - 09:45",
                    title: "Regional Climate Monitoring Using RO Data",
                    type: "keynote",
                    speaker: "Dr. Liu Wei, Taiwan Space Agency",
                    description: "Regional climate applications and case studies"
                },
                {
                    time: "09:45 - 11:00",
                    title: "GNSS Reflectometry Applications",
                    type: "session",
                    speaker: "Remote Sensing Team",
                    description: "Surface studies and ocean applications"
                },
                {
                    time: "11:00 - 11:30",
                    title: "Coffee Break",
                    type: "break",
                    speaker: "",
                    description: "Networking break"
                },
                {
                    time: "11:30 - 12:30",
                    title: "Emerging Technologies Session",
                    type: "session",
                    speaker: "Technology Innovators",
                    description: "Latest technological developments in GNSS"
                },
                {
                    time: "12:30 - 14:00",
                    title: "Conference Lunch",
                    type: "break",
                    speaker: "",
                    description: "Sponsored lunch with networking"
                },
                {
                    time: "14:00 - 15:30",
                    title: "Technical Workshop",
                    type: "workshop",
                    speaker: "UCAR COSMIC Team",
                    description: "Hands-on workshop on data processing tools"
                },
                {
                    time: "15:30 - 16:00",
                    title: "Break",
                    type: "break",
                    speaker: "",
                    description: "Refreshment break"
                },
                {
                    time: "16:00 - 17:30",
                    title: "Student Poster Session II",
                    type: "poster",
                    speaker: "Student Participants",
                    description: "Second student poster presentation session"
                },
                {
                    time: "19:00 - 22:00",
                    title: "Conference Dinner",
                    type: "social",
                    speaker: "",
                    description: "Formal dinner at Taipei 101 with cultural program"
                }
            ]
        },
        {
            date: "Thursday, November 2",
            theme: "International Collaboration",
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
                    title: "Breakout Sessions",
                    type: "breakout",
                    speaker: "Working Groups",
                    description: "Specialized topic discussions in small groups"
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
                    title: "Synthesis and Future Directions",
                    type: "synthesis",
                    speaker: "Conference Chairs",
                    description: "Summary of key findings and future research directions"
                }
            ]
        },
        {
            date: "Friday, November 3",
            theme: "Closing & Cultural Experience",
            sessions: [
                {
                    time: "09:00 - 10:30",
                    title: "Final Technical Sessions",
                    type: "session",
                    speaker: "Selected Speakers",
                    description: "Final technical presentations and discussions"
                },
                {
                    time: "10:30 - 11:00",
                    title: "Coffee Break",
                    type: "break",
                    speaker: "",
                    description: "Final networking break"
                },
                {
                    time: "11:00 - 12:00",
                    title: "Closing Ceremony",
                    type: "closing",
                    speaker: "Conference Organizers",
                    description: "Conference wrap-up and closing remarks"
                },
                {
                    time: "12:00 - 13:30",
                    title: "Farewell Lunch",
                    type: "break",
                    speaker: "",
                    description: "Final networking and farewells"
                },
                {
                    time: "14:00 - 18:00",
                    title: "Cultural Tour (Optional)",
                    type: "cultural",
                    speaker: "Local Guides",
                    description: "Taipei cultural sites and traditional markets"
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
                        Five days of intensive scientific exchange, networking, and exploration
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
                        <h3 className="font-chaney text-3xl md:text-4xl text-dark-space mb-4">
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
                                            <h4 className="font-chaney text-xl text-dark-space mb-2">
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
                        <h4 className="font-chaney text-xl text-dark-space mb-2">Sessions</h4>
                        <p className="font-space text-dark-space opacity-80">
                            35+ technical sessions covering all aspects of GPS RO
                        </p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-stellar-mint/5 to-cosmic-teal/5 rounded-xl">
                        <div className="mb-4 flex justify-center">
                            <Users className="w-10 h-10 text-cosmic-teal" />
                        </div>
                        <h4 className="font-chaney text-xl text-dark-space mb-2">Networking</h4>
                        <p className="font-space text-dark-space opacity-80">
                            Multiple opportunities to connect with global experts
                        </p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-cosmic-teal/5 to-stellar-mint/5 rounded-xl">
                        <div className="mb-4 flex justify-center">
                            <Calendar className="w-10 h-10 text-cosmic-teal" />
                        </div>
                        <h4 className="font-chaney text-xl text-dark-space mb-2">Students</h4>
                        <p className="font-space text-dark-space opacity-80">
                            Special programs and awards for student participants
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Agenda; 