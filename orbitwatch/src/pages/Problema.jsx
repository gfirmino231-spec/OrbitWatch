import Timeline from '../components/Timeline'
import styles from './Problema.module.css'

const statsData = [
  { value: '34%', label: 'do território brasileiro sob risco de seca extrema até 2050', icon: '☀️', color: 'orange' },
  { value: '2.8M km²', label: 'de área desmatada na Amazônia nos últimos 50 anos', icon: '🌳', color: 'green' },
  { value: '189K', label: 'focos de queimada detectados no Brasil em 2023', icon: '🔥', color: 'red' },
  { value: 'R$ 4.8bi', label: 'em prejuízos anuais com desastres climáticos no Brasil', icon: '💰', color: 'purple' },
]

const problems = [
  {
    icon: '🔥',
    title: 'Queimadas Fora de Controle',
    color: '#FF4D4D',
    points: [
      'Brasil registra entre 150.000 e 250.000 focos/ano',
      'Amazônia e Cerrado concentram 70% dos incêndios',
      'Fumaça afeta qualidade do ar de 30+ cidades',
      'Destruição de biodiversidade irreversível',
    ],
    data: [
      { year: '2019', value: 89, label: '89.176' },
      { year: '2020', value: 103, label: '103.161' },
      { year: '2021', value: 121, label: '121.044' },
      { year: '2022', value: 98, label: '98.712' },
      { year: '2023', value: 100, label: '189.412' },
    ],
  },
  {
    icon: '🌊',
    title: 'Enchentes e Deslizamentos',
    color: '#00C896',
    points: [
      '+42% no número de eventos extremos nos últimos 10 anos',
      'RS 2024: maior catástrofe climática da história do Brasil',
      '600+ municípios em zonas de alto risco hidrológico',
      'Sistemas de alerta precoce alcançam apenas 30% das áreas',
    ],
    data: [
      { year: '2019', value: 45, label: '45' },
      { year: '2020', value: 58, label: '58' },
      { year: '2021', value: 72, label: '72' },
      { year: '2022', value: 89, label: '89' },
      { year: '2023', value: 100, label: '127' },
    ],
  },
  {
    icon: '☀️',
    title: 'Secas e Crise Hídrica',
    color: '#FF8C42',
    points: [
      'Semiárido nordestino afeta 28 milhões de pessoas',
      'Reservatórios do Sudeste atingiram 8% em 2021',
      'Perdas agrícolas de R$ 21bi em 2021 por seca',
      'Projeções indicam expansão do semiárido em 34%',
    ],
    data: [
      { year: '2019', value: 62, label: '62%' },
      { year: '2020', value: 48, label: '48%' },
      { year: '2021', value: 8, label: '8%' },
      { year: '2022', value: 35, label: '35%' },
      { year: '2023', value: 41, label: '41%' },
    ],
  },
]

const timelineEvents = [
  {
    year: '2020',
    title: 'Queimadas no Pantanal',
    description: '4,4 milhões de hectares destruídos — 30% do bioma inteiro em um único ano.',
    stat: '4.4M ha queimados',
    color: '#FF4D4D',
  },
  {
    year: '2021',
    title: 'Crise Hídrica Sudeste',
    description: 'Reservatórios de SP e MG atingem mínimas históricas. Risco real de desabastecimento.',
    stat: 'Reservatórios em 8%',
    color: '#FF8C42',
  },
  {
    year: '2022',
    title: 'Enchentes Petrópolis-RJ',
    description: '231 vítimas em fevereiro. Sistema de alerta precoce teria salvo centenas de vidas.',
    stat: '231 mortes evitáveis',
    color: '#00C896',
  },
  {
    year: '2023',
    title: 'Recorde de Queimadas',
    description: 'Brasil registra 189.412 focos — o maior número da série histórica do INPE.',
    stat: 'Recorde histórico INPE',
    color: '#FF4D4D',
  },
  {
    year: '2024',
    title: 'Catástrofe no RS',
    description: 'Maior desastre climático da história brasileira. 800+ municípios afetados, 150+ mortes.',
    stat: '1.5M pessoas afetadas',
    color: '#6C63FF',
  },
]

