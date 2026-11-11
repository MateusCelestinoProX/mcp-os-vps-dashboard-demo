
/* ==============================================================================
   PORTFOLIO DEMO ENGINE — Hiper-Realista, Autônomo & Client-Side
   Permite execução 100% estática na Vercel/Web com simulação ao vivo de SO.
   ============================================================================== */

const DemoSimulationEngine = {
  tickCount: 0,
  baseCpu: 18.4,
  baseRam: 4.28,
  
  getDynamicMetrics() {
    this.tickCount++;
    // Variação fisiológica sutil e realista em onda senoidal + ruído pseudo-aleatório
    const sinFactor = Math.sin(this.tickCount * 0.4) * 3.2;
    const noise = (Math.random() - 0.5) * 1.8;
    const cpuTotal = Math.max(12.5, Math.min(32.0, +(this.baseCpu + sinFactor + noise).toFixed(1)));
    
    const ramNoise = (Math.sin(this.tickCount * 0.2) * 0.12);
    const ramUsed = +(this.baseRam + ramNoise).toFixed(2);
    const ramPct = +((ramUsed / 16.0) * 100).toFixed(1);

    const rxKbs = Math.max(800, Math.floor(1850 + Math.sin(this.tickCount * 0.5) * 650 + (Math.random() * 200)));
    const txKbs = Math.max(400, Math.floor(920 + Math.cos(this.tickCount * 0.5) * 420 + (Math.random() * 150)));

    return {
      cpuTotal,
      ramUsed,
      ramPct,
      rxKbs,
      txKbs
    };
  },

  getContainers() {
    const m = this.getDynamicMetrics();
    return [
      {
        id: "c1a9e2f4b8d7",
        name: "seu-servico-web",
        image: "portfolio/web-app:latest",
        status: "Up 14 days (healthy)",
        state: "running",
        ports: "0.0.0.0:3000->3000/tcp",
        cpu_percent: +(1.4 + Math.sin(this.tickCount * 0.3) * 0.5).toFixed(1),
        memory_usage: "210.4 MB / 16.0 GB",
        memory_percent: 1.3
      },
      {
        id: "d2b8f3a5c9e1",
        name: "seu-conteiner-docker",
        image: "portfolio/api-worker:latest",
        status: "Up 14 days (healthy)",
        state: "running",
        ports: "0.0.0.0:8080->8080/tcp",
        cpu_percent: +(0.8 + Math.cos(this.tickCount * 0.4) * 0.3).toFixed(1),
        memory_usage: "145.2 MB / 16.0 GB",
        memory_percent: 0.9
      },
      {
        id: "e3c7a4b6d1f2",
        name: "seu-banco-dados",
        image: "postgres:16-alpine",
        status: "Up 14 days (healthy)",
        state: "running",
        ports: "0.0.0.0:5432->5432/tcp",
        cpu_percent: +(2.1 + Math.sin(this.tickCount * 0.2) * 0.7).toFixed(1),
        memory_usage: "482.0 MB / 16.0 GB",
        memory_percent: 3.0
      },
      {
        id: "f4d6b5c7e2a3",
        name: "seu-cache-redis",
        image: "redis:7-alpine",
        status: "Up 14 days (healthy)",
        state: "running",
        ports: "0.0.0.0:6379->6379/tcp",
        cpu_percent: 0.4,
        memory_usage: "64.8 MB / 16.0 GB",
        memory_percent: 0.4
      },
      {
        id: "a5e5c6d8f3b4",
        name: "sua-automacao-engine",
        image: "n8n/orchestrator:latest",
        status: "Up 14 days (healthy)",
        state: "running",
        ports: "0.0.0.0:5678->5678/tcp",
        cpu_percent: +(1.1 + Math.cos(this.tickCount * 0.3) * 0.4).toFixed(1),
        memory_usage: "320.1 MB / 16.0 GB",
        memory_percent: 2.0
      },
      {
        id: "b6f4d7e9a4c5",
        name: "seu-sentinel-security",
        image: "security/sentinel-waf:latest",
        status: "Up 14 days (healthy)",
        state: "running",
        ports: "0.0.0.0:5050->5050/tcp",
        cpu_percent: 0.6,
        memory_usage: "98.5 MB / 16.0 GB",
        memory_percent: 0.6
      }
    ];
  },

  getGlancesTelemetry() {
    const m = this.getDynamicMetrics();
    const containers = this.getContainers();

    const core0 = +(m.cpuTotal * 0.95 + (Math.random() * 2 - 1)).toFixed(1);
    const core1 = +(m.cpuTotal * 1.05 + (Math.random() * 2 - 1)).toFixed(1);
    const core2 = +(m.cpuTotal * 0.98 + (Math.random() * 2 - 1)).toFixed(1);
    const core3 = +(m.cpuTotal * 1.02 + (Math.random() * 2 - 1)).toFixed(1);

    return {
      system: {
        os_name: "Linux",
        hostname: "srv-edge-alpha01.demo-cloud.internal",
        platform: "Ubuntu 24.04 LTS (x86_64)",
        linux_distro: "Ubuntu 24.04 LTS",
        uptime: "142 days, 8 hours, 34 mins",
        hr_name: "Ubuntu Linux 24.04 LTS"
      },
      cpu: {
        total: m.cpuTotal,
        user: +(m.cpuTotal * 0.68).toFixed(1),
        system: +(m.cpuTotal * 0.24).toFixed(1),
        iowait: 0.4,
        idle: +(100 - m.cpuTotal).toFixed(1),
        load1: +(m.cpuTotal / 40).toFixed(2),
        load5: 0.45,
        load15: 0.41,
        cpucore: 4,
        cpu_model: "AMD EPYC 7763 64-Core Processor (4 vCPUs Dedicated)",
        cores: [
          { core: 0, total: Math.max(1, core0), user: +(core0 * 0.7).toFixed(1), system: +(core0 * 0.25).toFixed(1) },
          { core: 1, total: Math.max(1, core1), user: +(core1 * 0.7).toFixed(1), system: +(core1 * 0.25).toFixed(1) },
          { core: 2, total: Math.max(1, core2), user: +(core2 * 0.7).toFixed(1), system: +(core2 * 0.25).toFixed(1) },
          { core: 3, total: Math.max(1, core3), user: +(core3 * 0.7).toFixed(1), system: +(core3 * 0.25).toFixed(1) }
        ],
        context_switches: 148920,
        procs_running: 2,
        procs_blocked: 0
      },
      mem: {
        total_gb: 16.0,
        used_gb: m.ramUsed,
        free_gb: +(16.0 - m.ramUsed).toFixed(2),
        percent: m.ramPct,
        cached_gb: 3.42,
        buffers_gb: 0.68
      },
      swap: {
        total_gb: 4.0,
        used_gb: 0.18,
        free_gb: 3.82,
        percent: 4.5
      },
      disk: {
        total_gb: 500.0,
        used_gb: 42.6,
        free_gb: 457.4,
        percent: 8.5,
        read_kbs: Math.floor(180 + Math.random() * 80),
        write_kbs: Math.floor(320 + Math.random() * 120),
        mount: "/",
        fs_type: "ext4 (NVMe SSD)"
      },
      mounts: [
        {
          mount: "/",
          device: "/dev/nvme0n1p1",
          fstype: "ext4",
          total_gb: 500.0,
          used_gb: 42.6,
          free_gb: 457.4,
          percent: 8.5,
          inodes_total: 32768000,
          inodes_used: 1240000,
          inodes_percent: 3.8
        },
        {
          mount: "/boot/efi",
          device: "/dev/nvme0n1p15",
          fstype: "vfat",
          total_gb: 0.5,
          used_gb: 0.08,
          free_gb: 0.42,
          percent: 16.0,
          inodes_total: 0,
          inodes_used: 0,
          inodes_percent: 0.0
        }
      ],
      network: {
        interface: "eth0",
        rx_kbs: m.rxKbs,
        tx_kbs: m.txKbs,
        rx_total_gb: 184.2,
        tx_total_gb: 98.6
      },
      containers: containers,
      docker_summary: {
        total: 6,
        running: 6,
        paused: 0,
        stopped: 0
      },
      ports: [
        { port: 80, proto: "tcp", process: "nginx", bind: "0.0.0.0" },
        { port: 443, proto: "tcp", process: "nginx (tls)", bind: "0.0.0.0" },
        { port: 3000, proto: "tcp", process: "seu-servico-web", bind: "0.0.0.0" },
        { port: 5050, proto: "tcp", process: "seu-sentinel", bind: "127.0.0.1" },
        { port: 5432, proto: "tcp", process: "seu-banco-dados", bind: "127.0.0.1" },
        { port: 5678, proto: "tcp", process: "sua-automacao", bind: "127.0.0.1" },
        { port: 6379, proto: "tcp", process: "seu-cache-redis", bind: "127.0.0.1" },
        { port: 8080, proto: "tcp", process: "seu-conteiner-docker", bind: "0.0.0.0" },
        { port: 22, proto: "tcp", process: "sshd", bind: "0.0.0.0" }
      ],
      systemd_services: [
        { name: "docker.service", desc: "Docker Application Container Engine", status: "active", active: true, port: "-" },
        { name: "nginx.service", desc: "Nginx High-Performance Edge Reverse Proxy", status: "active", active: true, port: "80, 443" },
        { name: "sentinel-guard.service", desc: "Zero-Trust Kernel eBPF Threat Shield", status: "active", active: true, port: "5050" },
        { name: "telemetry-agent.service", desc: "Streaming Metrics & Sparkline Daemon", status: "active", active: true, port: "61209" },
        { name: "postgresql.service", desc: "PostgreSQL Database Engine", status: "active", active: true, port: "5432" },
        { name: "cron.service", desc: "Linux Regular Task Scheduler", status: "active", active: true, port: "-" }
      ],
      processes: [
        { pid: 1420, name: "dockerd", user: "root", cpu_percent: 2.1, memory_percent: 1.8, memory_mb: 288, status: "R", time: "18:42", cmd: "/usr/bin/dockerd -H fd://" },
        { pid: 2184, name: "node (web-app)", user: "node", cpu_percent: 1.6, memory_percent: 1.3, memory_mb: 210, status: "S", time: "14:10", cmd: "next-server (v15.0.0) [cluster-worker]" },
        { pid: 2840, name: "postgres", user: "postgres", cpu_percent: 2.4, memory_percent: 3.0, memory_mb: 482, status: "S", time: "32:18", cmd: "postgres: writer process & wal receiver" },
        { pid: 3110, name: "python3 (worker)", user: "app", cpu_percent: 0.9, memory_percent: 0.9, memory_mb: 145, status: "S", time: "09:55", cmd: "uvicorn main:app --workers 4 --port 8080" },
        { pid: 3422, name: "redis-server", user: "redis", cpu_percent: 0.4, memory_percent: 0.4, memory_mb: 64, status: "S", time: "05:12", cmd: "/usr/bin/redis-server *:6379" },
        { pid: 3890, name: "node (automation)", user: "node", cpu_percent: 1.2, memory_percent: 2.0, memory_mb: 320, status: "S", time: "11:04", cmd: "n8n-worker-orchestrator --sub-workflows" },
        { pid: 4012, name: "sentinel-guard", user: "root", cpu_percent: 0.6, memory_percent: 0.6, memory_mb: 98, status: "S", time: "08:22", cmd: "sentinel-waf-daemon --ebpf-trace" },
        { pid: 940, name: "nginx: worker", user: "www-data", cpu_percent: 0.8, memory_percent: 0.5, memory_mb: 80, status: "S", time: "16:02", cmd: "nginx: worker process (event-driven)" },
        { pid: 812, name: "systemd-journald", user: "root", cpu_percent: 0.3, memory_percent: 0.4, memory_mb: 62, status: "S", time: "04:19", cmd: "/lib/systemd/systemd-journald" },
        { pid: 654, name: "sshd", user: "root", cpu_percent: 0.1, memory_percent: 0.2, memory_mb: 32, status: "S", time: "01:05", cmd: "sshd: /usr/sbin/sshd -D [listener]" },
        { pid: 512, name: "telemetry-agent", user: "glances", cpu_percent: 0.5, memory_percent: 0.4, memory_mb: 65, status: "S", time: "06:40", cmd: "python3 -m glances.agent --xmlrpc" },
        { pid: 1, name: "systemd", user: "root", cpu_percent: 0.1, memory_percent: 0.2, memory_mb: 28, status: "S", time: "02:11", cmd: "/sbin/init splash" }
      ]
    };
  },

  getContainerLogs(containerName) {
    const now = new Date();
    const timeStr = now.toISOString().replace('T', ' ').substring(0, 19);
    const logs = [
      `[${timeStr}] [INFO]  :: Container "${containerName}" status: HEALTHY (cgroups active)`,
      `[${timeStr}] [INIT]  :: Isolated kernel namespace initialized successfully`,
      `[${timeStr}] [NET]   :: Bridge interface eth0 established · MTU 1500`,
      `[${timeStr}] [HTTP]  :: GET /healthz 200 OK · latency=0.42ms · client=internal-prober`,
      `[${timeStr}] [WORK]  :: Dispatched background event worker queue · 0 pending backlog`,
      `[${timeStr}] [METRIC]:: Memory allocation: stable · GC cycle completed in 1.2ms`,
      `[${timeStr}] [SEC]   :: TLS handshake completed with cipher TLS_AES_256_GCM_SHA384`,
      `[${timeStr}] [STATE] :: Process heartbeat verified · Zero-error state maintained`,
      `[${timeStr}] [TRACE] :: Distributed trace propagation active · SpanID: 4f8a91b3e`,
      `[${timeStr}] [READY] :: Listening for incoming cluster payloads with sub-millisecond response`
    ];
    return logs.join('\n');
  }
};

