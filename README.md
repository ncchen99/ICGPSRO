# 🌐 現代網頁動畫技術棧

一個整合了現代前端開發最佳實踐的完整開發環境，專注於動畫和滾動體驗。

## 🚀 技術棧

### 核心框架
- **React 19** - 最新版本的 React 框架
- **Vite** - 極速的建構工具和開發伺服器
- **TypeScript/JavaScript** - 現代 JavaScript 開發

### 樣式系統
- **Tailwind CSS 4** - 實用工具優先的 CSS 框架
- **SASS** - CSS 預處理器（可選）
- **PostCSS** - CSS 後處理器

### 動畫與滾動
- **Lenis** - 現代平滑滾動庫
- **GSAP + ScrollTrigger** - 專業級動畫控制
- **Framer Motion** - React 動畫庫
- **Motion.dev** - 輕量級動畫庫
- **Swiper** - 強大的輪播組件

## 📦 專案結構

```
src/
├── components/
│   ├── SwiperExample.jsx      # Swiper 輪播示例
│   └── FramerMotionExample.jsx # Framer Motion 動畫示例
├── hooks/
│   ├── useLenis.js            # Lenis 平滑滾動 Hook
│   └── useGSAP.js             # GSAP 動畫 Hook
├── App.jsx                    # 主要應用組件
├── index.css                  # Tailwind CSS 配置
└── main.jsx                   # 應用進入點
```

## 🛠️ 安裝與執行

### 1. 安裝依賴
```bash
npm install
```

### 2. 開發模式
```bash
npm run dev
```

### 3. 建構專案
```bash
npm run build
```

### 4. 預覽建構結果
```bash
npm run preview
```

## 🎨 功能特色

### 1. Lenis 平滑滾動
- 極其流暢的滾動體驗
- 支援慣性和自定義緩動函數
- 與 GSAP ScrollTrigger 完美整合

### 2. GSAP + ScrollTrigger
- 專業級動畫控制
- 精確的滾動觸發動畫
- 豐富的緩動函數和時間軸控制

### 3. Framer Motion
- 現代 React 動畫庫
- 聲明式動畫語法
- 支援手勢、拖拽、頁面轉場

### 4. Swiper
- 強大的輪播組件
- 支援觸控手勢
- 多種過場效果（淡入淡出、縮放、翻轉等）

### 5. Tailwind CSS
- 實用工具優先的樣式系統
- 響應式設計
- 自定義動畫類別

## 🎯 使用範例

### 基本平滑滾動設定
```jsx
import { useLenis } from './hooks/useLenis';

function App() {
  const lenis = useLenis();
  
  const scrollToSection = () => {
    lenis?.scrollTo('#section', { duration: 2 });
  };
  
  return (
    <div>
      <button onClick={scrollToSection}>
        滾動到區塊
      </button>
    </div>
  );
}
```

### GSAP ScrollTrigger 動畫
```jsx
import { useGSAP, animateOnScroll } from './hooks/useGSAP';

function Component() {
  const gsapContext = useGSAP();
  
  useEffect(() => {
    if (gsapContext) {
      gsapContext.add(() => {
        animateOnScroll('.animate-element', {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out'
        });
      });
    }
  }, [gsapContext]);
  
  return <div className="animate-element">動畫元素</div>;
}
```

### Framer Motion 動畫
```jsx
import { motion } from 'framer-motion';

function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      動畫卡片
    </motion.div>
  );
}
```

### Swiper 輪播
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>滑動內容 1</SwiperSlide>
      <SwiperSlide>滑動內容 2</SwiperSlide>
    </Swiper>
  );
}
```

## 📱 響應式設計

專案採用 Mobile-First 設計理念，使用 Tailwind CSS 的響應式工具類別：

```jsx
<div className="
  text-base md:text-lg lg:text-xl
  p-4 md:p-6 lg:p-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  響應式內容
</div>
```

## 🎭 動畫最佳實踐

### 1. 效能優化
- 使用 `transform` 和 `opacity` 進行動畫
- 避免動畫 `width`、`height` 等會觸發重排的屬性
- 使用 `will-change` 提示瀏覽器優化

### 2. 可存取性
- 尊重使用者的 `prefers-reduced-motion` 設定
- 提供跳過動畫的選項
- 確保動畫不會導致癲癇或前庭障礙

### 3. 動畫時機
- 進入動畫：0.3-0.5 秒
- 互動回饋：0.1-0.2 秒
- 頁面轉場：0.5-0.8 秒

## 🔧 客製化配置

### Tailwind CSS 客製化
在 `tailwind.config.js` 中添加自定義動畫：

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'custom-bounce': 'customBounce 1s infinite',
      },
      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    }
  }
}
```

### GSAP 自定義緩動
```javascript
gsap.registerEase("customEase", "M0,0 C0.25,0.1 0.25,1 1,1");
```

## 🌟 進階功能

### 1. 滾動監聽
使用 Intersection Observer API 監聽元素進入視窗

### 2. 手勢支援
整合觸控手勢庫實現滑動、縮放等互動

### 3. 3D 動畫
使用 CSS 3D transforms 和 WebGL 實現進階 3D 效果

### 4. 音效整合
同步動畫與音效播放

## 📚 相關資源

- [Lenis 官方文檔](https://lenis.studiofreight.com/)
- [GSAP 學習指南](https://greensock.com/learning/)
- [Framer Motion 文檔](https://www.framer.com/motion/)
- [Swiper 使用指南](https://swiperjs.com/)
- [Tailwind CSS 文檔](https://tailwindcss.com/)

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改善這個專案！

## 📄 授權

MIT License
