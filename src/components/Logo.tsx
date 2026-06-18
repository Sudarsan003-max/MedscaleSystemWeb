interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-6 w-6", color = "#1b3bf5" }: LogoProps) {
  return (
    <svg
      viewBox="0 -20 960 420"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Column (Thick) */}
      <polygon points="40,380 40,50 160,140 160,380" />

      {/* Left Column (Thin Wedge/Trapezoid) */}
      <polygon points="200,380 200,170 480,380" />

      {/* Right Column (Wedge/Trapezoid) */}
      <polygon points="520,380 920,80 920,380" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="292,239 440,350 820,95 840,125 880,5 760,5 780,35 440,260 292,149" />
    </svg>
  );
}
