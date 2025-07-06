import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
    const contextRef = useRef(null);

    useEffect(() => {
        contextRef.current = gsap.context(() => { });

        return () => {
            if (contextRef.current) {
                contextRef.current.revert();
            }
        };
    }, []);

    return contextRef.current;
};

export const useScrollTrigger = (callback, dependencies = []) => {
    useEffect(() => {
        const trigger = callback();

        return () => {
            if (trigger && trigger.kill) {
                trigger.kill();
            }
        };
    }, dependencies);
};

// 實用的動畫函數
export const animateOnScroll = (selector, animation = {}, triggerOptions = {}) => {
    return ScrollTrigger.create({
        trigger: selector,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: gsap.from(selector, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            ...animation,
        }),
        ...triggerOptions,
    });
}; 