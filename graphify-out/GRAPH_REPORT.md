# Graph Report - mcp-os-vps-dashboard-demo  (2026-11-10)

## Corpus Check
- 8 files · ~1,105,457 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 707 nodes · 1377 edges · 35 communities (23 shown, 12 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- webgl-backgrounds.js
- _
- ks
- app.js
- U
- ar
- q
- W
- tn
- .z
- V
- .intersectMeshes
- zt
- pt
- ke
- .sub
- le
- MCP OS // Virtual Cloud Infrastructure & Live Telemetry Hub
- sr
- media-cache-manager.js
- .addAttribute
- .constructor
- .copy
- media-compressor.js
- ct
- .multiply
- zs
- vt
- j
- ji
- vercel.json
- De
- oe
- ue
- sw.js

## God Nodes (most connected - your core abstractions)
1. `_` - 208 edges
2. `requestAnimationFrame()` - 42 edges
3. `U` - 35 edges
4. `V` - 33 edges
5. `getOptimizedDPR()` - 31 edges
6. `resize()` - 29 edges
7. `ks` - 25 edges
8. `tn` - 23 edges
9. `W` - 19 edges
10. `sr()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `he()` --calls--> `_`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 22_
- `ke` --calls--> `_`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 14_
- `sr()` --calls--> `_`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 18_
- `R()` --calls--> `_`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 28_
- `zs` --calls--> `le()`  [EXTRACTED]
  js/ogl.js → js/ogl.js  _Bridges community 16 → community 26_

## Import Cycles
- None detected.

## Communities (35 total, 12 thin omitted)

### Community 0 - "webgl-backgrounds.js"
Cohesion: 0.06
Nodes (60): buildStrandsPalette(), easePower2InOut(), getOptimizedDPR(), hexToRgb(), hexToRgbArr(), initAcidSquares(), initAntigravity(), initAurora() (+52 more)

### Community 1 - "_"
Cohesion: 0.04
Nodes (41): _, ae(), at, bs(), ce(), dt, Ei, Et (+33 more)

### Community 2 - "ks"
Cohesion: 0.09
Nodes (4): ci(), ge(), ks, me()

### Community 3 - "app.js"
Cohesion: 0.07
Nodes (45): applyBackground(), applyHashRoute(), BG_TITLES, closeDockerLogsModal(), DemoSimulationEngine, fetchContainerLogs(), fetchDockerTelemetry(), fetchGlancesTelemetry() (+37 more)

### Community 4 - "U"
Cohesion: 0.05
Nodes (16): ai(), di(), gi(), hi(), ii(), li(), mi(), ni() (+8 more)

### Community 5 - "ar"
Cohesion: 0.08
Nodes (8): ar, dr(), kt(), mr, Ot, pr(), Ut(), yr

### Community 6 - "q"
Cohesion: 0.05
Nodes (12): As(), br, en, gr, K, kr, nr, q (+4 more)

### Community 7 - "W"
Cohesion: 0.06
Nodes (12): cs, Ds(), Fs(), is, it, on, rn, rr (+4 more)

### Community 8 - "tn"
Cohesion: 0.14
Nodes (7): fr(), A(), E(), m(), p(), ns(), tn

### Community 9 - ".z"
Cohesion: 0.08
Nodes (4): Gs(), Hs(), qs(), Xs()

### Community 12 - "zt"
Cohesion: 0.16
Nodes (8): be(), gt, Ie(), Ne(), l(), h(), l(), zt

### Community 13 - "pt"
Cohesion: 0.08
Nodes (9): bi(), _i(), pn, pt, Se(), Si(), Ti(), vi() (+1 more)

### Community 14 - "ke"
Cohesion: 0.15
Nodes (5): er, ke, we(), xe(), ye()

### Community 17 - "MCP OS // Virtual Cloud Infrastructure & Live Telemetry Hub"
Cohesion: 0.22
Nodes (8): 🏗️ Arquitetura de Serviços Demonstrada, 👤 Autor & Engenharia, ☁️ Deploy Imediato na Vercel, 🌟 Destaques do Projeto, 🚀 Execução Local Rápida, MCP OS // Virtual Cloud Infrastructure & Live Telemetry Hub, 🚀 Portfolio Demo Edition — Enterprise Software Engineering, 🕹️ Serviços e Placeholders Integrados

### Community 18 - "sr"
Cohesion: 0.16
Nodes (9): nn(), sr(), C(), et(), L(), N(), tt(), xs() (+1 more)

### Community 19 - "media-cache-manager.js"
Cohesion: 0.36
Nodes (11): checkIntegrity(), forceFullResync(), _formatSpeed(), getClient(), init(), initNetworkSaverWidget(), notifyNewMediaCached(), preloadMediaUrls() (+3 more)

### Community 22 - ".copy"
Cohesion: 0.21
Nodes (3): he(), Lt, ur()

### Community 23 - "media-compressor.js"
Cohesion: 0.43
Nodes (4): _audioBufferToWav(), compressAudio(), compressImage(), processForUpload()

### Community 24 - "ct"
Cohesion: 0.29
Nodes (3): ct(), fi(), ve

### Community 26 - "zs"
Cohesion: 0.33
Nodes (3): bt(), Tt(), zs

### Community 27 - "vt"
Cohesion: 0.33
Nodes (3): Es(), Ms(), vt()

### Community 28 - "j"
Cohesion: 0.33
Nodes (4): v(), j(), tr, R()

### Community 30 - "vercel.json"
Cohesion: 0.33
Nodes (5): cleanUrls, headers, rewrites, $schema, trailingSlash

## Knowledge Gaps
- **49 isolated node(s):** `DemoSimulationEngine`, `state`, `WEBGL_SHADERS`, `BG_TITLES`, `GALLERIES` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 181 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `_` connect `_` to `webgl-backgrounds.js`, `ks`, `U`, `ar`, `q`, `W`, `tn`, `.z`, `V`, `.intersectMeshes`, `zt`, `pt`, `ke`, `.sub`, `le`, `sr`, `.addAttribute`, `.constructor`, `.copy`, `ct`, `.multiply`, `zs`, `vt`, `j`, `ji`, `De`, `oe`, `ue`?**
  _High betweenness centrality (0.628) - this node is a cross-community bridge._
- **Why does `V` connect `V` to `webgl-backgrounds.js`, `_`, `W`, `.intersectMeshes`, `zt`, `.sub`, `sr`, `.constructor`, `.copy`, `ji`, `De`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `ks` connect `ks` to `webgl-backgrounds.js`, `_`, `q`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `DemoSimulationEngine`, `state`, `WEBGL_SHADERS` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `webgl-backgrounds.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06413730803974707 - nodes in this community are weakly interconnected._
- **Should `_` be split into smaller, more focused modules?**
  _Cohesion score 0.041742286751361164 - nodes in this community are weakly interconnected._
- **Should `ks` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._