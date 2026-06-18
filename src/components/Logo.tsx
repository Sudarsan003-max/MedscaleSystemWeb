interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-6 w-6", color = "#1b3bf5" }: LogoProps) {
  return (
    <svg
      viewBox="0 -100 670 500"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Column (Thick) */}
      <polygon points="20,380 20,20 100,100 100,380" />

      {/* Left Column (Thin) */}
      <polygon points="120,380 120,120 160,160 160,380" />

      {/* Right Column */}
      <polygon points="540,380 540,80 620,0 620,380" />

      {/* Middle V-Shape and Arrow (Unified path to avoid seams) */}
      <polygon points="180,180 300,300 605,-5 620,10 650,-80 560,-50 575,-35 300,240 180,120" />
    </svg>
  );
}
