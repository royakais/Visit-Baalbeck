/** A Corinthian column in Baalbek's proportions, drawn in local units:
 *  60 wide, 440 tall, feet at y = 440. Position it with a <g transform>. */
export default function Column({ fill = 'var(--stone)', shade = 'var(--stone-shade)', flutes = true }) {
  return (
    <g>
      {/* capital: acanthus bell */}
      <path d="M-6 0 h72 l-4 10 h-64 z" fill={fill} />
      <path d="M2 10 h56 l-6 34 h-44 z" fill={fill} />
      <g fill={shade}>
        <circle cx="4" cy="16" r="5" />
        <circle cx="56" cy="16" r="5" />
        <path d="M14 44 q16 -26 32 0 z" />
      </g>
      {/* shaft */}
      <rect x="8" y="44" width="44" height="370" fill={fill} />
      {flutes && (
        <g stroke={shade} strokeWidth="1.4" opacity=".75">
          {[16, 24, 32, 40].map((x) => (
            <line key={x} x1={x + 2} y1="50" x2={x + 2} y2="408" />
          ))}
        </g>
      )}
      {/* drum joints: the shafts are built from three stacked drums */}
      <g stroke={shade} strokeWidth="1.5">
        <line x1="8" y1="167" x2="52" y2="167" />
        <line x1="8" y1="290" x2="52" y2="290" />
      </g>
      {/* base */}
      <rect x="2" y="414" width="56" height="10" rx="3" fill={fill} />
      <rect x="-4" y="424" width="68" height="16" fill={fill} />
    </g>
  )
}
