import { useState } from 'react'
import { DashboardCard, AlertCard } from '../components/Cards'
import MapPlaceholder from '../components/MapPlaceholder'
import alertsData from '../data/alerts.json'
import styles from './Dashboard.module.css'

const dashStats = [
  { title: 'Focos de Incêndio', value: '247', unit: 'focos ativos', icon: '🔥', color: 'red', trend: { dir: 'up', label: '+14%' } },
  { title: 'Áreas Alagadas', value: '89', unit: 'mil hectares', icon: '🌊', color: 'orange', trend: { dir: 'up', label: '+6%' } },
  { title: 'Risco Médio', value: '6.8', unit: '/ 10', icon: '⚠️', color: 'purple', trend: { dir: 'stable', label: 'Estável' } },
  { title: 'Alertas Ativos', value: '34', unit: 'em monitoramento', icon: '🔔', color: 'green', trend: { dir: 'down', label: '-3%' } },
]

const feedEvents = [
  { time: '08:32', type: 'Queimada', region: 'AM', risk: 'Crítico', icon: '🔥' },
  { time: '07:45', type: 'Enchente', region: 'RS', risk: 'Crítico', icon: '🌊' },
  { time: '06:15', type: 'Seca', region: 'CE', risk: 'Alto', icon: '☀️' },
  { time: '05:40', type: 'Queimada', region: 'MS', risk: 'Crítico', icon: '🔥' },
  { time: '04:12', type: 'Enchente', region: 'SP', risk: 'Alto', icon: '🌊' },
  { time: '03:55', type: 'Risco Climático', region: 'BA', risk: 'Médio', icon: '⚠️' },
  { time: '02:30', type: 'Queimada', region: 'PA', risk: 'Médio', icon: '🔥' },
  { time: '01:18', type: 'Seca', region: 'GO', risk: 'Médio', icon: '☀️' },
]

const riskColors = { 'Crítico': 'red', 'Alto': 'orange', 'Médio': 'yellow' }

export default function Dashboard() {
  const [filter, setFilter] = useState('Todos')
  const [sortBy, setSortBy] = useState('data')
  const [page, setPage] = useState(1)
  const PER_PAGE = 4

  const types = ['Todos', 'Queimada', 'Enchente', 'Seca', 'Risco Climático']

  const filtered = alertsData
    .filter(a => filter === 'Todos' || a.tipo === filter)
    .sort((a, b) => {
      if (sortBy === 'risco') {
        const order = { Crítico: 0, Alto: 1, Médio: 2, Baixo: 3 }
        return order[a.risco] - order[b.risco]
      }
      return new Date(b.data) - new Date(a.data)
    })

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarTitle}>OrbitWatch</span>
          <span className={styles.sidebarSub}>Control Center</span>
        </div>

        <nav className={styles.sidebarNav}>
          {[
            { icon: '📊', label: 'Overview', active: true },
            { icon: '🗺️', label: 'Mapa Live', active: false },
            { icon: '🔔', label: 'Alertas', active: false },
            { icon: '🛰️', label: 'Satélites', active: false },
            { icon: '📈', label: 'Analytics', active: false },
            { icon: '⚙️', label: 'Configurações', active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`${styles.sidebarItem} ${item.active ? styles.sidebarItemActive : ''}`}
            >
              <span>{item.icon}</span>
              <span className={styles.sidebarItemLabel}>{item.label}</span>
            </div>
          ))}
        </nav>

        <div className={styles.sidebarFeed}>
          <div className={styles.feedTitle}>
            <span className={styles.feedDot} />
            Eventos Recentes
          </div>
          {feedEvents.map((e, i) => (
            <div key={i} className={styles.feedItem}>
              <span className={styles.feedTime}>{e.time}</span>
              <span className={styles.feedIcon}>{e.icon}</span>
              <span className={styles.feedText}>{e.type} — {e.region}</span>
              <span className={`${styles.feedRisk} ${styles[`risk${riskColors[e.risk] ? `-${riskColors[e.risk]}` : ''}`]}`}>
                {e.risk}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.sidebarStatus}>
          <div className={styles.statusRow}>
            <span className={styles.statusDotGreen} />
            <span>APIs conectadas</span>
            <span className={styles.statusVal}>3/3</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusDotGreen} />
            <span>Satélites online</span>
            <span className={styles.statusVal}>8/8</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusDotGreen} />
            <span>Latência média</span>
            <span className={styles.statusVal}>42ms</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={styles.main}>
        {/* Top Navbar */}
        <div className={styles.dashNav}>
          <div className={styles.dashNavLeft}>
            <h1 className={styles.dashTitle}>Centro de Operações</h1>
            <span className={styles.dashDate}>
              {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className={styles.dashNavRight}>
            <div className={styles.liveStatus}>
              <span className={styles.liveDot} />
              <span>LIVE</span>
            </div>
            <div className={styles.dashSats}>8 satélites ativos</div>
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {dashStats.map((s, i) => (
            <DashboardCard key={i} {...s} />
          ))}
        </div>

        {/* Map + Table */}
        <div className={styles.middleRow}>
          <div className={styles.mapWrapper}>
            <MapPlaceholder />
          </div>

          <div className={styles.alertsTable}>
            <div className={styles.tableHead}>
              <span className={styles.tableTitle}>Tabela de Alertas</span>
              <select
                className={styles.tableSelect}
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="data">Mais Recentes</option>
                <option value="risco">Por Risco</option>
              </select>
            </div>
            <div className={styles.alertTable}>
              <div className={styles.alertTableHeader}>
                <span>ID</span>
                <span>Região</span>
                <span>Tipo</span>
                <span>Risco</span>
                <span>Data</span>
              </div>
              {filtered.map((alert) => (
                <div key={alert.id} className={styles.alertTableRow}>
                  <span className={styles.alertId}>{alert.id}</span>
                  <span className={styles.alertRegion}>{alert.estado}</span>
                  <span className={styles.alertType}>{alert.tipo}</span>
                  <span className={`${styles.alertRisk} ${styles[`risco-${riskColors[alert.risco]}`]}`}>
                    {alert.risco}
                  </span>
                  <span className={styles.alertDate}>
                    {new Date(alert.data).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Cards */}
        <div className={styles.alertsSection}>
          <div className={styles.alertsHeader}>
            <h2 className={styles.alertsSectionTitle}>Alertas Detalhados</h2>
            <div className={styles.filterRow}>
              {types.map((t) => (
                <button
                  key={t}
                  className={`${styles.filterBtn} ${filter === t ? styles.filterActive : ''}`}
                  onClick={() => { setFilter(t); setPage(1) }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.alertsGrid}>
            {paginated.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageBtn}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >← Anterior</button>
              <span className={styles.pageInfo}>{page} / {totalPages}</span>
              <button
                className={styles.pageBtn}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >Próximo →</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
