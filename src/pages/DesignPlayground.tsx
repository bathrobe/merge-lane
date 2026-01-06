/**
 * DESIGN PLAYGROUND
 * Isolated route for UI experimentation. Does not touch game state.
 *
 * DESIGN PRINCIPLES (read before changing anything):
 * ─────────────────────────────────────────────────
 * 1. LESS IS MORE. Restraint. Every element must earn its place.
 * 2. Aim for perfection in each small choice. Quality over quantity.
 * 3. Reference: DK Eyewitness (UI), Nature Company (environments)
 * 4. Palette lives in notes/Style Lock.md — use those hex codes
 * 5. Late 90s authenticity: serif body, rounded buttons, warm not cold
 * ─────────────────────────────────────────────────
 */

// Palette from Style Lock.md
const PALETTE = {
  institutionalTeal: "#5B8A8A",
  warmBrown: "#8B7355",
  softBeige: "#D4C5A9",
  mutedGold: "#C9A227",
  deepNavy: "#2C3E50",
  white: "#FFFFFF",
  cream: "#F5F0E6",
};

// Sample content for testing
const SAMPLE_TEXT = [
  "The flower-mascot blinks at you with its googly eyes.",
  '"Hello! I\'m Helix. Would you like to play Number Safari or Letter Garden?"',
  "Its petals rotate slowly, casting soft shadows on the wall.",
];

const SAMPLE_CHOICES = [
  { text: "Number Safari", index: 0 },
  { text: "Letter Garden", index: 1 },
  { text: "I don't want to play.", index: 2 },
];

