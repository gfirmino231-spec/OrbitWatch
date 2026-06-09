import FAQ from '../components/FAQ'
import styles from './Impacto.module.css'

const ods = [
  {
    num: 9,
    title: 'Indústria, Inovação e Infraestrutura',
    color: '#FF8C42',
    icon: '🏭',
    desc: 'O OrbitWatch demonstra como tecnologia espacial — antes restrita a grandes potências — pode ser utilizada como infraestrutura crítica de dados ambientais. Promove inovação nacional com dados abertos NASA/ESA/INPE.',
    impacts: [
      'Pipeline de dados espaciais como infraestrutura pública',
      'Parcerias com INPE e agências internacionais',
      'Open data para pesquisadores e desenvolvedores',
      'Redução de custos de monitoramento ambiental',
    ],
  },
  {
    num: 11,
    title: 'Cidades e Comunidades Sustentáveis',
    color: '#6C63FF',
    icon: '🏙️',
    desc: 'Alertas precoces permitem que prefeituras e Defesa Civil ativem planos de emergência antes que desastres ocorram. O OrbitWatch é infraestrutura essencial para cidades resilientes ao clima.',
    impacts: [
      'Alertas 6–12h antes de inundações urbanas',
      'Mapeamento de zonas de risco em alta resolução',
      'Integração com sistemas de Defesa Civil municipais',
      'Redução de perdas humanas e materiais em até 60%',
    ],
  },
  {
    num: 13,
    title: 'Ação Contra a Mudança Global do Clima',
    color: '#00C896',
    icon: '🌍',
    desc: 'Monitoramento contínuo de queimadas, desmatamento e mudanças de uso do solo contribui diretamente para as metas climáticas do Brasil e para o Acordo de Paris.',
    impacts: [
      'Monitoramento do desmatamento em tempo real',
      'Dados para inventários nacionais de GEE',
      'Suporte à implementação do Plano Clima 2030',
      'Alertas de seca para mitigação agrícola',
    ],
  },
]

const beneficiaries = [
  {
    icon: '🚨',
    title: 'Defesa Civil',
    items: [
      'Alertas de inundação com 6–12h de antecedência',
      'Mapeamento em tempo real de áreas afetadas',
      'Priorização de recursos de resgate',
      'Comunicação integrada com municípios',
    ],
    metric: '60%',
    metricLabel: 'menos vítimas com alerta precoce',
    color: '#FF4D4D',
  },
  {
    icon: '🌾',
    title: 'Agricultura e Produtores Rurais',
    items: [
      'Alertas de seca para irrigação preventiva',
      'Monitoramento de pragas via NDVI',
      'Risco de geada e eventos extremos',
      'Dados para seguros paramétricos agrícolas',
    ],
    metric: 'R$ 2.1bi',
    metricLabel: 'em perdas agrícolas evitáveis/ano',
    color: '#00C896',
  },
  {
    icon: '🏛️',
    title: 'Órgãos Governamentais',
    items: [
      'Dados para políticas públicas ambientais',
      'Cumprimento de metas climáticas internacionais',
      'Suporte técnico para licenciamento ambiental',
      'Base de dados para fundos de resiliência',
    ],
    metric: '14',
    metricLabel: 'ministérios podem usar os dados',
    color: '#6C63FF',
  },
]

const metrics = [
  { value: '< 3h', label: 'Tempo de detecção', sub: 'Da captura ao alerta' },
  { value: '99.2%', label: 'Precisão MODIS', sub: 'Detecção de focos' },
  { value: '98.5%', label: 'Uptime', sub: 'Disponibilidade do sistema' },
  { value: '847M ha', label: 'Área coberta', sub: 'Território monitorado' },
  { value: '14.3K', label: 'Usuários', sub: 'Defesa Civil + Agro + Gov' },
  { value: '2.847', label: 'Alertas emitidos', sub: 'Nos últimos 30 dias' },
]

