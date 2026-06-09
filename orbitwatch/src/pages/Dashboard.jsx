import { useState } from 'react'
import { DashboardCard, AlertCard } from '../components/Cards'
import MapPlaceholder from '../components/MapPlaceholder'
import alertsData from '../data/alerts.json'
import satellitesData from '../data/satellites.json'
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

const sidebarItems = [
  { icon: '📊', label: 'Overview',      view: 'overview' },
  { icon: '🗺️', label: 'Mapa Live',     view: 'mapa' },
  { icon: '🔔', label: 'Alertas',       view: 'alertas' },
  { icon: '🛰️', label: 'Satélites',     view: 'satelites' },
  { icon: '📈', label: 'Analytics',     view: 'analytics' },
  { icon: '⚙️', label: 'Configurações', view: 'config' },
]

// ── Conteúdo de cada view ─────────────────────────────────────

function ViewOverview({ dashStats, filtered, sortBy, setSortBy, filter, setFilter, setPage, paginated, totalPages, page }) {
  const types = ['Todos', 'Queimada', 'Enchente', 'Seca', 'Risco Climático']
  const PER_PAGE = 4
  return (
    <>
      <div className={styles.statsRow}>
        {dashStats.map((s, i) => <DashboardCard key={i} {...s} />)}
      </div>
      <div className={styles.middleRow}>
        <div className={styles.mapWrapper}><MapPlaceholder /></div>
        <div className={styles.alertsTable}>
          <div className={styles.tableHead}>
            <span className={styles.tableTitle}>Tabela de Alertas</span>
            <select className={styles.tableSelect} value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="data">Mais Recentes</option>
              <option value="risco">Por Risco</option>
            </select>
          </div>
          <div className={styles.alertTable}>
            <div className={styles.alertTableHeader}>
              <span>ID</span><span>Região</span><span>Tipo</span><span>Risco</span><span>Data</span>
            </div>
            {filtered.map((alert) => (
              <div key={alert.id} className={styles.alertTableRow}>
                <span className={styles.alertId}>{alert.id}</span>
                <span className={styles.alertRegion}>{alert.estado}</span>
                <span className={styles.alertType}>{alert.tipo}</span>
                <span className={`${styles.alertRisk} ${styles[`risco-${riskColors[alert.risco]}`]}`}>{alert.risco}</span>
                <span className={styles.alertDate}>{new Date(alert.data).toLocaleDateString('pt-BR')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.alertsSection}>
        <div className={styles.alertsHeader}>
          <h2 className={styles.alertsSectionTitle}>Alertas Detalhados</h2>
          <div className={styles.filterRow}>
            {types.map((t) => (
              <button key={t} className={`${styles.filterBtn} ${filter === t ? styles.filterActive : ''}`}
                onClick={() => { setFilter(t); setPage(1) }}>{t}</button>
            ))}
          </div>
        </div>
        <div className={styles.alertsGrid}>
          {paginated.map((alert) => <AlertCard key={alert.id} alert={alert} />)}
        </div>
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button className={styles.pageBtn} onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>← Anterior</button>
            <span className={styles.pageInfo}>{page} / {totalPages}</span>
            <button className={styles.pageBtn} onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Próximo →</button>
          </div>
        )}
      </div>
    </>
  )
}

function ViewMapa() {
  return (
    <div style={{ padding: '24px 0' }}>
      <h2 style={{ marginBottom: 20, fontSize: '1.3rem' }}>🗺️ Mapa Live — Monitoramento em Tempo Real</h2>
      <MapPlaceholder />
      <p style={{ marginTop: 16, color: '#888', fontSize: '0.9rem' }}>
        Dados orbitais atualizados a cada 10 minutos via NASA FIRMS e Copernicus/ESA.
      </p>
    </div>
  )
}

function ViewAlertas({ alertsData }) {
  const [search, setSearch] = useState('')
  const [riskFilter, setRiskFilter] = useState('Todos')
  const risks = ['Todos', 'Crítico', 'Alto', 'Médio', 'Baixo']
  const filtered = alertsData.filter(a => {
    const matchSearch = a.estado?.toLowerCase().includes(search.toLowerCase()) ||
                        a.tipo?.toLowerCase().includes(search.toLowerCase())
    const matchRisk = riskFilter === 'Todos' || a.risco === riskFilter
    return matchSearch && matchRisk
  })
  return (
    <div style={{ padding: '24px 0' }}>
      <h2 style={{ marginBottom: 20, fontSize: '1.3rem' }}>🔔 Todos os Alertas Ativos</h2>
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        <input
          placeholder="Buscar por estado ou tipo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 200, padding: '8px 14px', borderRadius: 8,
            background: '#1a1a2e', border: '1px solid #333', color: '#fff', fontSize: '0.9rem' }}
        />
        {risks.map(r => (
          <button key={r} onClick={() => setRiskFilter(r)}
            style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid',
              borderColor: riskFilter === r ? '#6C63FF' : '#333',
              background: riskFilter === r ? 'rgba(108,99,255,0.15)' : 'transparent',
              color: riskFilter === r ? '#6C63FF' : '#888', cursor: 'pointer', fontSize: '0.85rem' }}>
            {r}
          </button>
        ))}
      </div>
      <div className={styles.alertsGrid}>
        {filtered.map(alert => <AlertCard key={alert.id} alert={alert} />)}
      </div>
      {filtered.length === 0 && (
        <p style={{ color: '#888', textAlign: 'center', marginTop: 40 }}>Nenhum alerta encontrado.</p>
      )}
    </div>
  )
}

