export default function Mandala({ className = '', color = '#D4A017' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(200,200)">
        {/* Outer ring of petals */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={`outer-${i}`} transform={`rotate(${i * 22.5})`}>
            <ellipse
              cx="0"
              cy="-155"
              rx="28"
              ry="50"
              fill="none"
              stroke={color}
              strokeWidth="1.2"
              opacity="0.7"
            />
            <ellipse
              cx="0"
              cy="-155"
              rx="14"
              ry="35"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
              opacity="0.5"
            />
          </g>
        ))}

        {/* Second ring - pointed petals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={`mid2-${i}`} transform={`rotate(${i * 30})`}>
            <path
              d="M0,-120 Q18,-95 0,-65 Q-18,-95 0,-120Z"
              fill="none"
              stroke={color}
              strokeWidth="1.2"
              opacity="0.6"
            />
            <line
              x1="0"
              y1="-120"
              x2="0"
              y2="-65"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.3"
            />
          </g>
        ))}

        {/* Third ring - circles */}
        {Array.from({ length: 24 }).map((_, i) => (
          <circle
            key={`dots-${i}`}
            cx={Math.cos((i * 15 * Math.PI) / 180) * 105}
            cy={Math.sin((i * 15 * Math.PI) / 180) * 105}
            r="4"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.5"
          />
        ))}

        {/* Inner petal ring */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 45})`}>
            <path
              d="M0,-85 Q25,-60 0,-30 Q-25,-60 0,-85Z"
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.7"
            />
            <path
              d="M0,-75 Q15,-55 0,-35 Q-15,-55 0,-75Z"
              fill="none"
              stroke={color}
              strokeWidth="0.8"
              opacity="0.4"
            />
          </g>
        ))}

        {/* Tiny inner petal ring */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`tiny-${i}`} transform={`rotate(${i * 45 + 22.5})`}>
            <path
              d="M0,-55 Q12,-42 0,-28 Q-12,-42 0,-55Z"
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity="0.6"
            />
          </g>
        ))}

        {/* Concentric circles */}
        <circle cx="0" cy="0" r="180" fill="none" stroke={color} strokeWidth="0.8" opacity="0.3" />
        <circle cx="0" cy="0" r="130" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
        <circle cx="0" cy="0" r="95" fill="none" stroke={color} strokeWidth="0.8" opacity="0.35" />
        <circle cx="0" cy="0" r="55" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
        <circle cx="0" cy="0" r="22" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />

        {/* Center flower */}
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse
            key={`center-${i}`}
            cx="0"
            cy="-12"
            rx="7"
            ry="14"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
            opacity="0.7"
            transform={`rotate(${i * 60})`}
          />
        ))}
        <circle cx="0" cy="0" r="5" fill={color} opacity="0.5" />

        {/* Outer dot ring */}
        {Array.from({ length: 36 }).map((_, i) => (
          <circle
            key={`outerDot-${i}`}
            cx={Math.cos((i * 10 * Math.PI) / 180) * 175}
            cy={Math.sin((i * 10 * Math.PI) / 180) * 175}
            r="2"
            fill={color}
            opacity="0.4"
          />
        ))}
      </g>
    </svg>
  )
}
