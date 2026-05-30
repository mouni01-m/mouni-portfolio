export function GlassCard({ className = "", children }) {
  return (
    <div
      className={`tech-card ${className}`}
    >
      {children}
    </div>
  );
}