/* ==============================================================================
   MCP OS // LINUX SERVER CORE — Client Application Logic (app.js v3.0)
   Genuíno Vidro Neutro · Motor Integral de Backgrounds & Shaders · Telemetria
   ============================================================================== */

// Base de API dinâmica (suporta execução embutida local no APK via file:// e web remota)
const API_BASE = (window.location.protocol === 'file:')
  ? 'https://srv-edge-alpha01.demo-cloud.internal:5050'
  : '';

// Estado Central da Aplicação
const state = {
  currentView: 'heroes', // 'heroes' ou 'monitoring'
  currentSubNav: 'cockpit',
  activeBgType: 'shader', // 'shader' ou 'gallery'
  activeBgId: 'strands',
  currentGallery: 'red',
  galleryIndex: 0,
  slideshowTimer: null,
  activeSlideNum: 1,
  pollRateMs: 2000,
  pollTimer: null,
  glancesData: null,
  processFilterQuery: '',
  procSortField: 'cpu_percent',
  procSortAsc: false,
  sparklines: {
    cpu: [0, 0],
    mem: [0, 0],
    disk: [0, 0],
    net: [0, 0]
  }
};

// Shaders WebGL Suportados (Catálogo Canônico 34 Shaders + Legados)
const WEBGL_SHADERS = [
  'softaurora', 'particles', 'ghostfibers', 'plasmawave', 'strands',
  'siderays', 'beams', 'floatinglines', 'silk', 'radar',
  'ripplegrid', 'pixelblast', 'magicrings', 'gridscan', 'liquidchrome',
  'linewaves', 'ferrofluid', 'dither', 'darkveil', 'webthreads',
  'topography', 'balatro', 'faultyterminal', 'morphslider', 'antigravity',
  'aurora', 'letterglitch', 'plasma', 'liquidether', 'orb',
  'prism', 'prismaticburst', 'lightning', 'evileye',
  'lighttunnel', 'ancidsquares', 'acidsquares', 'moltenmetal', 'galaxybits'
];

// Nomes de Exibição
const BG_TITLES = {
  'softaurora': 'Soft Aurora',
  'particles': '3D Particles',
  'ghostfibers': 'Ghost Fibers',
  'plasmawave': 'Plasma Wave',
  'strands': 'Light Strands',
  'siderays': 'Side Rays',
  'beams': 'Volumetric Beams',
  'floatinglines': 'Floating Lines',
  'silk': 'Liquid Silk',
  'radar': 'Tactical Radar',
  'ripplegrid': 'Ripple Grid',
  'pixelblast': 'Pixel Blast',
  'magicrings': 'Magic Rings',
  'gridscan': 'Grid Scan',
  'liquidchrome': 'Liquid Chrome',
  'linewaves': 'Line Waves',
  'ferrofluid': 'Ferrofluid',
  'dither': 'Dither Matrix',
  'darkveil': 'Dark Veil',
  'webthreads': 'Web Threads',
  'topography': 'Topography',
  'balatro': 'Balatro Flow',
  'faultyterminal': 'Faulty Terminal',
  'morphslider': 'Morph Slider',
  'antigravity': 'Antigravity',
  'aurora': 'Northern Aurora',
  'letterglitch': 'Letter Glitch',
  'plasma': 'Electric Plasma',
  'liquidether': 'Liquid Ether',
  'orb': 'Energy Orb',
  'prism': 'Prismatic Beam',
  'prismaticburst': 'Prismatic Burst',
  'lightning': 'Thunder Lightning',
  'evileye': 'Evil Eye',
  'lighttunnel': 'Light Tunnel',
  'ancidsquares': 'Acid Squares',
  'acidsquares': 'Acid Squares',
  'moltenmetal': 'Molten Metal',
  'galaxybits': 'Galaxy Bits',
  'red': 'Red Aesthetic',
  'soft': 'Gen X Soft Club',
  'flowers': 'Flowers & Nature',
  'gym': 'Gym & Focus',
  'motivation': 'Motivacional',
  'random': 'Slideshow Automático'
};

// Catálogo Completo de Imagens Reais do Repositório MCP OS
const GALLERIES = {
  red: [
    "images/red/08c3aa3a5c3631b23cec57233f5c365c.jpg",
    "images/red/465148a473500d0bf6c3b9c83b98ec92.jpg",
    "images/red/6c5d14bcb2f0390ee694119aa6704655.jpg",
    "images/red/7361af8ac2d01d02c9752f89b3365d47.jpg",
    "images/red/963a4bd9af77842586e2b4cdd53eb931.jpg",
    "images/red/f8247f7bffb7269d9e3b2310844b330d.jpg",
    "images/red/fb71f9cd02c7e3f7e41589d90f6fdaa8.jpg"
  ],
  soft: [
    "images/soft/05f22143098023a6978520a73a77637e.jpg",
    "images/soft/142622f0d35efbffebc9b8a7995168dd.jpg",
    "images/soft/37c572ab0404204cb6f367c2a9f78a54.jpg",
    "images/soft/3e3b1728d96b733b8f3bbf418021dd42.jpg",
    "images/soft/69b55c9be40f117fd5f076d27334d2cf.jpg",
    "images/soft/6e86f5937cb8ef54593b94952a59d5a1.jpg",
    "images/soft/71acf6cb2cad2c986df87d817a06c33b.jpg",
    "images/soft/72859fb9ef398cd2a69777dc26d7d1d2.jpg",
    "images/soft/73ba35d0e4557dacaeb9ffaab42cd635.jpg",
    "images/soft/747c0ca848cc44632e4c94436348fe07.jpg",
    "images/soft/7b78f45b8a8f62b1cb9c7477d0b83f63.jpg",
    "images/soft/800c456fafbe63fae067663194fe47e9.jpg",
    "images/soft/8f432d4e77f909f3abccb186f47ffff3.jpg",
    "images/soft/b1cd9d06a79b40e08ff9b945cd051aab.jpg",
    "images/soft/b26f28a14964906204ec288ddf524432.jpg",
    "images/soft/bbf00645951aa952366c3a446a07c990.jpg",
    "images/soft/c4058aae27b4310eb2c979cf9f6a817d.jpg",
    "images/soft/e82d7e3487abb787a3398210d02801c8.jpg",
    "images/soft/f24ac251210bc82b90f9c33ce2438194.jpg",
    "images/soft/f9f930471adfb299ae9ad2f9b319421b.jpg"
  ],
  flowers: [
    "images/flowers/59da96db902a205e9f90e651a4bcaa72.jpg",
    "images/flowers/797d233401eae1b36818abc988af10d4.jpg",
    "images/flowers/7f15501be01e3225966e2ab7fe1b735a.jpg",
    "images/flowers/8e7943acb3073ec2e112542af9fcc2c6.jpg",
    "images/flowers/a7a3a081d906882bcf9068afc3894eee.jpg",
    "images/flowers/b268e4783280047be44e09f1fca7dec6.jpg",
    "images/flowers/beb4c6ac11f067d61799142fe1a6e27d.jpg",
    "images/flowers/e55174e6ec437489913f134318952c1e.jpg"
  ],
  gym: [
    "images/gym/012f4996731b766a5f6fce9ae5fa16a0.jpg",
    "images/gym/04747ba8c86d370f14b19aff88c73f77.jpg",
    "images/gym/1-20260505_170907.jpg",
    "images/gym/2-20260327_135337.jpg",
    "images/gym/3-20260313_123924.jpg",
    "images/gym/416bb19b1eefa7c850b4db3cb09bac12_copia.jpg",
    "images/gym/4567a6460e49dca509404aa4031c11d2.jpg",
    "images/gym/9811449c83f06fc824d7a95f235d376e_copia.jpg",
    "images/gym/b3668afb13ab00288ff06c9d72453d19.jpg",
    "images/gym/c6081876648f7ce1a6e4734daa79e7d4.jpg",
    "images/gym/e5ef0ddde9b00540cdf18e4b226e0bee.jpg",
    "images/gym/eca2c6f16007ec99ca3c5058876b2af6.jpg",
    "images/gym/f4fcf6bb7808351828fbd6ed76cba496.jpg",
    "images/gym/onboarding.jpg"
  ],
  motivation: [
    "images/motivation/1000427297.jpg",
    "images/motivation/1000427303.jpg",
    "images/motivation/1000427312.jpg",
    "images/motivation/img_8287.jpeg",
    "images/motivation/img_9915.jpeg",
    "images/motivation/projetounohome_20260613_155750_319.jpg",
    "images/motivation/projetounohome_20260613_155802_757.jpg",
    "images/motivation/projetounohome_20260613_155833_559.jpg",
    "images/motivation/projetounohome_20260613_155903_814.jpg",
    "images/motivation/projetounohome_20260613_171838_541.jpg",
    "images/motivation/vaideuno_20260613_155457_985.jpg",
    "images/motivation/vaideuno_20260613_155513_639.jpg",
    "images/motivation/vaideuno_20260613_170029_918.jpg",
    "images/motivation/vaideuno_20260613_171916_766.jpg",
    "images/motivation/welitonofc001-20260222-0004.jpg",
    "images/motivation/welitonofc001-20260222-0049.jpg",
    "images/motivation/welitonofc001-20260222-0097.jpg"
  ]
};

function saveBgPreference(type, id) {
  try {
    localStorage.setItem('mcp_bg_type', type);
    localStorage.setItem('mcp_bg_id', id);
    document.cookie = `mcp_bg_type=${type}; path=/; max-age=31536000; SameSite=Lax`;
    document.cookie = `mcp_bg_id=${id}; path=/; max-age=31536000; SameSite=Lax`;
  } catch (e) {
    console.warn('[Background] Erro de persistência:', e);
  }
}

function loadSavedBgPreference() {
  let type = null, id = null;
  try {
    type = localStorage.getItem('mcp_bg_type');
    id = localStorage.getItem('mcp_bg_id');
  } catch (e) {}

  if (!type || !id) {
    const matchType = document.cookie.match(/(^| )mcp_bg_type=([^;]+)/);
    const matchId = document.cookie.match(/(^| )mcp_bg_id=([^;]+)/);
    if (matchType) type = matchType[2];
    if (matchId) id = matchId[2];
  }
  return { type: type || 'shader', id: id || 'strands' };
}

/* =========================================================
   1. MOTOR GENUÍNO DE BACKGROUNDS (SHADERS & SLIDESHOW)
   ========================================================= */
