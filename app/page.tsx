'use client'

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white selection:bg-brand-blue selection:text-white overflow-hidden">
      
      {/* =========================================
          1. NAVIGATION
      ========================================= */}
      <nav className="w-full max-w-300 h-24 flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Logo Icon */}
          <img src="/logo.svg" alt="Logo" className="h-9 md:h-16 w-auto" />
          {/* Brand Name */}
          <span className="text-xl md:text-[34px] font-serif font-black tracking-tighter text-brand-dark">
            FairTrade
          </span>
        </div>

        <div className="flex items-center">
          <a href="#" className="transition-opacity hover:opacity-70">
            <img 
              src="/app-store.webp" 
              alt="Download on App Store" 
              className="h-10 w-auto" 
            />
          </a>
        </div>
      </nav>

      {/* =========================================
          2. HERO SECTION
      ========================================= */}
      {/* Reduced padding top (pt-12 -> pt-6) for tighter mobile spacing relative to nav */}
      <section className="w-full max-w-300 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-6 pb-20 md:pt-20 md:pb-24">
        {/* Reduced space-y-12 -> space-y-8 on mobile for tighter text group */}
        <div className="flex-[1.2] space-y-8 md:space-y-12">
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[44px] md:text-[72px] font-serif font-black leading-[1.05] tracking-tight text-brand-dark"
            >
              Shop smart. <br /> 
              <span className="text-brand-blue">Save big.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-xl md:text-2xl font-sans font-medium leading-relaxed text-gray-500 max-w-110"
            >
              Compare prices across Jamaica and track every deal. All in a single place with FairTrade.
            </motion.p>
          </div>

          {/* Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 items-center sm:items-start"
          >
            <a href="#" className="transition-transform hover:scale-105 active:scale-95">
              <img src="/app-store.webp" alt="App Store" className="h-14 md:h-16 w-auto object-contain" />
            </a>
            <a href="#" className="transition-transform hover:scale-105 active:scale-95">
              <img src="/play-store.webp" alt="Play Store" className="h-14 md:h-16 w-auto object-contain" />
            </a>
          </motion.div>
        </div>

        {/* Hero Image - Reduced mt-16 -> mt-10 on mobile */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 flex justify-end mt-10 md:mt-0"
        >
          <img 
            src="/hero-mockup.webp" 
            alt="FairTrade App Demo" 
            className="w-full max-w-139.75 h-auto object-contain"
          />
        </motion.div>
      </section>

      {/* =========================================
          3. SPREAD SECTION (3 PHONES)
      ========================================= */}
      <section className="w-full max-w-300 py-24 px-6 md:px-10 flex flex-col items-center text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-[36px] md:text-[54px] font-serif font-black tracking-tight max-w-172.5 text-brand-dark leading-[1.1] mx-auto">
            Take <span className="text-brand-blue">good care</span> of your money
          </h2>
          <p className="text-lg md:text-[21px] font-sans leading-relaxed text-gray-500 max-w-172.5 mx-auto">
            Start putting your savings first. FairTrade allows you to compare prices and get notifications on the best deals in Jamaica.
          </p>
        </div>
        
        {/* Reduced mt-16 -> mt-8 on mobile for closer image grouping */}
        <div className="w-full mt-8 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[340px] md:max-w-[320px]"
          >
            <img 
              src="/phone-left.webp" 
              alt="Screen 1" 
              className="w-full h-auto drop-shadow-2xl rounded-[32px]" // Added rounded-xl (12px)
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[340px] md:max-w-[320px] md:-mt-12"
          >
            <img 
              src="/phone-center.webp" 
              alt="Screen 2" 
              className="w-full h-auto drop-shadow-2xl relative z-10 rounded-[32px]" // Added rounded-xl (12px)
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[340px] md:max-w-[320px]"
          >
            <img 
              src="/phone-right.webp" 
              alt="Screen 3" 
              className="w-full h-auto drop-shadow-2xl rounded-[32px]" // Added rounded-xl (12px)
            />
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. FEATURE: ESCROBOND
      ========================================= */}
      <section className="w-full max-w-300 py-24 px-6 md:px-10 flex flex-col items-center text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-[36px] md:text-[54px] font-serif font-black tracking-tight max-w-172.5 text-brand-dark leading-[1.1] mx-auto">
            Trade securely with <span className="text-brand-blue">EscroBond</span>
          </h2>
          <p className="text-lg md:text-[21px] font-sans leading-relaxed text-gray-500 max-w-172.5 mx-auto">
            Lock funds for deals made outside the app. Release payment only when you receive your item. Simple, secure, and built for trust.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-10 max-w-6xl"
        >
          <img src="/escrobond-mobile.webp" alt="EscroBond Mobile" className="md:hidden w-full h-auto rounded-[32px] shadow-sm" />
          <img src="/escrobond.webp" alt="EscroBond Desktop" className="hidden md:block w-full h-auto rounded-[32px] shadow-sm" />
        </motion.div>
      </section>

      {/* =========================================
          5. FEATURE: COMPARE
      ========================================= */}
      <section className="w-full max-w-300 py-24 px-6 md:px-10 flex flex-col items-center text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-[36px] md:text-[54px] font-serif font-black tracking-tight max-w-172.5 text-brand-dark leading-[1.1] mx-auto">
            <span className="text-brand-blue">Compare</span> across stores
          </h2>
          <p className="text-lg md:text-[21px] font-sans leading-relaxed text-gray-500 max-w-172.5 mx-auto">
            From Kingston to Montego Bay, find out who has the item you want for less. We scan the island so you don't have to.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-10 max-w-6xl"
        >
          <img src="/feature-compare-mobile.webp" alt="Compare Mobile" className="md:hidden w-full h-auto rounded-[32px] shadow-sm" />
          <img src="/feature-compare.webp" alt="Compare Desktop" className="hidden md:block w-full h-auto rounded-[32px] shadow-sm" />
        </motion.div>
      </section>

      {/* =========================================
          6. SECURE CHAT
      ========================================= */}
      <section className="w-full max-w-300 py-24 px-6 md:px-10 flex flex-col items-center text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-[36px] md:text-[54px] font-serif font-black tracking-tight max-w-172.5 text-brand-dark leading-[1.1] mx-auto">
            Chat privately with <span className="text-brand-blue">Encryption</span>
          </h2>
          <p className="text-lg md:text-[21px] font-sans leading-relaxed text-gray-500 max-w-172.5 mx-auto">
            Your negotiations stay between you and the seller. Our end-to-end encrypted chat ensures your personal details remain completely secure.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-10 max-w-6xl"
        >
          <img src="/chat-mobile.webp" alt="Chat Mobile" className="md:hidden w-full h-auto rounded-[32px] shadow-sm" />
          <img src="/chat.webp" alt="Chat Desktop" className="hidden md:block w-full h-auto rounded-[32px] shadow-sm" />
        </motion.div>
      </section>

      {/* =========================================
          7. QUOTE SECTION
      ========================================= */}
      <section className="w-full max-w-300 py-20 px-6 md:px-10 flex justify-center">
         <div className="max-w-4xl text-center">
            <h3 className="text-[32px] md:text-[60px] font-serif font-bold text-brand-dark leading-tight">
              "A fair price may be a little thing, but it can make <span className="text-brand-blue">a big difference</span> to your wallet."
            </h3>
            <p className="mt-8 text-gray-400 font-sans font-medium">— The FairTrade Promise</p>
         </div>
      </section>

      {/* =========================================
          8. CORE VALUES (BUY, SELL, ENJOY)
      ========================================= */}
      <section className="w-full max-w-300 pb-24 px-6 md:px-10 flex flex-col items-center">
         <div className="w-full flex flex-col md:flex-row gap-8 md:gap-8 items-center justify-center text-center">
            
            {/* BUY */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="w-full md:w-96 flex flex-col items-center gap-4"
            >
               <img 
                 src="/icon-buy.webp" 
                 alt="Buy Icon" 
                 className="w-full h-auto rounded-[48px] shadow-sm" 
               />
            </motion.div>

            {/* SELL */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="w-full md:w-96 flex flex-col items-center gap-4"
            >
               <img 
                 src="/icon-sell.webp" 
                 alt="Sell Icon" 
                 className="w-full h-auto rounded-[48px] shadow-sm" 
               />
            </motion.div>

            {/* ENJOY */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="w-full md:w-96 flex flex-col items-center gap-4"
            >
               <img 
                 src="/icon-enjoy.webp" 
                 alt="Enjoy Icon" 
                 className="w-full h-auto rounded-[48px] shadow-sm" 
               />
            </motion.div>

         </div>
      </section>

      {/* =========================================
          9. FOOTER (UPDATED STYLE)
      ========================================= */}
      <footer className="w-full flex flex-col border-t border-gray-100">
         
         {/* Top Part */}
         <div className="w-full max-w-300 mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            
            {/* Left: Brand & Tagline */}
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
               <div className="flex items-center gap-3">
                  <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
                  <span className="text-2xl font-serif font-black tracking-tighter text-brand-dark">FairTrade</span>
               </div>
               <p className="font-sans text-lg font-medium text-brand-dark">
                  The all-in-one shopping app
               </p>
            </div>

            {/* Right: Links */}
            <div className="flex gap-6 md:gap-10 text-brand-dark font-sans font-medium text-lg">
               {['Twitter', 'Contact', 'Privacy', 'Terms'].map((item) => (
                 <a 
                   key={item} 
                   href="#" 
                   className="underline decoration-2 underline-offset-4 decoration-gray-200 hover:decoration-brand-blue hover:text-brand-blue transition-all"
                 >
                   {item}
                 </a>
               ))}
            </div>
         </div>

         {/* Bottom Part */}
         <div className="w-full bg-[#f9fafb] py-8">
            <div className="w-full max-w-300 mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 font-sans font-medium">
               <p>© 2026 FairTrade Jamaica. All rights reserved.</p>
               <p className="flex items-center gap-1">
                 Made with 💙 for the 876
               </p>
            </div>
         </div>

      </footer>

    </div>
  );
}