function ViewSatelites({ satellitesData }) {
  return (
    <div style={{ padding: '24px 0' }}>
      <h2 style={{ marginBottom: 20, fontSize: '1.3rem' }}>🛰️ Satélites em Operação</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {satellitesData.map((sat, i) => (
          <div key={i} style={{ background: '#1a1a2e', border: `1px solid ${sat.cor || '#333'}44`,
            borderRadius: 14, padding: 24, borderTop: `3px solid ${sat.cor || '#6C63FF'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#555',
                background: '#111', padding: '3px 8px', borderRadius: 6 }}>{sat.id}</span>
              <span style={{ fontSize: '0.75rem', color: '#00C896', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00C896', display: 'inline-block' }}/>
                {sat.status}
              </span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>{sat.nome}</div>
            <div style={{ fontSize: '0.8rem', color: sat.cor || '#6C63FF', marginBottom: 12 }}>{sat.agencia}</div>
            <div style={{ fontSize: '0.8rem', color: '#888', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span>📡 Sensor: {sat.sensor}</span>
              <span>🌍 {sat.orbita} · {sat.altitude_km} km</span>
              <span>🔄 Revisita: {sat.revisita_dias} dia(s) · Res. {sat.resolucao_m}m</span>
              <span>📦 {sat.dados_diarios} GB/dia · Cobertura: {sat.cobertura}</span>
            </div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 12 }}>
              {sat.aplicacoes?.map((ap, j) => (
                <span key={j} style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 4,
                  background: `${sat.cor || '#6C63FF'}22`, color: sat.cor || '#6C63FF',
                  border: `1px solid ${sat.cor || '#6C63FF'}44` }}>
                  {ap}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ViewAnalytics() {
  const biomas = [
    { nome: 'Cerrado', focos: 82, pct: 82 },
    { nome: 'Amazônia', focos: 68, pct: 68 },
    { nome: 'Pantanal', focos: 58, pct: 95 },
    { nome: 'Caatinga', focos: 39, pct: 54 },
    { nome: 'Mata Atlântica', focos: 21, pct: 40 },
  ]
  return (
    <div style={{ padding: '24px 0' }}>
      <h2 style={{ marginBottom: 24, fontSize: '1.3rem' }}>📈 Analytics — Focos por Bioma (24h)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
        {biomas.map(b => (
          <div key={b.nome}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.9rem' }}>
              <span>{b.nome}</span>
              <span style={{ color: '#888', fontFamily: 'monospace' }}>{b.focos} focos</span>
            </div>
            <div style={{ height: 10, background: '#1a1a2e', borderRadius: 5, overflow: 'hidden' }}>
              <div style={{ width: `${b.pct}%`, height: '100%', borderRadius: 5,
                background: b.pct >= 90 ? '#FF3B3B' : '#FF6B2B', transition: 'width 1s ease' }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ViewConfig() {
  return (
    <div style={{ padding: '24px 0' }}>
      <h2 style={{ marginBottom: 24, fontSize: '1.3rem' }}>⚙️ Configurações</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}>
        {[
          { label: 'Notificações Push', checked: true },
          { label: 'Alertas por SMS', checked: false },
          { label: 'Atualização automática (10min)', checked: true },
          { label: 'Modo escuro', checked: true },
        ].map((opt, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: '#1a1a2e', border: '1px solid #333', borderRadius: 10, padding: '16px 20px' }}>
            <span style={{ fontSize: '0.95rem' }}>{opt.label}</span>
            <div style={{ width: 40, height: 22, borderRadius: 11,
              background: opt.checked ? '#6C63FF' : '#333', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#fff',
                position: 'absolute', top: 3, left: opt.checked ? 21 : 3, transition: 'left 0.2s' }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Dashboard principal ───────────────────────────────────────
export default function Dashboard() {
  const [activeView, setActiveView] = useState('overview')
  const [filter, setFilter] = useState('Todos')
  const [sortBy, setSortBy] = useState('data')
  const [page, setPage] = useState(1)
  const PER_PAGE = 4

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

  const viewTitles = {
    overview: 'Centro de Operações',
    mapa: 'Mapa Live',
    alertas: 'Alertas',
    satelites: 'Satélites',
    analytics: 'Analytics',
    config: 'Configurações',
  }

  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarTitle}>OrbitWatch</span>
          <span className={styles.sidebarSub}>Control Center</span>
        </div>

        <nav className={styles.sidebarNav}>
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`${styles.sidebarItem} ${activeView === item.view ? styles.sidebarItemActive : ''}`}
              onClick={() => setActiveView(item.view)}
              style={{ cursor: 'pointer' }}
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
            <h1 className={styles.dashTitle}>{viewTitles[activeView]}</h1>
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

        {/* Conteúdo dinâmico */}
        {activeView === 'overview' && (
          <ViewOverview
            dashStats={dashStats}
            filtered={filtered}
            sortBy={sortBy}
            setSortBy={setSortBy}
            filter={filter}
            setFilter={setFilter}
            setPage={setPage}
            paginated={paginated}
            totalPages={totalPages}
            page={page}
          />
        )}
        {activeView === 'mapa'      && <ViewMapa />}
        {activeView === 'alertas'   && <ViewAlertas alertsData={alertsData} />}
        {activeView === 'satelites' && <ViewSatelites satellitesData={satellitesData} />}
        {activeView === 'analytics' && <ViewAnalytics />}
        {activeView === 'config'    && <ViewConfig />}
      </div>
    </div>
  )
}