function applyBackground(type, id) {
  state.activeBgType = type;
  state.activeBgId = id;
  saveBgPreference(type, id);

  const ctnWebGL = document.getElementById('bg-webgl-container');
  const slide1 = document.getElementById('bg-slide-1');
  const slide2 = document.getElementById('bg-slide-2');
  const labelEl = document.getElementById('bg-current-name');
  const dropdown = document.getElementById('bg-dropdown');

  if (labelEl) {
    labelEl.textContent = (BG_TITLES[id] || id).toUpperCase();
  }

  // Atualiza destaque visual do item ativo no menu
  if (dropdown) {
    dropdown.querySelectorAll('.dropdown-item').forEach(item => {
      const itType = item.getAttribute('data-bg-type');
      const itId = item.getAttribute('data-id');
      if (itType === type && itId === id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Se for Shader WebGL
  if (type === 'shader') {
    if (state.slideshowTimer) {
      clearInterval(state.slideshowTimer);
      state.slideshowTimer = null;
    }
    if (slide1) slide1.classList.remove('active');
    if (slide2) slide2.classList.remove('active');

    if (ctnWebGL) {
      ctnWebGL.style.display = 'block';
    }

    // Tenta renderizar o shader; se o módulo ainda estiver carregando, tenta com pequeno retry
    function tryRender() {
      if (typeof window.renderWebGLBackground === 'function') {
        try {
          window.renderWebGLBackground(id);
        } catch (err) {
          console.warn('[WebGL] Shader render skipped or unsupported:', err);
        }
      } else {
        setTimeout(tryRender, 100);
      }
    }
    tryRender();
    return;
  }

  // Se for Galeria Fotográfica
  if (typeof window.stopWebGLBackground === 'function') {
    try {
      window.stopWebGLBackground();
    } catch (err) {
      console.warn('[WebGL] Error stopping WebGL background:', err);
    }
  }
  if (ctnWebGL) {
    ctnWebGL.style.display = 'none';
  }

  if (id === 'random') {
    const keys = Object.keys(GALLERIES);
    state.currentGallery = keys[Math.floor(Math.random() * keys.length)];
  } else {
    state.currentGallery = id;
  }
  state.galleryIndex = 0; // Reinicia no início da coleção selecionada

  // Exibe a foto imediatamente sem aguardar o intervalo do timer
  showNextPhoto(true);

  // Inicia slideshow automático a cada 10 segundos
  if (state.slideshowTimer) clearInterval(state.slideshowTimer);
  state.slideshowTimer = setInterval(() => showNextPhoto(false), 10000);
}

function showNextPhoto(forceInstant = false) {
  const list = GALLERIES[state.currentGallery] || GALLERIES.red;
  if (!list || list.length === 0) return;

  const rawUrl = list[state.galleryIndex % list.length];
  state.galleryIndex++;

  const slide1 = document.getElementById('bg-slide-1');
  const slide2 = document.getElementById('bg-slide-2');
  if (!slide1 || !slide2) return;

  const targetSlide = state.activeSlideNum === 1 ? slide2 : slide1;
  const currentSlide = state.activeSlideNum === 1 ? slide1 : slide2;

  const safeUrl = encodeURI(rawUrl);

  const applySlide = () => {
    targetSlide.style.backgroundImage = `url("${safeUrl}")`;
    targetSlide.classList.add('active');
    currentSlide.classList.remove('active');
    state.activeSlideNum = state.activeSlideNum === 1 ? 2 : 1;
  };

  if (forceInstant) {
    applySlide();
  }

  const img = new Image();
  img.onload = () => {
    if (!forceInstant) {
      applySlide();
    }
  };
  img.onerror = () => {
    console.warn('[Gallery] Falha ao carregar:', safeUrl, '- avançando para a próxima foto');
    if (forceInstant) {
      showNextPhoto(true);
    }
  };
  img.src = safeUrl;
}

function setupBackgroundControls() {
  const btnToggle = document.getElementById('btn-bg-toggle');
  const dropdown = document.getElementById('bg-dropdown');
  const backdrop = document.getElementById('bg-dropdown-backdrop');
  const btnCloseSheet = document.getElementById('btn-close-bg-dropdown');
  const btnNext = document.getElementById('btn-next-wallpaper');
  const bnavAtmosphere = document.getElementById('bnav-atmosphere');

  let lastActiveBnav = null;

  function setDropdownVisibility(show) {
    if (!dropdown) return;
    const isVisible = (typeof show === 'boolean') ? show : !dropdown.classList.contains('show');
    dropdown.classList.toggle('show', isVisible);
    if (backdrop) backdrop.classList.toggle('show', isVisible);
    document.body.classList.toggle('atmosphere-mode', isVisible);

    if (bnavAtmosphere) {
      if (isVisible) {
        const activeNav = document.querySelector('.bottom-nav-item.active:not(#bnav-atmosphere)');
        if (activeNav) lastActiveBnav = activeNav;
        document.querySelectorAll('.bottom-nav-item').forEach(btn => btn.classList.remove('active'));
        bnavAtmosphere.classList.add('active');
      } else {
        bnavAtmosphere.classList.remove('active');
        if (lastActiveBnav) {
          lastActiveBnav.classList.add('active');
        } else {
          const bnavHeroes = document.getElementById('bnav-heroes');
          if (bnavHeroes) bnavHeroes.classList.add('active');
        }
      }
    }
  }

  window.toggleAtmosphereSheet = setDropdownVisibility;

  if (btnToggle) {
    btnToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      setDropdownVisibility();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      setDropdownVisibility(false);
    });
  }

  if (btnCloseSheet) {
    btnCloseSheet.addEventListener('click', () => {
      setDropdownVisibility(false);
    });
  }

  if (dropdown) {
    dropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      setDropdownVisibility(false);
    });

    dropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (item.id === 'btn-next-wallpaper') return;
        const bgType = item.getAttribute('data-bg-type');
        const bgId = item.getAttribute('data-id');
        if (bgType && bgId) {
          const isSame = (state.activeBgType === bgType && state.activeBgId === bgId);
          applyBackground(bgType, bgId);
          
          // No mobile: atualiza o shader em tempo real para visualização viva no fundo!
          // Fecha se clicar novamente no mesmo shader já ativo ou se estiver no desktop.
          const isMobile = window.innerWidth <= 768;
          if (isSame || !isMobile) {
            setDropdownVisibility(false);
          }
        }
      });
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.activeBgType !== 'gallery') {
        applyBackground('gallery', 'random');
      } else {
        showNextPhoto(true);
      }
    });
  }
}

/* =========================================================
   2. CONTROLE DE NAVEGAÇÃO DE VISÕES
   ========================================================= */
window.switchView = switchView;
window.switchSubNav = switchSubNav;
window.fetchGlancesTelemetry = fetchGlancesTelemetry;
window.state = state;

function switchView(viewName, updateHash = true) {
  state.currentView = viewName;
  if (window.toggleAtmosphereSheet) window.toggleAtmosphereSheet(false);

  const tabHeroes = document.getElementById('tab-heroes');
  const tabMonitoring = document.getElementById('tab-monitoring');
  const viewHeroes = document.getElementById('heroes-view');
  const viewMonitoring = document.getElementById('monitoring-view');
  const btnMonitor = document.getElementById('btn-toggle-monitor');
  const monitorLabel = document.getElementById('monitor-btn-label');

  // Bottom Nav items (Mobile)
  const bnavHeroes = document.getElementById('bnav-heroes');
  const bnavHud = document.getElementById('bnav-hud');
  const bnavMonitoring = document.getElementById('bnav-monitoring');

  if (viewName === 'monitoring') {
    if (tabHeroes) tabHeroes.classList.remove('active');
    if (tabMonitoring) tabMonitoring.classList.add('active');
    if (viewHeroes) viewHeroes.classList.remove('active');
    if (viewMonitoring) viewMonitoring.classList.add('active');
    if (monitorLabel) monitorLabel.textContent = 'VER APLICAÇÕES';
    if (bnavHeroes) bnavHeroes.classList.remove('active');
    if (bnavHud) bnavHud.classList.remove('active');
    if (bnavMonitoring) bnavMonitoring.classList.add('active');
    if (updateHash) {
      location.hash = `#monitoring/${state.currentSubNav || 'cockpit'}`;
    }
    fetchGlancesTelemetry();
  } else {
    if (tabHeroes) tabHeroes.classList.add('active');
    if (tabMonitoring) tabMonitoring.classList.remove('active');
    if (viewHeroes) viewHeroes.classList.add('active');
    if (viewMonitoring) viewMonitoring.classList.remove('active');
    if (monitorLabel) monitorLabel.textContent = 'MONITOR FULL GLASS';
    if (bnavMonitoring) bnavMonitoring.classList.remove('active');
    if (viewHeroes && viewHeroes.classList.contains('mobile-show-hud')) {
      if (bnavHeroes) bnavHeroes.classList.remove('active');
      if (bnavHud) bnavHud.classList.add('active');
    } else {
      if (bnavHeroes) bnavHeroes.classList.add('active');
      if (bnavHud) bnavHud.classList.remove('active');
    }
    if (updateHash) {
      location.hash = '#heroes';
    }
  }
}

function applyHashRoute() {
  const hash = location.hash.replace('#', '').trim();
  if (!hash) return;

  const validSubnavs = ['cockpit', 'cpu', 'memory', 'docker', 'network', 'processes', 'all'];

  if (hash.startsWith('monitoring')) {
    switchView('monitoring', false);
    const parts = hash.split('/');
    if (parts.length > 1 && validSubnavs.includes(parts[1])) {
      switchSubNav(parts[1], false);
    }
  } else if (validSubnavs.includes(hash)) {
    switchView('monitoring', false);
    switchSubNav(hash, false);
  } else if (hash === 'heroes') {
    switchView('heroes', false);
  }
}