const faqItems = [
  {
    question: 'Como o OrbitWatch detecta queimadas?',
    answer: 'Utilizamos dados MODIS do satélite Terra/Aqua da NASA e VIIRS do Suomi NPP, que capturam a emissão de radiação térmica (banda 4 µm) típica de focos de calor. Um algoritmo de limiar contextual compara cada pixel com a temperatura de pixels vizinhos para classificar automaticamente os focos de incêndio, com precisão acima de 99%.',
  },
  {
    question: 'Os dados são realmente em tempo real?',
    answer: 'Os satélites de órbita polar revisitam o mesmo ponto da Terra 1–2 vezes por dia. O processamento e disponibilização na nossa plataforma ocorre em menos de 3 horas após a captura. Para dados SAR (enchentes), o Sentinel-1 processa em 6 horas. Trabalhamos com dados near-real-time (NRT), o padrão da indústria de monitoramento ambiental.',
  },
  {
    question: 'Quais regiões do Brasil são cobertas?',
    answer: 'A cobertura é 100% do território brasileiro, incluindo a Amazônia, Cerrado, Caatinga, Pantanal, Mata Atlântica e Pampa. Regiões prioritárias como o Arco do Desmatamento recebem prioridade no processamento de alertas. A resolução varia de 250m (MODIS) a 5m (SAR) dependendo do tipo de evento.',
  },
  {
    question: 'Como o OrbitWatch se relaciona com o BDQueimadas do INPE?',
    answer: 'Integramos diretamente com a API do BDQueimadas do INPE como uma das nossas fontes primárias de dados. Adicionamos valor ao cruzar esses dados com informações de outros satélites (ESA, NOAA), contextualizar os alertas com dados socioeconômicos e populacionais, e entregar as informações em um painel operacional unificado.',
  },
  {
    question: 'O OrbitWatch está alinhado aos ODS da ONU?',
    answer: 'Sim, diretamente. Contribuímos para o ODS 9 (infraestrutura de dados abertos), ODS 11 (cidades resilientes com alertas precoces) e ODS 13 (ação climática com monitoramento de desmatamento e emissões). Nossa solução foi desenvolvida com o framework de sustentabilidade da FIAP e dos SDGs como guia principal.',
  },
  {
    question: 'Como órgãos governamentais podem integrar o OrbitWatch?',
    answer: 'Oferecemos API REST documentada, WebHooks para integração em sistemas existentes, e um módulo de white-label para portais institucionais. Prefeituras e Defesa Civil podem receber alertas por SMS, e-mail e API em menos de 3 horas após detecção de eventos na sua região de interesse.',
  },
]

export default function Impacto() {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <span className="section-tag">🌍 Impacto & Benefícios</span>
          <h1 className={styles.title}>
            Tecnologia Espacial para <span>Impacto Real</span>
          </h1>
          <p className={styles.subtitle}>
            O OrbitWatch não é apenas tecnologia — é uma plataforma de transformação social alinhada 
            com os Objetivos de Desenvolvimento Sustentável da ONU.
          </p>
        </div>
      </section>

      {/* ODS Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🎯 ODS da ONU</span>
            <h2 className="section-title">Alinhamento com os <span>Objetivos Globais</span></h2>
          </div>
          <div className={styles.odsGrid}>
            {ods.map((o) => (
              <div key={o.num} className={styles.odsCard} style={{ '--ods-color': o.color }}>
                <div className={styles.odsHeader}>
                  <div className={styles.odsNum} style={{ background: o.color }}>ODS {o.num}</div>
                  <span className={styles.odsIcon}>{o.icon}</span>
                </div>
                <h3 className={styles.odsTitle}>{o.title}</h3>
                <p className={styles.odsDesc}>{o.desc}</p>
                <ul className={styles.odsImpacts}>
                  {o.impacts.map((imp, i) => (
                    <li key={i} className={styles.odsImpact}>
                      <span className={styles.odsCheck} style={{ color: o.color }}>✓</span>
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className={`section ${styles.benefSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">👥 Beneficiários</span>
            <h2 className="section-title">Quem se <span>Beneficia</span></h2>
            <p className="section-subtitle">
              Três frentes de impacto direto com métricas mensuráveis de benefício social.
            </p>
          </div>
          <div className="grid-3">
            {beneficiaries.map((b, i) => (
              <div key={i} className={styles.benefCard} style={{ '--benef-color': b.color }}>
                <div className={styles.benefHeader}>
                  <span className={styles.benefIcon}>{b.icon}</span>
                  <div className={styles.benefMetric}>
                    <span className={styles.benefMetricVal} style={{ color: b.color }}>{b.metric}</span>
                    <span className={styles.benefMetricLabel}>{b.metricLabel}</span>
                  </div>
                </div>
                <h3 className={styles.benefTitle}>{b.title}</h3>
                <ul className={styles.benefList}>
                  {b.items.map((item, j) => (
                    <li key={j} className={styles.benefItem}>
                      <span className={styles.benefDot} style={{ background: b.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📊 Métricas da Plataforma</span>
            <h2 className="section-title">Números que <span>Importam</span></h2>
          </div>
          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metricCard}>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{m.label}</div>
                <div className={styles.metricSub}>{m.sub}</div>
                <div className={styles.metricGlow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqInner}>
            <div className={styles.faqLeft}>
              <span className="section-tag">❓ FAQ</span>
              <h2 className={`section-title ${styles.faqTitle}`}>
                Perguntas <span>Frequentes</span>
              </h2>
              <p className={styles.faqText}>
                Tire suas dúvidas sobre tecnologia, dados, precisão e como 
                integrar o OrbitWatch à sua operação.
              </p>
            </div>
            <div className={styles.faqRight}>
              <FAQ items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`section ${styles.finalCta}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>
              Juntos pelo Planeta 🌱
            </h2>
            <p className={styles.ctaText}>
              O OrbitWatch foi desenvolvido pela FIAP como solução real para um problema real. 
              A crise climática exige tecnologia, dados e ação imediata.
            </p>
            <div className={styles.ctaTags}>
              {['FIAP', 'Global Solution 2024', 'NASA Open Data', 'ESA Copernicus', 'INPE', 'ODS 9', 'ODS 11', 'ODS 13'].map(t => (
                <span key={t} className={styles.ctaTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
