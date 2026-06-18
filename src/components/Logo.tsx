interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-6 w-6", color = "#1b3bf5" }: LogoProps) {
  return (
    <svg
      viewBox="0 -20 590 420"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Column (Thick) */}
      <polygon points="20,380 20,20 100,100 100,380" />

      {/* Left Column (Thin) */}
      <polygon points="120,380 120,120 160,160 160,380" />

      {/* Right Column */}
      <polygon points="420,380 420,160 500,80 500,380" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="180,180 300,300 525,75 540,90 570,0 480,30 495,45 300,240 180,120" />
    </svg>
  );
}
