interface BahasaLogoProps {
  variant?: "dark" | "white";
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { cube: 28, wordmark: "text-sm" },
  md: { cube: 36, wordmark: "text-base" },
  lg: { cube: 48, wordmark: "text-xl" },
};

export function BahasaLogo({
  variant = "dark",
  className = "",
  showWordmark = true,
  size = "md",
}: BahasaLogoProps) {
  const s = sizes[size];
  const isWhite = variant === "white";

  // 3D isometric cube SVG
  // Top face, front face, side face
  const topFace = isWhite ? "#B0B0B0" : "#4A4A4A";
  const frontFace = isWhite ? "#FFFFFF" : "#0D0D0D";
  const sideFace = isWhite ? "#D0D0D0" : "#2A2A2A";
  const stroke = isWhite ? "#E8E8E8" : "#666666";
  const wordmarkColor = isWhite ? "#FFFFFF" : "#0D0D0D";
  const taglineColor = isWhite ? "#B0B0B0" : "#4A4A4A";

  const w = s.cube;
  const h = s.cube;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top face of isometric cube */}
        <polygon
          points="24,4 44,16 24,28 4,16"
          fill={topFace}
          stroke={stroke}
          strokeWidth="0.5"
        />
        {/* Front face (left side) */}
        <polygon
          points="4,16 24,28 24,44 4,32"
          fill={frontFace}
          stroke={stroke}
          strokeWidth="0.5"
        />
        {/* Side face (right side) */}
        <polygon
          points="24,28 44,16 44,32 24,44"
          fill={sideFace}
          stroke={stroke}
          strokeWidth="0.5"
        />
      </svg>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display font-bold tracking-wide uppercase ${s.wordmark}`}
            style={{ color: wordmarkColor }}
          >
            Bahasa Holdings
          </span>
          <span
            className="text-[9px] tracking-widest uppercase font-body"
            style={{ color: taglineColor }}
          >
            Configuration Management
          </span>
        </div>
      )}
    </div>
  );
}
