export default function OrnateGanesha({ className = '' }) {
  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}ganesha-final.jpeg`}
        alt="Lord Ganesha"
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          transform: 'scale(1.35)',
        }}
      />
    </div>
  )
}
