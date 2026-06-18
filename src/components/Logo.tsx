interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-6 w-6", color = "#1b3bf5" }: LogoProps) {
  return (
    <svg
      viewBox="80 80 660 390"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Column (Thick) */}
      <polygon points="100,450 100,100 180,180 180,450" />

      {/* Left Column (Thin) */}
      <polygon points="210,450 210,210 240,240 240,450" />

      {/* Right Column */}
      <polygon points="540,450 540,270 620,190 620,450" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="270,300 420,450 675,195 690,210 720,120 630,150 645,165 420,390 270,240" />
    </svg>
  );
}
