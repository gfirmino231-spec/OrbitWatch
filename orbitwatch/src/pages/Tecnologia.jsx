import { useState } from 'react'
import { SatelliteCard } from '../components/Cards'
import satellitesData from '../data/satellites.json'
import styles from './Tecnologia.module.css'

const agencies = [
  {
    id: 'nasa',
    name: 'NASA',
    fullName: 'National Aeronautics and Space Administration',
    country: 'EUA',
    logo: '🔵',
    color: '#6C63FF',
    founded: '1958',
    satellites: ['Terra', 'Aqua', 'Suomi NPP', 'NOAA-20', 'Landsat 9'],
    description: 'A NASA opera a maior constelação de satélites de observação da Terra do mundo. O programa Earth Observing System (EOS) fornece dados climáticos contínuos desde 1999.',
    url: 'https://earthdata.nasa.gov',
  },
  {
    id: 'esa',
    name: 'ESA',
    fullName: 'European Space Agency',
    country: 'Europa',
    logo: '🟣',
    color: '#00C896',
    founded: '1975',
    satellites: ['Sentinel-1A/B', 'Sentinel-2A/B', 'Sentinel-3', 'Copernicus'],
    description: 'A ESA lidera o programa Copernicus, o maior provedor de dados ambientais do mundo. O Sentinel-1 com SAR é revolucionário para monitoramento de enchentes.',
    url: 'https://www.copernicus.eu',
  },
  {
    id: 'inpe',
    name: 'INPE',
    fullName: 'Instituto Nacional de Pesquisas Espaciais',
    country: 'Brasil',
    logo: '🟢',
    color: '#FF8C42',
    founded: '1961',
    satellites: ['CBERS-4A', 'Amazonia-1', 'BDQueimadas'],
    description: 'O INPE é o principal instituto de pesquisa espacial da América Latina. Opera o sistema BDQueimadas para monitoramento de queimadas no Brasil e na América do Sul.',
    url: 'https://www.inpe.br',
  },
]

const flowSteps = [
  {
    id: 1,
    icon: '🛰️',
    title: 'Satélite Capta',
    desc: 'Sensores orbitais registram dados espectrais, térmicos e de radar a cada passagem sobre o território.',
    tech: 'MODIS, VIIRS, SAR',
    color: '#6C63FF',
  },
  {
    id: 2,
    icon: '📡',
    title: 'Transmissão',
    desc: 'Dados brutos são transmitidos para estações terrestres via enlace de rádio em bandas X e Ka.',
    tech: 'Downlink 150 Mbps',
    color: '#00D4FF',
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Processamento',
    desc: 'Centros de processamento (GSFC, ESRIN, CRS) convertem dados brutos em produtos calibrados.',
    tech: 'HDF5, GeoTIFF, NetCDF',
    color: '#00C896',
  },
  {
    id: 4,
    icon: '🔌',
    title: 'API OrbitWatch',
    desc: 'Nossa plataforma consome as APIs públicas NASA Earthdata, Copernicus e INPE em pipeline unificado.',
    tech: 'REST API + WebSocket',
    color: '#FF8C42',
  },
  {
    id: 5,
    icon: '🧠',
    title: 'Análise IA',
    desc: 'Algoritmos de detecção classificam automaticamente queimadas, inundações e anomalias climáticas.',
    tech: 'CNN + Random Forest',
    color: '#FFD166',
  },
  {
    id: 6,
    icon: '🔔',
    title: 'Alerta ao Usuário',
    desc: 'Alertas são emitidos em < 3 horas via dashboard, e-mail, SMS e API para sistemas externos.',
    tech: 'Push + WebHook',
    color: '#FF4D4D',
  },
]

const sensors = [
  { name: 'MODIS', full: 'Moderate Resolution Imaging Spectroradiometer', res: '250m–1km', bands: 36, app: 'Queimadas, Vegetação, Temperatura' },
  { name: 'VIIRS', full: 'Visible Infrared Imaging Radiometer Suite', res: '375m', bands: 22, app: 'Focos de calor noturnos, Fumaça' },
  { name: 'SAR', full: 'Synthetic Aperture Radar (C-Band)', res: '5–20m', bands: 1, app: 'Enchentes (penetra nuvens)' },
  { name: 'MSI', full: 'MultiSpectral Instrument (Sentinel-2)', res: '10–60m', bands: 13, app: 'Vegetação, Desmatamento, Danos' },
  { name: 'OLI-2', full: 'Operational Land Imager 2 (Landsat 9)', res: '15–30m', bands: 11, app: 'Uso do solo, Mineração, Água' },
  { name: 'AIRS', full: 'Atmospheric Infrared Sounder', res: '13.5km', bands: 2378, app: 'Temperatura, Vapor d\'água' },
]

