export default function Logo({ className = '', light = false }: { className?: string; light?: boolean }) {
  const color = light ? '#f5efe6' : '#2d2821';
  const accent = '#d4a843';
  
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Acacia tree silhouette with safari horizon */}
        <circle cx="32" cy="32" r="29" stroke={accent} strokeWidth="1.2" fill="none" />
        <circle cx="32" cy="32" r="26" stroke={accent} strokeWidth="0.4" fill="none" opacity="0.35" />
        
        {/* Horizon line */}
        <line x1="13" y1="42" x2="51" y2="42" stroke={accent} strokeWidth="0.8" opacity="0.5" />
        
        {/* Acacia tree trunk */}
        <path d="M32 42 L32 30 L30 26 M32 30 L34 26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Acacia canopy */}
        <ellipse cx="32" cy="23" rx="13" ry="6" fill="none" stroke={color} strokeWidth="1.3" />
        <ellipse cx="32" cy="22" rx="10" ry="4.5" fill={accent} opacity="0.15" />
        
        {/* Sun/moon */}
        <circle cx="45" cy="20" r="3.5" fill={accent} opacity="0.6" />
        
        {/* Birds */}
        <path d="M18 18 Q19.5 16.5 21 18" stroke={color} strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <path d="M22 15 Q23.5 13.5 25 15" stroke={color} strokeWidth="0.7" fill="none" strokeLinecap="round" />
        
        {/* Ground detail */}
        <path d="M16 44 Q19 43 22 44" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M38 44 Q42 43 46 44" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.4" />
        
        {/* Maasai-inspired diamond accents */}
        <path d="M10 32 L12 30 L14 32 L12 34 Z" fill={accent} opacity="0.25" />
        <path d="M50 32 L52 30 L54 32 L52 34 Z" fill={accent} opacity="0.25" />
      </svg>
      
      <div className="flex flex-col">
        <span 
          className="text-base md:text-lg font-bold tracking-wide leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", color }}
        >
          MOJA KWA MOJA
        </span>
        <span 
          className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase"
          style={{ color: accent, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          TOURS
        </span>
      </div>
    </div>
  );
}
