interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { svg: 28, text: "text-base" },
    md: { svg: 36, text: "text-lg" },
    lg: { svg: 48, text: "text-2xl" },
  };

  const { svg, text } = sizes[size];

  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      {/* Original Layer 10 Logo - Three stacked isometric diamond layers */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={svg}
        height={svg}
        className="transition-transform group-hover:scale-110"
      >
        <defs>
          <linearGradient id="layer1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#a78bfa" }} />
            <stop offset="100%" style={{ stopColor: "#c4b5fd" }} />
          </linearGradient>
          <linearGradient id="layer2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8b5cf6" }} />
            <stop offset="100%" style={{ stopColor: "#a78bfa" }} />
          </linearGradient>
          <linearGradient id="layer3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#6366f1" }} />
            <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
          </linearGradient>
        </defs>

        {/* Three stacked isometric diamond layers */}
        <polygon points="32,8 56,22 32,36 8,22" fill="url(#layer1)" />
        <polygon points="32,18 56,32 32,46 8,32" fill="url(#layer2)" />
        <polygon points="32,28 56,42 32,56 8,42" fill="url(#layer3)" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold ${text} tracking-wide`}>
            <span className="text-foreground">LAYER</span>
            <span className="text-primary">10</span>
          </span>
          <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
            Security
          </span>
        </div>
      )}
    </a>
  );
};
