import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { useGSAP, animateOnScroll } from './hooks/useGSAP';
import { Rocket, ChevronUp } from 'lucide-react';

// Import new ICGPSRO components
import Banner from './components/Banner';
import Host from './components/Host';
import ConferenceIntro from './components/ConferenceIntro';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Join from './components/Join';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  // Initialize Lenis smooth scrolling
  const lenis = useLenis();

  // GSAP context for scroll-triggered animations
  const gsapContext = useGSAP();

  // Google Form URL for registration
  const GOOGLE_FORM_URL = "https://forms.google.com/your-form-url-here";

  useEffect(() => {
    // 調試日誌 - 追蹤 lenis 狀態變化
    console.log('🔄 App component effect triggered, lenis:', lenis);

    // GSAP ScrollTrigger animations for enhanced user experience
    if (gsapContext) {
      gsapContext.add(() => {
        // Animate section titles as they come into view
        animateOnScroll('.section-title', {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        });

        // Animate cards with stagger effect
        animateOnScroll('.space-card', {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out'
        });

        // Animate floating elements
        animateOnScroll('.floating-element', {
          y: 40,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out'
        });

        // Animate cosmic elements with special effects
        animateOnScroll('.cosmic-element', {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        });

        // Animate navigation elements
        animateOnScroll('.nav-item', {
          x: -50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out'
        });
      });
    }
  }, [gsapContext, lenis]); // 添加 lenis 作為依賴

  // 改進的測試滑動功能
  const testScroll = (target) => {
    console.log('=== Testing scroll ===');
    console.log('Target:', target);
    console.log('Lenis instance:', lenis);
    console.log('Lenis type:', typeof lenis);

    if (!lenis) {
      console.error('❌ Lenis instance not available');
      console.log('💡 Try waiting a moment for Lenis to initialize...');
      return;
    }

    if (typeof lenis.scrollTo !== 'function') {
      console.error('❌ scrollTo method not available on Lenis instance');
      console.log('Available methods:', Object.keys(lenis));
      return;
    }

    // 檢查目標元素是否存在（如果是選擇器）
    if (typeof target === 'string' && target.startsWith('#')) {
      const element = document.querySelector(target);
      console.log('Target element:', element);
      if (!element) {
        console.error(`❌ Target element "${target}" not found in DOM`);
        return;
      }
    }

    try {
      console.log('✅ Attempting to scroll to:', target);
      lenis.scrollTo(target, {
        duration: 2,
        onComplete: () => {
          console.log('✅ Scroll completed successfully to:', target);
        }
      });
    } catch (error) {
      console.error('❌ Error during scroll:', error);
    }
  };

  return (
    <div className="min-h-screen bg-dark-space overflow-x-hidden">
      {/* Main Content - All sections with proper spacing */}
      <main className="space-y-0">
        {/* Hero Banner Section - Full Screen */}
        <section>
          <Banner lenis={lenis} />
        </section>

        {/* Host & Sponsors Section */}
        <section id="host" className="py-20 px-6">
          <Host />
        </section>

        {/* Conference Introduction Section */}
        <section id="conference-intro" className="py-20 px-6">
          <ConferenceIntro />
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="py-20 px-6">
          <Speakers />
        </section>

        {/* Agenda Section */}
        <section id="agenda" className="py-20 px-6">
          <Agenda />
        </section>

        {/* Registration Section */}
        <section id="join" className="py-20 px-6">
          <Join />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6">
          <FAQ />
        </section>
      </main>

      {/* Footer with Contact & Traffic Info */}
      <Footer lenis={lenis} />

      {/* 測試按鈕區域 - 開發時使用 */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          <div className="text-xs text-white bg-black bg-opacity-50 p-2 rounded mb-2">
            Lenis: {lenis ? '✅ Ready' : '⏳ Loading...'}
          </div>
          <button
            onClick={() => testScroll('#agenda')}
            className="block bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
          >
            Test Agenda
          </button>
          <button
            onClick={() => testScroll('#speakers')}
            className="block bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
          >
            Test Speakers
          </button>
          <button
            onClick={() => testScroll(0)}
            className="block bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
          >
            Test Top
          </button>
          <button
            onClick={() => testScroll('#conference-intro')}
            className="block bg-purple-500 text-white px-3 py-1 rounded text-sm hover:bg-purple-600 transition-colors"
          >
            Test Intro
          </button>
        </div>
      )}

      {/* Floating Action Button for Quick Registration */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          className="cosmic-button w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-300"
          title="Register Now"
        >
          <Rocket className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 left-8 z-40">
        <button
          onClick={() => testScroll(0)}
          className="cosmic-button w-12 h-12 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-300"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-teal/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-stellar-mint/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-cosmic-teal/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
}

export default App;