function DesignPlayground() {
  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-8 border-b border-gray-200 pb-4">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Design Playground — isolated from game
        </p>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: Color Palette
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          Palette (from Style Lock.md)
        </h2>
        <div className="flex gap-4 flex-wrap">
          {Object.entries(PALETTE).map(([name, hex]) => (
            <div key={name} className="text-center">
              <div
                className="w-16 h-16 rounded shadow-sm border border-gray-100"
                style={{ backgroundColor: hex }}
              />
              <p className="text-xs mt-1 text-gray-600">{name}</p>
              <p className="text-xs font-mono text-gray-400">{hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: Typography
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          Typography Tests
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* System serif */}
          <div className="p-4 border rounded">
            <p className="text-xs text-gray-400 mb-2">font-serif (system)</p>
            <p className="font-serif text-lg" style={{ color: PALETTE.deepNavy }}>
              The flower-mascot blinks at you with its googly eyes.
            </p>
          </div>

          {/* Georgia specifically */}
          <div className="p-4 border rounded">
            <p className="text-xs text-gray-400 mb-2">Georgia (1996, web-safe)</p>
            <p className="text-lg" style={{ fontFamily: "Georgia, serif", color: PALETTE.deepNavy }}>
              The flower-mascot blinks at you with its googly eyes.
            </p>
          </div>

          {/* Libre Baskerville */}
          <div className="p-4 border rounded">
            <p className="text-xs text-gray-400 mb-2">Libre Baskerville (book feel)</p>
            <p className="font-baskerville text-lg" style={{ color: PALETTE.deepNavy }}>
              The flower-mascot blinks at you with its googly eyes.
            </p>
          </div>

          {/* Nunito for display */}
          <div className="p-4 border rounded">
            <p className="text-xs text-gray-400 mb-2">Nunito (VAG Rounded alternative)</p>
            <p className="font-nunito text-lg font-semibold" style={{ color: PALETTE.deepNavy }}>
              The flower-mascot blinks at you with its googly eyes.
            </p>
          </div>
        </div>

        {/* Larger samples */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded" style={{ backgroundColor: PALETTE.cream }}>
            <p className="text-xs mb-4" style={{ color: PALETTE.warmBrown }}>
              Body text sample — Libre Baskerville
            </p>
            <p className="font-baskerville text-base leading-relaxed" style={{ color: PALETTE.deepNavy }}>
              {SAMPLE_TEXT.join(" ")}
            </p>
          </div>
          <div className="p-6 border rounded" style={{ backgroundColor: PALETTE.deepNavy }}>
            <p className="text-xs mb-4" style={{ color: PALETTE.warmBrown }}>
              Display/buttons — Nunito
            </p>
            <h2 className="font-nunito text-2xl font-bold mb-2" style={{ color: PALETTE.softBeige }}>
              Scholastic Fair
            </h2>
            <p className="font-nunito" style={{ color: PALETTE.cream }}>
              New Game · Continue · Settings
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: Text Panel Mockup
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          Text Panel Variants
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Current: dark */}
          <div className="p-6 bg-gray-900 text-white rounded">
            <p className="text-xs text-gray-500 mb-4">Current (bg-gray-900)</p>
            {SAMPLE_TEXT.map((line, i) => (
              <p key={i} className="mb-2">{line}</p>
            ))}
          </div>

          {/* Warm variant: cream/beige */}
          <div
            className="p-6 rounded"
            style={{ backgroundColor: PALETTE.cream, color: PALETTE.deepNavy }}
          >
            <p className="text-xs mb-4" style={{ color: PALETTE.warmBrown }}>
              Warm variant (cream bg)
            </p>
            {SAMPLE_TEXT.map((line, i) => (
              <p key={i} className="mb-2 font-serif">{line}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: Choice Buttons
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          Choice Button Variants
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Current: plain border */}
          <div className="p-4 border rounded">
            <p className="text-xs text-gray-400 mb-4">Current</p>
            <div className="flex flex-col gap-2">
              {SAMPLE_CHOICES.map((c) => (
                <button key={c.index} className="px-4 py-2 border text-left">
                  {c.text}
                </button>
              ))}
            </div>
          </div>

          {/* Rounded warm */}
          <div className="p-4 border rounded">
            <p className="text-xs text-gray-400 mb-4">Rounded warm</p>
            <div className="flex flex-col gap-2">
              {SAMPLE_CHOICES.map((c) => (
                <button
                  key={c.index}
                  className="px-4 py-2 rounded-full text-left transition-colors"
                  style={{
                    backgroundColor: PALETTE.softBeige,
                    color: PALETTE.deepNavy,
                    border: `2px solid ${PALETTE.warmBrown}`,
                  }}
                >
                  {c.text}
                </button>
              ))}
            </div>
          </div>

          {/* Teal accent */}
          <div className="p-4 border rounded">
            <p className="text-xs text-gray-400 mb-4">Teal accent</p>
            <div className="flex flex-col gap-2">
              {SAMPLE_CHOICES.map((c) => (
                <button
                  key={c.index}
                  className="px-4 py-2 rounded text-left font-serif"
                  style={{
                    backgroundColor: PALETTE.institutionalTeal,
                    color: PALETTE.cream,
                  }}
                >
                  {c.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: Title Screen Mockup
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          Title Screen Concepts
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* DK Eyewitness style: white, clean, Baskerville */}
          <div
            className="p-8 rounded border flex flex-col items-center justify-center min-h-64"
            style={{ backgroundColor: PALETTE.white }}
          >
            <h1
              className="font-baskerville text-3xl mb-8"
              style={{ color: PALETTE.deepNavy }}
            >
              Scholastic Fair
            </h1>
            <div className="flex flex-col gap-3">
              <button
                className="font-nunito font-semibold px-6 py-2 rounded-full"
                style={{
                  backgroundColor: PALETTE.mutedGold,
                  color: PALETTE.white,
                }}
              >
                New Game
              </button>
              <button
                className="font-nunito font-semibold px-6 py-2 rounded-full"
                style={{
                  backgroundColor: PALETTE.softBeige,
                  color: PALETTE.deepNavy,
                  border: `1px solid ${PALETTE.warmBrown}`,
                }}
              >
                Continue
              </button>
            </div>
          </div>

          {/* Warm museum style */}
          <div
            className="p-8 rounded flex flex-col items-center justify-center min-h-64"
            style={{ backgroundColor: PALETTE.deepNavy }}
          >
            <h1
              className="font-baskerville text-3xl mb-8"
              style={{ color: PALETTE.softBeige }}
            >
              Scholastic Fair
            </h1>
            <div className="flex flex-col gap-3">
              <button
                className="font-nunito font-semibold px-6 py-2 rounded-full"
                style={{
                  backgroundColor: PALETTE.mutedGold,
                  color: PALETTE.deepNavy,
                }}
              >
                New Game
              </button>
              <button
                className="font-nunito font-semibold px-6 py-2 rounded-full border"
                style={{
                  backgroundColor: "transparent",
                  color: PALETTE.softBeige,
                  borderColor: PALETTE.softBeige,
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: AUTHENTIC 90s UI (the good stuff)
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          🕹️ Authentic 90s UI Elements
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          Bevels, hard shadows, gradients, chunky borders — the real deal.
        </p>

        {/* Beveled buttons */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Beveled Buttons (raised 3D)</p>
          <div className="flex gap-4 flex-wrap">
            {/* Classic bevel - light top-left, dark bottom-right */}
            <button
              className="font-nunito font-bold px-6 py-3 rounded-lg"
              style={{
                background: `linear-gradient(180deg, ${PALETTE.mutedGold} 0%, #A8841F 100%)`,
                color: PALETTE.white,
                border: `3px solid`,
                borderColor: `#E8C84A ${PALETTE.warmBrown} ${PALETTE.warmBrown} #E8C84A`,
                boxShadow: `
                  inset 2px 2px 0 rgba(255,255,255,0.3),
                  inset -2px -2px 0 rgba(0,0,0,0.2),
                  4px 4px 0 rgba(0,0,0,0.3)
                `,
                textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
              }}
            >
              New Game
            </button>

            <button
              className="font-nunito font-bold px-6 py-3 rounded-lg"
              style={{
                background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 100%)`,
                color: PALETTE.white,
                border: `3px solid`,
                borderColor: `#9DBDBD #3D6B6B #3D6B6B #9DBDBD`,
                boxShadow: `
                  inset 2px 2px 0 rgba(255,255,255,0.3),
                  inset -2px -2px 0 rgba(0,0,0,0.2),
                  4px 4px 0 rgba(0,0,0,0.3)
                `,
                textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
              }}
            >
              Continue
            </button>

            <button
              className="font-nunito font-bold px-6 py-3 rounded-lg"
              style={{
                background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                color: PALETTE.deepNavy,
                border: `3px solid`,
                borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                boxShadow: `
                  inset 2px 2px 0 rgba(255,255,255,0.5),
                  inset -2px -2px 0 rgba(0,0,0,0.1),
                  4px 4px 0 rgba(0,0,0,0.25)
                `,
              }}
            >
              Settings
            </button>
          </div>
        </div>

        {/* Inset/sunken panels */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Inset Panels (carved in)</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="p-4 rounded-lg font-baskerville"
              style={{
                backgroundColor: PALETTE.cream,
                border: `3px solid`,
                borderColor: `#A89870 #F5EDE0 #F5EDE0 #A89870`,
                boxShadow: `
                  inset 3px 3px 6px rgba(0,0,0,0.15),
                  inset -2px -2px 4px rgba(255,255,255,0.5)
                `,
                color: PALETTE.deepNavy,
              }}
            >
              <p>The flower-mascot blinks at you. "Hello! I'm Helix."</p>
            </div>

            <div
              className="p-4 rounded-lg font-baskerville"
              style={{
                backgroundColor: '#1A2A38',
                border: `3px solid`,
                borderColor: `#0D1520 #3D5060 #3D5060 #0D1520`,
                boxShadow: `
                  inset 3px 3px 6px rgba(0,0,0,0.4),
                  inset -2px -2px 4px rgba(255,255,255,0.05)
                `,
                color: PALETTE.softBeige,
              }}
            >
              <p>The flower-mascot blinks at you. "Hello! I'm Helix."</p>
            </div>
          </div>
        </div>

        {/* Choice buttons - labeled specimen style */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Choice Buttons (chunky selectable)</p>
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: PALETTE.cream,
              border: `3px solid`,
              borderColor: `#A89870 #F5EDE0 #F5EDE0 #A89870`,
              boxShadow: `inset 3px 3px 6px rgba(0,0,0,0.15)`,
            }}
          >
            <div className="flex flex-col gap-3 max-w-xs">
              {SAMPLE_CHOICES.map((c) => (
                <button
                  key={c.index}
                  className="font-nunito font-semibold px-4 py-2 rounded text-left transition-all hover:translate-x-1"
                  style={{
                    background: `linear-gradient(180deg, #F5EDE0 0%, ${PALETTE.softBeige} 100%)`,
                    color: PALETTE.deepNavy,
                    border: `2px solid`,
                    borderColor: `#F5EDE0 ${PALETTE.warmBrown} ${PALETTE.warmBrown} #F5EDE0`,
                    boxShadow: `
                      inset 1px 1px 0 rgba(255,255,255,0.5),
                      2px 2px 0 rgba(0,0,0,0.2)
                    `,
                  }}
                >
                  ▸ {c.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Full title screen mockup - authentic */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Title Screen (full authentic)</p>
          <div
            className="p-8 rounded-xl flex flex-col items-center justify-center min-h-80 relative overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at center, #3D5570 0%, ${PALETTE.deepNavy} 100%)
              `,
              border: `4px solid`,
              borderColor: `#4A6580 #1A2530 #1A2530 #4A6580`,
              boxShadow: `
                inset 0 0 60px rgba(0,0,0,0.3),
                8px 8px 0 rgba(0,0,0,0.4)
              `,
            }}
          >
            {/* Decorative corner accents */}
            <div
              className="absolute top-4 left-4 w-8 h-8 rounded-full"
              style={{
                background: `radial-gradient(circle, ${PALETTE.mutedGold} 0%, #8A7A1A 100%)`,
                boxShadow: `inset 2px 2px 4px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.3)`,
              }}
            />
            <div
              className="absolute top-4 right-4 w-8 h-8 rounded-full"
              style={{
                background: `radial-gradient(circle, ${PALETTE.mutedGold} 0%, #8A7A1A 100%)`,
                boxShadow: `inset 2px 2px 4px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.3)`,
              }}
            />

            <h1
              className="font-baskerville text-4xl mb-2 tracking-wide"
              style={{
                color: PALETTE.softBeige,
                textShadow: `
                  2px 2px 0 rgba(0,0,0,0.5),
                  -1px -1px 0 rgba(255,255,255,0.1)
                `,
              }}
            >
              Scholastic Fair
            </h1>
            <p
              className="font-nunito text-sm mb-8 tracking-widest uppercase"
              style={{ color: PALETTE.institutionalTeal }}
            >
              A Personality Expedition
            </p>

            <div className="flex flex-col gap-4">
              <button
                className="font-nunito font-bold px-8 py-3 rounded-lg text-lg"
                style={{
                  background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 50%, #A8841F 100%)`,
                  color: PALETTE.deepNavy,
                  border: `3px solid`,
                  borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
                  boxShadow: `
                    inset 2px 2px 0 rgba(255,255,255,0.4),
                    inset -2px -2px 0 rgba(0,0,0,0.2),
                    4px 4px 0 rgba(0,0,0,0.4)
                  `,
                  textShadow: '1px 1px 0 rgba(255,255,255,0.3)',
                }}
              >
                ★ New Game
              </button>
              <button
                className="font-nunito font-bold px-8 py-3 rounded-lg text-lg"
                style={{
                  background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
                  color: PALETTE.cream,
                  border: `3px solid`,
                  borderColor: `#9DBDBD #2D5555 #2D5555 #9DBDBD`,
                  boxShadow: `
                    inset 2px 2px 0 rgba(255,255,255,0.3),
                    inset -2px -2px 0 rgba(0,0,0,0.2),
                    4px 4px 0 rgba(0,0,0,0.4)
                  `,
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: FROM VISUAL REFS (utopian scholastic specific)
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          📷 From Visual References — UI as Physical Apparatus
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          Based on notes/visual_refs/. Dark chrome frames, viewport aesthetic, tactile buttons.
        </p>

        {/* Dark chrome frame with viewport */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Control Panel Frame (3D Movie Maker / Toaster Run style)</p>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: `linear-gradient(180deg, #3A3A4A 0%, #2A2A38 50%, #1A1A28 100%)`,
              border: `4px solid`,
              borderColor: `#5A5A6A #1A1A28 #1A1A28 #5A5A6A`,
              boxShadow: `
                inset 0 2px 4px rgba(255,255,255,0.1),
                inset 0 -2px 4px rgba(0,0,0,0.3),
                8px 8px 0 rgba(0,0,0,0.4)
              `,
            }}
          >
            {/* Top tab bar */}
            <div
              className="flex justify-center gap-2 px-4 py-3"
              style={{
                background: `linear-gradient(180deg, #4A4A5A 0%, #3A3A48 100%)`,
                borderBottom: `2px solid #2A2A38`,
              }}
            >
              {['STORY', 'CHOICES', 'RESULTS'].map((tab, i) => (
                <button
                  key={tab}
                  className="font-nunito font-bold text-xs px-4 py-2 rounded"
                  style={{
                    background: i === 0
                      ? `linear-gradient(180deg, #6A6A7A 0%, #4A4A5A 100%)`
                      : `linear-gradient(180deg, #3A3A4A 0%, #2A2A38 100%)`,
                    color: i === 0 ? PALETTE.cream : '#8A8A9A',
                    border: `2px solid`,
                    borderColor: i === 0
                      ? `#8A8A9A #2A2A38 #2A2A38 #8A8A9A`
                      : `#4A4A5A #1A1A28 #1A1A28 #4A4A5A`,
                    boxShadow: i === 0
                      ? `inset 1px 1px 0 rgba(255,255,255,0.2)`
                      : `inset -1px -1px 0 rgba(0,0,0,0.3)`,
                    textShadow: i === 0 ? '1px 1px 0 rgba(0,0,0,0.5)' : 'none',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Viewport area (where content goes) */}
            <div
              className="m-4 p-6 rounded-lg"
              style={{
                background: PALETTE.cream,
                border: `3px solid`,
                borderColor: `#1A1A28 #5A5A6A #5A5A6A #1A1A28`,
                boxShadow: `inset 4px 4px 8px rgba(0,0,0,0.2)`,
              }}
            >
              <p className="font-baskerville text-lg" style={{ color: PALETTE.deepNavy }}>
                The flower-mascot blinks at you with its googly eyes.
              </p>
              <p className="font-baskerville mt-2" style={{ color: PALETTE.warmBrown }}>
                "Hello! I'm Helix. Would you like to play?"
              </p>
            </div>

            {/* Bottom toolbar */}
            <div
              className="flex justify-between items-center px-4 py-3"
              style={{
                background: `linear-gradient(180deg, #3A3A48 0%, #2A2A38 100%)`,
                borderTop: `2px solid #4A4A5A`,
              }}
            >
              <div className="flex gap-2">
                {['◀', '▶', '⏸'].map((icon) => (
                  <button
                    key={icon}
                    className="w-10 h-10 rounded flex items-center justify-center text-lg"
                    style={{
                      background: `linear-gradient(180deg, #4A4A5A 0%, #2A2A38 100%)`,
                      color: PALETTE.cream,
                      border: `2px solid`,
                      borderColor: `#6A6A7A #1A1A28 #1A1A28 #6A6A7A`,
                      boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.1)`,
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <div
                className="px-3 py-1 rounded font-mono text-sm"
                style={{
                  background: '#1A1A28',
                  color: '#4AE04A',
                  border: `2px solid #0A0A18`,
                  boxShadow: `inset 2px 2px 4px rgba(0,0,0,0.5)`,
                }}
              >
                SCENE 01
              </div>
            </div>
          </div>
        </div>

        {/* Brass porthole / museum frame */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Brass Porthole Frame (Hidden Object / I Spy style)</p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #8B7355 0%, #6B5335 50%, #4B3315 100%)`,
              padding: '12px',
              border: `4px solid`,
              borderColor: `#AB9375 #3B2305 #3B2305 #AB9375`,
              boxShadow: `
                inset 0 2px 4px rgba(255,255,255,0.2),
                inset 0 -2px 4px rgba(0,0,0,0.3),
                8px 8px 0 rgba(0,0,0,0.4)
              `,
            }}
          >
            {/* Inner viewport */}
            <div
              className="rounded-xl p-6"
              style={{
                background: PALETTE.deepNavy,
                border: `3px solid`,
                borderColor: `#3B2305 #AB9375 #AB9375 #3B2305`,
                boxShadow: `inset 4px 4px 12px rgba(0,0,0,0.5)`,
              }}
            >
              <p className="font-baskerville text-lg" style={{ color: PALETTE.softBeige }}>
                The flower-mascot blinks at you with its googly eyes.
              </p>
              <p className="font-baskerville mt-2 italic" style={{ color: PALETTE.institutionalTeal }}>
                "Hello! I'm Helix. Would you like to play?"
              </p>
            </div>

            {/* Bottom text panel */}
            <div
              className="mt-3 p-3 rounded-lg text-center"
              style={{
                background: PALETTE.cream,
                border: `2px solid`,
                borderColor: `#3B2305 #AB9375 #AB9375 #3B2305`,
              }}
            >
              <p className="font-baskerville text-sm" style={{ color: PALETTE.deepNavy }}>
                ▸ Number Safari &nbsp;&nbsp; ▸ Letter Garden &nbsp;&nbsp; ▸ I don't want to play
              </p>
            </div>
          </div>
        </div>

        {/* Chunky plastic frame with rivets */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Plastic Frame with Rivets (Kid Pix / Creative Workshop style)</p>
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: `linear-gradient(180deg, ${PALETTE.institutionalTeal} 0%, #3D6B6B 50%, #2D5555 100%)`,
              padding: '16px',
              border: `5px solid`,
              borderColor: `#7BA3A3 #2D4545 #2D4545 #7BA3A3`,
              boxShadow: `
                inset 0 3px 6px rgba(255,255,255,0.2),
                inset 0 -3px 6px rgba(0,0,0,0.3),
                10px 10px 0 rgba(0,0,0,0.35)
              `,
            }}
          >
            {/* Corner rivets */}
            {[
              { top: 8, left: 8 },
              { top: 8, right: 8 },
              { bottom: 8, left: 8 },
              { bottom: 8, right: 8 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  ...pos,
                  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                  boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
                }}
              />
            ))}

            {/* Inner viewport */}
            <div
              className="rounded-xl p-6"
              style={{
                background: PALETTE.cream,
                border: `4px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
              }}
            >
              <p className="font-baskerville text-lg" style={{ color: PALETTE.deepNavy }}>
                The flower-mascot blinks at you with its googly eyes.
              </p>
              <p className="font-baskerville mt-2" style={{ color: PALETTE.warmBrown }}>
                "Hello! I'm Helix. Would you like to play?"
              </p>

              {/* Choice buttons */}
              <div className="mt-4 flex flex-col gap-2">
                {SAMPLE_CHOICES.map((c) => (
                  <button
                    key={c.index}
                    className="font-nunito font-semibold px-4 py-2 rounded-lg text-left"
                    style={{
                      background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                      boxShadow: `
                        inset 1px 1px 0 rgba(255,255,255,0.5),
                        3px 3px 0 rgba(0,0,0,0.2)
                      `,
                    }}
                  >
                    ▸ {c.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Warm wood / museum frame */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-3">Museum Wood Frame (Encarta MindMaze / Art Gallery style)</p>
          <div
            className="rounded-lg overflow-hidden"
            style={{
              background: `linear-gradient(180deg, #5C4030 0%, #3D2A1A 100%)`,
              padding: '8px',
              border: `3px solid`,
              borderColor: `#7C6050 #2D1A0A #2D1A0A #7C6050`,
              boxShadow: `8px 8px 0 rgba(0,0,0,0.4)`,
            }}
          >
            {/* Inner content - mostly image, minimal UI */}
            <div
              className="rounded p-8"
              style={{
                background: `linear-gradient(180deg, #1A1510 0%, #0A0805 100%)`,
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p className="font-baskerville text-xl text-center" style={{ color: PALETTE.softBeige }}>
                The flower-mascot blinks at you.
              </p>
              <p className="font-baskerville italic mt-2" style={{ color: PALETTE.warmBrown }}>
                "Hello! I'm Helix."
              </p>
            </div>

            {/* Minimal bottom bar */}
            <div
              className="flex justify-between items-center mt-2 px-2 py-1"
              style={{ color: PALETTE.softBeige }}
            >
              <span className="font-mono text-xs" style={{ color: PALETTE.institutionalTeal }}>
                Plaza : Perspective : <span style={{ color: PALETTE.mutedGold }}>Techniques</span>
              </span>
              <div className="flex gap-2">
                {['Replay', 'Bkgmd', 'Stats'].map((btn) => (
                  <button
                    key={btn}
                    className="font-nunito text-xs px-2 py-1 rounded"
                    style={{
                      background: `linear-gradient(180deg, #5C4030 0%, #3D2A1A 100%)`,
                      color: PALETTE.softBeige,
                      border: `1px solid`,
                      borderColor: `#7C6050 #2D1A0A #2D1A0A #7C6050`,
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: FULL GAME UI MOCKUP
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          🎮 Full Game UI Mockup — Plastic Frame Style
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          Black scene area + right sidebar with riveted plastic frame.
        </p>

        {/* Full-width game mockup */}
        <div
          className="rounded-xl overflow-hidden flex"
          style={{
            height: '500px',
            background: '#000',
            border: `4px solid #1a1a1a`,
            boxShadow: `8px 8px 0 rgba(0,0,0,0.5)`,
          }}
        >
          {/* Left: Scene area (black, where background image would go) */}
          <div
            className="flex-1 flex items-center justify-center relative"
            style={{ background: '#0a0a0a' }}
          >
            <p className="text-gray-600 font-mono text-sm">[scene background here]</p>
          </div>

          {/* Right: Sidebar panel with plastic frame */}
          <div
            className="w-80 flex flex-col relative"
            style={{
              background: `linear-gradient(180deg, ${PALETTE.institutionalTeal} 0%, #3D6B6B 50%, #2D5555 100%)`,
              borderLeft: `5px solid`,
              borderColor: `#7BA3A3`,
              boxShadow: `
                inset 3px 0 6px rgba(255,255,255,0.15),
                inset -3px 0 6px rgba(0,0,0,0.2)
              `,
            }}
          >
            {/* Corner rivets */}
            {[
              { top: 8, left: 8 },
              { top: 8, right: 8 },
              { bottom: 8, left: 8 },
              { bottom: 8, right: 8 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full z-10"
                style={{
                  ...pos,
                  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                  boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
                }}
              />
            ))}

            {/* Inner content area */}
            <div
              className="m-3 flex-1 flex flex-col rounded-lg overflow-hidden"
              style={{
                background: PALETTE.cream,
                border: `4px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
              }}
            >
              {/* Scrollable text area */}
              <div className="flex-1 p-4 overflow-y-auto">
                <p className="font-baskerville text-base leading-relaxed mb-3" style={{ color: PALETTE.deepNavy }}>
                  The flower-mascot blinks at you with its googly eyes. Its petals rotate slowly, casting soft shadows on the nursery wall.
                </p>
                <p className="font-baskerville text-base leading-relaxed mb-3" style={{ color: PALETTE.deepNavy }}>
                  <span style={{ color: PALETTE.institutionalTeal }}>"Hello!"</span> it chirps. <span style={{ color: PALETTE.institutionalTeal }}>"I'm Helix. I'll be your learning companion."</span>
                </p>
                <p className="font-baskerville text-base leading-relaxed" style={{ color: PALETTE.deepNavy }}>
                  It gestures toward two floating icons — a jungle full of numbers, and a garden sprouting letters.
                </p>
              </div>

              {/* Choice buttons area */}
              <div
                className="p-3 flex flex-col gap-2"
                style={{
                  background: `linear-gradient(180deg, #E8DCC8 0%, ${PALETTE.softBeige} 100%)`,
                  borderTop: `3px solid`,
                  borderColor: `#2D4545`,
                }}
              >
                {[
                  'Number Safari sounds fun.',
                  'Letter Garden, please.',
                  '"I don\'t want to play."',
                ].map((choice, i) => (
                  <button
                    key={i}
                    className="font-nunito font-semibold px-3 py-2 rounded-lg text-left text-sm transition-all hover:translate-x-1"
                    style={{
                      background: `linear-gradient(180deg, #F5EDE0 0%, ${PALETTE.softBeige} 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                      boxShadow: `
                        inset 1px 1px 0 rgba(255,255,255,0.5),
                        2px 2px 0 rgba(0,0,0,0.15)
                      `,
                    }}
                  >
                    ▸ {choice}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom status bar */}
            <div
              className="mx-3 mb-3 px-3 py-2 rounded-lg flex justify-between items-center"
              style={{
                background: `linear-gradient(180deg, #2D4545 0%, #1D3535 100%)`,
                border: `2px solid`,
                borderColor: `#3D5555 #0D2525 #0D2525 #3D5555`,
                boxShadow: `inset 2px 2px 4px rgba(0,0,0,0.3)`,
              }}
            >
              <span
                className="font-mono text-xs"
                style={{ color: PALETTE.institutionalTeal }}
              >
                CHAPTER 1
              </span>
              <span
                className="font-mono text-xs"
                style={{ color: PALETTE.mutedGold }}
              >
                THE TUTOR
              </span>
            </div>
          </div>
        </div>

        {/* Mobile variant */}
        <div className="mt-8">
          <p className="text-xs text-gray-400 mb-3">Mobile Layout (stacked)</p>
          <div
            className="rounded-xl overflow-hidden flex flex-col mx-auto"
            style={{
              width: '320px',
              height: '568px',
              background: '#000',
              border: `4px solid #1a1a1a`,
              boxShadow: `8px 8px 0 rgba(0,0,0,0.5)`,
            }}
          >
            {/* Top: Scene area */}
            <div
              className="flex-1 flex items-center justify-center"
              style={{ background: '#0a0a0a' }}
            >
              <p className="text-gray-600 font-mono text-xs">[scene]</p>
            </div>

            {/* Bottom: Text panel with plastic frame */}
            <div
              className="relative"
              style={{
                background: `linear-gradient(180deg, ${PALETTE.institutionalTeal} 0%, #3D6B6B 100%)`,
                borderTop: `4px solid #7BA3A3`,
                padding: '8px',
              }}
            >
              {/* Mini rivets */}
              {[
                { top: 4, left: 4 },
                { top: 4, right: 4 },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    ...pos,
                    background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 100%)`,
                    boxShadow: `inset 1px 1px 1px rgba(255,255,255,0.3)`,
                  }}
                />
              ))}

              <div
                className="rounded-lg p-3"
                style={{
                  background: PALETTE.cream,
                  border: `3px solid`,
                  borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                  boxShadow: `inset 2px 2px 4px rgba(0,0,0,0.1)`,
                }}
              >
                <p className="font-baskerville text-sm mb-2" style={{ color: PALETTE.deepNavy }}>
                  The flower-mascot blinks at you.
                </p>
                <p className="font-baskerville text-sm mb-3" style={{ color: PALETTE.institutionalTeal }}>
                  "Hello! I'm Helix."
                </p>
                <div className="flex flex-col gap-1">
                  {['Number Safari', 'Letter Garden'].map((choice, i) => (
                    <button
                      key={i}
                      className="font-nunito font-semibold px-2 py-1 rounded text-left text-xs"
                      style={{
                        background: `linear-gradient(180deg, #F5EDE0 0%, ${PALETTE.softBeige} 100%)`,
                        color: PALETTE.deepNavy,
                        border: `2px solid`,
                        borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                        boxShadow: `1px 1px 0 rgba(0,0,0,0.15)`,
                      }}
                    >
                      ▸ {choice}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: RESULTS SCREEN EXPLORATIONS
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          📊 Results Screen Wireframes
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          Exploring: axis explanations, dossier vibe, John Lilly biocomputer energy.
        </p>

        <div className="grid gap-8">
          {/* Option A: Compact Card (current approach, shareable) */}
          <div>
            <p className="text-xs text-gray-400 mb-3">Option A: Compact Card (current-ish, shareable)</p>
            <div
              className="rounded-xl p-6 max-w-sm mx-auto"
              style={{
                background: PALETTE.cream,
                border: `4px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `8px 8px 0 rgba(0,0,0,0.3)`,
              }}
            >
              {/* Constellation placeholder */}
              <div
                className="w-32 h-32 mx-auto rounded-full mb-4 flex items-center justify-center"
                style={{
                  background: PALETTE.deepNavy,
                  border: `3px solid ${PALETTE.warmBrown}`,
                }}
              >
                <span className="text-4xl">✧</span>
              </div>
              <h2 className="font-baskerville text-2xl text-center" style={{ color: PALETTE.deepNavy }}>
                The Wanderer
              </h2>
              <p className="font-baskerville text-sm italic text-center mt-2" style={{ color: PALETTE.warmBrown }}>
                "Charting paths between worlds, belonging fully to none."
              </p>

              {/* Mini axes */}
              <div className="mt-4 space-y-1">
                {['Populist', 'Illegible', 'Symphonic', 'Xeno'].map((axis) => (
                  <div key={axis} className="flex items-center gap-2 text-xs">
                    <div className="w-16 h-2 rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${Math.random() * 60 + 40}%`, background: PALETTE.institutionalTeal }}
                      />
                    </div>
                    <span style={{ color: PALETTE.deepNavy }}>{axis}</span>
                  </div>
                ))}
              </div>

              {/* Seed phrase */}
              <div
                className="mt-4 p-2 rounded text-center font-mono text-xs"
                style={{ background: PALETTE.deepNavy, color: PALETTE.mutedGold }}
              >
                oracle-dendrite-flux
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Pro: Shareable, fits in a screenshot. Con: No room for explanation.
            </p>
          </div>

          {/* Option B: Full Dossier (scrollable, detailed) */}
          <div>
            <p className="text-xs text-gray-400 mb-3">Option B: Full Dossier (scrollable page)</p>
            <div
              className="rounded-xl overflow-hidden max-w-lg mx-auto"
              style={{
                background: PALETTE.cream,
                border: `4px solid ${PALETTE.warmBrown}`,
                boxShadow: `8px 8px 0 rgba(0,0,0,0.3)`,
                maxHeight: '500px',
              }}
            >
              {/* Header bar */}
              <div
                className="px-4 py-2 flex justify-between items-center"
                style={{ background: PALETTE.deepNavy }}
              >
                <span className="font-mono text-xs" style={{ color: PALETTE.institutionalTeal }}>
                  SUBJECT DOSSIER
                </span>
                <span className="font-mono text-xs" style={{ color: PALETTE.mutedGold }}>
                  FILE #2847
                </span>
              </div>

              <div className="p-6 space-y-6">
                {/* Constellation + name */}
                <div className="flex gap-4 items-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: PALETTE.deepNavy, border: `2px solid ${PALETTE.warmBrown}` }}
                  >
                    <span className="text-2xl">✧</span>
                  </div>
                  <div>
                    <h2 className="font-baskerville text-xl" style={{ color: PALETTE.deepNavy }}>
                      The Wanderer
                    </h2>
                    <p className="font-baskerville text-sm italic" style={{ color: PALETTE.warmBrown }}>
                      "Charting paths between worlds."
                    </p>
                  </div>
                </div>

                {/* Detailed axis breakdown */}
                <div>
                  <h3 className="font-nunito font-bold text-xs uppercase tracking-wide mb-3" style={{ color: PALETTE.institutionalTeal }}>
                    Axis Analysis
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded" style={{ background: 'rgba(91,138,138,0.1)' }}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-nunito font-bold text-sm" style={{ color: PALETTE.deepNavy }}>
                          Elitist ← → Populist
                        </span>
                        <span className="font-mono text-xs" style={{ color: PALETTE.mutedGold }}>+3</span>
                      </div>
                      <p className="font-baskerville text-xs" style={{ color: PALETTE.warmBrown }}>
                        You lean toward distributed wisdom over concentrated expertise. Trust in crowds, not credentials.
                      </p>
                    </div>
                    <div className="p-3 rounded" style={{ background: 'rgba(91,138,138,0.1)' }}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-nunito font-bold text-sm" style={{ color: PALETTE.deepNavy }}>
                          Legible ← → Illegible
                        </span>
                        <span className="font-mono text-xs" style={{ color: PALETTE.mutedGold }}>-2</span>
                      </div>
                      <p className="font-baskerville text-xs" style={{ color: PALETTE.warmBrown }}>
                        You prefer transparency and clear systems. The shadows hold less appeal than the light.
                      </p>
                    </div>
                    <p className="text-xs text-center" style={{ color: PALETTE.warmBrown }}>
                      [... 6 more axes ...]
                    </p>
                  </div>
                </div>

                {/* Seed phrase */}
                <div
                  className="p-3 rounded text-center"
                  style={{ background: PALETTE.deepNavy }}
                >
                  <p className="font-mono text-xs mb-1" style={{ color: PALETTE.institutionalTeal }}>
                    RECOVERY PHRASE
                  </p>
                  <p className="font-mono" style={{ color: PALETTE.mutedGold }}>
                    oracle-dendrite-flux
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Pro: Room for explanations. Con: Long, less shareable.
            </p>
          </div>

          {/* Option C: Biocomputer Terminal (John Lilly vibe) */}
          <div>
            <p className="text-xs text-gray-400 mb-3">Option C: Biocomputer Terminal (John Lilly / clinical)</p>
            <div
              className="rounded-lg overflow-hidden max-w-lg mx-auto font-mono text-sm"
              style={{
                background: '#0a0a0a',
                border: `3px solid #333`,
                boxShadow: `
                  inset 0 0 60px rgba(0,100,80,0.1),
                  8px 8px 0 rgba(0,0,0,0.5)
                `,
              }}
            >
              {/* Scanline overlay effect (implied) */}
              <div className="p-6 space-y-4" style={{ color: '#4AE0A0' }}>
                <div className="flex justify-between border-b border-green-900 pb-2">
                  <span>BIOCOMPUTER READOUT</span>
                  <span style={{ color: '#2A8060' }}>v2.47</span>
                </div>

                <div>
                  <span style={{ color: '#2A8060' }}>SUBJECT:</span> HUMAN_2847
                  <br />
                  <span style={{ color: '#2A8060' }}>CLASSIFICATION:</span>{' '}
                  <span style={{ color: PALETTE.mutedGold }}>THE WANDERER</span>
                </div>

                <div className="border border-green-900 p-3 rounded">
                  <p style={{ color: '#2A8060' }}>// METAPROGRAM ANALYSIS</p>
                  <p className="mt-2">
                    Subject displays <span style={{ color: PALETTE.mutedGold }}>POPULIST</span> orientation.
                    Prefers distributed cognition over hierarchical knowledge structures.
                    Trust coefficient: HIGH for collective intelligence.
                  </p>
                  <p className="mt-2">
                    <span style={{ color: PALETTE.mutedGold }}>ILLEGIBILITY</span> index: MODERATE.
                    Subject maintains operational opacity while seeking systemic transparency in others.
                  </p>
                </div>

                <div className="border border-green-900 p-3 rounded">
                  <p style={{ color: '#2A8060' }}>// RECOVERY SEED</p>
                  <p className="mt-1" style={{ color: PALETTE.mutedGold }}>
                    &gt; oracle-dendrite-flux
                  </p>
                  <p className="mt-1" style={{ color: '#2A8060' }}>
                    Store in secure wetware. Do not expose to hostile systems.
                  </p>
                </div>

                <div className="text-xs" style={{ color: '#2A8060' }}>
                  [END READOUT] — For authorized biocomputers only.
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Pro: Distinctive, fits the tone. Con: Breaks from teal plastic.
            </p>
          </div>

          {/* Option D: Hybrid — Card + Expandable Details */}
          <div>
            <p className="text-xs text-gray-400 mb-3">Option D: Hybrid — Shareable card + "See full dossier" expand</p>
            <div className="max-w-md mx-auto">
              {/* Compact card (same as A) */}
              <div
                className="rounded-xl p-6"
                style={{
                  background: PALETTE.cream,
                  border: `4px solid`,
                  borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                  boxShadow: `8px 8px 0 rgba(0,0,0,0.3)`,
                }}
              >
                <div
                  className="w-24 h-24 mx-auto rounded-full mb-3 flex items-center justify-center"
                  style={{ background: PALETTE.deepNavy, border: `3px solid ${PALETTE.warmBrown}` }}
                >
                  <span className="text-3xl">✧</span>
                </div>
                <h2 className="font-baskerville text-xl text-center" style={{ color: PALETTE.deepNavy }}>
                  The Wanderer
                </h2>
                <p className="font-baskerville text-sm italic text-center mt-1" style={{ color: PALETTE.warmBrown }}>
                  "Charting paths between worlds."
                </p>

                <div
                  className="mt-4 p-2 rounded text-center font-mono text-xs"
                  style={{ background: PALETTE.deepNavy, color: PALETTE.mutedGold }}
                >
                  oracle-dendrite-flux
                </div>

                {/* Expand button */}
                <button
                  className="w-full mt-4 py-2 rounded font-nunito font-semibold text-sm"
                  style={{
                    background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 100%)`,
                    color: PALETTE.cream,
                    border: `2px solid`,
                    borderColor: `#9DBDBD #3D6B6B #3D6B6B #9DBDBD`,
                  }}
                >
                  ▼ View Full Dossier
                </button>
              </div>

              {/* Expanded section (would animate open) */}
              <div
                className="mt-2 rounded-xl p-4"
                style={{
                  background: PALETTE.cream,
                  border: `3px solid ${PALETTE.warmBrown}`,
                  borderTop: 'none',
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              >
                <h3 className="font-nunito font-bold text-xs uppercase tracking-wide mb-3" style={{ color: PALETTE.institutionalTeal }}>
                  Your Axes Explained
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded" style={{ background: 'rgba(91,138,138,0.1)' }}>
                    <span className="font-bold" style={{ color: PALETTE.deepNavy }}>Populist (+3)</span>
                    <span style={{ color: PALETTE.warmBrown }}> — Trust in distributed wisdom over expertise.</span>
                  </div>
                  <div className="p-2 rounded" style={{ background: 'rgba(91,138,138,0.1)' }}>
                    <span className="font-bold" style={{ color: PALETTE.deepNavy }}>Illegible (-2)</span>
                    <span style={{ color: PALETTE.warmBrown }}> — You prefer transparency and clear systems.</span>
                  </div>
                  <p className="text-center" style={{ color: PALETTE.warmBrown }}>[... more axes ...]</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Pro: Best of both — shareable + detailed. Con: More UI complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: BIOCOMPUTER DOSSIER MOCKUPS (new direction)
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          🧠 Biocomputer Dossier — New Direction
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          John Lilly "Programming the Human Biocomputer" energy. Teal frame contains cream document.
          Clinical + cosmic. Third-person assessment notes.
        </p>

        {/* Variation 1: Full diagnostic terminal */}
        <div className="mb-10">
          <p className="text-xs text-gray-400 mb-3">
            Variation 1: Diagnostic Terminal (teal frame + cream document)
          </p>
          <div
            className="rounded-2xl overflow-hidden relative max-w-md mx-auto"
            style={{
              background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
              padding: '16px',
              border: `5px solid`,
              borderColor: `#9DBDBD #2D4545 #2D4545 #9DBDBD`,
              boxShadow: `
                inset 0 3px 6px rgba(255,255,255,0.2),
                inset 0 -3px 6px rgba(0,0,0,0.3),
                10px 10px 0 rgba(0,0,0,0.35)
              `,
            }}
          >
            {/* Corner rivets */}
            {[
              { top: 8, left: 8 },
              { top: 8, right: 8 },
              { bottom: 8, left: 8 },
              { bottom: 8, right: 8 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  ...pos,
                  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                  boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
                }}
              />
            ))}

            {/* Inner document viewport */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: PALETTE.cream,
                border: `4px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
              }}
            >
              {/* Document header */}
              <div
                className="px-4 py-2 text-center"
                style={{
                  background: `linear-gradient(180deg, #E8DCC8 0%, ${PALETTE.softBeige} 100%)`,
                  borderBottom: `2px solid ${PALETTE.warmBrown}`,
                }}
              >
                <p
                  className="font-mono text-xs tracking-[0.3em] uppercase"
                  style={{ color: PALETTE.deepNavy }}
                >
                  Biocomputer Diagnostic
                </p>
              </div>

              {/* Document body */}
              <div className="p-5 space-y-4">
                {/* Sigil placeholder */}
                <div
                  className="w-24 h-24 mx-auto rounded-lg flex items-center justify-center"
                  style={{
                    background: PALETTE.cream,
                    border: `2px solid ${PALETTE.institutionalTeal}`,
                  }}
                >
                  <span style={{ color: PALETTE.institutionalTeal, fontSize: '48px' }}>◇</span>
                </div>

                {/* Classification */}
                <div className="text-center">
                  <p
                    className="font-mono text-xs uppercase tracking-wide"
                    style={{ color: PALETTE.warmBrown }}
                  >
                    Classification
                  </p>
                  <h2
                    className="font-baskerville text-xl mt-1"
                    style={{ color: PALETTE.deepNavy }}
                  >
                    THE ARCHITECT OF ENDINGS
                  </h2>
                </div>

                {/* Assessment notes */}
                <div
                  className="p-3 rounded"
                  style={{ background: 'rgba(91,138,138,0.08)' }}
                >
                  <p
                    className="font-baskerville text-sm leading-relaxed"
                    style={{ color: PALETTE.deepNavy }}
                  >
                    Builds with full knowledge of impermanence. High clarity, low illusion.
                    May be perceived as cold by symphonic types. Not cold—just unbuffered.
                  </p>
                </div>

                {/* Metaprogram calibration bars */}
                <div>
                  <p
                    className="font-mono text-xs uppercase tracking-wide mb-2"
                    style={{ color: PALETTE.warmBrown }}
                  >
                    Metaprogram Calibration
                  </p>
                  <div className="space-y-2">
                    {[
                      { left: 'sovereign', right: 'symphonic', value: 75 },
                      { left: 'accel', right: 'steward', value: 30 },
                      { left: 'builder', right: 'wanderer', value: 85 },
                      { left: 'elitist', right: 'populist', value: 45 },
                    ].map((axis, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span
                          className="w-16 text-right font-mono"
                          style={{ color: PALETTE.deepNavy }}
                        >
                          {axis.left}
                        </span>
                        <div
                          className="flex-1 h-2 rounded-full relative"
                          style={{ background: 'rgba(91,138,138,0.2)' }}
                        >
                          <div
                            className="absolute h-full rounded-full"
                            style={{
                              width: `${axis.value}%`,
                              background: `linear-gradient(90deg, ${PALETTE.institutionalTeal} 0%, ${PALETTE.mutedGold} 100%)`,
                            }}
                          />
                        </div>
                        <span
                          className="w-16 font-mono"
                          style={{ color: PALETTE.deepNavy }}
                        >
                          {axis.right}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unit ID / Seed phrase */}
                <div
                  className="p-3 rounded text-center"
                  style={{
                    background: PALETTE.deepNavy,
                  }}
                >
                  <p
                    className="font-mono text-xs uppercase"
                    style={{ color: PALETTE.institutionalTeal }}
                  >
                    Unit Identifier
                  </p>
                  <p
                    className="font-mono mt-1"
                    style={{ color: PALETTE.mutedGold }}
                  >
                    oak-river-ghost
                  </p>
                </div>

                {/* Status footer */}
                <div className="flex justify-between items-center pt-2 border-t" style={{ borderColor: PALETTE.warmBrown }}>
                  <span className="font-mono text-xs" style={{ color: PALETTE.warmBrown }}>
                    STATUS: NOMINAL
                  </span>
                  <span className="font-mono text-xs" style={{ color: PALETTE.warmBrown }}>
                    FILE #4F2A
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="mt-3 flex gap-2">
              <button
                className="flex-1 font-nunito font-bold py-2 rounded-lg text-sm"
                style={{
                  background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                  color: PALETTE.deepNavy,
                  border: `3px solid`,
                  borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                  boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.2)`,
                }}
              >
                ⬚ Copy Card
              </button>
              <button
                className="flex-1 font-nunito font-bold py-2 rounded-lg text-sm"
                style={{
                  background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 100%)`,
                  color: PALETTE.deepNavy,
                  border: `3px solid`,
                  borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
                  boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.2)`,
                }}
              >
                → Reading Room
              </button>
            </div>
          </div>
        </div>

        {/* Variation 2: Teletype / typewriter feel — WITH HARDWARE CHROME */}
        <div className="mb-10">
          <p className="text-xs text-gray-400 mb-3">
            Variation 2: Diagnostic Terminal (hardware chrome + teletype output)
          </p>
          <div
            className="rounded-2xl overflow-hidden relative max-w-md mx-auto"
            style={{
              background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
              padding: '16px',
              paddingTop: '12px',
              border: `5px solid`,
              borderColor: `#9DBDBD #2D4545 #2D4545 #9DBDBD`,
              boxShadow: `
                inset 0 3px 6px rgba(255,255,255,0.2),
                inset 0 -3px 6px rgba(0,0,0,0.3),
                10px 10px 0 rgba(0,0,0,0.35)
              `,
            }}
          >
            {/* ═══ TOP HARDWARE BAR ═══ */}
            <div className="flex items-center justify-between mb-3 px-1">
              {/* Left: Status LEDs */}
              <div className="flex items-center gap-2">
                {[
                  { color: '#4AE04A', label: 'PWR' },
                  { color: '#4AE04A', label: 'RDY' },
                  { color: PALETTE.mutedGold, label: 'DATA' },
                ].map((led, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: led.color,
                        boxShadow: `0 0 4px ${led.color}, inset 1px 1px 1px rgba(255,255,255,0.5)`,
                      }}
                    />
                    <span className="text-[8px] mt-0.5 font-mono" style={{ color: '#9DBDBD' }}>
                      {led.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Center: Model label (embossed) */}
              <div
                className="px-3 py-1 rounded font-mono text-[10px] tracking-wider"
                style={{
                  background: 'linear-gradient(180deg, #4D7A7A 0%, #3D6B6B 100%)',
                  color: '#9DBDBD',
                  border: '1px solid #2D5555',
                  boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.3)',
                  textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
                }}
              >
                LILLY-7 DIAGNOSTIC
              </div>

              {/* Right: File number LCD */}
              <div
                className="px-2 py-1 rounded font-mono text-xs"
                style={{
                  background: '#1a2a28',
                  color: '#4AE04A',
                  border: '2px solid #0D1A18',
                  boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.5)',
                  fontFamily: 'monospace',
                }}
              >
                #4F2A
              </div>
            </div>

            {/* Corner rivets */}
            {[
              { top: 42, left: 8 },
              { top: 42, right: 8 },
              { bottom: 56, left: 8 },
              { bottom: 56, right: 8 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  ...pos,
                  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                  boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
                }}
              />
            ))}

            {/* Paper document viewport */}
            <div
              className="rounded-xl p-5 font-mono text-sm"
              style={{
                background: PALETTE.cream,
                border: `4px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
                color: PALETTE.deepNavy,
              }}
            >
              {/* Header */}
              <div className="border-b-2 pb-2 mb-4" style={{ borderColor: PALETTE.warmBrown }}>
                <p className="tracking-[0.2em] text-center">
                  ══════════════════════════
                </p>
                <p className="text-center tracking-[0.3em] text-xs mt-1">
                  BIOCOMPUTER DIAGNOSTIC
                </p>
                <p className="tracking-[0.2em] text-center">
                  ══════════════════════════
                </p>
              </div>

              {/* Sigil + classification inline */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 rounded flex items-center justify-center shrink-0"
                  style={{ border: `1px solid ${PALETTE.institutionalTeal}` }}
                >
                  <span style={{ color: PALETTE.institutionalTeal, fontSize: '32px' }}>◇</span>
                </div>
                <div>
                  <p className="text-xs" style={{ color: PALETTE.warmBrown }}>
                    CLASSIFICATION:
                  </p>
                  <p className="text-base font-bold">
                    THE ARCHITECT
                  </p>
                  <p className="text-base font-bold">
                    OF ENDINGS
                  </p>
                </div>
              </div>

              {/* Assessment block */}
              <div className="mb-4 p-2" style={{ background: 'rgba(91,138,138,0.08)' }}>
                <p className="text-xs mb-1" style={{ color: PALETTE.warmBrown }}>
                  &gt; ASSESSMENT:
                </p>
                <p className="text-xs leading-relaxed">
                  Builds with full knowledge of
                  <br />
                  impermanence. High clarity,
                  <br />
                  low illusion. Not cold—just
                  <br />
                  unbuffered.
                </p>
              </div>

              {/* Calibration as text */}
              <div className="mb-4">
                <p className="text-xs mb-2" style={{ color: PALETTE.warmBrown }}>
                  &gt; METAPROGRAM CALIBRATION:
                </p>
                <div className="text-xs space-y-1 pl-2">
                  <p>sovereign ████████░░ symphonic</p>
                  <p>accel     ███░░░░░░░ steward</p>
                  <p>builder   █████████░ wanderer</p>
                  <p>elitist   ████░░░░░░ populist</p>
                </div>
              </div>

              {/* Seed */}
              <div className="border-t-2 pt-3 mt-3" style={{ borderColor: PALETTE.warmBrown }}>
                <p className="text-xs" style={{ color: PALETTE.warmBrown }}>
                  &gt; UNIT ID:
                </p>
                <p style={{ color: PALETTE.mutedGold }}>
                  oak-river-ghost
                </p>
                <p className="text-xs mt-2" style={{ color: PALETTE.warmBrown }}>
                  STATUS: NOMINAL
                </p>
              </div>
            </div>

            {/* ═══ BOTTOM HARDWARE CONTROL PANEL ═══ */}
            <div
              className="mt-3 p-2 rounded-lg flex items-center justify-between"
              style={{
                background: 'linear-gradient(180deg, #3D6B6B 0%, #2D5555 100%)',
                border: '2px solid',
                borderColor: '#4D7A7A #1D4545 #1D4545 #4D7A7A',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              {/* Left: Hardware buttons */}
              <div className="flex gap-1">
                {[
                  { label: 'PRINT', active: false },
                  { label: 'EJECT', active: false },
                ].map((btn, i) => (
                  <button
                    key={i}
                    className="px-2 py-1 rounded font-mono text-[9px] tracking-wide"
                    style={{
                      background: btn.active
                        ? 'linear-gradient(180deg, #5D8A8A 0%, #4D7A7A 100%)'
                        : 'linear-gradient(180deg, #4D7A7A 0%, #3D6B6B 100%)',
                      color: '#9DBDBD',
                      border: '2px solid',
                      borderColor: '#5D8A8A #2D5555 #2D5555 #5D8A8A',
                      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.1), 1px 1px 2px rgba(0,0,0,0.3)',
                      textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Center: Main action buttons */}
              <div className="flex gap-2">
                <button
                  className="px-3 py-1.5 rounded font-mono text-xs font-bold"
                  style={{
                    background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                    color: PALETTE.deepNavy,
                    border: `2px solid`,
                    borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                    boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.3)`,
                  }}
                >
                  ⬚ COPY
                </button>
                <button
                  className="px-3 py-1.5 rounded font-mono text-xs font-bold"
                  style={{
                    background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 100%)`,
                    color: PALETTE.deepNavy,
                    border: `2px solid`,
                    borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
                    boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.3)`,
                  }}
                >
                  ENTER →
                </button>
              </div>

              {/* Right: Status indicator */}
              <div className="flex items-center gap-1">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: '#4AE04A',
                    boxShadow: '0 0 4px #4AE04A',
                  }}
                />
                <span className="font-mono text-[8px]" style={{ color: '#9DBDBD' }}>
                  READY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Variation 3: Minimal file card */}
        <div className="mb-10">
          <p className="text-xs text-gray-400 mb-3">
            Variation 3: Minimal File Card (shareable, less text)
          </p>
          <div
            className="rounded-2xl overflow-hidden relative max-w-sm mx-auto"
            style={{
              background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
              padding: '12px',
              border: `4px solid`,
              borderColor: `#9DBDBD #2D4545 #2D4545 #9DBDBD`,
              boxShadow: `
                inset 0 2px 4px rgba(255,255,255,0.2),
                inset 0 -2px 4px rgba(0,0,0,0.3),
                8px 8px 0 rgba(0,0,0,0.35)
              `,
            }}
          >
            {/* Corner rivets */}
            {[
              { top: 6, left: 6 },
              { top: 6, right: 6 },
              { bottom: 6, left: 6 },
              { bottom: 6, right: 6 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  ...pos,
                  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                  boxShadow: `inset 1px 1px 1px rgba(255,255,255,0.4), 1px 1px 1px rgba(0,0,0,0.3)`,
                }}
              />
            ))}

            {/* Card content */}
            <div
              className="rounded-lg p-4 text-center"
              style={{
                background: PALETTE.cream,
                border: `3px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `inset 2px 2px 6px rgba(0,0,0,0.1)`,
              }}
            >
              {/* Sigil */}
              <div
                className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-3"
                style={{
                  background: PALETTE.cream,
                  border: `2px solid ${PALETTE.institutionalTeal}`,
                }}
              >
                <span style={{ color: PALETTE.institutionalTeal, fontSize: '40px' }}>◇</span>
              </div>

              {/* Title */}
              <p
                className="font-mono text-xs uppercase tracking-wide"
                style={{ color: PALETTE.warmBrown }}
              >
                Biocomputer Diagnostic
              </p>
              <h2
                className="font-baskerville text-lg mt-1"
                style={{ color: PALETTE.deepNavy }}
              >
                THE ARCHITECT OF ENDINGS
              </h2>

              {/* One-liner assessment */}
              <p
                className="font-baskerville text-sm italic mt-2"
                style={{ color: PALETTE.warmBrown }}
              >
                High clarity, low illusion. Not cold—just unbuffered.
              </p>

              {/* Mini axis bars */}
              <div className="mt-3 flex justify-center gap-1">
                {[75, 30, 85, 45, 60, 70, 40, 55].map((v, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-full"
                    style={{
                      height: '40px',
                      background: 'rgba(91,138,138,0.2)',
                      position: 'relative',
                    }}
                  >
                    <div
                      className="absolute bottom-0 w-full rounded-full"
                      style={{
                        height: `${v}%`,
                        background: PALETTE.institutionalTeal,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Seed phrase */}
              <div
                className="mt-3 py-2 px-3 rounded inline-block"
                style={{ background: PALETTE.deepNavy }}
              >
                <p className="font-mono text-sm" style={{ color: PALETTE.mutedGold }}>
                  oak-river-ghost
                </p>
              </div>
            </div>

            {/* Single CTA */}
            <button
              className="w-full mt-2 font-nunito font-bold py-2 rounded-lg text-sm"
              style={{
                background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                color: PALETTE.deepNavy,
                border: `3px solid`,
                borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.2)`,
              }}
            >
              ⬚ Copy Card
            </button>
          </div>
        </div>

        {/* Notes on these variations */}
        <div className="max-w-lg mx-auto p-4 rounded" style={{ background: 'rgba(91,138,138,0.1)' }}>
          <p className="text-xs" style={{ color: PALETTE.deepNavy }}>
            <strong>Design notes:</strong>
          </p>
          <ul className="text-xs mt-2 space-y-1" style={{ color: PALETTE.warmBrown }}>
            <li>• All three use the teal plastic frame (matches game sidebar)</li>
            <li>• Cream "paper" viewport feels like document in an apparatus</li>
            <li>• Variation 1: Most detailed, best for full experience</li>
            <li>• Variation 2: More teletype/clinical, stronger Lilly vibe</li>
            <li>• Variation 3: Most shareable, best for screenshots/cards</li>
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION: HARDWARE-CHROME GAME UI (feeding back from dossier)
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          🎮 Hardware-Chrome Game UI — Circular Feedback
        </h2>
        <p className="text-xs text-gray-500 mb-6">
          Taking the diagnostic terminal aesthetic back to the narrative sidebar and title screen.
          Same design language: LEDs, LCDs, embossed labels, tactile buttons.
        </p>

        {/* ══════ NEW SIDEBAR MOCKUP ══════ */}
        <div className="mb-10">
          <p className="text-xs text-gray-400 mb-3">
            Narrative Sidebar — Hardware Frame Edition
          </p>
          <div
            className="flex rounded-xl overflow-hidden max-w-3xl mx-auto"
            style={{
              height: '500px',
              background: '#000',
              border: `4px solid #1a1a1a`,
              boxShadow: `8px 8px 0 rgba(0,0,0,0.5)`,
            }}
          >
            {/* Left: Scene area */}
            <div
              className="flex-1 flex items-center justify-center"
              style={{ background: '#0a0a0a' }}
            >
              <p className="text-gray-600 font-mono text-sm">[scene background]</p>
            </div>

            {/* Right: Hardware-framed sidebar */}
            <div
              className="w-80 flex flex-col relative"
              style={{
                background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
                borderLeft: `5px solid #9DBDBD`,
              }}
            >
              {/* ═══ TOP HARDWARE BAR ═══ */}
              <div
                className="flex items-center justify-between px-3 py-2"
                style={{
                  background: 'linear-gradient(180deg, #5D8A8A 0%, #4D7A7A 100%)',
                  borderBottom: '2px solid #3D6B6B',
                }}
              >
                {/* Left: Chapter LCD */}
                <div
                  className="px-2 py-1 rounded font-mono text-xs"
                  style={{
                    background: '#1a2a28',
                    color: '#4AE04A',
                    border: '2px solid #0D1A18',
                    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  CH.01
                </div>

                {/* Center: Embossed title */}
                <div
                  className="px-3 py-1 rounded font-mono text-[10px] tracking-wider"
                  style={{
                    background: 'linear-gradient(180deg, #4D7A7A 0%, #3D6B6B 100%)',
                    color: '#9DBDBD',
                    border: '1px solid #2D5555',
                    boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.3)',
                    textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
                  }}
                >
                  THE TUTOR
                </div>

                {/* Right: Status LED */}
                <div className="flex items-center gap-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: '#4AE04A',
                      boxShadow: '0 0 4px #4AE04A',
                    }}
                  />
                  <span className="font-mono text-[8px]" style={{ color: '#9DBDBD' }}>
                    LIVE
                  </span>
                </div>
              </div>

              {/* Corner rivets (below top bar) */}
              {[
                { top: 44, left: 8 },
                { top: 44, right: 8 },
                { bottom: 8, left: 8 },
                { bottom: 8, right: 8 },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full z-10"
                  style={{
                    ...pos,
                    background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                    boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
                  }}
                />
              ))}

              {/* Main content viewport */}
              <div
                className="mx-3 mt-3 flex-1 flex flex-col rounded-lg overflow-hidden"
                style={{
                  background: PALETTE.cream,
                  border: `4px solid`,
                  borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                  boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
                }}
              >
                {/* Scrollable text area */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <p className="font-baskerville text-base leading-relaxed mb-3" style={{ color: PALETTE.deepNavy }}>
                    The flower-mascot blinks at you with its googly eyes. Its petals rotate slowly.
                  </p>
                  <p className="font-baskerville text-base leading-relaxed" style={{ color: PALETTE.deepNavy }}>
                    <span style={{ color: PALETTE.institutionalTeal }}>"Hello!"</span> it chirps. <span style={{ color: PALETTE.institutionalTeal }}>"I'm Helix. I'll be your learning companion today."</span>
                  </p>
                </div>

                {/* Choice buttons area */}
                <div
                  className="p-3 flex flex-col gap-2"
                  style={{
                    background: `linear-gradient(180deg, #E8DCC8 0%, ${PALETTE.softBeige} 100%)`,
                    borderTop: `3px solid #2D4545`,
                  }}
                >
                  {[
                    'Number Safari sounds fun.',
                    'Letter Garden, please.',
                    '"I don\'t want to play."',
                  ].map((choice, i) => (
                    <button
                      key={i}
                      className="font-nunito font-semibold px-3 py-2 rounded-lg text-left text-sm transition-all hover:translate-x-1"
                      style={{
                        background: `linear-gradient(180deg, #F5EDE0 0%, ${PALETTE.softBeige} 100%)`,
                        color: PALETTE.deepNavy,
                        border: `3px solid`,
                        borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                        boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.15)`,
                      }}
                    >
                      ▸ {choice}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom spacing */}
              <div className="h-4" />
            </div>
          </div>
        </div>

        {/* ══════ NEW TITLE SCREEN MOCKUP ══════ */}
        <div className="mb-10">
          <p className="text-xs text-gray-400 mb-3">
            Title Screen — Device Startup Edition
          </p>
          <div
            className="rounded-2xl overflow-hidden relative max-w-lg mx-auto"
            style={{
              background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
              padding: '20px',
              border: `5px solid`,
              borderColor: `#9DBDBD #2D4545 #2D4545 #9DBDBD`,
              boxShadow: `
                inset 0 3px 6px rgba(255,255,255,0.2),
                inset 0 -3px 6px rgba(0,0,0,0.3),
                12px 12px 0 rgba(0,0,0,0.4)
              `,
            }}
          >
            {/* Corner rivets */}
            {[
              { top: 10, left: 10 },
              { top: 10, right: 10 },
              { bottom: 10, left: 10 },
              { bottom: 10, right: 10 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  ...pos,
                  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                  boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
                }}
              />
            ))}

            {/* Top hardware strip */}
            <div
              className="flex items-center justify-between px-4 py-2 rounded-t-lg mb-4"
              style={{
                background: 'linear-gradient(180deg, #4D7A7A 0%, #3D6B6B 100%)',
                border: '2px solid',
                borderColor: '#5D8A8A #2D5555 #2D5555 #5D8A8A',
              }}
            >
              {/* Status LEDs */}
              <div className="flex items-center gap-3">
                {[
                  { color: '#4AE04A', label: 'PWR' },
                  { color: PALETTE.mutedGold, label: 'SYS' },
                ].map((led, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: led.color,
                        boxShadow: `0 0 4px ${led.color}`,
                      }}
                    />
                    <span className="font-mono text-[8px]" style={{ color: '#9DBDBD' }}>
                      {led.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Model emboss */}
              <div
                className="font-mono text-[10px] tracking-widest"
                style={{
                  color: '#7BA3A3',
                  textShadow: '1px 1px 0 rgba(0,0,0,0.4), -1px -1px 0 rgba(255,255,255,0.1)',
                }}
              >
                SCHOLASTIC-1 LEARNING SYSTEM
              </div>
            </div>

            {/* Main viewport */}
            <div
              className="rounded-xl p-8 text-center"
              style={{
                background: PALETTE.cream,
                border: `4px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `inset 3px 3px 10px rgba(0,0,0,0.15)`,
              }}
            >
              {/* Title */}
              <h1
                className="font-baskerville text-4xl mb-2"
                style={{ color: PALETTE.deepNavy }}
              >
                Utopian Scholastic
              </h1>
              <p
                className="font-mono text-xs tracking-widest uppercase mb-8"
                style={{ color: PALETTE.warmBrown }}
              >
                Interactive Assessment Program
              </p>

              {/* Main buttons */}
              <div className="flex flex-col gap-3 max-w-xs mx-auto">
                <button
                  className="font-nunito font-bold px-6 py-3 rounded-lg text-lg"
                  style={{
                    background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 50%, #A8841F 100%)`,
                    color: PALETTE.deepNavy,
                    border: `3px solid`,
                    borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
                    boxShadow: `
                      inset 2px 2px 0 rgba(255,255,255,0.4),
                      inset -2px -2px 0 rgba(0,0,0,0.2),
                      4px 4px 0 rgba(0,0,0,0.3)
                    `,
                    textShadow: '1px 1px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  ▶ New Session
                </button>
                <button
                  className="font-nunito font-bold px-6 py-3 rounded-lg text-lg"
                  style={{
                    background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                    color: PALETTE.deepNavy,
                    border: `3px solid`,
                    borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                    boxShadow: `
                      inset 2px 2px 0 rgba(255,255,255,0.5),
                      inset -2px -2px 0 rgba(0,0,0,0.1),
                      4px 4px 0 rgba(0,0,0,0.25)
                    `,
                  }}
                >
                  Resume Session
                </button>
              </div>

              {/* Seed phrase input hint */}
              <div className="mt-6 pt-4 border-t" style={{ borderColor: PALETTE.softBeige }}>
                <p className="font-mono text-xs" style={{ color: PALETTE.warmBrown }}>
                  Have a recovery phrase?
                </p>
                <button
                  className="font-mono text-xs mt-1 underline"
                  style={{ color: PALETTE.institutionalTeal }}
                >
                  Enter seed phrase →
                </button>
              </div>
            </div>

            {/* Bottom hardware strip */}
            <div
              className="flex items-center justify-center gap-4 mt-4 px-4 py-2 rounded-b-lg"
              style={{
                background: 'linear-gradient(180deg, #3D6B6B 0%, #2D5555 100%)',
                border: '2px solid',
                borderColor: '#4D7A7A #1D4545 #1D4545 #4D7A7A',
              }}
            >
              <span className="font-mono text-[9px]" style={{ color: '#6D9A9A' }}>
                © 2026 THE READING ROOM
              </span>
              <span style={{ color: '#4D7A7A' }}>•</span>
              <span className="font-mono text-[9px]" style={{ color: '#6D9A9A' }}>
                v1.0.0
              </span>
            </div>
          </div>
        </div>

        {/* ══════ MINIMAL TITLE VARIANT ══════ */}
        <div className="mb-10">
          <p className="text-xs text-gray-400 mb-3">
            Title Screen — Simpler Variant (less chrome, more focus)
          </p>
          <div
            className="rounded-2xl overflow-hidden relative max-w-md mx-auto"
            style={{
              background: `linear-gradient(180deg, #7BA3A3 0%, ${PALETTE.institutionalTeal} 50%, #3D6B6B 100%)`,
              padding: '16px',
              border: `5px solid`,
              borderColor: `#9DBDBD #2D4545 #2D4545 #9DBDBD`,
              boxShadow: `
                inset 0 3px 6px rgba(255,255,255,0.2),
                inset 0 -3px 6px rgba(0,0,0,0.3),
                10px 10px 0 rgba(0,0,0,0.35)
              `,
            }}
          >
            {/* Corner rivets */}
            {[
              { top: 8, left: 8 },
              { top: 8, right: 8 },
              { bottom: 8, left: 8 },
              { bottom: 8, right: 8 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  ...pos,
                  background: `radial-gradient(circle at 30% 30%, #9DBDBD 0%, #5B8A8A 50%, #3D6B6B 100%)`,
                  boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3)`,
                }}
              />
            ))}

            {/* Single viewport */}
            <div
              className="rounded-xl p-8 text-center"
              style={{
                background: PALETTE.cream,
                border: `4px solid`,
                borderColor: `#2D4545 #9DBDBD #9DBDBD #2D4545`,
                boxShadow: `inset 3px 3px 8px rgba(0,0,0,0.15)`,
              }}
            >
              <h1
                className="font-baskerville text-3xl mb-1"
                style={{ color: PALETTE.deepNavy }}
              >
                Utopian Scholastic
              </h1>
              <p
                className="font-baskerville text-sm italic mb-8"
                style={{ color: PALETTE.warmBrown }}
              >
                A personality expedition
              </p>

              <div className="flex flex-col gap-3">
                <button
                  className="font-nunito font-bold px-6 py-3 rounded-lg"
                  style={{
                    background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 100%)`,
                    color: PALETTE.deepNavy,
                    border: `3px solid`,
                    borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
                    boxShadow: `inset 2px 2px 0 rgba(255,255,255,0.4), 4px 4px 0 rgba(0,0,0,0.3)`,
                  }}
                >
                  ▶ Begin
                </button>
                <button
                  className="font-nunito font-semibold px-6 py-2 rounded-lg text-sm"
                  style={{
                    background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                    color: PALETTE.deepNavy,
                    border: `2px solid`,
                    borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                    boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.2)`,
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ══════ BUTTON STATES DEMO ══════ */}
        <div className="mb-10">
          <p className="text-xs text-gray-400 mb-3">
            Button States — Hover / Active / Focus
          </p>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Gold primary button states */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Primary (Gold) — try hovering/clicking</p>
              <div className="flex gap-4 items-start flex-wrap">
                {/* Default */}
                <div className="text-center">
                  <button
                    className="font-nunito font-bold px-6 py-3 rounded-lg transition-all duration-100
                      hover:brightness-110 hover:-translate-y-0.5
                      active:translate-y-0 active:brightness-95
                      focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 50%, #A8841F 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
                      boxShadow: `
                        inset 2px 2px 0 rgba(255,255,255,0.4),
                        inset -2px -2px 0 rgba(0,0,0,0.2),
                        4px 4px 0 rgba(0,0,0,0.3)
                      `,
                      // @ts-expect-error CSS variable for focus ring
                      '--tw-ring-color': PALETTE.mutedGold,
                    }}
                  >
                    ▶ New Session
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">Interactive</p>
                </div>

                {/* Hover state (static preview) */}
                <div className="text-center">
                  <button
                    className="font-nunito font-bold px-6 py-3 rounded-lg -translate-y-0.5"
                    style={{
                      background: `linear-gradient(180deg, #F0D060 0%, #D4AD2F 50%, #B8941F 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#F8E070 #907A15 #907A15 #F8E070`,
                      boxShadow: `
                        inset 2px 2px 0 rgba(255,255,255,0.5),
                        inset -2px -2px 0 rgba(0,0,0,0.15),
                        5px 5px 0 rgba(0,0,0,0.25)
                      `,
                    }}
                  >
                    ▶ New Session
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">:hover</p>
                </div>

                {/* Active/pressed state (static preview) */}
                <div className="text-center">
                  <button
                    className="font-nunito font-bold px-6 py-3 rounded-lg translate-y-0.5"
                    style={{
                      background: `linear-gradient(180deg, #A8841F 0%, ${PALETTE.mutedGold} 50%, #E8C84A 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#806A15 #F0D860 #F0D860 #806A15`,
                      boxShadow: `
                        inset 2px 2px 4px rgba(0,0,0,0.3),
                        inset -1px -1px 0 rgba(255,255,255,0.2),
                        1px 1px 0 rgba(0,0,0,0.2)
                      `,
                    }}
                  >
                    ▶ New Session
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">:active (pressed)</p>
                </div>

                {/* Focus state (static preview) */}
                <div className="text-center">
                  <button
                    className="font-nunito font-bold px-6 py-3 rounded-lg ring-2 ring-offset-2"
                    style={{
                      background: `linear-gradient(180deg, #E8C84A 0%, ${PALETTE.mutedGold} 50%, #A8841F 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#F0D860 #806A15 #806A15 #F0D860`,
                      boxShadow: `
                        inset 2px 2px 0 rgba(255,255,255,0.4),
                        inset -2px -2px 0 rgba(0,0,0,0.2),
                        4px 4px 0 rgba(0,0,0,0.3)
                      `,
                      // @ts-expect-error ring color
                      '--tw-ring-color': PALETTE.mutedGold,
                    }}
                  >
                    ▶ New Session
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">:focus</p>
                </div>
              </div>
            </div>

            {/* Beige secondary button states */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Secondary (Beige)</p>
              <div className="flex gap-4 items-start flex-wrap">
                {/* Default */}
                <div className="text-center">
                  <button
                    className="font-nunito font-bold px-6 py-3 rounded-lg transition-all duration-100
                      hover:brightness-105 hover:-translate-y-0.5
                      active:translate-y-0 active:brightness-95
                      focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      background: `linear-gradient(180deg, #E8D9C0 0%, ${PALETTE.softBeige} 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                      boxShadow: `
                        inset 2px 2px 0 rgba(255,255,255,0.5),
                        inset -2px -2px 0 rgba(0,0,0,0.1),
                        4px 4px 0 rgba(0,0,0,0.25)
                      `,
                      // @ts-expect-error ring color
                      '--tw-ring-color': PALETTE.warmBrown,
                    }}
                  >
                    Resume Session
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">Interactive</p>
                </div>

                {/* Active/pressed */}
                <div className="text-center">
                  <button
                    className="font-nunito font-bold px-6 py-3 rounded-lg translate-y-0.5"
                    style={{
                      background: `linear-gradient(180deg, ${PALETTE.softBeige} 0%, #E8D9C0 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#A89870 #F5EDE0 #F5EDE0 #A89870`,
                      boxShadow: `
                        inset 2px 2px 4px rgba(0,0,0,0.15),
                        inset -1px -1px 0 rgba(255,255,255,0.3),
                        1px 1px 0 rgba(0,0,0,0.15)
                      `,
                    }}
                  >
                    Resume Session
                  </button>
                  <p className="text-[10px] text-gray-400 mt-1">:active</p>
                </div>
              </div>
            </div>

            {/* Choice button states */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Choice Buttons</p>
              <div
                className="p-4 rounded-lg max-w-sm"
                style={{ background: PALETTE.softBeige }}
              >
                <div className="flex flex-col gap-2">
                  {/* Default */}
                  <button
                    className="font-nunito font-semibold px-3 py-2 rounded-lg text-left text-sm transition-all duration-100
                      hover:translate-x-1 hover:brightness-105
                      active:translate-x-0.5 active:brightness-95
                      focus:outline-none focus:ring-2"
                    style={{
                      background: `linear-gradient(180deg, #F5EDE0 0%, ${PALETTE.softBeige} 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#F5EDE0 #A89870 #A89870 #F5EDE0`,
                      boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.5), 2px 2px 0 rgba(0,0,0,0.15)`,
                      // @ts-expect-error ring color
                      '--tw-ring-color': PALETTE.institutionalTeal,
                    }}
                  >
                    ▸ Number Safari sounds fun.
                  </button>

                  {/* Hover preview */}
                  <button
                    className="font-nunito font-semibold px-3 py-2 rounded-lg text-left text-sm translate-x-1"
                    style={{
                      background: `linear-gradient(180deg, #FFFFF5 0%, #F0E5D0 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#FFFFF5 #B8A880 #B8A880 #FFFFF5`,
                      boxShadow: `inset 1px 1px 0 rgba(255,255,255,0.6), 3px 3px 0 rgba(0,0,0,0.12)`,
                    }}
                  >
                    ▸ Letter Garden, please. <span className="text-[10px] text-gray-400 ml-2">(:hover)</span>
                  </button>

                  {/* Active preview */}
                  <button
                    className="font-nunito font-semibold px-3 py-2 rounded-lg text-left text-sm translate-x-0.5"
                    style={{
                      background: `linear-gradient(180deg, ${PALETTE.softBeige} 0%, #F5EDE0 100%)`,
                      color: PALETTE.deepNavy,
                      border: `3px solid`,
                      borderColor: `#A89870 #F5EDE0 #F5EDE0 #A89870`,
                      boxShadow: `inset 2px 2px 3px rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.1)`,
                    }}
                  >
                    ▸ "I don't want to play." <span className="text-[10px] text-gray-400 ml-2">(:active)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* CSS summary */}
            <div className="p-4 rounded font-mono text-xs" style={{ background: '#1a1a1a', color: '#9DBDBD' }}>
              <p className="text-gray-500 mb-2">/* Key state transforms */</p>
              <p><span style={{ color: PALETTE.mutedGold }}>:hover</span> {'{'}</p>
              <p className="pl-4">brightness: 1.05-1.1;</p>
              <p className="pl-4">transform: translateY(-2px);</p>
              <p className="pl-4">box-shadow: slightly larger;</p>
              <p>{'}'}</p>
              <p className="mt-2"><span style={{ color: PALETTE.mutedGold }}>:active</span> {'{'}</p>
              <p className="pl-4">transform: translateY(2px);</p>
              <p className="pl-4">border-color: <span className="text-red-400">INVERTED</span>; /* dark↔light swap */</p>
              <p className="pl-4">background: <span className="text-red-400">INVERTED</span>; /* gradient flip */</p>
              <p className="pl-4">box-shadow: inset shadow, minimal drop;</p>
              <p>{'}'}</p>
            </div>
          </div>
        </div>

        {/* Design notes */}
        <div className="max-w-lg mx-auto p-4 rounded" style={{ background: 'rgba(91,138,138,0.1)' }}>
          <p className="text-xs" style={{ color: PALETTE.deepNavy }}>
            <strong>Circular feedback notes:</strong>
          </p>
          <ul className="text-xs mt-2 space-y-1" style={{ color: PALETTE.warmBrown }}>
            <li>• Sidebar now has top hardware bar (chapter LCD, title emboss, status LED)</li>
            <li>• Title screen has device startup feel (model name, system LEDs)</li>
            <li>• Same visual language: teal frame, cream viewport, beveled buttons, rivets</li>
            <li>• Hardware elements are functional: chapter display, status indicator</li>
            <li>• Simpler title variant for less visual noise at startup</li>
            <li>• Button states: hover lifts, active inverts bevel (pushed in), focus shows ring</li>
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NOTES
          ═══════════════════════════════════════════════════════════ */}
      <section className="mb-12 p-6 bg-gray-50 rounded">
        <h2 className="text-sm font-bold uppercase tracking-wide mb-4">
          📝 Active Fonts
        </h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>Loaded from Google Fonts:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-100 px-1">font-baskerville</code> — Libre Baskerville (body text)</li>
            <li><code className="bg-gray-100 px-1">font-nunito</code> — Nunito (buttons, display)</li>
          </ul>
          <p className="mt-4 text-gray-500 italic">
            See notes/Style Lock.md for full design system. Remember: less is more.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DesignPlayground;
