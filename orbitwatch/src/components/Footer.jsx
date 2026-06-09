import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#6C63FF" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="6" fill="#6C63FF" />
                  <ellipse cx="16" cy="16" rx="14" ry="5" stroke="#00C896" strokeWidth="1.5" transform="rotate(30 16 16)" />
                  <circle cx="26" cy="10" r="2" fill="#00C896" />
                </svg>
                <span className={styles.logoText}>Orbit<span>Watch</span></span>
              </div>
              <p className={styles.brandDesc}>
                Plataforma de monitoramento climático baseada em dados de satélites NASA, ESA e INPE. 
                Protegendo vidas através da inteligência espacial.
              </p>
              <div className={styles.badges}>
                <span className={styles.badge}>
                  <span className={styles.dot} style={{ background: '#6C63FF' }} />
                  ODS 9
                </span>
                <span className={styles.badge}>
                  <span className={styles.dot} style={{ background: '#00C896' }} />
                  ODS 11
                </span>
                <span className={styles.badge}>
                  <span className={styles.dot} style={{ background: '#FF8C42' }} />
                  ODS 13
                </span>
              </div>
            </div>

            <div className={styles.column}>
              <h4 className={styles.colTitle}>Plataforma</h4>
              <nav className={styles.colLinks}>
                <Link to="/">Home</Link>
                <Link to="/problema">O Problema</Link>
                <Link to="/tecnologia">Tecnologia Espacial</Link>
                <Link to="/dashboard">Dashboard Live</Link>
                <Link to="/impacto">Impacto & ODS</Link>
              </nav>
            </div>

            <div className={styles.column}>
              <h4 className={styles.colTitle}>Tecnologia</h4>
              <nav className={styles.colLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer">NASA Earthdata</a>
                <a href="#" target="_blank" rel="noopener noreferrer">ESA Copernicus</a>
                <a href="#" target="_blank" rel="noopener noreferrer">INPE BDQueimadas</a>
                <a href="#" target="_blank" rel="noopener noreferrer">VIIRS Active Fire</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Sentinel Hub</a>
              </nav>
            </div>

            <div className={styles.column}>
              <h4 className={styles.colTitle}>Status do Sistema</h4>
              <div className={styles.statusList}>
                <div className={styles.statusItem}>
                  <span className={`${styles.statusDot} ${styles.online}`} />
                  <span>API Satélites</span>
                  <span className={styles.statusLabel}>Online</span>
                </div>
                <div className={styles.statusItem}>
                  <span className={`${styles.statusDot} ${styles.online}`} />
                  <span>Processamento</span>
                  <span className={styles.statusLabel}>Ativo</span>
                </div>
                <div className={styles.statusItem}>
                  <span className={`${styles.statusDot} ${styles.online}`} />
                  <span>Alertas</span>
                  <span className={styles.statusLabel}>Normal</span>
                </div>
                <div className={styles.statusItem}>
                  <span className={`${styles.statusDot} ${styles.warning}`} />
                  <span>Manutenção</span>
                  <span className={styles.statusLabelWarn}>Prevista 02h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              © {year} OrbitWatch — FIAP Global Solution · Front-End Design & Web Development
            </p>
            <p className={styles.team}>
              Desenvolvido com propósito · Protegendo o planeta desde o espaço 🛰️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
