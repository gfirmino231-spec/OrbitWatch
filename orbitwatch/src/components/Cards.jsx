import styles from './Cards.module.css'

export function StatsCard({ icon, value, label, delta, color = 'purple' }) {
  return (
    <div className={`${styles.statsCard} ${styles[color]}`}>
      <div className={styles.statsIcon}>{icon}</div>
      <div className={styles.statsValue}>{value}</div>
      <div className={styles.statsLabel}>{label}</div>
      {delta && (
        <div className={styles.statsDelta}>
          <span className={styles.deltaArrow}>↑</span> {delta}
        </div>
      )}
      <div className={styles.statsGlow} />
    </div>
  )
}

export function InfoCard({ icon, title, description, tag }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoIcon}>{icon}</div>
      {tag && <span className={styles.infoTag}>{tag}</span>}
      <h3 className={styles.infoTitle}>{title}</h3>
      <p className={styles.infoDesc}>{description}</p>
    </div>
  )
}

export function AlertCard({ alert }) {
  const riskColors = {
    'Crítico': 'red',
    'Alto': 'orange',
    'Médio': 'yellow',
    'Baixo': 'green',
  }
  const typeIcons = {
    'Queimada': '🔥',
    'Enchente': '🌊',
    'Seca': '☀️',
    'Risco Climático': '⚠️',
  }
  const color = riskColors[alert.risco] || 'purple'

  return (
    <div className={`${styles.alertCard} ${styles[`alert-${color}`]}`}>
      <div className={styles.alertHeader}>
        <span className={styles.alertType}>
          {typeIcons[alert.tipo]} {alert.tipo}
        </span>
        <span className={`${styles.alertRisk} ${styles[`risk-${color}`]}`}>
          {alert.risco}
        </span>
      </div>
      <div className={styles.alertId}>{alert.id}</div>
      <h4 className={styles.alertRegion}>{alert.regiao}</h4>
      <p className={styles.alertDesc}>{alert.descricao}</p>
      <div className={styles.alertMeta}>
        <span>🛰️ {alert.satellite}</span>
        <span>{new Date(alert.data).toLocaleDateString('pt-BR')}</span>
      </div>
      <div className={styles.alertFooter}>
        <span className={styles.alertPopulation}>
          👥 {alert.populacao_risco.toLocaleString('pt-BR')} pessoas
        </span>
        <span className={`${styles.alertStatus} ${alert.status === 'Ativo' ? styles.statusActive : ''}`}>
          {alert.status}
        </span>
      </div>
    </div>
  )
}

export function SatelliteCard({ satellite }) {
  return (
    <div className={styles.satCard}>
      <div className={styles.satHeader}>
        <div className={styles.satIcon} style={{ '--sat-color': satellite.cor }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="12" y="12" width="8" height="8" fill={satellite.cor} rx="2"/>
            <rect x="0" y="13" width="10" height="6" fill={satellite.cor} rx="1" opacity="0.6"/>
            <rect x="22" y="13" width="10" height="6" fill={satellite.cor} rx="1" opacity="0.6"/>
            <line x1="16" y1="0" x2="16" y2="12" stroke={satellite.cor} strokeWidth="1.5" opacity="0.4"/>
            <line x1="16" y1="20" x2="16" y2="32" stroke={satellite.cor} strokeWidth="1.5" opacity="0.4"/>
          </svg>
        </div>
        <div>
          <div className={styles.satAgency}>{satellite.agencia}</div>
          <div className={styles.satStatus}>
            <span className={`${styles.satDot} ${satellite.status === 'Operacional' ? styles.satOnline : ''}`}/>
            {satellite.status}
          </div>
        </div>
      </div>
      <h3 className={styles.satName}>{satellite.nome}</h3>
      <div className={styles.satSensor}>{satellite.sensor}</div>
      <div className={styles.satStats}>
        <div className={styles.satStat}>
          <span className={styles.satStatVal}>{satellite.altitude_km}km</span>
          <span className={styles.satStatLabel}>Altitude</span>
        </div>
        <div className={styles.satStat}>
          <span className={styles.satStatVal}>{satellite.resolucao_m}m</span>
          <span className={styles.satStatLabel}>Resolução</span>
        </div>
        <div className={styles.satStat}>
          <span className={styles.satStatVal}>{satellite.revisita_dias}d</span>
          <span className={styles.satStatLabel}>Revisita</span>
        </div>
      </div>
      <div className={styles.satApps}>
        {satellite.aplicacoes.map((app) => (
          <span key={app} className={styles.satApp}>{app}</span>
        ))}
      </div>
      <div className={styles.satGlow} style={{ '--sat-color': satellite.cor }} />
    </div>
  )
}

export function DashboardCard({ title, value, unit, icon, color = 'purple', trend }) {
  return (
    <div className={`${styles.dashCard} ${styles[`dash-${color}`]}`}>
      <div className={styles.dashHeader}>
        <span className={styles.dashIcon}>{icon}</span>
        {trend && <span className={`${styles.dashTrend} ${styles[`trend-${trend.dir}`]}`}>{trend.label}</span>}
      </div>
      <div className={styles.dashValue}>{value}</div>
      <div className={styles.dashUnit}>{unit}</div>
      <div className={styles.dashTitle}>{title}</div>
    </div>
  )
}
