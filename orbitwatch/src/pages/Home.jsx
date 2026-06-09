import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import { StatsCard, InfoCard } from '../components/Cards'
import styles from './Home.module.css'

const stats = [
  { icon: '🛰️', value: '8+', label: 'Satélites Monitorados', delta: '2 novos em 2024', color: 'purple' },
  { icon: '🔔', value: '2.847', label: 'Alertas Emitidos', delta: '+12% esse mês', color: 'red' },
  { icon: '🌎', value: '847M ha', label: 'Áreas Protegidas', delta: 'em monitoramento', color: 'green' },
  { icon: '👤', value: '14.3K', label: 'Usuários Ativos', delta: '+8% essa semana', color: 'orange' },
]

const features = [
  {
    icon: '🔥',
    tag: 'Detecção',
    title: 'Monitoramento de Queimadas',
    description: 'Detectamos focos de calor em menos de 3 horas via satélites MODIS e VIIRS. Alertas imediatos para Defesa Civil e IBAMA.',
  },
  {
    icon: '🌊',
    tag: 'Prevenção',
    title: 'Alertas de Enchentes',
    description: 'SAR Sentinel-1 penetra nuvens e chuva para mapear inundações em tempo real, mesmo à noite.',
  },
  {
    icon: '☀️',
    tag: 'Análise',
    title: 'Mapeamento de Secas',
    description: 'NDVI e índices de umidade do solo revelam déficit hídrico meses antes da crise se instalar.',
  },
  {
    icon: '⚠️',
    tag: 'Risco',
    title: 'Zonas de Risco Climático',
    description: 'Modelos preditivos combinam dados históricos e condições atuais para mapear vulnerabilidades.',
  },
  {
    icon: '📡',
    tag: 'Dados',
    title: 'Múltiplas Fontes de Dados',
    description: 'Integração com NASA Earthdata, ESA Copernicus, INPE BDQueimadas e NOAA em pipeline unificado.',
  },
  {
    icon: '📊',
    tag: 'Analytics',
    title: 'Dashboard Operacional',
    description: 'Centro de controle estilo NASA Mission Control com mapas, gráficos e feeds de alertas em tempo real.',
  },
]

const spaceEconomy = [
  {
    num: '01',
    title: 'Satélites como Infraestrutura',
    text: 'A nova economia espacial transforma satélites de observação em infraestrutura crítica para sustentabilidade. Governos e empresas já investem US$ 630 bilhões/ano neste setor.',
  },
  {
    num: '02',
    title: 'Dados Ambientais = Valor Real',
    text: 'Cada alerta emitido evita perdas milionárias. Dados de satélites previnem catástrofes, protegem colheitas e salvam vidas — ROI mensurável da tecnologia espacial.',
  },
  {
    num: '03',
    title: 'Brasil no Centro do Mapa',
    text: 'Com 8,5 milhões km² de território, 60% da Amazônia global e as maiores riquezas hídricas do planeta, o Brasil é o caso de uso mais crítico do mundo.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />

      {/* Stats Section */}
      <section className={`${styles.statsSection} section`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <StatsCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🛰️ Capacidades</span>
            <h2 className="section-title">O que o <span>OrbitWatch</span> Detecta</h2>
            <p className="section-subtitle">
              Cobertura completa dos principais eventos climáticos extremos que ameaçam o Brasil.
            </p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <InfoCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Space Economy */}
      <section className={`${styles.spaceSection} section`}>
        <div className="container">
          <div className={styles.spaceInner}>
            <div className={styles.spaceLeft}>
              <span className="section-tag">🚀 Nova Economia Espacial</span>
              <h2 className={`section-title ${styles.spaceTitle}`}>
                O Espaço Resolvendo <span>Problemas da Terra</span>
              </h2>
              <p className={styles.spaceText}>
                A convergência entre tecnologia espacial acessível e inteligência artificial cria uma 
                nova fronteira de soluções ambientais. O OrbitWatch está nessa vanguarda.
              </p>
              <Link to="/tecnologia" className={styles.spaceBtn}>
                Ver Tecnologia Espacial →
              </Link>
            </div>
            <div className={styles.spaceRight}>
              {spaceEconomy.map((item) => (
                <div key={item.num} className={styles.spaceCard}>
                  <span className={styles.spaceNum}>{item.num}</span>
                  <div>
                    <h4 className={styles.spaceCardTitle}>{item.title}</h4>
                    <p className={styles.spaceCardText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={`${styles.ctaSection} section`}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaBannerGlow} />
            <div className={styles.ctaContent}>
              <span className={styles.ctaTag}>🌍 Alinhado aos ODS da ONU</span>
              <h2 className={styles.ctaTitle}>
                Pronto para Proteger sua Região?
              </h2>
              <p className={styles.ctaText}>
                Defesa Civil, produtores rurais e órgãos governamentais já utilizam o OrbitWatch 
                para salvar vidas e recursos naturais.
              </p>
              <div className={styles.ctaActions}>
                <Link to="/dashboard" className={styles.ctaBtnPrimary}>
                  Acessar Dashboard Live
                </Link>
                <Link to="/impacto" className={styles.ctaBtnSecondary}>
                  Ver Impacto e ODS
                </Link>
              </div>
            </div>
            <div className={styles.ctaVisual} aria-hidden="true">
              <div className={styles.ctaOrbit}>
                <div className={styles.ctaPlanet} />
                <div className={styles.ctaRing} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