function setupNavigation() {
  setupSubNavigation();
  setupLogsModalControls();
  window.addEventListener('hashchange', applyHashRoute);
  const tabHeroes = document.getElementById('tab-heroes');
  const tabMonitoring = document.getElementById('tab-monitoring');
  const btnMonitor = document.getElementById('btn-toggle-monitor');
  const hudBtnExpand = document.getElementById('hud-btn-expand-monitor');
  const brandHome = document.getElementById('brand-home-trigger');

  if (tabHeroes) tabHeroes.addEventListener('click', () => switchView('heroes'));
  if (tabMonitoring) tabMonitoring.addEventListener('click', () => switchView('monitoring'));
  if (btnMonitor) btnMonitor.addEventListener('click', () => switchView(state.currentView === 'heroes' ? 'monitoring' : 'heroes'));
  if (hudBtnExpand) hudBtnExpand.addEventListener('click', () => switchView('monitoring'));
  if (brandHome) {
    brandHome.addEventListener('click', () => {
      const vHeroes = document.getElementById('heroes-view');
      if (vHeroes) vHeroes.classList.remove('mobile-show-hud');
      switchView('heroes');
    });
  }

  // --- Suporte Nativo para Bottom Navigation Bar Mobile ---
  const bnavHeroes = document.getElementById('bnav-heroes');
  const bnavHud = document.getElementById('bnav-hud');
  const bnavMonitoring = document.getElementById('bnav-monitoring');
  const bnavAtmosphere = document.getElementById('bnav-atmosphere');
  const viewHeroes = document.getElementById('heroes-view');
  const bgDropdown = document.getElementById('bg-dropdown');

  if (bnavHeroes) {
    bnavHeroes.addEventListener('click', () => {
      if (viewHeroes) viewHeroes.classList.remove('mobile-show-hud');
      switchView('heroes');
      if (window.toggleAtmosphereSheet) window.toggleAtmosphereSheet(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (bnavHud) {
    bnavHud.addEventListener('click', () => {
      if (viewHeroes) viewHeroes.classList.add('mobile-show-hud');
      switchView('heroes');
      if (bnavHeroes) bnavHeroes.classList.remove('active');
      if (bnavHud) bnavHud.classList.add('active');
      if (window.toggleAtmosphereSheet) window.toggleAtmosphereSheet(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const mChipBtn = document.getElementById('m-chip-view-server');
  if (mChipBtn && bnavHud) {
    mChipBtn.addEventListener('click', () => {
      bnavHud.click();
    });
  }

  if (bnavMonitoring) {
    bnavMonitoring.addEventListener('click', () => {
      switchView('monitoring');
      if (window.toggleAtmosphereSheet) window.toggleAtmosphereSheet(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (bnavAtmosphere) {
    bnavAtmosphere.addEventListener('click', (e) => {
      e.stopPropagation();
      if (window.toggleAtmosphereSheet) {
        window.toggleAtmosphereSheet();
      }
    });
  }

  document.querySelectorAll('.rate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.rate-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.pollRateMs = parseInt(btn.getAttribute('data-rate'), 10) || 2000;
      resetPollingLoop();
    });
  });

  const btnRefreshNow = document.getElementById('mon-btn-refresh-now');
  if (btnRefreshNow) {
    btnRefreshNow.addEventListener('click', () => {
      fetchGlancesTelemetry();
      fetchServiceStatus();
      fetchDockerTelemetry();
    });
  }

  const procFilterInput = document.getElementById('mon-process-filter');
  if (procFilterInput) {
    procFilterInput.addEventListener('input', (e) => {
      state.processFilterQuery = e.target.value.toLowerCase().trim();
      renderProcessTable();
    });
  }
}

/* =========================================================
   3. CONTROLES DOS IFRAMES DOS HERO CARDS
   ========================================================= */
function setupIframeControls() {
  const iframes = [
    { id: 'iframe-deskcomm', skel: 'deskcomm-skeleton', btnReload: 'btn-reload-deskcomm' },
    { id: 'iframe-clienthunter', skel: 'clienthunter-skeleton', btnReload: 'btn-reload-clienthunter' },
    { id: 'iframe-omniroute', skel: 'omniroute-skeleton', btnReload: 'btn-reload-omniroute' },
    { id: 'iframe-n8n', skel: 'n8n-skeleton', btnReload: 'btn-reload-n8n' },
    { id: 'iframe-vpsmanager', skel: 'vpsmanager-skeleton', btnReload: 'btn-reload-vpsmanager' }
  ];

  iframes.forEach(item => {
    const iframeEl = document.getElementById(item.id);
    const skelEl = document.getElementById(item.skel);
    const reloadBtn = document.getElementById(item.btnReload);

    if (iframeEl && skelEl) {
      iframeEl.addEventListener('load', () => {
        skelEl.classList.add('hidden');
      });
    }

    if (reloadBtn && iframeEl) {
      reloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (skelEl) skelEl.classList.remove('hidden');
        const curSrc = iframeEl.src;
        iframeEl.src = '';
        setTimeout(() => { iframeEl.src = curSrc; }, 100);
      });
    }
  });
}

/* =========================================================
   3.5 LANÇADORES DIRETOS DE SISTEMAS NO NAVEGADOR ANDROID
   ========================================================= */
const TAILSCALE_HOST = 'srv-edge-alpha01.demo-cloud.internal';
const TAILSCALE_IP = '100.99.207.96';

const SYSTEM_URLS = {
  deskcomm: `https://${TAILSCALE_HOST}:3000`,
  waha: `https://${TAILSCALE_HOST}:3030`,
  clienthunter: `https://${TAILSCALE_HOST}:3333`,
  omniroute: `https://${TAILSCALE_HOST}:20128`,
  omniroute_api: `https://${TAILSCALE_HOST}:20128/v1`,
  n8n: `https://${TAILSCALE_HOST}:5678`,
  n8n_funnel: `https://${TAILSCALE_HOST}:8443`,
  glances: `https://${TAILSCALE_HOST}:5050`,
  vpsmanager: `https://${TAILSCALE_HOST}:5050/vps-manager/`,
  vps_sentinel: `https://${TAILSCALE_HOST}:5059`,
  vps_osint: `https://${TAILSCALE_HOST}:5060`
};

function openSystemInBrowser(target) {
  if (!target) return;

  // Interceptador Oficial Android App para VPS Manager (Abre app nativo com.mateuscelestino.vpsmanager diretamente)
  if (target === 'vpsmanager' || target === 'vps_manager') {
    if (window.AndroidApp) {
      if (typeof window.AndroidApp.openVpsManager === 'function') {
        console.log('[SystemLauncher] Disparando openVpsManager nativo no Android');
        window.AndroidApp.openVpsManager();
        return;
      }
      if (typeof window.AndroidApp.openApp === 'function') {
        console.log('[SystemLauncher] Disparando openApp(com.mateuscelestino.vpsmanager) nativo');
        window.AndroidApp.openApp('com.mateuscelestino.vpsmanager');
        return;
      }
    }
  }

  let finalUrl = SYSTEM_URLS[target] || target;

  // Fallbacks de segurança estritos na rede Tailscale
  if (finalUrl === 'deskcomm') finalUrl = `https://${TAILSCALE_HOST}:3000`;
  if (finalUrl === 'clienthunter') finalUrl = `https://${TAILSCALE_HOST}:3333`;
  if (finalUrl === 'omniroute') finalUrl = `https://${TAILSCALE_HOST}:20128`;
  if (finalUrl === 'omniroute_api') finalUrl = `https://${TAILSCALE_HOST}:20128/v1`;
  if (finalUrl === 'n8n') finalUrl = `https://${TAILSCALE_HOST}:5678`;
  if (finalUrl === 'waha') finalUrl = `https://${TAILSCALE_HOST}:3030`;
  if (finalUrl === 'n8n_funnel') finalUrl = `https://${TAILSCALE_HOST}:8443`;
  if (finalUrl === 'vpsmanager' || finalUrl === 'vps_manager') finalUrl = `https://${TAILSCALE_HOST}:5050/vps-manager/`;
  if (finalUrl === 'vps_sentinel') finalUrl = `https://${TAILSCALE_HOST}:5059`;
  if (finalUrl === 'vps_osint') finalUrl = `https://${TAILSCALE_HOST}:5060`;

  // Mapeamentos de links de proxy ou URLs antigas
  if (typeof finalUrl === 'string') {
    if (finalUrl.includes('proxy/deskcomm') || finalUrl.includes(':3000')) {
      finalUrl = `https://${TAILSCALE_HOST}:3000`;
    } else if (finalUrl.includes('proxy/clienthunter') || finalUrl.includes(':3333')) {
      finalUrl = `https://${TAILSCALE_HOST}:3333`;
    } else if (finalUrl.includes('proxy/omniroute') || finalUrl.includes(':20128')) {
      finalUrl = finalUrl.includes('/v1') ? `https://${TAILSCALE_HOST}:20128/v1` : `https://${TAILSCALE_HOST}:20128`;
    } else if (finalUrl.includes('proxy/n8n') || finalUrl.includes(':5678')) {
      finalUrl = `https://${TAILSCALE_HOST}:5678`;
    } else if (finalUrl.includes('proxy/waha') || finalUrl.includes(':3030')) {
      finalUrl = `https://${TAILSCALE_HOST}:3030`;
    } else if (finalUrl.includes(':8443')) {
      finalUrl = `https://${TAILSCALE_HOST}:8443`;
    } else if (finalUrl.startsWith('http://' + TAILSCALE_HOST)) {
      finalUrl = finalUrl.replace('http://', 'https://');
    }
  }

  console.log('[SystemLauncher] Abrindo no Navegador Principal do Android:', finalUrl);

  // 1. Prioridade máxima: JavascriptInterface nativa AndroidApp (Intent ACTION_VIEW na UI Thread)
  if (window.AndroidApp && typeof window.AndroidApp.openInBrowser === 'function') {
    try {
      window.AndroidApp.openInBrowser(finalUrl);
      return;
    } catch (e) {
      console.warn('Erro na interface AndroidApp.openInBrowser:', e);
    }
  }

  // 2. Fallback padrão: janela/aba do navegador
  try {
    const w = window.open(finalUrl, '_blank');
    if (!w) {
      window.location.href = finalUrl;
    }
  } catch (err) {
    window.location.href = finalUrl;
  }
}

window.openSystemInBrowser = openSystemInBrowser;

function setupHeroLaunchers() {
  // Ícones Hero e Títulos clicáveis
  document.querySelectorAll('.clickable-hero-icon, .clickable-hero-title').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const heroId = el.getAttribute('data-hero');
      if (heroId) {
        openSystemInBrowser(heroId);
      }
    });
  });

  // Botões de Ação diretos nos Hero Cards
  document.querySelectorAll('.hero-btn-primary, .hero-btn-secondary, a.win-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const href = btn.getAttribute('href') || '';
      const heroArticle = btn.closest('.hero-card');
      const heroId = heroArticle ? heroArticle.getAttribute('data-hero') : null;

      let target = href;
      if (btn.id === 'link-waha') target = 'waha';
      else if (btn.id === 'link-n8n-funnel') target = 'n8n_funnel';
      else if (btn.id === 'link-omniroute-api') target = 'omniroute_api';
      else if (heroId) target = heroId;

      openSystemInBrowser(target);
    });
  });
}

/* =========================================================
   4. TELEMETRIA DOS SERVIÇOS & STATUS
   ========================================================= */
