interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-6 w-6", color = "#1b3bf5" }: LogoProps) {
  return (
    <svg
      viewBox="0 -60 960 460"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Column (Thick) */}
      <polygon points="40,380 40,50 160,140 160,380" />

      {/* Left Column (Thin) */}
      <polygon points="200,380 200,170 260,215 260,380" />

      {/* Right Column */}
      <polygon points="800,380 800,110 920,20 920,380" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="292,239 440,350 820,65 840,95 880,-25 760,-25 780,5 440,260 292,149" />
    </svg>
  );
}
