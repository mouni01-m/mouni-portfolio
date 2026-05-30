import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F172A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="h-20 w-20 rounded-xl border border-[#3B82F6]/40 bg-[#111C2F]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <div className="text-center">
              <p className="font-display text-lg font-semibold tracking-[0.3em] text-[#F8FAFC]">
                MOUNISHAN M
              </p>
              <p className="mt-2 text-sm text-[#E2E8F0]">
               Portfolio ...
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