async function fetchServiceStatus() {
  try {
    let data;
    try {
      const res = await fetch(API_BASE + '/api/status');
      if (res.ok) data = await res.json();
    } catch (e) {}

    if (!data || !data.services) {
      data = {
        services: {
          deskcomm: { online: true, latency_ms: 14, url: "https://seu-servico-web.internal:3000" },
          clienthunter: { online: true, latency_ms: 9, url: "https://seu-conteiner-docker.internal:8080" },
          omniroute: { online: true, latency_ms: 2, url: "https://seu-banco-dados.internal:5432" },
          n8n: { online: true, latency_ms: 18, url: "https://sua-automacao.internal:5678" },
          vpsmanager: { online: true, latency_ms: 4, url: "https://seu-sentinel.internal:5050" }
        }
      };
    }
    const s = data.services || {};

    // Deskcomm
    if (s.deskcomm) {
      const badge = document.getElementById('deskcomm-status-badge');
      const btn = document.getElementById('link-deskcomm');
      const urlDisp = document.getElementById('deskcomm-url-display');
      const winOpen = document.getElementById('btn-open-deskcomm-win');
      const iframe = document.getElementById('iframe-deskcomm');
      
      let url = s.deskcomm.url || `https://${TAILSCALE_HOST}:3000`;
      if (url.includes('trycloudflare') || url.includes('localhost') || url.includes('127.0.0.1') || url.includes('198.51.100.42')) {
        url = `https://${TAILSCALE_HOST}:3000`;
      }
      if (url.startsWith('http://' + TAILSCALE_HOST)) {
        url = url.replace('http://', 'https://');
      }

      SYSTEM_URLS.deskcomm = url;
      if (badge) badge.textContent = s.deskcomm.online ? `ONLINE · ${s.deskcomm.latency_ms}ms` : 'OFFLINE';
      if (btn) btn.href = url;
      if (winOpen) winOpen.href = url;
      if (urlDisp) urlDisp.textContent = url;
      if (iframe && !iframe.getAttribute('data-loaded')) {
        iframe.src = API_BASE + '/proxy/deskcomm';
        iframe.setAttribute('data-loaded', 'true');
      }
    }

    // WAHA Motor
    if (s.waha) {
      const btnWaha = document.getElementById('link-waha');
      let url = s.waha.url || `https://${TAILSCALE_HOST}:3030`;
      if (url.includes('trycloudflare') || url.includes('localhost') || url.includes('127.0.0.1') || url.includes('198.51.100.42')) {
        url = `https://${TAILSCALE_HOST}:3030`;
      }
      if (url.startsWith('http://' + TAILSCALE_HOST)) {
        url = url.replace('http://', 'https://');
      }
      SYSTEM_URLS.waha = url;
      if (btnWaha) btnWaha.href = url;
    }

    // Client Hunter Suite
    if (s.clienthunter) {
      const badge = document.getElementById('clienthunter-status-badge');
      const btn = document.getElementById('link-clienthunter');
      const urlDisp = document.getElementById('clienthunter-url-display');
      const winOpen = document.getElementById('btn-open-clienthunter-win');
      const iframe = document.getElementById('iframe-clienthunter');
      let url = s.clienthunter.url || `https://${TAILSCALE_HOST}:3333`;
      if (url.includes('trycloudflare') || url.includes('localhost') || url.includes('127.0.0.1') || url.includes('198.51.100.42')) {
        url = `https://${TAILSCALE_HOST}:3333`;
      }
      if (url.startsWith('http://' + TAILSCALE_HOST)) {
        url = url.replace('http://', 'https://');
      }

      SYSTEM_URLS.clienthunter = url;
      if (badge) badge.textContent = s.clienthunter.online ? `ONLINE · ${s.clienthunter.latency_ms}ms` : 'OFFLINE';
      if (btn) btn.href = url;
      if (winOpen) winOpen.href = url;
      if (urlDisp) urlDisp.textContent = url;
      if (iframe && !iframe.getAttribute('data-loaded')) {
        iframe.src = API_BASE + '/proxy/clienthunter';
        iframe.setAttribute('data-loaded', 'true');
      }
    }

    // OmniRoute AI Gateway Supreme
    if (s.omniroute) {
      const badge = document.getElementById('omniroute-status-badge');
      const btn = document.getElementById('link-omniroute');
      const btnApi = document.getElementById('link-omniroute-api');
      const urlDisp = document.getElementById('omniroute-url-display');
      const winOpen = document.getElementById('btn-open-omniroute-win');
      const iframe = document.getElementById('iframe-omniroute');
      let url = s.omniroute.url || `https://${TAILSCALE_HOST}:20128`;
      if (url.includes('trycloudflare') || url.includes('localhost') || url.includes('127.0.0.1') || url.includes('198.51.100.42')) {
        url = `https://${TAILSCALE_HOST}:20128`;
      }
      if (url.startsWith('http://' + TAILSCALE_HOST)) {
        url = url.replace('http://', 'https://');
      }

      SYSTEM_URLS.omniroute = url;
      SYSTEM_URLS.omniroute_api = `${url}/v1`;
      if (badge) badge.textContent = s.omniroute.online ? `ONLINE · ${s.omniroute.latency_ms}ms` : 'OFFLINE';
      if (btn) btn.href = url;
      if (btnApi) btnApi.href = `${url}/v1`;
      if (winOpen) winOpen.href = url;
      if (urlDisp) urlDisp.textContent = url;
      if (iframe && !iframe.getAttribute('data-loaded')) {
        iframe.src = API_BASE + '/proxy/omniroute';
        iframe.setAttribute('data-loaded', 'true');
      }
    }

    // n8n Workflow Automation
    if (s.n8n || s.openclaw) {
      const d = s.n8n || s.openclaw;
      const badge = document.getElementById('n8n-status-badge') || document.getElementById('openclaw-status-badge');
      const btn = document.getElementById('link-n8n') || document.getElementById('link-openclaw');
      const urlDisp = document.getElementById('n8n-url-display') || document.getElementById('openclaw-url-display');
      const winOpen = document.getElementById('btn-open-n8n-win') || document.getElementById('btn-open-openclaw-win');
      const iframe = document.getElementById('iframe-n8n') || document.getElementById('iframe-openclaw');
      let url = d.url || `https://${TAILSCALE_HOST}:5678`;
      if (url.includes('trycloudflare') || url.includes('localhost') || url.includes('127.0.0.1') || url.includes('198.51.100.42')) {
        url = `https://${TAILSCALE_HOST}:5678`;
      }
      if (url.startsWith('http://' + TAILSCALE_HOST)) {
        url = url.replace('http://', 'https://');
      }

      SYSTEM_URLS.n8n = url;
      if (badge) badge.textContent = d.online ? `ONLINE · ${d.latency_ms}ms` : 'OFFLINE';
      if (btn) btn.href = url;
      if (winOpen) winOpen.href = url;
      if (urlDisp) urlDisp.textContent = url;
      if (iframe && !iframe.getAttribute('data-loaded')) {
        iframe.src = API_BASE + '/proxy/n8n';
        iframe.setAttribute('data-loaded', 'true');
      }
    }

    // VPS Manager & Sentinel Guardian Suite
    const vpsData = s.vpsmanager || s.sentinel;
    if (vpsData || s.sentinel || s.osint) {
      const badge = document.getElementById('vpsmanager-status-badge');
      const btn = document.getElementById('link-vpsmanager');
      const btnSent = document.getElementById('link-vps-sentinel');
      const urlDisp = document.getElementById('vpsmanager-url-display');
      const winOpen = document.getElementById('btn-open-vpsmanager-win');
      const iframe = document.getElementById('iframe-vpsmanager');

      let url = (vpsData && vpsData.url) || `https://${TAILSCALE_HOST}:5050/vps-manager/`;
      let sentinelUrl = (s.sentinel && s.sentinel.url) || `https://${TAILSCALE_HOST}:5059`;

      SYSTEM_URLS.vpsmanager = url;
      SYSTEM_URLS.vps_sentinel = sentinelUrl;

      const isOnline = (vpsData && vpsData.online) || (s.sentinel && s.sentinel.online) || (s.osint && s.osint.online);
      const lat = (vpsData && vpsData.latency_ms) || (s.sentinel && s.sentinel.latency_ms) || 12;

      if (badge) badge.textContent = isOnline ? `ONLINE · ${lat}ms` : 'OFFLINE';
      if (btn) btn.href = url;
      if (btnSent) btnSent.href = sentinelUrl;
      if (winOpen) winOpen.href = url;
      if (urlDisp) urlDisp.textContent = url;
      if (iframe && !iframe.getAttribute('data-loaded')) {
        iframe.src = '/vps-manager/';
        iframe.setAttribute('data-loaded', 'true');
      }
    }
  } catch (err) {
    console.warn('Aviso: /api/status em atraso:', err);
  }
}

/* =========================================================
   5. TELEMETRIA DOCKER NO HUD (INTEGRADO AO GLANCES BACKEND)
   ========================================================= */
function renderDockerHudList(containers) {
  const listEl = document.getElementById('docker-containers-list');
  const countEl = document.getElementById('docker-count');
  if (!listEl) return;

  if (!Array.isArray(containers) || containers.length === 0) {
    listEl.innerHTML = '<div class="container-hud-item"><span class="c-name mono">Nenhum contêiner detectado</span></div>';
    return;
  }

  const runningCount = containers.filter(c => c.state === 'running' || String(c.status || '').toLowerCase().includes('up')).length;
  if (countEl) countEl.textContent = `${runningCount}/${containers.length} ATIVOS`;
  const mChipDocker = document.getElementById('m-chip-docker');
  if (mChipDocker) mChipDocker.textContent = `CLUSTER: ${runningCount}/${containers.length} ATIVOS`;

  listEl.innerHTML = containers.map(c => {
    const isUp = c.state === 'running' || String(c.status || '').toLowerCase().includes('up');
    const dotColor = isUp ? 'var(--status-emerald)' : 'var(--status-amber)';
    const stateLabel = isUp ? 'RUNNING' : (c.state ? c.state.toUpperCase() : 'STOPPED');

    const cpuVal = c.cpu || (c.cpu_percent !== undefined ? `${c.cpu_percent}%` : '0%');
    let memVal = '--';
    if (c.mem && c.mem !== '--') {
      memVal = c.mem.split('/')[0].trim();
    } else if (c.mem_str && c.mem_str !== '--') {
      memVal = c.mem_str.split('/')[0].trim();
    } else if (c.mem_usage_mb) {
      memVal = `${c.mem_usage_mb} MB`;
    }

    return `
      <div class="container-hud-item">
        <div class="c-top">
          <div class="c-name-wrap">
            <span class="c-status-dot" style="background: ${dotColor};"></span>
            <span class="c-name mono">${c.name}</span>
          </div>
          <span class="c-state mono">${stateLabel}</span>
        </div>
        <div class="c-metrics mono">
          <div class="c-cpu">
            <span>CPU:</span>
            <span class="c-val">${cpuVal}</span>
          </div>
          <div class="c-mem">
            <span>RAM:</span>
            <span class="c-val">${memVal}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

async function fetchDockerTelemetry() {
  try {
    let containers;
    try {
      const res = await fetch(API_BASE + '/api/docker');
      if (res.ok) {
        containers = await res.json();
      }
    } catch (e) {}

    if (!containers || !Array.isArray(containers)) {
      containers = DemoSimulationEngine.getContainers();
    }
    renderDockerHudList(containers);
  } catch (err) {
    renderDockerHudList(DemoSimulationEngine.getContainers());
  }
}

/* =========================================================
   6. PAINEL DE MONITORAMENTO FULL GLASS (APPLE LIQUID GLASS)
   ========================================================= */

/* Subnavegação Modular */
function setupSubNavigation() {
  const subnavBtns = document.querySelectorAll('.mon-subnav-btn');
  subnavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subnav = btn.getAttribute('data-subnav');
      switchSubNav(subnav);
    });
  });

  // Links de navegação interna ("VER CLUSTER COMPLETO →", etc.)
  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('[data-nav-to]');
    if (navBtn) {
      const target = navBtn.getAttribute('data-nav-to');
      switchSubNav(target);
    }
  });

  // Restaura subnavegação salva
  switchSubNav(state.currentSubNav || 'cockpit');
}

function switchSubNav(subnavId, updateHash = true) {
  state.currentSubNav = subnavId;
  localStorage.setItem('mcpos_subnav', subnavId);

  if (updateHash && state.currentView === 'monitoring') {
    location.hash = `#monitoring/${subnavId}`;
  }

  const wrapper = document.querySelector('.monitoring-dashboard-wrapper');
  const subnavBtns = document.querySelectorAll('.mon-subnav-btn');
  const subviews = document.querySelectorAll('.mon-subview');

  subnavBtns.forEach(b => {
    if (b.getAttribute('data-subnav') === subnavId) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  if (subnavId === 'all') {
    if (wrapper) wrapper.classList.add('mode-all');
    subviews.forEach(v => v.classList.add('active'));
  } else {
    if (wrapper) wrapper.classList.remove('mode-all');
    subviews.forEach(v => {
      if (v.id === `subview-${subnavId}`) {
        v.classList.add('active');
      } else {
        v.classList.remove('active');
      }
    });
  }
}

/* Motor de Sparklines SVG em Tempo Real */
function updateSparkline(svgId, dataPoints, strokeColor) {
  const svg = document.getElementById(svgId);
  if (!svg || !dataPoints || dataPoints.length < 2) return;

  const w = 160;
  const h = 36;
  const pad = 3;

  let min = Math.min(...dataPoints);
  let max = Math.max(...dataPoints);
  if (max === min) {
    max += 1;
    min = Math.max(0, min - 1);
  }

  const n = dataPoints.length;
  const pts = dataPoints.map((val, i) => {
    const x = (i / (n - 1)) * w;
    const norm = (val - min) / (max - min);
    const y = (h - pad) - norm * (h - pad * 2);
    return { x, y };
  });

  // Cria caminho contínuo suavizado
  let linePath = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    linePath += ` L ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)}`;
  }

  const areaPath = `${linePath} L ${w} ${h} L 0 ${h} Z`;

  const lineEl = svg.querySelector('.spark-line');
  const areaEl = svg.querySelector('.spark-area');

  if (lineEl) {
    lineEl.setAttribute('d', linePath);
    if (strokeColor) lineEl.style.stroke = strokeColor;
  }
  if (areaEl) {
    areaEl.setAttribute('d', areaPath);
  }
}

function pushSparklinePoint(type, val) {
  if (!state.sparklines) {
    state.sparklines = { cpu: [], mem: [], disk: [], net: [] };
  }
  if (!state.sparklines[type]) {
    state.sparklines[type] = [];
  }
  const arr = state.sparklines[type];
  arr.push(Number(val) || 0);
  if (arr.length > 25) {
    arr.shift();
  }
}

function renderAllSparklines() {
  updateSparkline('mon-sparkline-cpu', state.sparklines.cpu, '#38bdf8');
  updateSparkline('mon-sparkline-mem', state.sparklines.mem, '#a855f7');
  updateSparkline('mon-sparkline-disk', state.sparklines.disk, '#f59e0b');
  updateSparkline('mon-sparkline-net', state.sparklines.net, '#10b981');
}

/* Modal de Logs Docker ao Vivo */
function setupLogsModalControls() {
  const modal = document.getElementById('docker-logs-modal');
  const btnClose = document.getElementById('modal-btn-close');
  const btnRefresh = document.getElementById('modal-btn-refresh');
  const btnCopy = document.getElementById('modal-btn-copy');

  if (btnClose) btnClose.addEventListener('click', closeDockerLogsModal);
  if (btnRefresh) btnRefresh.addEventListener('click', fetchContainerLogs);
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const consoleEl = document.getElementById('modal-logs-console');
      if (consoleEl) {
        navigator.clipboard.writeText(consoleEl.textContent).then(() => {
          const orig = btnCopy.innerHTML;
          btnCopy.innerHTML = '<span>COPIADO!</span>';
          setTimeout(() => { btnCopy.innerHTML = orig; }, 1800);
        });
      }
    });
  }

  // Fecha modal ao clicar fora
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDockerLogsModal();
    });
  }

  // Tecla ESC fecha o modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display !== 'none') {
      closeDockerLogsModal();
    }
  });
}

