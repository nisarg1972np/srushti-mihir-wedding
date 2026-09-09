const LEAF_COLORS = ['#C0392B', '#E8734A', '#F5A623', '#D4A017']

const leaves = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 18 + Math.random() * 22,
  color: LEAF_COLORS[i % LEAF_COLORS.length],
  duration: 12 + Math.random() * 10,
  delay: Math.random() * 15,
  opacity: 0.4 + Math.random() * 0.4,
}))

function LeafSVG({ size, color }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 30 42" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15,0 Q25,10 25,22 Q25,35 15,42 Q5,35 5,22 Q5,10 15,0Z"
        fill={color}
        opacity="0.8"
      />
      <path
        d="M15,5 L15,38"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.5"
        fill="none"
      />
      <path
        d="M15,14 Q20,12 23,18 M15,20 Q10,18 7,24 M15,26 Q20,24 22,30"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.4"
        fill="none"
      />
    </svg>
  )
}

export default function FloatingLeaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: leaf.left,
            top: '-5%',
            opacity: leaf.opacity,
            animation: `float-down ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          <LeafSVG size={leaf.size} color={leaf.color} />
        </div>
      ))}
    </div>
  )
}
