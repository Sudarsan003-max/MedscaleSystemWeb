interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-6 w-6", color = "#1b3bf5" }: LogoProps) {
  return (
    <svg
      viewBox="80 60 660 410"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Column (Thick) */}
      <polygon points="100,450 100,100 180,180 180,450" />

      {/* Left Column (Thin Wedge/Trapezoid) */}
      <polygon points="210,450 210,240 420,450" />

      {/* Right Column */}
      <polygon points="520,450 520,290 600,210 600,450" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="280,340 390,450 660,180 680,200 720,80 600,120 620,140 320,440 280,400" />
    </svg>
  );
}
