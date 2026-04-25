export function GlassCard({ className = "", children }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

