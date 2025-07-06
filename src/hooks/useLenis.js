import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

export const useLenis = (options = {}) => {
    const lenisRef = useRef(null);
    const [lenisInstance, setLenisInstance] = useState(null);

    useEffect(() => {
        // 避免重複初始化
        if (lenisRef.current) {
            return;
        }

        // 確保在 DOM 完全載入後初始化
        const initLenis = () => {
            try {
                // 初始化 Lenis (最新版本) - 使用正確的參數名稱
                const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    orientation: 'vertical',
                    gestureOrientation: 'vertical',
                    smoothWheel: true,
                    wheelMultiplier: 1,
                    touchMultiplier: 2,
                    infinite: false,
                    autoResize: true,
                    ...options,
                });

                lenisRef.current = lenis;
                setLenisInstance(lenis); // 設置狀態觸發重新渲染

                // RAF 循環
                function raf(time) {
                    lenisRef.current?.raf(time);
                    requestAnimationFrame(raf);
                }

                requestAnimationFrame(raf);

            } catch (error) {
                console.error('❌ Failed to initialize Lenis:', error);
            }
        };

        // 立即初始化
        initLenis();

        // 清理函數
        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
                setLenisInstance(null);
            }
        };
    }, []); // 空依賴數組，只執行一次

    // 返回狀態中的實例
    return lenisInstance;
}; 