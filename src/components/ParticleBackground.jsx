const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 6 + (index % 4) * 8,
  left: `${(index * 11) % 100}%`,
  top: `${(index * 17) % 100}%`,
  delay: `${(index % 6) * 0.7}s`,
  duration: `${14 + (index % 5) * 3}s`,
}));

export function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(52,211,153,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.14),transparent_40%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:52px_52px] opacity-20" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-white/10 blur-[2px] animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
      <span className="absolute left-[-10%] top-[12%] h-px w-56 animate-meteor bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80" />
      <span className="absolute left-[-20%] top-[30%] h-px w-72 animate-meteor bg-gradient-to-r from-transparent via-violet-300 to-transparent opacity-60 [animation-delay:3s]" />
    </div>
  );
}

