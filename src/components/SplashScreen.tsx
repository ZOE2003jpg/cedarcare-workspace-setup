import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(195, 35%, 22%) 0%, hsl(200, 40%, 28%) 50%, hsl(195, 30%, 25%) 100%)"
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating orbs */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(175, 50%, 45%) 0%, transparent 70%)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(40, 70%, 50%) 0%, transparent 70%)" }}
            />
            
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(0, 0%, 100%) 1px, transparent 1px),
                                  linear-gradient(90deg, hsl(0, 0%, 100%) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center px-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2
              }}
              className="mb-8"
            >
              <div className="relative inline-flex items-center justify-center">
                {/* Outer ring */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute w-32 h-32 rounded-full border-2 border-white/10"
                />
                
                {/* Inner glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute w-24 h-24 rounded-full"
                  style={{ 
                    background: "radial-gradient(circle, hsla(175, 50%, 45%, 0.3) 0%, transparent 70%)",
                    filter: "blur(8px)"
                  }}
                />
                
                {/* CC Logo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="relative w-20 h-20 flex items-center justify-center"
                >
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    {/* First C */}
                    <motion.path
                      d="M35 20 C20 20 10 32 10 40 C10 48 20 60 35 60 C42 60 48 57 52 53"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                    />
                    {/* Second C (interlinked) */}
                    <motion.path
                      d="M55 20 C40 20 30 32 30 40 C30 48 40 60 55 60 C62 60 68 57 72 53"
                      fill="none"
                      stroke="hsl(175, 50%, 50%)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Hospital name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                The <span className="text-[hsl(175,50%,50%)]">Cedarcare</span> Group
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
                className="h-0.5 bg-gradient-to-r from-transparent via-[hsl(40,70%,50%)] to-transparent mx-auto max-w-xs"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 2.3, duration: 0.6 }}
              className="mt-6 text-white/70 text-lg tracking-widest uppercase"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.25em' }}
            >
              World Class Healthcare
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[hsl(175,50%,50%)]"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
