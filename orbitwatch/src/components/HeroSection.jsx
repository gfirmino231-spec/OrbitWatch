import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.stars} aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className={styles.star} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }} />
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.orbitVisual} aria-hidden="true">
          <div className={styles.planet}>
            <div className={styles.planetGlow} />
            <div className={styles.continents} />
          </div>
          <div className={styles.orbitRing1}>
            <div className={styles.satellite1}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="7" y="7" width="6" height="6" fill="#6C63FF" rx="1"/>
                <rect x="0" y="8" width="6" height="4" fill="#6C63FF" rx="1" opacity="0.7"/>
                <rect x="14" y="8" width="6" height="4" fill="#6C63FF" rx="1" opacity="0.7"/>
              </svg>
            </div>
          </div>
          <div className={styles.orbitRing2}>
            <div className={styles.satellite2}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <rect x="7" y="7" width="6" height="6" fill="#00C896" rx="1"/>
                <rect x="0" y="8" width="6" height="4" fill="#00C896" rx="1" opacity="0.7"/>
                <rect x="14" y="8" width="6" height="4" fill="#00C896" rx="1" opacity="0.7"/>
              </svg>
            </div>
          </div>
          <div className={styles.orbitRing3}>
            <div className={styles.satellite3}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <rect x="7" y="7" width="6" height="6" fill="#FF8C42" rx="1"/>
                <rect x="0" y="8" width="6" height="4" fill="#FF8C42" rx="1" opacity="0.7"/>
                <rect x="14" y="8" width="6" height="4" fill="#FF8C42" rx="1" opacity="0.7"/>
              </svg>
            </div>
          </div>
          <div className={styles.scanBeam} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.statusBar}>
          <span className={styles.liveDot} />
          <span>Sistema Ativo</span>
          <span className={styles.divider}>|</span>
          <span>8 Satélites Online</span>
          <span className={styles.divider}>|</span>
          <span>Cobertura Global</span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>OrbitWatch</span>
          <span className={styles.titleLine2}>
            Inteligência Climática
          </span>
          <span className={styles.titleLine3}>
            Vinda do{' '}
            <span className={styles.titleGradient}>Espaço</span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Monitoramento ambiental em tempo real utilizando dados de satélites NASA, ESA e INPE. 
          Detectamos queimadas, enchentes e secas antes que se tornem catástrofes.
        </p>

        <div className={styles.actions}>
          <Link to="/tecnologia" className={styles.btnPrimary}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
            </svg>
            Conhecer a Plataforma
          </Link>
          <Link to="/dashboard" className={styles.btnSecondary}>
            <span className={styles.btnDot} />
            Ver Monitoramento Live
          </Link>
        </div>

        <div className={styles.agencies}>
          <span className={styles.agenciesLabel}>Dados de:</span>
          {['NASA', 'ESA', 'INPE', 'NOAA'].map((agency) => (
            <span key={agency} className={styles.agencyBadge}>{agency}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
