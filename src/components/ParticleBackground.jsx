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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.16),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.96))]" />
      <div className="absolute inset-0 bg-grid bg-[size:64px_64px] opacity-25" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-[#94A3B8]/20 blur-[2px] animate-float"
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
      <span className="absolute left-[-20%] top-[30%] h-px w-72 animate-meteor bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 [animation-delay:3s]" />
    </div>
  );
}
