import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040612]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="absolute h-28 w-28 animate-pulseSoft rounded-full bg-cyan-400/20 blur-3xl" />
            <motion.div
              className="h-20 w-20 rounded-3xl border border-cyan-300/30 bg-white/10 backdrop-blur-xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <div className="text-center">
              <p className="font-display text-lg font-semibold tracking-[0.3em] text-white">
                MOUNISHAN M
              </p>
              <p className="mt-2 text-sm text-slate-400">
               Portfolio ...
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

