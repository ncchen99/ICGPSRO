import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

// 導入 Swiper 樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const SwiperExample = () => {
    const slides = [
        {
            id: 1,
            title: '滑動展示 1',
            content: '這是一個使用 Swiper 建立的輪播組件',
            color: 'bg-gradient-to-r from-blue-500 to-purple-600',
        },
        {
            id: 2,
            title: '滑動展示 2',
            content: '支援多種過場效果和控制選項',
            color: 'bg-gradient-to-r from-green-500 to-blue-500',
        },
        {
            id: 3,
            title: '滑動展示 3',
            content: '響應式設計，適用於各種裝置',
            color: 'bg-gradient-to-r from-purple-500 to-pink-500',
        },
        {
            id: 4,
            title: '滑動展示 4',
            content: '流暢的動畫和觸控支援',
            color: 'bg-gradient-to-r from-orange-500 to-red-500',
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Swiper 輪播示例
            </h2>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                loop={true}
                className="h-96 rounded-xl shadow-lg"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`${slide.color} h-full flex items-center justify-center rounded-xl`}>
                            <div className="text-center text-white p-8">
                                <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                                <p className="text-xl opacity-90">{slide.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 縮圖輪播 */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">縮圖版本</h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-32"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={`thumb-${slide.id}`}>
                            <div className={`${slide.color} h-full rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300`}>
                                <span className="text-white font-semibold">{slide.title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperExample; 