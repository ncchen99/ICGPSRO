import { motion } from 'framer-motion';
import { MapPin, Car, Train, Navigation } from 'lucide-react';
import agendaPdf from '../assets/pdf/AGENDA.pdf';
import conferenceMap from '../assets/images/conferance_map.png';

const Agenda = () => {
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

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <iframe
                            src={`${agendaPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-full h-[1100px]"
                            title="Conference Agenda"
                        />
                    </div>
                </motion.div>

                {/* Transportation Information */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="text-center mb-16">
                        <h2 className="font-chaney text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-space mb-6">
                            Getting to <span className="text-cosmic-teal">Tainan</span>
                        </h2>
                        <div className="w-24 h-1 bg-cosmic-teal mx-auto mb-8"></div>
                        <p className="font-space text-xl text-dark-space max-w-4xl mx-auto leading-relaxed">
                            National Cheng Kung University is conveniently accessible by car, train, and high-speed rail
                        </p>
                    </div>

                    {/* Conference Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16 bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <img
                            src={conferenceMap}
                            alt="Conference Location Map"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Transportation Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* By Car */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cosmic-teal hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-cosmic-teal/10 p-4 rounded-full">
                                    <Car className="w-10 h-10 text-cosmic-teal" />
                                </div>
                            </div>
                            <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl text-dark-space text-center mb-6">By Car</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-space font-bold text-cosmic-teal mb-3 flex items-center text-lg">
                                        <Navigation className="w-5 h-5 mr-2" />
                                        Southbound
                                    </h4>
                                    <p className="font-space text-dark-space leading-relaxed">
                                        Take National Highway No. 1 southbound → Exit at Dawan Interchange and turn right → Continue straight along Xiaodong Road to reach our campus (our institution is located in the Shengli Campus).
                                    </p>
                                    <p className="font-space text-dark-space/70 text-sm mt-3 italic">
                                        For those traveling south on National Highway 3, take National Highway 8 (westbound) to connect to National Highway 1 (southbound).
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-space font-bold text-cosmic-teal mb-3 flex items-center text-lg">
                                        <Navigation className="w-5 h-5 mr-2 rotate-180" />
                                        Northbound
                                    </h4>
                                    <p className="font-space text-dark-space leading-relaxed">
                                        Take National Highway 1 northbound → Exit at the Rende Interchange and turn left → Continue straight along Dongmen Road (westbound) toward Tainan City → Turn right at Linsen Road or Chang Jung Road (northbound) to reach our campus.
                                    </p>
                                    <p className="font-space text-dark-space/70 text-sm mt-3 italic">
                                        For those traveling north on National Highway 3, take the 86 Expressway (westbound) to connect to National Highway 1 (northbound).
                                    </p>
                                </div>

                                <div className="bg-cosmic-teal/5 p-4 rounded-xl border-l-4 border-cosmic-teal/30">
                                    <p className="font-space text-dark-space text-sm">
                                        <span className="font-bold">Parking: </span>Paid parking lots are available at the entrance of the Guangfu Campus and the basement of the Taizi Cultural and Tourism Center.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* By Train */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-stellar-mint hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-stellar-mint/10 p-4 rounded-full">
                                    <Train className="w-10 h-10 text-stellar-mint" />
                                </div>
                            </div>
                            <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl text-dark-space text-center mb-6">By Train</h3>

                            <div className="space-y-6">
                                <p className="font-space text-dark-space leading-relaxed">
                                    After getting off at Tainan Station, exit from the <span className="font-bold text-stellar-mint">rear station exit</span> (University Road), and walk straight along University Road to reach the campus (passing by Taizi Cultural Travel).
                                </p>

                                <div className="bg-stellar-mint/5 p-4 rounded-xl border-l-4 border-stellar-mint/30">
                                    <p className="font-space text-dark-space text-sm">
                                        <span className="font-bold">Walking Time: </span>Approximately 5-10 minutes to reach National Cheng Kung University Victory Campus.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* By High Speed Rail */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-aurora-green hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-aurora-green/10 p-4 rounded-full">
                                    <Navigation className="w-10 h-10 text-aurora-green" />
                                </div>
                            </div>
                            <h3 className="font-chaney text-xl sm:text-2xl md:text-3xl text-dark-space text-center mb-6">By HSR</h3>

                            <div className="space-y-6">
                                <p className="font-space text-dark-space leading-relaxed">
                                    Take the transfer corridor on the second floor of Tainan High-Speed Rail Station or exit through Exit 1 on the first floor to reach the Taiwan Railways Administration (TRA) <span className="font-bold text-aurora-green">Shalu Station</span>. Take the TRA commuter train to Tainan Railway Station.
                                </p>

                                <div className="bg-aurora-green/5 p-4 rounded-xl border-l-4 border-aurora-green/30 space-y-3">
                                    <p className="font-space text-dark-space text-sm">
                                        <span className="font-bold">Schedule: </span>TRA commuter trains depart approximately every 30 minutes and take about 20 minutes to reach Tainan Railway Station.
                                    </p>
                                    <p className="font-space text-dark-space text-sm">
                                        <span className="font-bold">Arrival: </span>National Cheng Kung University is a short walk from the rear exit of Tainan Railway Station.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Location Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-br from-cosmic-teal to-stellar-mint rounded-3xl shadow-2xl p-12 text-white"
                    >
                        <div className="flex items-center justify-center mb-8">
                            <MapPin className="w-12 h-12 mr-4" />
                            <h3 className="font-chaney text-2xl sm:text-3xl md:text-4xl">Conference Venue</h3>
                        </div>
                        <div className="text-center space-y-4">
                            <p className="font-space text-xl sm:text-2xl font-light">National Cheng Kung University</p>
                            <p className="font-space text-lg sm:text-xl font-light opacity-90">Victory Campus Macronix Building</p>
                            <div className="w-24 h-px bg-white/30 mx-auto my-4"></div>
                            <p className="font-space opacity-90">No. 1, University Road, East District</p>
                            <p className="font-space opacity-90">Tainan City, Taiwan</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Agenda; 