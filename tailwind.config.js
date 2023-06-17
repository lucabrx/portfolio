/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
       
        colors: {
          transparent: "transparent",
          white: "#fff",
          "off-white": "#f7f8f8",
          "transparent-white": "rgba(255, 255, 255, 0.08)",
          background: "#000212",
          grey: "#858699",
          "grey-dark": "#222326",
          "primary-text": "#b4bcd0",
        },
        fontSize: {
          xs: "12px",
          sm: "14px",
          md: "16px",
          lg: "18px",
          xl: ["20px", "1.3"],
          "2xl": "24px",
          "3xl": "30px",
          "4xl": "36px",
          "5xl": "40px",
          "6xl": ["48px", "1.1"],
          "7xl": ["60px", "1.1"],
        },
        spacing: {
          0: "0",
          1: "4px",
          2: "8px",
          3: "12px",
          4: "16px",
          5: "24px",
          6: "28px",
          7: "32px",
          8: "36px",
          9: "40px",
          10: "44px",
          11: "48px",
          12: "52px",
          13: "56px",
          14: "60px",
          15: "64px",
          16: "68px",
          17: "72px",
          18: "76px",
          19: "80px",
          20: "84px",
          21: "88px",
          22: "92px",
          23: "96px",
          24: "100px",
          25: "104px",
          26: "120px",
          27: "132px",
          28: "148px",
          29: "160px",
          31: "192px",
          32: "208px",
          "navigation-height": "var(--navigation-height)",
        },
        backgroundImage: {
          "primary-gradient": "linear-gradient(to left top, rgb(88, 28, 135), rgb(70, 102, 241))",
          "title-gradient": "linear-gradient(to bottom, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
          "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)",
        "hero-gradient":
        "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
      "hero-glow":
        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "glow-lines":
        "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
      
        },
        boxShadow: {
          primary: "rgb(147 51 234 / 50%) 0px 1px 40px",
          
        },
        screens: {
          "xs" : "375px",
          "ss" : "390px",
          "sms" : "490px",
          "sm" : "640px",
          "md" : "768px",
          "lg" : "1024px",
          "xl" : "1280px",
          "pc" : "1368px",
          "pc2" : "1400px",
          "lpc" : "1624px"
        },
        keyframes: {
          "fade-in": {
            from: { opacity: 0, transform: "translateY(-10px)" },
            to: { opacity: 1, transform: "none" },
          },
          "image-rotate": {
            "0%": { transform: "rotateX(25deg)" },
            "25%": { transform: "rotateX(25deg) scale(0.9)" },
            "60%": { transform: "none" },
            "100%": { transform: "none" },
          },
          "image-glow": {
            "0%": {
              opacity: 0,
              "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
            },
            "10%": {
              opacity: 1,
              "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
            },
            "100%": {
              opacity: 0.2,
            },
          },
          "sketch-lines": {
            "0%": { "stroke-dashoffset": 1 },
            "50%": { "stroke-dashoffset": 0 },
            "99%": { "stroke-dashoffset": 0 },
            "100%": { visiblity: "hidden" },
          },
          "glow-line-horizontal": {
            "0%": { opacity: 0, transform: "translateX(0)" },
            "5%": { opacity: 1, transform: "translateX(0)" },
            "90%": { opacity: 1 },
            "100%": { opacity: 0, transform: "translateX(min(60vw, 45rem))" },
          },
          "glow-line-vertical": {
            "0%": { opacity: 0, transform: "translateY(0)" },
            "5%": { opacity: 1, transform: "translateY(0)" },
            "90%": { opacity: 1 },
            "100%": { opacity: 0, transform: "translateY(min(21vw, 45rem))" },
          },
        
      },
        animation: {
          "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
          "image-rotate": "image-rotate 1400ms ease forwards",
          "image-glow": "image-glow 4100ms 600ms ease-out forwards",
          "sketch-lines": "sketch-lines 1200ms ease-out forwards",
          "glow-line-horizontal": "glow-line-horizontal var(--animation-duration) ease-in forwards",
          "glow-line-vertical": "glow-line-vertical var(--animation-duration) ease-in forwards",
        }
  },
  plugins: [],
}
