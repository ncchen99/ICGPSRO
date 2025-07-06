import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = (options = {}) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // 初始化 Lenis (新版本)
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            ...options,
        });

        // RAF 循環
        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 清理函數
        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
        };
    }, []);

    return lenisRef.current;
}; 