export default function Tecnologia() {
  const [activeAgency, setActiveAgency] = useState('nasa')
  const agency = agencies.find(a => a.id === activeAgency)

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <span className="section-tag">🛰️ Tecnologia Espacial</span>
          <h1 className={styles.title}>
            Como o <span>Espaço</span> Monitora a Terra
          </h1>
          <p className={styles.subtitle}>
            Três das principais agências espaciais do mundo fornecem os dados que alimentam 
            o OrbitWatch — NASA, ESA e INPE — em fluxo contínuo 24/7.
          </p>
        </div>
      </section>

      {/* Agencies */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🌍 Agências Parceiras</span>
            <h2 className="section-title">Fontes de <span>Dados Primários</span></h2>
          </div>
          <div className={styles.agencyTabs}>
            {agencies.map((a) => (
              <button
                key={a.id}
                className={`${styles.agencyTab} ${activeAgency === a.id ? styles.activeTab : ''}`}
                onClick={() => setActiveAgency(a.id)}
                style={{ '--agency-color': a.color }}
              >
                <span className={styles.tabLogo}>{a.logo}</span>
                {a.name}
              </button>
            ))}
          </div>

          {agency && (
            <div className={styles.agencyCard} style={{ '--agency-color': agency.color }}>
              <div className={styles.agencyLeft}>
                <div className={styles.agencyBadge} style={{ color: agency.color }}>
                  {agency.country} · Desde {agency.founded}
                </div>
                <h3 className={styles.agencyName}>{agency.name}</h3>
                <p className={styles.agencyFull}>{agency.fullName}</p>
                <p className={styles.agencyDesc}>{agency.description}</p>
                <div className={styles.agencySats}>
                  <span className={styles.agencySatsLabel}>Satélites no OrbitWatch:</span>
                  <div className={styles.agencySatsList}>
                    {agency.satellites.map((s) => (
                      <span key={s} className={styles.agencySat}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.agencyRight}>
                <div className={styles.agencyVisual} style={{ '--agency-color': agency.color }}>
                  <div className={styles.agencyOrbit}>
                    <div className={styles.agencyPlanet} />
                    <div className={styles.agencyRing} />
                    <div className={styles.agencyRing2} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Data Flow */}
      <section className={`section ${styles.flowSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">⚡ Fluxo de Dados</span>
            <h2 className="section-title">De <span>Satélite ao Usuário</span></h2>
            <p className="section-subtitle">
              Pipeline de dados em 6 etapas — do sensor orbital ao alerta na tela do operador.
            </p>
          </div>
          <div className={styles.flowGrid}>
            {flowSteps.map((step, i) => (
              <div key={step.id} className={styles.flowItem}>
                <div className={styles.flowCard} style={{ '--flow-color': step.color }}>
                  <div className={styles.flowNum}>{String(step.id).padStart(2, '0')}</div>
                  <div className={styles.flowIcon}>{step.icon}</div>
                  <h4 className={styles.flowTitle}>{step.title}</h4>
                  <p className={styles.flowDesc}>{step.desc}</p>
                  <span className={styles.flowTech}>{step.tech}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className={styles.flowArrow}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satellites Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🛰️ Frota de Satélites</span>
            <h2 className="section-title">8 Satélites <span>Monitorando o Brasil</span></h2>
            <p className="section-subtitle">
              Cobertura global, revisita diária e resolução submétrica para não deixar nenhum evento escapar.
            </p>
          </div>
          <div className="grid-4">
            {satellitesData.map((sat) => (
              <SatelliteCard key={sat.id} satellite={sat} />
            ))}
          </div>
        </div>
      </section>

      {/* Sensors Table */}
      <section className={`section ${styles.sensorsSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🔬 Sensores</span>
            <h2 className="section-title">Tecnologia dos <span>Sensores</span></h2>
          </div>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <span>Sensor</span>
              <span>Nome Completo</span>
              <span>Resolução</span>
              <span>Bandas</span>
              <span>Aplicação no OrbitWatch</span>
            </div>
            {sensors.map((s, i) => (
              <div key={i} className={styles.tableRow}>
                <span className={styles.sensorName}>{s.name}</span>
                <span className={styles.sensorFull}>{s.full}</span>
                <span className={styles.sensorRes}>{s.res}</span>
                <span className={styles.sensorBands}>{s.bands}</span>
                <span className={styles.sensorApp}>{s.app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
