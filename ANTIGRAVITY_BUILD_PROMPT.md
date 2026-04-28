# PORTFOLIO BUILD PROMPT — Ryan Sokolowsky
# For use in Antigravity (or any capable AI coding agent)
# Place all tech logo images in: /images/
# Run `python -m http.server 3000` or `npx serve .` when complete

---

## MISSION

Build a complete, production-quality personal portfolio website for Ryan Sokolowsky,
an AI Solutions & Automation Engineer based in Draper, UT. The site must be a single
HTML file (index.html) that runs on a local server. All styling and JavaScript should
be embedded inline — no external CSS/JS files required (Google Fonts CDN is fine).

When complete, start a local development server on port 3000 so the portfolio can be
previewed immediately.

---

## PERSON — RYAN SOKOLOWSKY

**Contact:**
- Email: ryan.sokolowsky@gmail.com
- Phone: (331) 298-3934
- Location: Draper, UT
- GitHub: https://github.com/RSokolowskyDev

**Headline:** AI Solutions & Automation Engineer | Software Engineering Student | Implementation Specialist

**Bio (use this verbatim in the About section):**
"I build intelligent systems that automate the hard stuff — from multi-agent LLM pipelines
and autonomous drones to ML inference systems. Focused on the full stack: model layer to
hardware. Currently completing a BS in Software Engineering at Ensign College while working
as a technical analyst at Utah Community Credit Union. I led a 16-person digital outreach
team as a Missionary in Chicago where data-driven ad optimization cut cost-per-conversion
by 25% and boosted engagement 35%. Bilingual in Spanish."

**Key stats to display prominently:**
- 7+ AI Projects
- 25% Cost Reduction (ad optimization)
- 16× Team Lead (Chicago, +35% engagement)
- Bilingual (English + Spanish)

---

## WORK EXPERIENCE

### Utah Community Credit Union (UCCU) — Herriman, UT
**Role:** Member Service Representative (Technical & Process-Focused)
**Dates:** 2025 – Present
**Bullets:**
- Troubleshot multi-system account discrepancies across enterprise financial platforms
- Created structured Excel reports to streamline adviser–member workflows
- Acted as a technical liaison between members, advisers, and internal systems teams

### Church of Jesus Christ of Latter Day Saints — Chicago, IL
**Role:** Full-Time Missionary / Spanish Facebook Ads Lead
**Dates:** 2023 – 2025
**Bullets:**
- Reduced cost per conversion by 25% through data-driven optimization
- Led and mentored a 16-person team, increasing engagement by 35%
- Managed Spanish-language Facebook ad campaigns end-to-end

### EOS Fitness — Orem, UT
**Role:** Assistant Fitness Manager
**Dates:** 2022 – 2023
**Bullets:**
- Managed day-to-day membership sales operations, driving conversions and member retention
- Handled member escalations and resolved billing and account issues across internal systems

### Code Ninjas — Hanover, MD
**Role:** Lead Sensei (Lead Instructor)
**Dates:** May 2020 – May 2021
**Bullets:**
- Instructed children in coding fundamentals and software development concepts
- Led sessions across multiple skill levels, adapting teaching approach to keep students engaged
- Served as the senior instructor on-site, supporting junior staff and maintaining curriculum quality

---

## EDUCATION

**Ensign College** — Salt Lake City, UT
Bachelor of Science, Software Engineering (In Progress) — Expected May 2028

**PLTW Engineering Curriculum (Software-Focused)**
Computational Logic, Systems Modeling, Software-Driven Design | 2017 – 2021

---

## CERTIFICATIONS

| Name                              | Issuer              | Status      |
|-----------------------------------|---------------------|-------------|
| Microsoft Excel Certification     | Microsoft           | Completed   |
| CompTIA A+                        | CompTIA             | In Progress |
| AWS Cloud Practitioner            | Amazon Web Services | In Progress |
| AI Full Stack Development         | Ensign College      | In Progress |
| Computer Science for AI           | HarvardX            | In Progress |

---

## TECHNICAL SKILLS (for image-based showcase)

Place tech logo PNG/SVG images in the `/images/` folder.
Expected filenames (use whatever images are provided, map by name):

**Languages:**
- images/python.png — Python
- images/javascript.png — JavaScript
- images/sql.png — SQL
- images/java.png — Java
- images/cpp.png — C++
- images/lua.png — Lua

**AI & Machine Learning:**
- images/crewai.png — CrewAI
- images/openai.png (or anthropic.png) — LLM APIs
- images/tensorflow.png or images/coreml.png — Create ML / Inference
- images/fastapi.png — FastAPI

**Cloud & Backend:**
- images/aws.png — AWS (Lambda, S3, EC2)
- images/firebase.png — Firebase
- images/react.png — React
- images/nodejs.png — Node.js
- images/git.png — Git/GitHub

