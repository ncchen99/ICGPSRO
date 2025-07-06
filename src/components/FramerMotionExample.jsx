import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

const FramerMotionExample = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // 滾動驅動的動畫
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

    const cards = [
        { id: 1, title: '卡片 1', color: 'bg-blue-500', description: '這是第一張卡片' },
        { id: 2, title: '卡片 2', color: 'bg-green-500', description: '這是第二張卡片' },
        { id: 3, title: '卡片 3', color: 'bg-purple-500', description: '這是第三張卡片' },
        { id: 4, title: '卡片 4', color: 'bg-red-500', description: '這是第四張卡片' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const cardVariants = {
        hover: {
            scale: 1.05,
            rotateY: 10,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <div ref={containerRef} className="w-full max-w-6xl mx-auto p-6 space-y-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Framer Motion 動畫示例
            </h2>

            {/* 基本動畫 */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-6"
            >
                <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-semibold text-gray-700"
                >
                    基本進入動畫
                </motion.h3>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={cardVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setSelectedCard(card)}
                            className={`${card.color} p-6 rounded-lg text-white cursor-pointer shadow-lg`}
                        >
                            <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                            <p className="opacity-90">{card.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* 滾動驅動的動畫 */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-700">滾動驅動動畫</h3>
                <div className="flex justify-center items-center space-x-8">
                    <motion.div
                        style={{ scale: smoothScale }}
                        className="w-24 h-24 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-lg"
                    />
                    <motion.div
                        style={{ rotate }}
                        className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* 條件渲染動畫 */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-700">條件渲染動畫</h3>
                <div className="text-center space-y-4">
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        {isVisible ? '隱藏' : '顯示'} 元素
                    </button>

                    <AnimatePresence>
                        {isVisible && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-white shadow-lg mx-auto max-w-md"
                            >
                                <h4 className="text-xl font-bold mb-2">動態元素</h4>
                                <p>這個元素會在顯示/隱藏時播放動畫</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* 路徑動畫 */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-700">SVG 路徑動畫</h3>
                <div className="flex justify-center">
                    <svg width="200" height="200" viewBox="0 0 200 200">
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="#3B82F6"
                            strokeWidth="4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                        />
                        <motion.path
                            d="M100,100 L150,100 L125,75 Z"
                            fill="#10B981"
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{ pathLength: 1, fillOpacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </svg>
                </div>
            </section>

            {/* 拖拽動畫 */}
            <section className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-700">拖拽動畫</h3>
                <div className="flex justify-center">
                    <motion.div
                        drag
                        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                        dragElastic={0.2}
                        whileDrag={{ scale: 1.1, rotate: 10 }}
                        className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold"
                    >
                        拖我
                    </motion.div>
                </div>
            </section>

            {/* 模態框 */}
            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCard(null)}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`${selectedCard.color} p-8 rounded-xl text-white max-w-md w-full mx-4 shadow-2xl`}
                        >
                            <h3 className="text-2xl font-bold mb-4">{selectedCard.title}</h3>
                            <p className="text-lg mb-6">{selectedCard.description}</p>
                            <button
                                onClick={() => setSelectedCard(null)}
                                className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                            >
                                關閉
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FramerMotionExample; 