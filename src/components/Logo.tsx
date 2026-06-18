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

      {/* Left Column (Thin) */}
      <polygon points="210,450 210,210 240,240 240,450" />

      {/* Right Column */}
      <polygon points="540,450 540,260 600,200 600,450" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="300,300 420,420 660,180 680,200 720,80 600,120 620,140 340,420 300,380" />
    </svg>
  );
}
