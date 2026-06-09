import styles from './MapPlaceholder.module.css'

const alertDots = [
  { x: 25, y: 35, type: 'Queimada', risk: 'Crítico', region: 'AM' },
  { x: 60, y: 55, type: 'Enchente', risk: 'Alto', region: 'SP' },
  { x: 40, y: 25, type: 'Queimada', risk: 'Médio', region: 'PA' },
  { x: 45, y: 15, type: 'Seca', risk: 'Alto', region: 'CE' },
  { x: 35, y: 45, type: 'Queimada', risk: 'Crítico', region: 'MS' },
  { x: 65, y: 75, type: 'Enchente', risk: 'Crítico', region: 'RS' },
  { x: 55, y: 40, type: 'Seca', risk: 'Médio', region: 'GO' },
  { x: 50, y: 65, type: 'Risco Climático', risk: 'Alto', region: 'RS' },
]

const riskColor = {
  'Crítico': '#FF4D4D',
  'Alto': '#FF8C42',
  'Médio': '#FFD166',
  'Baixo': '#00C896',
}

export default function MapPlaceholder({ compact }) {
  return (
    <div className={`${styles.map} ${compact ? styles.compact : ''}`}>
      <div className={styles.mapHeader}>
        <div className={styles.mapTitle}>
          <span className={styles.liveIndicator} />
          Mapa de Alertas — Brasil
        </div>
        <div className={styles.mapControls}>
          <button className={styles.mapBtn} title="Zoom in">+</button>
          <button className={styles.mapBtn} title="Zoom out">−</button>
          <button className={styles.mapBtn} title="Layers">⊞</button>
        </div>
      </div>

      <div className={styles.mapBody}>
        <svg
          viewBox="0 0 100 100"
          className={styles.mapSvg}
          preserveAspectRatio="xMidYMid meet"
          aria-label="Mapa do Brasil com alertas climáticos"
        >
          {/* Grid lines */}
          {[20, 40, 60, 80].map((v) => (
            <g key={v}>
              <line x1={v} y1="0" x2={v} y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
              <line x1="0" y1={v} x2="100" y2={v} stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
            </g>
          ))}

          {/* Brazil shape approximation */}
          <path
            d="M 20 8 L 35 5 L 50 7 L 65 12 L 72 20 L 75 30 L 70 38 L 75 45 L 72 55 L 68 62 L 60 70 L 55 78 L 48 85 L 40 88 L 32 85 L 26 78 L 20 70 L 15 60 L 12 48 L 14 35 L 17 22 Z"
            fill="rgba(108, 99, 255, 0.06)"
            stroke="rgba(108, 99, 255, 0.3)"
            strokeWidth="0.5"
          />

          {/* State borders suggestion */}
          <path
            d="M 40 30 L 55 32 M 35 45 L 50 43 M 45 55 L 60 57"
            stroke="rgba(108, 99, 255, 0.1)"
            strokeWidth="0.3"
            strokeDasharray="1 1"
          />

          {/* Alert dots */}
          {alertDots.map((dot, i) => (
            <g key={i}>
              <circle
                cx={dot.x}
                cy={dot.y}
                r="3"
                fill={riskColor[dot.risk]}
                opacity="0.2"
              >
                <animate
                  attributeName="r"
                  values="3;7;3"
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0;0.2"
                  dur={`${1.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={dot.x}
                cy={dot.y}
                r="2.5"
                fill={riskColor[dot.risk]}
              />
              <text
                x={dot.x + 3.5}
                y={dot.y - 2.5}
                fontSize="3.5"
                fill="rgba(255,255,255,0.7)"
                fontFamily="monospace"
              >
                {dot.region}
              </text>
            </g>
          ))}

          {/* Satellite coverage cone */}
          <path
            d="M 50 2 L 30 80 L 70 80 Z"
            fill="rgba(0, 200, 150, 0.03)"
            stroke="rgba(0, 200, 150, 0.08)"
            strokeWidth="0.3"
          />

          {/* Satellite icon */}
          <rect x="47" y="0" width="6" height="3" fill="rgba(0, 200, 150, 0.5)" rx="0.5" />
          <rect x="43" y="0.5" width="4" height="2" fill="rgba(0, 200, 150, 0.3)" rx="0.3" />
          <rect x="53" y="0.5" width="4" height="2" fill="rgba(0, 200, 150, 0.3)" rx="0.3" />
        </svg>

        <div className={styles.scanLine} />

        {/* Coordinates */}
        <div className={styles.coords}>
          <span>-15.7° S</span>
          <span>-47.9° W</span>
        </div>
      </div>

      <div className={styles.mapLegend}>
        {Object.entries(riskColor).map(([risk, color]) => (
          <div key={risk} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: color }} />
            <span>{risk}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
