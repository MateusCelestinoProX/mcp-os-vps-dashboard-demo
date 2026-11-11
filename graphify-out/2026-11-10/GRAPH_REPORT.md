# Graph Report - mcp-os-vps-dashboard-demo  (2026-11-10)

## Corpus Check
- 7 files · ~1,101,992 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 693 nodes · 1362 edges · 35 communities (26 shown, 8 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- webgl-backgrounds.js
- _
- ks
- app.js
- U
- ar
- q
- it
- tn
- .z
- V
- .intersectMeshes
- zt
- pt
- ke
- .update
- le
- .copy
- sr
- media-cache-manager.js
- .addAttribute
- W
- .sub
- media-compressor.js
- ct
- .draw
- zs
- vt
- j
- Fs
- vercel.json
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
  js/ogl.js → js/ogl.js  _Bridges community 1 → community 17_
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

## Communities (35 total, 8 thin omitted)

### Community 0 - "webgl-backgrounds.js"
Cohesion: 0.06
Nodes (60): buildStrandsPalette(), easePower2InOut(), getOptimizedDPR(), hexToRgb(), hexToRgbArr(), initAcidSquares(), initAntigravity(), initAurora() (+52 more)

### Community 1 - "_"
Cohesion: 0.04
Nodes (41): _, ae(), at, bs(), ce(), dt, Ei, Et (+33 more)

### Community 2 - "ks"
Cohesion: 0.06
Nodes (8): br, ge(), K, kr, ks, me(), nr, zr

### Community 3 - "app.js"
Cohesion: 0.08
Nodes (40): applyBackground(), applyHashRoute(), BG_TITLES, closeDockerLogsModal(), fetchContainerLogs(), fetchDockerTelemetry(), fetchGlancesTelemetry(), fetchServiceStatus() (+32 more)

### Community 4 - "U"
Cohesion: 0.05
Nodes (17): ai(), ci(), di(), _e(), gi(), hi(), ii(), li() (+9 more)

### Community 5 - "ar"
Cohesion: 0.09
Nodes (7): ar, dr(), kt(), mr, pr(), Ut(), yr

### Community 6 - "q"
Cohesion: 0.09
Nodes (7): As(), en, gr, q, sn, Vr(), ze

### Community 7 - "it"
Cohesion: 0.14
Nodes (4): Ds(), it, St, ui()

### Community 8 - "tn"
Cohesion: 0.14
Nodes (7): fr(), A(), E(), m(), p(), ns(), tn

### Community 9 - ".z"
Cohesion: 0.08
Nodes (4): Gs(), Hs(), qs(), Xs()

### Community 10 - "V"
Cohesion: 0.09
Nodes (4): De(), ji(), qi(), V

### Community 11 - ".intersectMeshes"
Cohesion: 0.16
Nodes (3): cr, Ee(), ki()

### Community 12 - "zt"
Cohesion: 0.12
Nodes (10): be(), gt, Ie(), Ne(), nn(), or, l(), h() (+2 more)

### Community 13 - "pt"
Cohesion: 0.10
Nodes (8): bi(), _i(), pt, Se(), Si(), Ti(), vi(), zi()

### Community 14 - "ke"
Cohesion: 0.15
Nodes (4): er, ke, we(), xe()

### Community 15 - ".update"
Cohesion: 0.18
Nodes (4): cs, is, rr, Ys()

### Community 17 - ".copy"
Cohesion: 0.15
Nodes (4): he(), Ot, ri(), ye()

### Community 18 - "sr"
Cohesion: 0.21
Nodes (7): sr(), C(), et(), L(), N(), tt(), xs()

### Community 19 - "media-cache-manager.js"
Cohesion: 0.36
Nodes (11): checkIntegrity(), forceFullResync(), _formatSpeed(), getClient(), init(), initNetworkSaverWidget(), notifyNewMediaCached(), preloadMediaUrls() (+3 more)

### Community 21 - "W"
Cohesion: 0.18
Nodes (4): on, rn, un, W

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
- **41 isolated node(s):** `state`, `WEBGL_SHADERS`, `BG_TITLES`, `GALLERIES`, `SYSTEM_URLS` (+36 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 172 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `_` connect `_` to `webgl-backgrounds.js`, `ks`, `U`, `ar`, `q`, `it`, `tn`, `.z`, `V`, `.intersectMeshes`, `zt`, `pt`, `ke`, `.update`, `le`, `.copy`, `sr`, `.addAttribute`, `W`, `.sub`, `ct`, `.draw`, `zs`, `vt`, `j`, `Fs`, `.computeBoundingSphere`, `oe`, `ue`?**
  _High betweenness centrality (0.654) - this node is a cross-community bridge._
- **Why does `V` connect `V` to `webgl-backgrounds.js`, `_`, `.intersectMeshes`, `zt`, `.update`, `.copy`, `sr`, `.sub`, `.computeBoundingSphere`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `ks` connect `ks` to `webgl-backgrounds.js`, `_`, `q`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **What connects `state`, `WEBGL_SHADERS`, `BG_TITLES` to the rest of the system?**
  _41 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `webgl-backgrounds.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06413730803974707 - nodes in this community are weakly interconnected._
- **Should `_` be split into smaller, more focused modules?**
  _Cohesion score 0.041742286751361164 - nodes in this community are weakly interconnected._
- **Should `ks` be split into smaller, more focused modules?**
  _Cohesion score 0.05660377358490566 - nodes in this community are weakly interconnected._