function BarChart({ data, color }) {
  const max = Math.max(...data.map(d => d.value))
  return (
    <div className={styles.barChart}>
      {data.map((d) => (
        <div key={d.year} className={styles.bar}>
          <div className={styles.barLabel}>{d.label}</div>
          <div
            className={styles.barFill}
            style={{
              height: `${(d.value / max) * 120}px`,
              background: color,
              opacity: 0.7 + (d.value / max) * 0.3,
            }}
          />
          <div className={styles.barYear}>{d.year}</div>
        </div>
      ))}
    </div>
  )
}

export default function Problema() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <span className="section-tag">⚠️ O Problema</span>
          <h1 className={styles.title}>
            A Crise Climática que o <span>Brasil Enfrenta</span>
          </h1>
          <p className={styles.subtitle}>
            Mudanças climáticas não são ameaças futuras — são crises reais que custam vidas e bilhões 
            anualmente. Dados mostram a urgência de soluções de monitoramento como o OrbitWatch.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {statsData.map((s, i) => (
              <div key={i} className={`${styles.statCard} ${styles[s.color]}`}>
                <span className={styles.statIcon}>{s.icon}</span>
                <div className={styles.statValue}>{s.value}</div>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems with Charts */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📊 Dados e Estatísticas</span>
            <h2 className="section-title">Três Frentes de <span>Crise Climática</span></h2>
          </div>
          <div className={styles.problemsGrid}>
            {problems.map((problem, i) => (
              <div key={i} className={styles.problemCard}>
                <div className={styles.problemHeader} style={{ borderColor: problem.color }}>
                  <span className={styles.problemIcon}>{problem.icon}</span>
                  <h3 className={styles.problemTitle}>{problem.title}</h3>
                </div>
                <ul className={styles.problemPoints}>
                  {problem.points.map((p, j) => (
                    <li key={j} className={styles.problemPoint}>
                      <span className={styles.dot} style={{ background: problem.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className={styles.chartWrapper}>
                  <div className={styles.chartTitle}>Evolução — Dados INPE/CEMADEN</div>
                  <BarChart data={problem.data} color={problem.color} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Gap */}
      <section className={`section ${styles.gapSection}`}>
        <div className="container">
          <div className={styles.gapInner}>
            <div>
              <span className="section-tag">🚨 O Gap de Monitoramento</span>
              <h2 className={`section-title ${styles.gapTitle}`}>
                Por que o <span>Monitoramento Falha?</span>
              </h2>
              <p className={styles.gapText}>
                O Brasil possui sistemas fragmentados, com dados isolados em múltiplas agências 
                sem integração em tempo real. O resultado: alertas chegam tarde demais.
              </p>
              <div className={styles.gapStats}>
                <div className={styles.gapStat}>
                  <span className={styles.gapStatVal}>3–6h</span>
                  <span className={styles.gapStatLabel}>Atraso médio nos alertas atuais</span>
                </div>
                <div className={styles.gapStat}>
                  <span className={styles.gapStatVal}>70%</span>
                  <span className={styles.gapStatLabel}>Das áreas rurais sem cobertura adequada</span>
                </div>
                <div className={styles.gapStat}>
                  <span className={styles.gapStatVal}>8x</span>
                  <span className={styles.gapStatLabel}>Custo maior de resposta vs prevenção</span>
                </div>
              </div>
            </div>
            <div className={styles.gapVisual}>
              <div className={styles.gapChart}>
                {[
                  { label: 'Detecção Atual', value: 30, color: '#FF4D4D' },
                  { label: 'OrbitWatch', value: 95, color: '#00C896' },
                  { label: 'Alertas Precoces', value: 20, color: '#FF4D4D' },
                  { label: 'Com OrbitWatch', value: 88, color: '#00C896' },
                  { label: 'Cobertura Rural', value: 30, color: '#FF4D4D' },
                  { label: 'Com OrbitWatch', value: 97, color: '#00C896' },
                ].map((item, i) => (
                  <div key={i} className={styles.gapBar}>
                    <span className={styles.gapBarLabel}>{item.label}</span>
                    <div className={styles.gapBarTrack}>
                      <div
                        className={styles.gapBarFill}
                        style={{ width: `${item.value}%`, background: item.color }}
                      />
                    </div>
                    <span className={styles.gapBarVal}>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📅 Linha do Tempo</span>
            <h2 className="section-title">Desastres que <span>Poderiam ser Evitados</span></h2>
            <p className="section-subtitle">
              Cada um desses eventos tinha sinais detectáveis dias antes. Faltou o monitoramento certo.
            </p>
          </div>
          <Timeline events={timelineEvents} />
        </div>
      </section>
    </div>
  )
}
