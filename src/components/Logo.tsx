interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-6 w-6", color = "#1b3bf5" }: LogoProps) {
  return (
    <svg
      viewBox="80 80 720 390"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Column (Thick) */}
      <polygon points="100,450 100,100 180,180 180,450" />

      {/* Left Column (Thin Wedge/Trapezoid) */}
      <polygon points="215,450 215,215 450,450" />

      {/* Right Column */}
      <polygon points="620,450 620,260 700,180 700,450" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="320,280 480,440 740,180 760,200 780,100 680,120 700,140 480,360 320,200" />
    </svg>
  );
}