**Tools & Hardware:**
- images/arduino.png or images/ardupilot.png — ArduPilot / Autonomous Drones
- images/tableau.png — Tableau
- images/android.png — Android Studio
- images/salesforce.png — Salesforce REST API
- images/excel.png — Microsoft Excel

**FALLBACK:** If any image file is missing, render a stylized colored circle with
the technology's first 2 letters as a monogram instead. Never break the layout.

---

## PROJECTS (7 total, full technical detail)

### PROJECT 01 — Mark Miller Subaru AI Lead Intelligence System
**ID:** mark-miller
**Status:** LIVE (has real URLs)
**Bubble color gradient:** linear-gradient(135deg, #4f46e5, #0ea5e9)
**Bubble size:** LARGE (center of watch face)
**Icon:** 🏎️

**Live URLs:**
- Customer Form: https://rsokolowskydev.github.io/mark-miller-agent/customer-form/
- Dashboard: https://rsokolowskydev.github.io/mark-miller-agent/dashboard/
- GitHub: https://github.com/RSokolowskyDev/mark-miller-agent

**Short description:**
Full-stack, two-agent AI system demonstrating how autonomous agents integrate with real
dealership operations. CrewAI pipeline scores leads, writes personalized follow-up emails,
and triggers post-sale sequences — deployed live on GitHub Pages.

**How it works (step by step):**
1. Customer fills out React form (name, vehicle interest, budget, contact preference)
2. Form POSTs JSON payload to FastAPI backend at POST /api/leads
3. FastAPI assigns a UUID, stores lead in memory, fires a BackgroundTask (response returns immediately)
4. Lead Analyst CrewAI agent scores inquiry 1-10, assigns tier (Hot/Warm/Cold), assigns specialist, generates talking_points[] and objection_handlers[]
5. Communications Specialist CrewAI agent writes a personalized (not templated) follow-up email
6. React dashboard polls GET /api/leads every 3 seconds — new leads appear with full brief
7. Specialist marks lead converted → PATCH /api/leads/{id}/convert → post-sale email sequence fires via Gmail API (30s interval for demo)

**Stack tags:** CrewAI, FastAPI, React, Gemini 2.5, Gmail API, Python, GitHub Pages

**Code snippet (show this in the "Code" tab):**
```python
# backend/main.py
@app.post("/api/leads")
async def receive_lead(lead: LeadSchema, bg: BackgroundTasks):
    lead_id = str(uuid.uuid4())
    lead_data = {
        "id": lead_id,
        "name": lead.name,
        "vehicle": lead.vehicle_interest,  # e.g. "2024 Outback"
        "budget": lead.budget,
        "contact": lead.contact_method,
        "timestamp": datetime.utcnow().isoformat(),
        "status": "queued",
    }
    leads_store[lead_id] = lead_data
    # BackgroundTask → HTTP response returns immediately
    bg.add_task(run_agent_pipeline, lead_id, lead_data)
    return {"status": "queued", "lead_id": lead_id}
```

**Metrics:** ~4.2s avg pipeline, 2 agents, 3s poll interval, Gemini 2.5 Flash LLM

**Interactive terminal demo commands:**
- `score --name "Alex" --vehicle "Outback" --budget 38000` → simulates lead scoring pipeline output
- `leads` → shows list of leads scored this session
- `help` → shows available commands

---

### PROJECT 02 — Sentinel
**ID:** sentinel
**Bubble color gradient:** linear-gradient(135deg, #06b6d4, #10b981)
**Bubble size:** standard
**Icon:** ⚡
**Position on watch face:** TOP

**Short description:**
Python-based LLM orchestration system that optimizes token usage across APIs using
dual-model validation to improve output accuracy and reduce hallucinations.

**How it works:**
1. Raw prompt received → estimate_tokens() using tiktoken (no API call yet)
2. Token count compared to BUDGET_THRESHOLD (default: 2048)
3. Below threshold → route to budget model; above → primary model
4. Candidate response generated
5. Validator model scores candidate: returns confidence 0.0–1.0
6. If confidence ≥ CONFIDENCE_THRESHOLD (0.82) → return result
7. If below → retry with stronger model
8. All metrics (tokens_used, model, confidence, latency_ms, cost_estimate) logged to JSONL

**Stack tags:** Python, LLM APIs, Orchestration, Token Optimization, tiktoken

**Code snippet:**
```python
# sentinel/router.py
class TokenRouter:
    BUDGET_THRESHOLD    = 2048       # TODO: tune based on your use case
    CONFIDENCE_THRESHOLD = 0.82      # TODO: set from empirical testing
    PRIMARY_MODEL       = "TODO: primary model string"
    FALLBACK_MODEL      = "TODO: fallback model string"

    def route(self, prompt: str) -> str:
        count = self.estimate_tokens(prompt)
        if count < self.BUDGET_THRESHOLD:
            return self.PRIMARY_MODEL
        return self.FALLBACK_MODEL

class DualValidator:
    def validate(self, prompt: str, candidate: str) -> float:
        score_prompt = VALIDATOR_PROMPT_TEMPLATE.format(
            original=prompt, response=candidate
        )
        raw = validator_client.complete(score_prompt)
        return float(raw.strip())  # expects 0.0–1.0
```

**Metrics:** ~38% avg token reduction, 0.82 confidence threshold, 2 validation models, JSONL log

**Interactive terminal demo commands:**
- `analyze <any text prompt>` → shows token count, routing decision, model selected, confidence score, cost estimate
- `stats` → shows session-level stats (total requests, tokens saved, validations run)
- `help`

---

### PROJECT 03 — Autonomous Drone System
**ID:** drone
**Bubble color gradient:** linear-gradient(135deg, #f59e0b, #ef4444)
**Bubble size:** standard
**Icon:** 🚁
**Position on watch face:** TOP-RIGHT

**Short description:**
Fully autonomous drone built ground-up — hardware selection through firmware-level
integration. Discovered and patched an ESC/FC timing bug at the C++ level, wrote Lua
scripts for flight decision logic, configured ArduPilot autopilot stack.

**How it works:**
1. Hardware selected and assembled (FC, ESCs, frame, GPS, telemetry radio)
2. ArduPilot autopilot stack flashed and calibrated (ESC cal, compass, accelerometer, radio)
3. ESC/FC PWM timing bug discovered during bench testing → root-caused to FC's PWM output driver
4. C++ patch authored to resolve hardware incompatibility in ArduPilot codebase
5. Lua scripts deployed to SD card → ArduPilot scripting engine runs them in autopilot loop
6. Autonomous waypoint missions validated including loiter logic at survey waypoints

**Stack tags:** ArduPilot, C++, Lua, Firmware, Hardware

**Code snippet:**
```lua
-- scripts/flight_logic.lua
-- TODO: Replace with actual script from drone SD card
local ALTITUDE_TARGET  = 15     -- meters AGL (TODO: actual value)
local SURVEY_WP_INDEX  = 3      -- waypoint that triggers loiter
local LOITER_DURATION  = 10000  -- milliseconds

function update()
    local wp = mission:get_current_nav_index()
    if wp == SURVEY_WP_INDEX then
        vehicle:set_mode(MODE_LOITER)
        millis_delay(LOITER_DURATION)
        vehicle:set_mode(MODE_AUTO)
    end
    return update, 100  -- reschedule every 100ms
end

return update, 100
```

**Metrics:** TODO max flight time, TODO payload capacity, C++ patch for FC bug, ArduPilot autopilot

**Interactive terminal demo commands:**
- `telemetry` → starts live-updating simulated telemetry feed (GPS coords, altitude, battery, speed, heading, waypoint progress, Lua script status)
- `stop` → stops the feed
- `status` → single telemetry snapshot
- `help`

---

### PROJECT 04 — AI Paint Color Matcher
**ID:** paint-matcher
**Bubble color gradient:** linear-gradient(135deg, #ec4899, #a855f7)
**Bubble size:** standard
**Icon:** 🎨
**Position on watch face:** BOTTOM-RIGHT

**Short description:**
Engineering capstone project. Integrated a hardware color sensor with a trained Create ML
regression model to predict paint pigment mixing ratios from RGB values in real time.

**How it works:**
1. Hardware color sensor reads reflected light from paint sample
2. Raw sensor data normalized (divide by max channel value, apply gamma)
3. Feature vector constructed: [r_norm, g_norm, b_norm, brightness, saturation]
4. Create ML regression model runs inference
5. Predicted mixing ratios output for each pigment channel (CMYK) with confidence score
6. Result displayed in real-time UI with color preview swatch

**Stack tags:** Create ML, Python, Sensor Integration, Inference Pipeline, Swift

**Code snippet:**
```python
# pipeline/inference.py
class PaintInferencePipeline:
    # TODO: Replace with actual model file path
    MODEL_PATH = "models/paint_color_matcher.mlmodel"

    def __init__(self):
        self.model = coremltools.models.MLModel(self.MODEL_PATH)

    def predict(self, raw_sensor: dict) -> dict:
        r = raw_sensor["red"]   / 65535.0   # TODO: actual max from sensor spec
        g = raw_sensor["green"] / 65535.0
        b = raw_sensor["blue"]  / 65535.0

        features = {"r_norm": r, "g_norm": g, "b_norm": b}
        result = self.model.predict(features)

        return {
            "cyan":    result["cyan_pct"],    # TODO: verify output key names
            "magenta": result["magenta_pct"],
            "yellow":  result["yellow_pct"],
            "black":   result["black_pct"],
        }
```

**Metrics:** TODO training set size, TODO model RMSE, 4 pigment channels, real-time inference

**Interactive terminal demo commands:**
- `match --r 224 --g 107 --b 45` → shows normalized values, CMYK predicted ratios with ASCII bars, confidence score, closest paint name
- `match --hex #E06B2D` → same but from hex input
- `sample` → randomly generates sensor reading and runs match
- `help`

---

### PROJECT 05 — Semantic Universe Layer
**ID:** semantic-layer
**Bubble color gradient:** linear-gradient(135deg, #6366f1, #a855f7)
**Bubble size:** standard
**Icon:** 🧠
**Position on watch face:** BOTTOM

**Short description:**
A glass-box semantic abstraction layer that enables transparent reasoning and efficient
execution on lower-end hardware. Every reasoning step is auditable and inspectable.

**How it works:**
1. Input decomposed into semantic nodes (Entity, Relation, Hypothesis, Decision types)
2. Reasoning graph constructed with typed edges between nodes
3. Graph traversed topologically — LLM inference executed at each node
4. Execution trace emitted to structured JSON log at each step
5. Final answer synthesized from leaf nodes of the graph

**Stack tags:** AI Architecture, Python, Semantic Reasoning, Hardware Optimization

**Code snippet:**
```python
# semantic/graph.py
class SemanticNode:
    NodeType = Literal["entity", "relation", "hypothesis", "decision"]

    def __init__(self, node_type: NodeType, content: str):
        self.type     = node_type
        self.content  = content
        self.children = []          # typed edges to child nodes
        self.trace    = []          # execution trace for this node

class ReasoningGraph:
    def execute(self, root: SemanticNode) -> str:
        for node in self.topological_sort(root):
            result = self.infer(node)     # TODO: actual LLM call here
            node.trace.append(result)
            self.trace_log.write(node)    # glass-box audit trail
        return self.synthesize(root)
```

**Metrics:** Glass-box reasoning, TODO avg nodes per query, TODO hardware target, JSON trace format

---

### PROJECT 06 — ResumeGen
**ID:** resumegen
**Bubble color gradient:** linear-gradient(135deg, #10b981, #06b6d4)
**Bubble size:** standard
**Icon:** 📄
**Position on watch face:** BOTTOM-LEFT

**Short description:**
Python automation tool that dynamically generates tailored resumes from structured JSON
config. Enables modular swapping of experience and project blocks for targeted applications.

**How it works:**
1. JSON config loaded (schema: personal, experience[], projects[], skills{}, targeting: {role, keywords[]})
2. Targeting filter applied — keyword matching determines which experience/project blocks are included
3. Jinja2/ReportLab template engine renders layout
4. PDF generated and saved to output directory

**Stack tags:** Python, JSON, Automation, Template Engine, PDF

**Code snippet:**
```python
# resumegen/generate.py
RESUME_CONFIG = {
    "personal": {
        "name":  "Ryan Sokolowsky",
        "email": "ryan.sokolowsky@gmail.com",
        "phone": "(331) 298-3934",
    },
    "targeting": {
        "role":     "AI Solutions Engineer",   # TODO: set per application
        "keywords": ["LLM", "Python", "automation"],
    },
    "experience": ["uccu", "mission"],  # block IDs to include
    "projects":   ["sentinel", "mark_miller", "drone"],
}

def generate(config_path: str, output_path: str):
    config   = load_json(config_path)
    blocks   = filter_blocks(config)      # select relevant content
    rendered = template.render(blocks)    # TODO: specify template engine
    write_pdf(rendered, output_path)      # TODO: specify PDF library
```

**Metrics:** JSON config format, TODO avg generation time, modular block system, PDF output

---

### PROJECT 07 — Automated Video Processing Pipeline
**ID:** video-pipeline
**Bubble color gradient:** linear-gradient(135deg, #8b5cf6, #ec4899)
**Bubble size:** standard
**Icon:** 🎬
**Position on watch face:** TOP-LEFT

**Short description:**
Python/MoviePy batch pipeline that automates video editing operations — cuts, captions,
exports, encoding — enabling scalable content production without proportional manual effort.

**How it works:**
1. Watchdog monitors input directory for new video files
2. Processing profile loaded from YAML config (aspect_ratio, codec, bitrate, trim_silence, caption_enabled)
3. MoviePy applies edits (trim silence, resize, add overlays if configured)
4. FFmpeg encodes output with specified codec and settings
5. File saved to output directory with consistent naming convention

**Stack tags:** Python, MoviePy, FFmpeg, Automation, YAML

**Code snippet:**
```python
# pipeline/processor.py
DEFAULT_PROFILE = {
    "aspect_ratio":  (9, 16),         # vertical / Reels format
    "codec":         "libx264",       # TODO: verify codec used
    "bitrate":       "4000k",
    "trim_silence":  True,
    "caption_enabled": False,         # TODO: implement caption layer
}

def process(self, input_path: str, profile: dict = None):
    cfg   = profile or self.DEFAULT_PROFILE
    clip  = VideoFileClip(input_path)

    if cfg["trim_silence"]:
        clip = self.trim_silence(clip)  # TODO: actual silence detection

    clip = clip.resize(height=1920)     # TODO: use aspect_ratio from cfg

    out_path = self.build_output_path(input_path)
    clip.write_videofile(
        out_path,
        codec=cfg["codec"],
        bitrate=cfg["bitrate"],
        audio_codec="aac",
    )
```

**Metrics:** Batch mode, YAML profile config, FFmpeg encoder, TODO avg time/video

---

## DESIGN SPECIFICATION

### Color Palette
```
Background:     #05070c  (near-black, very dark navy)
Surface:        rgba(255,255,255,.032)
Surface 2:      rgba(255,255,255,.055)
Border:         rgba(255,255,255,.07)
Border active:  rgba(255,255,255,.13)
Accent cyan:    #22d3ee
Accent indigo:  #818cf8
Accent purple:  #a855f7
Text:           #e2e8f4
Muted text:     #7289a8
Very muted:     #4a5c75
Green:          #34d399
Amber:          #fbbf24
Pink:           #f472b6
Red:            #f87171
```

### Typography
- **Google Fonts:** Syne (800 weight for headings), JetBrains Mono (300/400/500 for code/mono), DM Sans (300/400/500 for body)
- Headings: Syne 800, tight letter-spacing (-0.03em), large clamp sizing
- Code/labels: JetBrains Mono, uppercase, wide letter-spacing
- Body: DM Sans 300, comfortable line-height (1.8)

### Background Effects
- **Aurora blobs:** 3 large blurred circles (indigo, cyan, purple), position:fixed, blur:110px, opacity:0.1, slow floating animation (~25s ease-in-out infinite)
- **Grid overlay:** Subtle CSS grid lines using background-image gradients, 54px cells, ~2% opacity

### Navigation
- Fixed top, height 58px, glassmorphism (blur 24px + saturate 180%)
- Logo: "RS.dev" in JetBrains Mono (RS in cyan, .dev in muted)
- Nav links: uppercase, 10px JetBrains Mono, spaced
- Resume download button: outlined cyan button, top right

---

## APPLE WATCH INTERACTIVE SKILLS/PROJECTS SHOWCASE

This is the PRIMARY centerpiece feature. Build it exactly as follows:

### Visual Structure
```
┌─────────────────────────────────────────────────────────────────┐
│  [LEFT: Project Info Panel, 1fr]    [RIGHT: Watch Face, 560px]  │
│                                                                   │
│  Default state (no hover):           ┌──────────────────────┐   │
│  > "Hover a bubble to explore"       │  ╔══════════════════╗ │   │
│  > Animated arrow pointing right     │  ║  [🧠] [⚡] [🚁]  ║ │   │
│                                      │  ║     [🏎️ CENTER]   ║ │   │
│  Active state (bubble hovered):      │  ║  [🎨] [📄] [🎬]  ║ │   │
│  > Project number                    │  ╚══════════════════╝ │   │
│  > LIVE badge (if applicable)        └──────────────────────┘   │
│  > Large icon (36px)                                             │
│  > Project name (32px Syne 800)                                  │
│  > Subtitle (mono uppercase cyan)                                │
│  > Description (2-3 sentences)                                   │
│  > Tags row                                                      │
│  > [Open Details] + [GitHub] buttons                            │
└─────────────────────────────────────────────────────────────────┘
```

### Floating Bubble Container (NO bezel, NO watch shape)
- **Container:** 540×540px, fully transparent — no background, no border, no shadow, no overflow:hidden
- **Purpose:** Just a perspective+mouse-tracking wrapper. Bubbles float in open space against the aurora background.
- **Do NOT render any watch chrome.** No squircle, no bezel ring, no glass shine. The bubbles are the only visual element.

### Watch Face Inner (the grid)
- **Size:** 520×520px inside the bezel
- **CSS:** transform-style: preserve-3d (for 3D tilt effect)
- **Mouse interaction:** On mousemove over the bezel, apply rotateX(-dy*14deg) rotateY(dx*14deg) to the inner grid
- **Mouse leave:** Smoothly transition back to rotateX(0) rotateY(0)
- **Transition:** 0.12s ease for smooth but responsive feel

### Bubble Positions (absolute, within 520×520 container)
Calculate positions using: cx = x-center, cy = y-center of each bubble circle.
CSS left = cx - (size/2), CSS top = cy - (size/2)

| Project          | cx  | cy  | Size | Gradient                              | Depth |
|------------------|-----|-----|------|---------------------------------------|-------|
| Mark Miller      | 260 | 260 | 116  | #4f46e5 → #0ea5e9                    | 4     |
| Sentinel         | 260 |  82 |  90  | #06b6d4 → #10b981                    | 2     |
| Drone            | 414 | 171 |  90  | #f59e0b → #ef4444                    | 1     |
| Paint Matcher    | 414 | 349 |  90  | #ec4899 → #a855f7                    | 2     |
| Semantic Layer   | 260 | 438 |  90  | #6366f1 → #a855f7                    | 1     |
| ResumeGen        | 106 | 349 |  90  | #10b981 → #06b6d4                    | 2     |
| Video Pipeline   | 106 | 171 |  90  | #8b5cf6 → #ec4899                    | 1     |

### Bubble Default State (nothing hovered)
All bubbles exist in a soft, faded, background presence:
- `opacity: 0.42`
- `filter: saturate(0.45) brightness(0.7)`
- Featured center bubble is slightly more visible: `opacity: 0.62`, `filter: saturate(0.6) brightness(0.8)`
- The center bubble has a slow breathing scale animation (scale 1.0 → 1.04 → 1.0, 4s loop)
- No text or icon visible on non-featured bubbles yet

### Bubble Hover State — Spotlight from Darkness
When the mouse enters ANY bubble, add class `is-hovering` to the grid container:
```css
/* All non-active bubbles collapse into darkness */
.watchface.is-hovering .wbubble {
  opacity: 0.10;
  filter: saturate(0.15) brightness(0.3) blur(0.5px);
  transition: opacity 0.28s ease, filter 0.28s ease;
}

/* The touched bubble emerges fully */
.watchface.is-hovering .wbubble.active {
  opacity: 1.0;
  filter: saturate(1.05) brightness(1.12);
  box-shadow: 0 0 40px rgba(255,255,255,.12), 0 0 80px rgba(255,255,255,.06);
}
```
The active bubble's inner div also scales up: `transform: scale(1.11) translateZ(12px)`

### JavaScript Event Model
- On bubble `mouseenter`: add `is-hovering` to `.watchface`, remove `active` from all bubbles, add `active` to this bubble, call `showPIP(id)`
- On container `mouseleave`: remove `is-hovering` and all `active` classes, call `hidePIP()`, reset 3D transform
- Use the outer wrap div for mouse tracking (not individual bubbles), so the tilt tracks smoothly even between bubbles

---

## SKILLS SHOWCASE — Image-Based Icon Grid (benscott.dev style)

In the Skills section, display technologies as a grid of icon badges.
Each badge = image + name underneath, similar to how benscott.dev shows HTML/React/etc.

### Badge Structure (per skill)
```html
<div class="skill-badge">
  <div class="skill-icon-wrap">
    <img src="images/python.png" alt="Python" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
    <div class="skill-fallback" style="display:none;">PY</div>
  </div>
  <span class="skill-name">Python</span>
</div>
```

### Badge Styling
- Icon container: 68×68px, border-radius: 16px (rounded square like app icons)
- Background: subtle color tinted to match tech (see colors below)
- Border: 1px solid rgba(255,255,255,.08)
- Image: 44px × 44px, object-fit: contain, centered
- Name: JetBrains Mono, 9px, uppercase, letter-spacing .08em, muted color
- Hover: translateY(-3px) + box-shadow glow + brightness boost
- Transition: 0.25s with slight overshoot (cubic-bezier spring)
- Fallback (if image missing): 2-letter monogram in a colored circle, same dimensions

### Background tints per technology
```
Python:      rgba(53, 114, 165, .15)   — blue
JavaScript:  rgba(241, 224, 90, .12)   — yellow
SQL:         rgba(227, 140, 0, .12)    — orange
Java:        rgba(176, 114, 25, .12)   — brown
C++:         rgba(243, 75, 125, .12)   — red/pink
Lua:         rgba(50, 50, 160, .18)    — navy
CrewAI:      rgba(129, 140, 248, .14)  — indigo
LLM APIs:    rgba(34, 211, 238, .12)   — cyan
FastAPI:     rgba(0, 150, 136, .14)    — teal
AWS:         rgba(255, 153, 0, .12)    — orange
Firebase:    rgba(255, 195, 0, .12)    — yellow
React:       rgba(97, 218, 251, .12)   — light blue
Node.js:     rgba(104, 160, 99, .14)   — green
Git:         rgba(240, 80, 50, .12)    — red
ArduPilot:   rgba(251, 191, 36, .12)   — amber
Tableau:     rgba(31, 119, 180, .14)   — tableau blue
Salesforce:  rgba(0, 161, 224, .12)    — salesforce blue
```

### Layout
Group badges into 4 categories with section labels:
- **Languages** (row): Python, JavaScript, SQL, Java, C++, Lua
- **AI & Machine Learning** (row): CrewAI, LLM APIs, FastAPI, Create ML, Prompt Engineering, Inference
- **Cloud & Backend** (row): AWS, Firebase, React, Node.js, Salesforce API, Git
- **Tools & Hardware** (row): ArduPilot, Tableau, Android Studio, MoviePy, Excel, Spanish (🌎 emoji)

Each category has a label in JetBrains Mono uppercase with a line extending right.
Badges in each category flow horizontally, wrapping on smaller screens.
Stagger the entrance animation (fadeSlideUp) with increasing delays per badge.

---

## LEFT-SIDE SCROLL PROGRESS LINE (safetpojskic.com style)

Build a fixed vertical element on the LEFT side of the viewport:

### Structure
- **Position:** fixed, left: 26px, centered vertically (top: 50%, transform: translateY(-50%))
- **Height:** 280px total
- **Z-index:** 50
- **Contents:** A thin 1px vertical track with a gradient fill that grows as user scrolls

### The fill animation
- Track background: rgba(255,255,255,.07)
- Fill: CSS height % animated linearly as user scrolls
- Fill gradient: linear-gradient(to bottom, #22d3ee, #818cf8, #a855f7)
- Transition: height 0.12s linear for smooth feel

### Section dots (5 total)
Evenly spaced within the track height, one per section:
- Home, Projects, About, Skills, Contact

Each dot:
- Size: 7×7px circle
- Default: rgba(255,255,255,.14) background, rgba(255,255,255,.08) border
- Active section: #22d3ee background, cyan border, box-shadow glow
- Hover: scale(1.4)
- Cursor: pointer — clicking smoothly scrolls to that section
- ::after label: appears on hover/active, positioned to the right, shows section name

### JavaScript logic
```javascript
window.addEventListener('scroll', () => {
  const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  fillElement.style.height = (progress * 100) + '%';
  
  // Determine active section
  let active = 'home';
  ['home','projects','about','skills','contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 80) active = id;
  });
  
  dots.forEach(d => d.classList.toggle('active', d.dataset.section === active));
}, { passive: true });
```

---

## INTERACTIVE TERMINAL (Hero section + Project modals)

### Hero Terminal
In the hero section's right column, include a working terminal widget.
It's styled like a macOS terminal window with traffic light dots.

**Available commands:**
- `whoami` → shows bio summary
- `skills` → lists core tech stack
- `projects` → lists all 7 projects with one-line descriptions
- `experience` → shows work history
- `contact` → shows contact details
- `status` → shows "✓ Available for hire"
- `hire` → opens mailto: link
- `help` → shows all commands
- `clear` → clears terminal
- Arrow Up/Down → navigate command history

### Project Modals — "🎮 Try It" Tab
For projects with interactive demos (Mark Miller, Sentinel, Drone, Paint Matcher),
add a fourth tab to the modal. This tab contains a working terminal with project-specific commands.

**Sentinel terminal commands:**
- `analyze <any prompt text>` → simulates full routing: shows token count, model selected (budget vs primary), confidence score, estimated cost, tokens saved vs full model
- `stats` → shows session stats (requests, tokens saved, validations)
- `help`, `clear`

**Mark Miller terminal commands:**
- `score --name "Name" --vehicle "Vehicle" --budget 35000 --contact email` → simulates two-agent pipeline: shows score 1-10, tier (Hot/Warm/Cold) with color, assigned specialist, 3 talking points, draft email preview, lead ID
- `leads` → shows table of all leads scored this session
- `help`, `clear`

**Drone terminal commands:**
- `telemetry` → starts live-updating feed every 2 seconds: GPS coords, altitude, speed, heading, battery%, RSSI, roll, pitch, waypoint progress (wp N/8), Lua script status
- `stop` → stops the feed
- `status` → single snapshot of all values
- `help`, `clear`

**Paint Matcher terminal commands:**
- `match --r 224 --g 107 --b 45` → shows normalized RGB, CMYK ratios with ASCII bar graphs, confidence score, closest paint name match
- `match --hex #E06B2D` → same from hex
- `sample` → generates random sensor reading and runs match
- `help`, `clear`

**IMPORTANT — Backend connection points:**
Mark every simulated function with a clear TODO comment showing the exact fetch() call needed:
```javascript
/* TODO_BACKEND: Replace simulation with:
   const data = await fetch(`${API_BASE}/api/sentinel/analyze`, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ prompt })
   }).then(r => r.json());
*/
```
Define at the top of the script:
```javascript
const API_BASE     = 'TODO_BACKEND: https://your-api-base-url.com';
const BACKEND_LIVE = false; // flip to true when FastAPI is running
```

---

## PROJECT MODALS (tabbed detail view)

When a project bubble is clicked (or "Open Details" is pressed), a full-screen modal opens.
The modal has 4 tabs (3 for projects without interactive demos):

**Tab 1: Overview**
- Left column: overview paragraph, stack tags, external links, metrics grid (4 cards)
- Right column: key bullet points list

**Tab 2: Architecture**
- Full-width scrollable list of numbered steps
- Each step has: number, action title, detail sentence (specific implementation notes), tech badge
- TODO comments in detail text for things that need filling in

**Tab 3: Code**
- Syntax-highlighted code snippet(s) in a terminal-dark code block
- File path shown as a header above each snippet
- Use span elements for syntax coloring: keywords (indigo), strings (green), numbers/constants (amber), comments (muted italic), function names (cyan), decorators/annotations (pink)

**Tab 4: 🎮 Try It** (only for projects with demos)
- Brief instruction text explaining what the terminal can do
- Full-height terminal widget with project-specific commands
- Backend status badge (amber "Simulated" or green "Live")
- Terminal initializes lazily when tab is clicked (not before)

---

## PAGE SECTIONS & ORDER

1. **Nav** (fixed)
2. **Scroll progress line** (fixed left)
3. **#home** — Hero: name + title + bio + CTA buttons (left) | stats + interactive terminal (right)
4. **#projects** — Apple Watch face + info panel (top) | "View detailed list" toggle → card grid (below)
5. **#about** — Bio text (left) | Experience timeline (right)
6. **#skills** — Introduction sentence + image-based skill icon grid by category
7. **#certs** — 3-column grid of certification cards
8. **#contact** — Centered CTA with email/GitHub/resume buttons
9. **Footer**

---

## ANIMATION REQUIREMENTS

- **Scroll fade-in:** All major sections use IntersectionObserver. Elements start at opacity:0, translateY(16px) and transition to visible when 8% in viewport. Stagger delays with classes .d1 (.07s), .d2 (.14s), .d3 (.21s), .d4 (.28s)
- **Watch face 3D tilt:** Mouse movement over bezel → rotateX/rotateY, snaps back on mouseleave
- **Bubble hover:** Spring physics scale (cubic-bezier 0.34, 1.56, 0.64, 1), icon/name fade in
- **Info panel transition:** When project changes, info slides in (translateX(-8px) → 0, opacity 0→1, 0.2s)
- **Skill badges:** fadeSlideUp with staggered delays per badge
- **Aurora blobs:** Independent slow float animations (20-34s), no two in sync
- **Terminal cursor:** Input caret-color set to cyan

---

## FILE STRUCTURE

```
/                     ← web root
├── index.html        ← single file with all CSS + JS inline
├── images/
│   ├── python.png
│   ├── javascript.png
│   ├── sql.png
│   ├── java.png
│   ├── cpp.png
│   ├── lua.png
│   ├── crewai.png
│   ├── fastapi.png
│   ├── aws.png
│   ├── firebase.png
│   ├── react.png
│   ├── nodejs.png
│   ├── git.png
│   ├── ardupilot.png
│   ├── tableau.png
│   └── ... (any additional tech logos)
└── Ryan_Sokolowsky_Resume.pdf  ← for the resume download button
```

---

## LOCAL SERVER

After building index.html, start a local server using whichever is available:

**Option 1 (Python):**
```bash
python -m http.server 3000
```

**Option 2 (Node/npx):**
```bash
npx serve . -p 3000
```

**Option 3 (PHP):**
```bash
php -S localhost:3000
```

Open: http://localhost:3000

If none of those work, try port 8080 as fallback.

---

## QUALITY CHECKLIST

Before finishing, verify:
- [ ] Apple Watch face renders centered with all 7 bubbles in correct hexagonal positions
- [ ] Mouse movement over watch face causes 3D tilt effect
- [ ] Hovering each bubble updates the info panel on the left instantly
- [ ] Clicking any bubble opens the correct modal
- [ ] Modal has correct tabs (3 or 4 depending on project)
- [ ] "🎮 Try It" terminal actually accepts input and produces output
- [ ] Sentinel `analyze` command shows routing decision and confidence score
- [ ] Mark Miller `score` command shows tier, talking points, lead ID
- [ ] Drone `telemetry` auto-updates every 2 seconds
- [ ] Paint `match` shows CMYK bars with color preview swatch
- [ ] Skill icons load from /images/ with graceful fallback to monogram
- [ ] Scroll progress line fills correctly and dots highlight active section
- [ ] All 7 projects have correct gradients and positions on watch face
- [ ] Resume download button links to Ryan_Sokolowsky_Resume.pdf
- [ ] External links (GitHub, live demos) open in new tab
- [ ] Mobile: watch face hides, list view shows instead
- [ ] No JavaScript errors in console
- [ ] Local server starts and page loads at http://localhost:3000

---

## NOTES FOR THE AGENT

1. All project code snippets contain `# TODO:` comments where Ryan needs to fill in real values.
   Preserve these — they are intentional placeholders, not mistakes.

2. The interactive terminal demos are SIMULATED with realistic fake data. Every simulator
   function must have a clear `/* TODO_BACKEND: */` comment above it showing the exact
   fetch() call that will replace it when FastAPI is running.

3. The Mark Miller Subaru project is the ONLY one that is currently live with real URLs.
   All others link to Ryan's GitHub profile (https://github.com/RSokolowskyDev) as a
   placeholder until individual repos are made public.

4. Use `BACKEND_LIVE = false` flag at the top — when flipped to `true` and API_BASE is set,
   the terminals should automatically use real fetch() calls instead of simulators.

5. The Apple Watch face is the hero of the page. Invest the most effort here — it should
   feel premium, interactive, and impressive. The 3D tilt must feel physically responsive.

6. Every section should be scroll-animated with the IntersectionObserver. Nothing should
   be visible on page load below the fold — content should reveal as the user scrolls.

7. Keep everything in one index.html file. No separate CSS or JS files.
   External dependencies allowed: Google Fonts CDN only.