function openDockerLogsModal(containerName) {
  state.activeLogsContainer = containerName;
  const modal = document.getElementById('docker-logs-modal');
  const titleEl = document.getElementById('modal-container-name');
  const consoleEl = document.getElementById('modal-logs-console');

  if (titleEl) titleEl.textContent = containerName;
  if (consoleEl) consoleEl.textContent = `Conectando ao contêiner ${containerName} e buscando logs...`;
  if (modal) modal.style.display = 'flex';

  fetchContainerLogs();

  if (state.logsAutoTimer) clearInterval(state.logsAutoTimer);
  state.logsAutoTimer = setInterval(fetchContainerLogs, 3000);
}

function closeDockerLogsModal() {
  const modal = document.getElementById('docker-logs-modal');
  if (modal) modal.style.display = 'none';
  state.activeLogsContainer = null;
  if (state.logsAutoTimer) {
    clearInterval(state.logsAutoTimer);
    state.logsAutoTimer = null;
  }
}

async function fetchContainerLogs() {
  if (!state.activeLogsContainer) return;
  const consoleEl = document.getElementById('modal-logs-console');
  const tsEl = document.getElementById('modal-logs-timestamp');

  try {
    const res = await fetch(`${API_BASE}/api/docker/logs?name=${encodeURIComponent(state.activeLogsContainer)}&tail=80`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (consoleEl) {
      consoleEl.textContent = data.logs || 'Nenhum log disponível.';
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }
    if (tsEl) {
      const d = new Date();
      tsEl.textContent = `Atualizado às ${d.toLocaleTimeString()} (${data.tail || 80} linhas)`;
    }
  } catch (err) {
    if (consoleEl) consoleEl.textContent = `Falha ao sincronizar logs: ${err.message}`;
  }
}

/* Coleta e Renderização Central de Telemetria */
async function fetchGlancesTelemetry() {
  try {
    let data;
    try {
      const res = await fetch(API_BASE + '/api/glances');
      if (res.ok) {
        data = await res.json();
      }
    } catch (e) {
      // Fallback para simulação autônoma em ambiente web/Vercel
    }

    if (!data) {
      data = DemoSimulationEngine.getGlancesTelemetry();
    }
    state.glancesData = data;

    // Atualiza HUD Esquerdo (Recursos do Servidor via Glances)
    const uptimeEl = document.getElementById('hud-vps-uptime');
    if (uptimeEl && data.system && data.system.uptime) {
      const rawUp = String(data.system.uptime);
      uptimeEl.textContent = rawUp.replace(' days, ', 'd ').replace(' day, ', 'd ').replace(' hours', 'h').replace(' hour', 'h');
    }

    const memBar = document.getElementById('hud-ram-bar') || document.getElementById('hud-mem-bar');
    const memText = document.getElementById('hud-ram-text') || document.getElementById('hud-mem-text');
    if (memBar && data.mem) {
      memBar.style.width = `${data.mem.percent}%`;
    }
    if (memText && data.mem) {
      memText.textContent = `${data.mem.used_gb} / ${data.mem.total_gb} GB (${data.mem.percent}%)`;
    }

    const topRam = document.getElementById('top-ram-quick');
    if (topRam && data.mem) {
      topRam.textContent = `${data.mem.used_gb} / ${data.mem.total_gb} GB (${data.mem.percent}%)`;
    }
    const mChipRam = document.getElementById('m-chip-ram');
    if (mChipRam && data.mem) {
      mChipRam.textContent = `RAM: ${data.mem.used_gb} GB (${data.mem.percent}%)`;
    }

    // Alimenta lista de contêineres do HUD via Glances caso disponível
    if (data.containers && Array.isArray(data.containers) && typeof renderDockerHudList === 'function') {
      renderDockerHudList(data.containers);
    }

    const diskBar = document.getElementById('hud-disk-bar');
    const diskText = document.getElementById('hud-disk-text');
    if (diskBar && data.disk) {
      diskBar.style.width = `${data.disk.percent}%`;
      if (diskText) diskText.textContent = `${data.disk.used_gb} / ${data.disk.total_gb} GB (${data.disk.percent}%)`;
    }

    const cpuBar = document.getElementById('hud-cpu-bar');
    const cpuText = document.getElementById('hud-cpu-text');
    if (cpuBar && data.cpu) {
      cpuBar.style.width = `${data.cpu.total}%`;
      if (cpuText) cpuText.textContent = `${data.cpu.total}% (${data.cpu.load1 || '0.0'} load)`;
    }

    // Alimenta histórico de Sparklines
    if (data.cpu) pushSparklinePoint('cpu', data.cpu.total);
    if (data.mem) pushSparklinePoint('mem', data.mem.percent);
    if (data.disk) pushSparklinePoint('disk', (data.disk.read_kbs || 0) + (data.disk.write_kbs || 0));
    if (data.network) pushSparklinePoint('net', (data.network.rx_kbs || 0) + (data.network.tx_kbs || 0));
    renderAllSparklines();

    if (state.currentView !== 'monitoring') {
      return;
    }

    // Cabeçalho Principal
    const monHost = document.getElementById('mon-host-name');
    const monOs = document.getElementById('mon-os-name');
    if (monHost && data.system) monHost.textContent = data.system.hostname;
    if (monOs && data.system) {
      monOs.textContent = `${data.system.linux_distro || 'Ubuntu Linux 24.04'} (${data.system.platform}) · Up ${data.system.uptime}`;
    }

    // COCKPIT: KPI 1 CPU
    if (data.cpu) {
      const cpuTotalEl = document.getElementById('mon-cpu-total');
      const cpuUserEl = document.getElementById('mon-cpu-user');
      const cpuSysEl = document.getElementById('mon-cpu-sys');
      const cpuIoEl = document.getElementById('mon-cpu-iowait');
      const cpuLoadEl = document.getElementById('mon-cpu-load');

      if (cpuTotalEl) cpuTotalEl.textContent = `${data.cpu.total}%`;
      if (cpuUserEl) cpuUserEl.textContent = `${data.cpu.user}%`;
      if (cpuSysEl) cpuSysEl.textContent = `${data.cpu.system}%`;
      if (cpuIoEl) cpuIoEl.textContent = `${data.cpu.iowait}%`;
      if (cpuLoadEl) cpuLoadEl.textContent = `${data.cpu.load1} · ${data.cpu.load5} · ${data.cpu.load15}`;

      const cores = data.cpu.cores || [];
      if (cores.length >= 1) {
        const c0Val = document.getElementById('mon-core-0-val');
        const c0Bar = document.getElementById('mon-core-0-bar');
        if (c0Val) c0Val.textContent = `${cores[0].total}%`;
        if (c0Bar) c0Bar.style.width = `${cores[0].total}%`;
      }
      if (cores.length >= 2) {
        const c1Val = document.getElementById('mon-core-1-val');
        const c1Bar = document.getElementById('mon-core-1-bar');
        if (c1Val) c1Val.textContent = `${cores[1].total}%`;
        if (c1Bar) c1Bar.style.width = `${cores[1].total}%`;
      }
    }

    // COCKPIT: KPI 2 MEMÓRIA
    if (data.mem) {
      const memPctEl = document.getElementById('mon-mem-percent');
      const memUsedEl = document.getElementById('mon-mem-used');
      const memCachedEl = document.getElementById('mon-mem-cached');
      const memFreeEl = document.getElementById('mon-mem-free');
      const memBarUsed = document.getElementById('mon-mem-bar-used');
      const memBarCached = document.getElementById('mon-mem-bar-cached');

      if (memPctEl) memPctEl.textContent = `${data.mem.percent}%`;
      if (memUsedEl) memUsedEl.textContent = `${data.mem.used_gb} GB`;
      if (memCachedEl) memCachedEl.textContent = `${data.mem.cached_gb || '0.0'} GB`;
      if (memFreeEl) memFreeEl.textContent = `${data.mem.free_gb} GB`;

      if (memBarUsed) {
        const usedPct = Math.round((data.mem.used_gb / data.mem.total_gb) * 100);
        memBarUsed.style.width = `${usedPct}%`;
      }
      if (memBarCached) {
        const cachedPct = Math.round(((data.mem.cached_gb || 0) / data.mem.total_gb) * 100);
        memBarCached.style.width = `${cachedPct}%`;
      }
    }

    // COCKPIT: KPI 3 DISCO NVME
    if (data.disk) {
      const diskPctEl = document.getElementById('mon-disk-percent');
      const diskUsedTot = document.getElementById('mon-disk-used-total');
      const diskBar = document.getElementById('mon-disk-bar');
      const diskRead = document.getElementById('mon-disk-read');
      const diskWrite = document.getElementById('mon-disk-write');
      const diskFree = document.getElementById('mon-disk-free');

      if (diskPctEl) diskPctEl.textContent = `${data.disk.percent}%`;
      if (diskUsedTot) diskUsedTot.textContent = `${data.disk.used_gb} / ${data.disk.total_gb} GB`;
      if (diskBar) diskBar.style.width = `${data.disk.percent}%`;
      if (diskRead) diskRead.textContent = `${data.disk.read_kbs || '0.0'} KB/s`;
      if (diskWrite) diskWrite.textContent = `${data.disk.write_kbs || '0.0'} KB/s`;
      if (diskFree) diskFree.textContent = `${data.disk.free_gb} GB`;
    }

    // COCKPIT: KPI 4 REDE
    if (data.network) {
      const netRates = document.getElementById('mon-net-rates');
      const netRx = document.getElementById('mon-net-rx');
      const netTx = document.getElementById('mon-net-tx');
      const netTotRx = document.getElementById('mon-net-tot-rx');
      const netTotTx = document.getElementById('mon-net-tot-tx');

      const sumRates = Math.round(((data.network.rx_kbs || 0) + (data.network.tx_kbs || 0)) * 10) / 10;
      if (netRates) netRates.textContent = `${sumRates} KB/s`;
      if (netRx) netRx.textContent = `${data.network.rx_kbs || '0.0'} KB/s`;
      if (netTx) netTx.textContent = `${data.network.tx_kbs || '0.0'} KB/s`;
      if (netTotRx) netTotRx.textContent = `${data.network.cumulative_rx_mb || '0'} MB`;
      if (netTotTx) netTotTx.textContent = `${data.network.cumulative_tx_mb || '0'} MB`;
    }

    // COCKPIT: INFRA SHIELD & SERVIÇOS
    const uptimeChip = document.getElementById('mon-vps-uptime-chip');
    const cpuModelName = document.getElementById('mon-cpu-model-name');
    if (uptimeChip && data.system) uptimeChip.textContent = `UPTIME: ${data.system.uptime || 'Ativo'}`;
    if (cpuModelName && data.system) cpuModelName.textContent = data.system.cpu_model || 'ARM Neoverse-N1 (Ampere Altra)';

    renderServicesGrid(data.services || []);
    renderMiniHighlights(data);

    // SUBVIEW 2: CPU DETALHADO
    renderCpuDetailed(data.cpu);

    // SUBVIEW 3: MEMÓRIA & DISCOS DETALHADO
    renderMemoryDetailed(data.mem, data.disk);

    // SUBVIEW 4: DOCKER & SYSTEMD
    renderDockerTable();
    renderSystemdTable(data.services || []);

    // SUBVIEW 5: REDE & PORTAS
    renderPortsTable(data.ports || []);

    // SUBVIEW 6: PROCESSOS
    renderProcessTable();

  } catch (err) {
    console.error('[FATAL-GLANCES]', err ? err.toString() : 'null', err ? err.stack : 'no stack');
  }
}

/* Renderizador dos Serviços Systemd no Cockpit */
function renderServicesGrid(services) {
  const container = document.getElementById('mon-services-grid');
  const countBadge = document.getElementById('mon-services-count');
  if (!container) return;

  const activeCount = services.filter(s => s.active).length;
  if (countBadge) countBadge.textContent = `${activeCount} / ${services.length} ATIVOS`;

  container.innerHTML = services.map(s => {
    const isAct = s.active;
    const dotColor = isAct ? 'var(--status-emerald)' : 'var(--status-amber)';
    const statusTxt = isAct ? 'ACTIVE' : s.status.toUpperCase();
    const portStr = s.port ? `:${s.port}` : 'daemon';

    return `
      <div class="service-chip mono">
        <div class="svc-top">
          <span class="svc-name">${s.name}</span>
          <span class="tele-dot" style="background:${dotColor};"></span>
        </div>
        <div class="svc-meta">
          <span>${portStr}</span>
          <span style="color:${dotColor}; font-weight:600;">${statusTxt}</span>
        </div>
      </div>
    `;
  }).join('');
}

/* Renderizador de Mini Highlights no Cockpit */
function renderMiniHighlights(data) {
  const dockerList = document.getElementById('mon-mini-docker-list');
  const procList = document.getElementById('mon-mini-proc-list');

  // Mini Docker
  if (dockerList) {
    const containers = data.containers || [];
    if (containers.length === 0) {
      dockerList.innerHTML = `<span class="mono" style="font-size:0.7rem; color:var(--text-tertiary);">Nenhum contêiner</span>`;
    } else {
      dockerList.innerHTML = containers.slice(0, 4).map(c => {
        const isUp = (c.status || '').toLowerCase().includes('up') || c.state === 'running';
        const dotColor = isUp ? 'var(--status-emerald)' : 'var(--status-amber)';
        return `
          <div class="mini-item-row mono">
            <div class="mini-item-left">
              <span class="tele-dot" style="background:${dotColor};"></span>
              <span class="mini-item-name">${c.name}</span>
            </div>
            <div class="mini-item-right">
              <span style="color:var(--text-tertiary);">${c.cpu || (c.cpu_percent + '%')}</span>
              <button class="action-btn-logs" onclick="openDockerLogsModal('${c.name}')">LOGS</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Mini Processos
  if (procList) {
    const procs = data.processes || [];
    if (procs.length === 0) {
      procList.innerHTML = `<span class="mono" style="font-size:0.7rem; color:var(--text-tertiary);">Coletando processos...</span>`;
    } else {
      procList.innerHTML = procs.slice(0, 4).map(p => {
        return `
          <div class="mini-item-row mono">
            <div class="mini-item-left">
              <span style="color:var(--text-tertiary);">${p.pid}</span>
              <span class="mini-item-name">${p.name}</span>
            </div>
            <div class="mini-item-right">
              <span style="font-weight:600; color:#ffffff;">${p.cpu_percent}% CPU</span>
              <span style="color:var(--text-secondary);">${p.memory_percent}% RAM</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

/* Renderizador de CPU Detalhado */
function renderCpuDetailed(cpu) {
  if (!cpu) return;

  const coresCont = document.getElementById('mon-cpu-cores-container');
  if (coresCont && cpu.cores) {
    coresCont.innerHTML = cpu.cores.map((c, i) => {
      return `
        <div class="core-detail-box mono">
          <div class="core-det-top">
            <span class="core-det-name">NÚCLEO ARM CORE ${c.core !== undefined ? c.core : i}</span>
            <span class="core-det-val">${c.total}%</span>
          </div>
          <div class="meter-track">
            <div class="meter-fill" style="width: ${c.total}%;"></div>
          </div>
          <div class="cycle-row" style="font-size:0.65rem; border:none; padding:0;">
            <span class="c-label">User: ${c.user}%</span>
            <span class="c-label">System: ${c.system}%</span>
            <span class="c-label">IOWait: ${c.iowait}%</span>
          </div>
        </div>
      `;
    }).join('');
  }

  const uEl = document.getElementById('det-cpu-user');
  const sEl = document.getElementById('det-cpu-sys');
  const ioEl = document.getElementById('det-cpu-io');
  const irqEl = document.getElementById('det-cpu-irq');
  const stealEl = document.getElementById('det-cpu-steal');
  const idleEl = document.getElementById('det-cpu-idle');

  if (uEl) uEl.textContent = `${cpu.user || 0}%`;
  if (sEl) sEl.textContent = `${cpu.system || 0}%`;
  if (ioEl) ioEl.textContent = `${cpu.iowait || 0}%`;
  if (irqEl) irqEl.textContent = `${cpu.irq || 0}%`;
  if (stealEl) stealEl.textContent = `${cpu.steal || 0}%`;
  if (idleEl) idleEl.textContent = `${cpu.idle || 0}%`;

  const ctxtEl = document.getElementById('det-kernel-ctxt');
  const intrEl = document.getElementById('det-kernel-intr');
  const procsEl = document.getElementById('det-kernel-procs');

  if (ctxtEl) ctxtEl.textContent = (cpu.context_switches || 0).toLocaleString();
  if (intrEl) intrEl.textContent = 'Hardware Interrupts OK';
  if (procsEl) procsEl.textContent = `${cpu.procs_running || 1} ativos / ${cpu.procs_blocked || 0} bloqueados`;
}

/* Renderizador de Memória e Discos Detalhado */
function renderMemoryDetailed(mem, disk) {
  if (mem) {
    const usedVal = document.getElementById('det-mem-used-val');
    const buffVal = document.getElementById('det-mem-buffers-val');
    const cachVal = document.getElementById('det-mem-cached-val');
    const freeVal = document.getElementById('det-mem-free-val');
    const swapVal = document.getElementById('det-mem-swap-val');
    const barUsed = document.getElementById('det-mem-bar-used');
    const barCach = document.getElementById('det-mem-bar-cached');

    if (usedVal) usedVal.textContent = `${mem.used_gb} GB (${mem.percent}%)`;
    if (buffVal) buffVal.textContent = `${mem.buffers_gb || 0} GB`;
    if (cachVal) cachVal.textContent = `${mem.cached_gb || 0} GB`;
    if (freeVal) freeVal.textContent = `${mem.free_gb} GB`;
    if (swapVal) swapVal.textContent = `${mem.swap_used_gb || 0} / ${mem.swap_total_gb || 0} GB (${mem.swap_percent || 0}%)`;

    if (barUsed) barUsed.style.width = `${Math.round((mem.used_gb / mem.total_gb) * 100)}%`;
    if (barCach) barCach.style.width = `${Math.round(((mem.cached_gb || 0) / mem.total_gb) * 100)}%`;
  }

  if (disk) {
    const ioRead = document.getElementById('det-io-read');
    const ioWrite = document.getElementById('det-io-write');
    if (ioRead) ioRead.textContent = `${disk.read_kbs || 0} KB/s`;
    if (ioWrite) ioWrite.textContent = `${disk.write_kbs || 0} KB/s`;

    const mountsTbody = document.getElementById('mon-mounts-tbody');
    if (mountsTbody && disk.mounts) {
      mountsTbody.innerHTML = disk.mounts.map(m => {
        return `
          <tr>
            <td style="font-weight:600; color:#ffffff;">${m.mount}</td>
            <td style="color:var(--text-tertiary);">${m.device}</td>
            <td><span class="port-chip">${m.fstype}</span></td>
            <td style="color:#ffffff;">${m.used_gb} / ${m.total_gb} GB (${m.percent}%)</td>
            <td style="color:var(--status-emerald);">${m.free_gb} GB</td>
            <td style="color:var(--text-secondary);">${m.inodes_percent || 0}% (${(m.inodes_used || 0).toLocaleString()} inodes)</td>
          </tr>
        `;
      }).join('');
    }
  }
}

/* Renderizador de Portas em Escuta */
function renderPortsTable(ports) {
  const tbody = document.getElementById('mon-ports-tbody');
  if (!tbody) return;

  if (ports.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="loading-row">Nenhuma porta escutando detectada</td></tr>`;
    return;
  }

  tbody.innerHTML = ports.map(p => {
    const badgeClass = p.is_local ? 'scope-badge-safe' : 'scope-badge-auth';
    return `
      <tr>
        <td style="font-weight:700; color:#ffffff;">:${p.port}</td>
        <td><span class="port-chip">${p.proto}</span></td>
        <td style="font-weight:500; color:#ffffff;">${p.service}</td>
        <td style="color:var(--text-tertiary);">${p.stack}</td>
        <td style="color:var(--text-secondary);">${p.bind}</td>
        <td><span style="color:var(--status-emerald); font-weight:600;">${p.state}</span></td>
        <td><span class="${badgeClass}">${p.scope}</span></td>
      </tr>
    `;
  }).join('');
}

/* Renderizador de Serviços Systemd Completo */
function renderSystemdTable(services) {
  const tbody = document.getElementById('mon-systemd-tbody');
  if (!tbody) return;

  tbody.innerHTML = services.map(s => {
    const isAct = s.active;
    const dotColor = isAct ? 'var(--status-emerald)' : 'var(--status-amber)';
    const statusTxt = isAct ? 'ACTIVE (RUNNING)' : s.status.toUpperCase();
    const portStr = s.port ? `:${s.port}` : 'Daemon Interno';

    return `
      <tr>
        <td style="color:var(--text-tertiary);">${s.unit}</td>
        <td style="font-weight:600; color:#ffffff;">
          <span class="tele-dot" style="background:${dotColor}; display:inline-block; margin-right:6px;"></span>
          ${s.name}
        </td>
        <td style="color:var(--text-secondary);">${s.desc}</td>
        <td style="color:#38bdf8;">${portStr}</td>
        <td style="color:${dotColor}; font-weight:600;">${statusTxt}</td>
      </tr>
    `;
  }).join('');
}

/* Renderizador da Tabela Principal Docker */
function renderDockerTable() {
  const tbody = document.getElementById('mon-docker-tbody');
  const summaryBadge = document.getElementById('mon-docker-summary');
  if (!tbody || !state.glancesData) return;

  const containers = state.glancesData.containers || [];
  if (summaryBadge) summaryBadge.textContent = `${containers.length} CONTÊINERES ATIVOS // ORQUESTRADOR DOCKER ENGINE v27`;

  if (containers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="loading-row">Nenhum contêiner em execução</td></tr>`;
    return;
  }

  tbody.innerHTML = containers.map(c => {
    const isUp = (c.status || '').toLowerCase().includes('up') || (c.state || '').toLowerCase() === 'running';
    const isHealthy = (c.health || '').toLowerCase() === 'healthy';
    const dotColor = isUp ? 'var(--status-emerald)' : 'var(--status-amber)';
    let statusTxt = isUp ? 'UP' : (c.status || 'INATIVO').toUpperCase();
    if (isHealthy) statusTxt += ' (SAUDÁVEL)';

    // Formata portas
    let portChips = '--';
    if (c.ports) {
      portChips = c.ports.split(',').map(p => {
        const clean = p.trim().replace('0.0.0.0:', '').replace('127.0.0.1:', '');
        return `<span class="port-chip">${clean}</span>`;
      }).join(' ');
    }

    const cpuVal = c.cpu ? c.cpu : (c.cpu_percent ? c.cpu_percent + '%' : '0%');
    const memVal = c.mem_str && c.mem_str !== '--' ? c.mem_str : (c.mem_usage_mb ? c.mem_usage_mb + ' MB' : '--');

    return `
      <tr>
        <td style="font-weight: 600; color: #ffffff;">
          <span class="tele-dot" style="background:${dotColor}; display:inline-block; margin-right:8px;"></span>
          ${c.name}
        </td>
        <td style="color: #93c5fd; font-size:0.7rem;">${c.image || '--'}</td>
        <td style="color: ${dotColor}; font-weight: 500;">${statusTxt}</td>
        <td style="color: #ffffff; font-weight:600;">${cpuVal}</td>
        <td style="color: var(--text-secondary); font-size:0.7rem;">${memVal}</td>
        <td>${portChips}</td>
        <td style="color: var(--text-tertiary); font-size:0.68rem;">${c.size || '--'}</td>
        <td>
          <button class="action-btn-logs mono" onclick="openDockerLogsModal('${c.name}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:12px; height:12px;"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            <span>LOGS</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

/* Renderizador da Tabela de Processos com Ordenação */
function renderProcessTable() {
  const tbody = document.getElementById('mon-process-tbody');
  if (!tbody || !state.glancesData) return;

  let processes = [...(state.glancesData.processes || [])];

  if (state.processFilterQuery) {
    processes = processes.filter(p => 
      (p.name || '').toLowerCase().includes(state.processFilterQuery) ||
      (p.username || '').toLowerCase().includes(state.processFilterQuery) ||
      String(p.pid).includes(state.processFilterQuery)
    );
  }

  // Ordenação dinâmica
  const col = state.sortColumn || 'cpu_percent';
  const dir = state.sortDirection === 'asc' ? 1 : -1;

  processes.sort((a, b) => {
    let valA = a[col];
    let valB = b[col];
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();
    if (valA < valB) return -1 * dir;
    if (valA > valB) return 1 * dir;
    return 0;
  });

  // Atualiza setas de cabeçalhos
  document.querySelectorAll('.sortable-th').forEach(th => {
    const c = th.getAttribute('data-sort');
    const arrow = th.querySelector('.sort-arrow');
    if (c === col) {
      th.classList.add('active-sort');
      if (arrow) arrow.textContent = state.sortDirection === 'asc' ? '▲' : '▼';
    } else {
      th.classList.remove('active-sort');
      if (arrow) arrow.textContent = '↕';
    }
  });

  if (processes.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="loading-row">Nenhum processo correspondente ao filtro</td></tr>`;
    return;
  }

  tbody.innerHTML = processes.map(p => {
    return `
      <tr>
        <td style="color: var(--text-secondary);">${p.pid}</td>
        <td style="color: var(--text-tertiary);">${p.username || 'root'}</td>
        <td style="color: #ffffff; font-weight: 500;">${p.name}</td>
        <td style="font-weight: 600; color: #ffffff;">${p.cpu_percent}%</td>
        <td style="color: var(--text-secondary);">${p.memory_percent}%</td>
        <td style="color: var(--text-tertiary);">${p.num_threads || 1}</td>
        <td><span style="color: var(--text-secondary); background: rgba(255,255,255,0.06); padding: 2px 7px; border-radius: 4px;">${p.status || 'S'}</span></td>
      </tr>
    `;
  }).join('');
}

// Configura eventos de ordenação nos cabeçalhos
document.addEventListener('click', (e) => {
  const th = e.target.closest('.sortable-th');
  if (th) {
    const col = th.getAttribute('data-sort');
    if (state.sortColumn === col) {
      state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortColumn = col;
      state.sortDirection = 'desc';
    }
    renderProcessTable();
  }
});
window.openDockerLogsModal = openDockerLogsModal;
/* =========================================================
   7. CICLO DE POLLING INTELIGENTE
   ========================================================= */
function resetPollingLoop() {
  if (state.pollTimer) clearInterval(state.pollTimer);
  state.pollTimer = setInterval(() => {
    fetchGlancesTelemetry();
    fetchServiceStatus();
    fetchDockerTelemetry();
  }, state.pollRateMs);
}

/* =========================================================
   8. RELÓGIO UTC
   ========================================================= */
function initClock() {
  const clockEl = document.getElementById('footer-clock');
  function update() {
    if (!clockEl) return;
    const now = new Date();
    clockEl.textContent = now.toTimeString().split(' ')[0] + ' UTC';
  }
  update();
  setInterval(update, 1000);
}

/* =========================================================
   9. GERENCIAMENTO DE SESSÃO E COOKIES DURÁVEIS (365 DIAS)
   ========================================================= */
const SESSION_COOKIE_NAME = 'mcp_session';
const SESSION_MAX_AGE = 31536000; // 1 ano (365 dias em segundos)

function setDurableCookie(name, value, maxAge = SESSION_MAX_AGE) {
  const secure = location.protocol === 'https:' ? ';Secure' : '';
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};max-age=${maxAge};path=/;SameSite=Lax${secure}`;
  try {
    localStorage.setItem(name, value);
    localStorage.setItem(`${name}_timestamp`, Date.now().toString());
  } catch (e) {}
}

function getDurableCookie(name) {
  const prefix = `${encodeURIComponent(name)}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(prefix) === 0) return decodeURIComponent(c.substring(prefix.length));
  }
  try {
    return localStorage.getItem(name);
  } catch (e) {
    return null;
  }
}

function initSessionPersistence() {
  // Sincroniza e renova cookies para máxima durabilidade (365 dias)
  const existingSession = getDurableCookie(SESSION_COOKIE_NAME) || getDurableCookie('mcp_admin_session');
  if (existingSession) {
    setDurableCookie(SESSION_COOKIE_NAME, existingSession);
  }
}

/* =========================================================
   INICIALIZAÇÃO GERAL
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  setupDemoIntro();
  setupDemoModalHandlers();
  // 1. Inicia Controles e Persistência de Sessão
  setupBackgroundControls();
  setupNavigation();
  setupHeroLaunchers();
  setupIframeControls();
  initClock();
  initSessionPersistence();

  // 2. Roteamento Imediato por URL Hash (Prioridade máxima de navegação)
  try {
    applyHashRoute();
  } catch (err) {
    console.warn('Aviso ao aplicar hash route:', err);
  }

  // 3. Primeira Rodada de Telemetria e Polling em Tempo Real
  fetchServiceStatus();
  fetchDockerTelemetry();
  fetchGlancesTelemetry();
  resetPollingLoop();

  // 4. Aplicação Segura de Background (WebGL ou Galeria com tolerância a falhas de GPU)
  try {
    const saved = loadSavedBgPreference();
    applyBackground(saved.type, saved.id);
  } catch (err) {
    console.warn('[Background] Fallback para glass backdrop neutro:', err);
  }
});



/* ==============================================================================
   10. CINEMATIC INTRO SPLASH & STAGGERED REVEAL ORCHESTRATION
   ============================================================================== */

function setupDemoIntro() {
  const splash = document.getElementById('demo-splash-screen');
  const appShell = document.getElementById('app-shell');
  const progressBar = document.getElementById('demo-progress-bar');
  const progressStatus = document.getElementById('demo-progress-status');
  const progressPct = document.getElementById('demo-progress-pct');
  const btnEnter = document.getElementById('btn-enter-demo');
  const btnReplay = document.getElementById('btn-replay-intro');

  let finished = false;

  function revealApp() {
    if (finished) return;
    finished = true;
    if (splash) splash.classList.add('hidden');
    if (appShell) appShell.classList.add('app-revealed');
  }

  function startSequence() {
    finished = false;
    if (splash) {
      splash.classList.remove('hidden');
      splash.style.opacity = '1';
      splash.style.visibility = 'visible';
    }
    if (appShell) appShell.classList.remove('app-revealed');

    const steps = [
      { pct: 25, delay: 200, status: "INICIALIZANDO SUBSISTEMAS VIRTUAIS...", line: "boot-line-1" },
      { pct: 55, delay: 600, status: "CARREGANDO 34 SHADERS WEBGL EM GPU...", line: "boot-line-2" },
      { pct: 85, delay: 1000, status: "SINCRONIZANDO TELEMETRIA DO CLUSTER...", line: "boot-line-3" },
      { pct: 100, delay: 1400, status: "INTERFACE PRONTA · AMBIENTE BLINDADO", line: "boot-line-4" }
    ];

    steps.forEach((s) => {
      setTimeout(() => {
        if (finished) return;
        if (progressBar) progressBar.style.width = `${s.pct}%`;
        if (progressPct) progressPct.textContent = `${s.pct}%`;
        if (progressStatus) progressStatus.textContent = s.status;

        const lineEl = document.getElementById(s.line);
        if (lineEl) {
          lineEl.classList.add('active');
          lineEl.classList.add('completed');
        }
      }, s.delay);
    });

    // Reveal final suave
    setTimeout(() => {
      if (!finished) revealApp();
    }, 1800);
  }

  if (btnEnter) {
    btnEnter.addEventListener('click', revealApp);
  }

  if (btnReplay) {
    btnReplay.addEventListener('click', () => {
      startSequence();
    });
  }

  // Dispara automaticamente na montagem da demo
  startSequence();
}

function setupDemoModalHandlers() {
  const modal = document.getElementById('demo-info-modal');
  const closeBtn = document.getElementById('demo-modal-close');
  const headline = document.getElementById('demo-modal-headline');
  const bodyContent = document.getElementById('demo-modal-body-content');

  const ARCH_DATA = {
    web: {
      title: "Arquitetura: Aplicação Web Full-Stack",
      desc: "Instância de produção desenvolvida com Next.js 15, TypeScript e Tailwind CSS. Projetada para altíssima densidade de tráfego, renderização híbrida server-side/client-side, otimização de Core Web Vitals e tolerância a falhas na borda com CDN global."
    },
    docker: {
      title: "Arquitetura: Microsserviço & Worker Container",
      desc: "Contêiner conteinerizado em cluster Linux isolado por cgroups e namespaces. Processamento assíncrono de eventos através de filas Redis, endpoints de alta velocidade em Go/FastAPI e balanceamento dinâmico de carga com escalabilidade horizontal."
    },
    database: {
      title: "Arquitetura: Cluster de Dados & In-Memory Cache",
      desc: "Camada de armazenamento com PostgreSQL 16 para persistência transacional estrita (ACID) e Redis 7 para cache em memória com sub-millisecond latency. Inclui réplicas de leitura síncrona, balanceamento de conexões via PgBouncer e snapshots contínuos."
    },
    automation: {
      title: "Arquitetura: Central de Automação & Agentes Cognitivos",
      desc: "Orquestrador de fluxos com nós distribuídos e integração de webhooks. Executa rotinas assíncronas, pipelines orientados a eventos e integração com modelos de inteligência artificial de múltiplos provedores de forma 100% autônoma."
    },
    security: {
      title: "Arquitetura: Sentinel Shield & Defesa Perimetral",
      desc: "Camada de proteção e monitoramento contínuo em tempo real. Implementa filtragem perimetral, firewall inteligente com regras adaptativas, auditoria eBPF no kernel Linux e certificados TLS 1.3 com criptografia de ponta a ponta."
    }
  };

  document.querySelectorAll('.win-demo-action, .win-demo-info').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = btn.getAttribute('data-target') || 'web';
      const info = ARCH_DATA[target] || ARCH_DATA.web;
      if (headline) headline.textContent = info.title;
      if (bodyContent) {
        bodyContent.innerHTML = `
          <div class="demo-info-item">
            <h4>Visão Técnica da Instância</h4>
            <p>${info.desc}</p>
          </div>
          <div class="demo-info-item">
            <h4>Padrões de Engenharia Aplicados</h4>
            <p>• <strong>Isolamento de Recursos:</strong> Limites estritos de CPU e Memória para garantir previsibilidade de execução.<br>
• <strong>Observabilidade Integrada:</strong> Métricas expostas via endpoints de telemetria compatíveis com Prometheus e Glances.<br>
• <strong>Zero-Trust Networking:</strong> Acesso restrito a serviços internos via interfaces virtuais protegidas.</p>
          </div>
        `;
      }
      if (modal) modal.style.display = 'flex';
    });
  });

  document.querySelectorAll('.win-demo-logs').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const containerName = btn.getAttribute('data-container') || 'seu-conteiner-docker';
      openDockerLogsModal(containerName);
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
}
