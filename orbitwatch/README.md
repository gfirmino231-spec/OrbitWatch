# 🛰️ OrbitWatch – Inteligência Climática Vinda do Espaço

<div align="center">

![OrbitWatch Banner](https://img.shields.io/badge/OrbitWatch-Monitoramento%20Clim%C3%A1tico-6C63FF?style=for-the-badge&logo=satellite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?style=flat-square&logo=css3)

**FIAP – Global Solution | Front-End Design e Web Development**

[🚀 Demo ao Vivo](#) • [📋 Documentação](#) • [🐛 Issues](../../issues)

</div>

---

## 📖 Sobre o Projeto

O **OrbitWatch** é uma plataforma de monitoramento climático que utiliza dados de satélites da **NASA**, **ESA** e **INPE** para detectar e alertar sobre eventos climáticos críticos:

- 🔥 **Queimadas** – Detecção de focos de incêndio via satélite MODIS/VIIRS
- 🌊 **Enchentes** – Monitoramento de áreas alagadas com Sentinel-1 SAR
- 🌵 **Secas** – Análise de índices NDVI e umidade do solo
- ⚠️ **Áreas de Risco** – Mapeamento de zonas vulneráveis a desastres

### 🎯 Impacto Social

Alinhado aos **Objetivos de Desenvolvimento Sustentável (ODS)** da ONU:

| ODS | Descrição | Como o OrbitWatch contribui |
|-----|-----------|----------------------------|
| 🏭 **ODS 9** | Indústria, Inovação e Infraestrutura | Infraestrutura de dados espaciais aberta |
| 🏙️ **ODS 11** | Cidades e Comunidades Sustentáveis | Alertas para Defesa Civil e gestão urbana |
| 🌍 **ODS 13** | Ação Contra a Mudança Global do Clima | Monitoramento e resposta a eventos climáticos |

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 18.x | Framework principal |
| **Vite** | 5.x | Build tool e dev server |
| **React Router DOM** | 6.x | Roteamento SPA |
| **CSS Modules** | - | Estilização modular |
| **CSS Variables** | - | Design tokens e tema dark |
| **Google Fonts** | - | Inter + Poppins |
| **Local JSON** | - | Dados de satélites e alertas |

---

## 🚀 Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18+ 
- npm v9+ ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/orbitwatch.git

# Entre na pasta do projeto
cd orbitwatch

# Instale as dependências
npm install
```

### Execução em Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `/dist`.

### Preview do Build

```bash
npm run preview
```

---

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça fork/clone do repositório para seu GitHub
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta GitHub
3. Clique em **"New Project"** e importe o repositório
4. Configurações automáticas (Vite é detectado automaticamente)
5. Clique em **"Deploy"** ✅

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

> ⚠️ **Importante:** Para React Router funcionar no Netlify, crie o arquivo `public/_redirects`:
> ```
> /* /index.html 200
> ```

### GitHub Pages

```bash
# Instale o gh-pages
npm install --save-dev gh-pages

# Adicione ao package.json:
# "homepage": "https://seu-usuario.github.io/orbitwatch",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
```

---

## 📁 Estrutura de Pastas

```
orbitwatch/
├── public/
│   └── orbit-icon.svg          # Favicon SVG
├── src/
│   ├── assets/                 # Imagens e recursos estáticos
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Cards.jsx           # StatsCard, InfoCard, AlertCard, SatelliteCard, DashboardCard
│   │   ├── Cards.module.css
│   │   ├── FAQ.jsx             # Accordion interativo
│   │   ├── FAQ.module.css
│   │   ├── Footer.jsx          # Rodapé global
│   │   ├── Footer.module.css
│   │   ├── HeroSection.jsx     # Hero animado com órbitas
│   │   ├── HeroSection.module.css
│   │   ├── MapPlaceholder.jsx  # Mapa SVG ilustrativo do Brasil
│   │   ├── MapPlaceholder.module.css
│   │   ├── Navbar.jsx          # Navegação responsiva
│   │   ├── Navbar.module.css
│   │   ├── Timeline.jsx        # Timeline de eventos
│   │   └── Timeline.module.css
│   ├── data/                   # JSON locais
│   │   ├── alerts.json         # 10 alertas climáticos fictícios
│   │   └── satellites.json     # 8 satélites com especificações
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Home.jsx            # Página inicial
│   │   ├── Home.module.css
│   │   ├── Problema.jsx        # Contexto do problema
│   │   ├── Problema.module.css
│   │   ├── Tecnologia.jsx      # Tecnologia espacial
│   │   ├── Tecnologia.module.css
│   │   ├── Dashboard.jsx       # Centro de operações
│   │   ├── Dashboard.module.css
│   │   ├── Impacto.jsx         # ODS e benefícios
│   │   └── Impacto.module.css
│   ├── styles/
│   │   └── global.css          # Reset, variáveis CSS, utilitários
│   ├── App.jsx                 # Rotas principais
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Configuração Vite
├── package.json
└── README.md
```

---

## 📄 Páginas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Hero section, cards de stats, Nova Economia Espacial |
| `/problema` | Problema | Contexto climático, gráficos, timeline de desastres |
| `/tecnologia` | Tecnologia Espacial | NASA/ESA/INPE, fluxo de dados, catálogo de satélites |
| `/dashboard` | Dashboard | Centro de operações, mapa, alertas em tempo real |
| `/impacto` | Impacto & Benefícios | ODS, beneficiários, métricas, FAQ |

---

## 🧩 Componentes

### `<Navbar />`
Menu de navegação fixo com efeito de scroll, links ativos via React Router e menu hamburger para mobile.

### `<Footer />`
Rodapé em grid 4 colunas com links, status do sistema, badges ODS e copyright.

### `<HeroSection />`
Seção hero com animação de órbitas SVG, campo de estrelas, badges de agências e CTAs.

### `<Cards />`
Exporta 5 componentes de card:
- `StatsCard` – Métrica com ícone e variação
- `InfoCard` – Card informativo com lista de features
- `AlertCard` – Alerta climático com badge de risco
- `SatelliteCard` – Satélite com specs técnicas
- `DashboardCard` – Indicador de operações

### `<MapPlaceholder />`
Mapa SVG ilustrativo do Brasil com pontos de alerta animados, cobertura de satélite e legenda.

### `<FAQ />`
Accordion interativo com animação de expand/collapse suave.

### `<Timeline />`
Timeline alternada esquerda/direita de eventos, responsiva (stacking em mobile).

---

## 📊 Dados JSON

### `alerts.json`
10 alertas climáticos com:
- `id`, `regiao`, `estado`, `tipo`, `risco`
- `coordenadas` (lat/lng), `area_ha`
- `satellite`, `data`, `status`
- `descricao`, `populacao_risco`, `orgao_notificado`

### `satellites.json`
8 satélites com:
- `id`, `nome`, `agencia`, `tipo`
- `altitude`, `inclinacao`, `periodo`
- `sensores[]`, `resolucao`, `cobertura`
- `status`, `lancamento`

---

## 🎨 Design System

### Paleta de Cores

| Variável | Valor | Uso |
|----------|-------|-----|
| `--bg-primary` | `#0A192F` | Background principal |
| `--accent-purple` | `#6C63FF` | CTAs, destaques |
| `--accent-green` | `#00C896` | Status OK, monitoramento |
| `--accent-red` | `#FF4D4D` | Alertas críticos |
| `--accent-orange` | `#FF8C42` | Alertas médios, ODS 9 |

### Tipografia

- **Headings:** Poppins (700, 600)
- **Body:** Inter (400, 500, 600)

### Animações

- `fadeIn` – Entrada suave de elementos
- `orbit` – Rotação dos anéis orbitais
- `pulse` – Pulsação de indicadores de status
- `float` – Flutuação suave de elementos
- `shimmer` – Loading skeleton
- `scanline` – Efeito de varredura no mapa

---

## 👥 Integrantes

| Nome | RM | Turma |
|------|----|-------|
| Integrante 1 | RM000000 | - |
| Integrante 2 | RM000000 | - |
| Integrante 3 | RM000000 | - |

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos – **FIAP Global Solution 2025**.

---

<div align="center">

Feito com ☕ e 🛰️ por alunos da FIAP

**[⬆ Voltar ao topo](#-orbitwatch--inteligência-climática-vinda-do-espaço)**

</div>
