'use client';
import { useState, useEffect } from 'react';

function wave(y: number, amp: number): string {
  const period = 360;
  const segs = [`M0,${y}`];
  for (let x = 0; x < 2880; x += period) {
    segs.push(
      `Q${x + 90},${y - amp} ${x + period / 2},${y} ` +
        `Q${x + 270},${y + amp} ${x + period},${y}`
    );
  }
  return segs.join(" ");
}

export default function LakeBackground() {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    const toggle = () => setFlipped(f => !f);
    document.addEventListener('click', toggle);
    return () => document.removeEventListener('click', toggle);
  }, []);
  return (
    <>
      <style>{`
        @keyframes lkDrift1 {
          from { transform: translateX(-280px); }
          to   { transform: translateX(1640px); }
        }
        @keyframes lkDrift2 {
          from { transform: translateX(-500px); }
          to   { transform: translateX(1740px); }
        }
        @keyframes lkDrift3 {
          from { transform: translateX(1600px); }
          to   { transform: translateX(-400px); }
        }
        @keyframes lkWave {
          from { transform: translateX(0); }
          to   { transform: translateX(-1440px); }
        }
        @keyframes lkHaze {
          0%, 100% { opacity: 0.28; }
          50%       { opacity: 0.46; }
        }
        @keyframes lkCloud {
          from { transform: translateX(0); }
          to   { transform: translateX(-220px); }
        }
        @keyframes lkFighter {
          from { transform: translateX(1560px); }
          to   { transform: translateX(-220px); }
        }
        @keyframes lkConcorde {
          from { transform: translateX(-280px); }
          to   { transform: translateX(1560px); }
        }
        @keyframes lkAirliner {
          from { transform: translateX(-380px); }
          to   { transform: translateX(1640px); }
        }
        @keyframes lkCessna {
          from { transform: translateX(1540px); }
          to   { transform: translateX(-220px); }
        }
        .bg-rev .bg-a { animation-direction: reverse !important; }
        .bg-a-flip { transform-box: fill-box; transform-origin: center; transform: scaleX(1); transition: transform 3s cubic-bezier(0.4,0,0.6,1); }
        .bg-rev .bg-a-flip { transform: scaleX(-1); }
      `}</style>
      <div
        aria-hidden="true"
        className={flipped ? "bg-rev" : ""}
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lkSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#142d4a" />
              <stop offset="18%"  stopColor="#1d5488" />
              <stop offset="40%"  stopColor="#3d8ec0" />
              <stop offset="65%"  stopColor="#78b8d6" />
              <stop offset="85%"  stopColor="#b8d8ea" />
              <stop offset="100%" stopColor="#d8eef6" />
            </linearGradient>

            <linearGradient id="lkWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#3e8aaa" />
              <stop offset="25%"  stopColor="#346f8a" />
              <stop offset="70%"  stopColor="#285870" />
              <stop offset="100%" stopColor="#1e4458" />
            </linearGradient>

            <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#e8f2f8" />
              <stop offset="15%"  stopColor="#c2d5e6" />
              <stop offset="45%"  stopColor="#8aaec4" />
              <stop offset="100%" stopColor="#648caa" />
            </linearGradient>

            <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#cad8e4" />
              <stop offset="25%"  stopColor="#96b8ca" />
              <stop offset="60%"  stopColor="#5a88a0" />
              <stop offset="100%" stopColor="#426c84" />
            </linearGradient>

            <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#7a9cae" />
              <stop offset="30%"  stopColor="#527888" />
              <stop offset="100%" stopColor="#335a6c" />
            </linearGradient>

            {/* Schattengradient für linke Berghänge */}
            <linearGradient id="mtnShadowL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="rgba(15,30,60,0.42)" />
              <stop offset="42%" stopColor="rgba(15,30,60,0)" />
            </linearGradient>

            <radialGradient id="sunGlow" cx="75%" cy="56%" r="30%">
              <stop offset="0%"   stopColor="rgba(255,240,160,0.28)" />
              <stop offset="100%" stopColor="rgba(255,240,160,0)" />
            </radialGradient>

            <linearGradient id="snowGrad" x1="0.1" y1="0" x2="0.5" y2="1">
              <stop offset="0%"   stopColor="#ffffff" />
              <stop offset="55%"  stopColor="#e4eff7" />
              <stop offset="100%" stopColor="#c4d8e8" />
            </linearGradient>

            <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="rgba(255,235,180,0.32)" />
              <stop offset="100%" stopColor="rgba(255,235,180,0)" />
            </linearGradient>

            <filter id="farBlur"><feGaussianBlur stdDeviation="2.8" /></filter>
            <filter id="midBlur"><feGaussianBlur stdDeviation="1.2" /></filter>

            {/* Flugzeug-Gradienten und Schatten */}
            <linearGradient id="acBodyWhite" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#f8f8f8" />
              <stop offset="30%"  stopColor="#eaeaee" />
              <stop offset="68%"  stopColor="#cacad2" />
              <stop offset="100%" stopColor="#a6a6b0" />
            </linearGradient>
            <linearGradient id="acBodySilver" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#ececf4" />
              <stop offset="28%"  stopColor="#d8d8e4" />
              <stop offset="65%"  stopColor="#b4b4c0" />
              <stop offset="100%" stopColor="#8e8e9a" />
            </linearGradient>
            <linearGradient id="acBodyDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#464f62" />
              <stop offset="40%"  stopColor="#30394a" />
              <stop offset="100%" stopColor="#1e2838" />
            </linearGradient>
            <linearGradient id="acWing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#d8d8e0" />
              <stop offset="50%"  stopColor="#bcbcc6" />
              <stop offset="100%" stopColor="#9e9ea8" />
            </linearGradient>
            <linearGradient id="acEngine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#949498" />
              <stop offset="50%"  stopColor="#707076" />
              <stop offset="100%" stopColor="#4e4e56" />
            </linearGradient>
            <linearGradient id="acCessnaYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#f4d870" />
              <stop offset="45%"  stopColor="#e8c850" />
              <stop offset="100%" stopColor="#c8a830" />
            </linearGradient>
            <filter id="acShadow" x="-10%" y="-50%" width="140%" height="220%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="rgba(0,10,30,0.42)" />
            </filter>
          </defs>

          {/* Himmel */}
          <rect width="1440" height="900" fill="url(#lkSky)" />
          <rect width="1440" height="900" fill="url(#sunGlow)" />

          {/* Wolken mit Tiefenwirkung (Schattenellipse darunter) */}
          <g style={{ animation: "lkCloud 130s linear infinite" }} opacity="0.92">
            <g transform="translate(60,68)">
              <ellipse cx="64" cy="34" rx="58" ry="22" fill="rgba(210,228,244,0.65)" />
              <ellipse cx="64" cy="26" rx="55" ry="20" fill="rgba(255,255,255,0.95)" />
              <ellipse cx="94" cy="20" rx="42" ry="18" fill="rgba(255,255,255,0.97)" />
              <ellipse cx="34" cy="24" rx="32" ry="14" fill="rgba(255,255,255,0.90)" />
            </g>
            <g transform="translate(365,46)">
              <ellipse cx="84" cy="38" rx="74" ry="24" fill="rgba(210,228,244,0.60)" />
              <ellipse cx="84" cy="30" rx="72" ry="22" fill="rgba(255,255,255,0.90)" />
              <ellipse cx="116" cy="22" rx="52" ry="20" fill="rgba(255,255,255,0.96)" />
              <ellipse cx="48" cy="27" rx="40" ry="16" fill="rgba(255,255,255,0.85)" />
            </g>
            <g transform="translate(755,92)">
              <ellipse cx="54" cy="28" rx="48" ry="18" fill="rgba(210,228,244,0.58)" />
              <ellipse cx="54" cy="22" rx="46" ry="16" fill="rgba(255,255,255,0.88)" />
              <ellipse cx="76" cy="16" rx="36" ry="14" fill="rgba(255,255,255,0.94)" />
              <ellipse cx="32" cy="20" rx="28" ry="12" fill="rgba(255,255,255,0.82)" />
            </g>
            <g transform="translate(1055,64)">
              <ellipse cx="68" cy="32" rx="64" ry="22" fill="rgba(228,222,205,0.60)" />
              <ellipse cx="68" cy="25" rx="62" ry="20" fill="rgba(255,248,228,0.82)" />
              <ellipse cx="98" cy="18" rx="46" ry="18" fill="rgba(255,250,232,0.90)" />
              <ellipse cx="38" cy="22" rx="36" ry="14" fill="rgba(255,248,228,0.78)" />
            </g>
            <g transform="translate(1358,86)">
              <ellipse cx="58" cy="30" rx="54" ry="18" fill="rgba(210,228,244,0.58)" />
              <ellipse cx="58" cy="23" rx="52" ry="17" fill="rgba(255,255,255,0.86)" />
              <ellipse cx="82" cy="17" rx="38" ry="15" fill="rgba(255,255,255,0.92)" />
            </g>
          </g>

          {/* === ALPEN – hintere Kette (stark gedämpft, Atmosphärendunst) === */}
          <g filter="url(#farBlur)" opacity="0.70">
            <path
              d="M480,350 L532,282 L550,295 L565,268 L582,284 L600,254
                 L620,272 L640,248 L658,264 L678,236 L698,258 L718,228
                 L736,250 L752,238 L770,256 L788,230 L808,250
                 L828,270 L848,258 L870,276 L892,260 L915,282
                 L945,335 Z"
              fill="url(#mtnFar)"
            />
            {/* Schattenhänge links */}
            <path
              d="M480,350 L532,282 L550,295 L565,268 L582,284 L600,254
                 L620,272 L640,248 L658,264 L678,236 L698,258 L718,228
                 L736,250 L752,238 L770,256 L788,230 L808,250 L945,335 Z"
              fill="url(#mtnShadowL)" opacity="0.55"
            />
            {/* Schnee Hauptkamm */}
            <path
              d="M620,272 L640,248 L658,264 L678,236 L698,258 L718,228
                 L736,250 L752,238 L770,256 L788,230 L804,248 L788,230 L718,228 Z"
              fill="url(#snowGrad)" opacity="0.94"
            />
            {/* Felsrisse Schneefeld */}
            <path d="M678,236 L690,248 L698,240 L698,258" fill="none" stroke="rgba(180,200,220,0.5)" strokeWidth="1.1" />
            <path d="M718,228 L728,242 L736,234 L740,248" fill="none" stroke="rgba(180,200,220,0.5)" strokeWidth="1.1" />
            {/* Linker Bergzug */}
            <path
              d="M-20,430 L58,364 L118,394 L178,345 L240,370 L300,338
                 L362,355 L402,340 L434,357 L464,343 L500,360 L480,350
                 L480,495 L-20,495 Z"
              fill="url(#mtnFar)" opacity="0.82"
            />
            {/* Rechter Bergzug */}
            <path
              d="M915,282 L948,308 L985,294 L1024,268 L1065,284 L1106,260
                 L1145,278 L1185,254 L1215,270 L1246,247 L1276,264 L1306,251
                 L1346,268 L1386,256 L1426,274 L1460,263
                 L1460,408 L915,408 Z"
              fill="url(#mtnFar)"
            />
            {/* Schnee rechts */}
            <path
              d="M1106,260 L1126,274 L1145,260 L1165,272 L1185,254
                 L1205,267 L1215,270 L1246,247 L1264,261 L1276,264 L1285,258 L1246,247 Z"
              fill="rgba(255,255,255,0.80)"
            />
          </g>

          {/* === ALPEN – mittlere Kette === */}
          <g filter="url(#midBlur)" opacity="0.88">
            <path
              d="M-20,458 L74,398 L146,424 L218,388 L292,412 L366,384
                 L432,402 L502,376 L562,394 L622,367 L682,385 L733,358
                 L792,377 L853,353 L913,371 L973,348 L1033,366
                 L1093,342 L1153,360 L1213,346 L1273,362 L1333,350
                 L1393,364 L1460,356 L1460,518 L-20,518 Z"
              fill="url(#mtnMid)"
            />
            {/* Schattenhänge */}
            <path
              d="M-20,458 L74,398 L146,424 L218,388 L292,412 L366,384
                 L432,402 L502,376 L562,394 L622,367 L682,385 L733,358
                 L792,377 L853,353 L913,371 L973,348 L1033,366
                 L1093,342 L1153,360 L1213,346 L1273,362 L1333,350
                 L1393,364 L1460,356 L1460,518 L-20,518 Z"
              fill="url(#mtnShadowL)" opacity="0.32"
            />
            {/* Felsstrukturen */}
            <path d="M733,358 L752,374 L758,366 L768,377 L774,369 L787,381"
              fill="none" stroke="rgba(70,115,138,0.48)" strokeWidth="1.8" />
            <path d="M853,353 L872,370 L878,362 L888,374 L894,366 L906,378"
              fill="none" stroke="rgba(70,115,138,0.48)" strokeWidth="1.8" />
            <path d="M1093,342 L1108,356 L1116,350 L1126,362 L1132,354 L1143,366"
              fill="none" stroke="rgba(70,115,138,0.45)" strokeWidth="1.8" />
            <path d="M622,367 L640,382 L646,374 L655,386 L661,378 L672,390"
              fill="none" stroke="rgba(70,115,138,0.40)" strokeWidth="1.5" />
            {/* Schneefelder Mitte */}
            <path
              d="M733,358 L752,375 L772,363 L792,377 L812,361 L833,374
                 L853,353 L873,368 L893,356 L913,371 L924,364 L853,353 Z"
              fill="rgba(228,242,252,0.84)"
            />
            <path
              d="M1093,342 L1111,355 L1123,349 L1138,361 L1153,347
                 L1168,359 L1182,352 L1196,363 L1213,347 L1153,347 Z"
              fill="rgba(228,242,252,0.84)"
            />
            {/* Schneetextur */}
            <path d="M733,358 L742,370 L750,365" fill="none" stroke="rgba(200,222,238,0.52)" strokeWidth="1" />
            <path d="M853,353 L862,365 L870,360" fill="none" stroke="rgba(200,222,238,0.52)" strokeWidth="1" />
          </g>

          {/* === ALPEN – Vordergrundkette === */}
          <g opacity="0.94">
            <path
              d="M-20,494 L57,458 L128,476 L198,453 L278,469 L358,449
                 L438,463 L518,447 L590,461 L660,441 L723,453 L782,439
                 L852,451 L922,437 L992,449 L1062,435 L1132,447
                 L1202,434 L1272,445 L1342,435 L1412,444 L1460,437
                 L1460,566 L-20,566 Z"
              fill="url(#mtnNear)"
            />
            {/* Dunkle Waldlinie */}
            <path
              d="M-20,526 L76,510 L158,520 L238,506 L318,516 L398,503
                 L478,513 L558,501 L638,511 L718,499 L798,509 L878,497
                 L958,507 L1038,495 L1118,505 L1198,493 L1278,503
                 L1358,493 L1440,500 L1460,500 L1460,566 L-20,566 Z"
              fill="#2c4856" opacity="0.70"
            />
          </g>

          {/* ===== FLUGZEUGE ===== */}

          {/* CONCORDE – nach RECHTS, Bug rechts (x≈150), Stratosphäre y=68 */}
          <g className="bg-a" style={{ animation: "lkConcorde 21s linear -6s infinite" }}>
            <g transform="translate(0,68) scale(0.84)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              {/* Rumpf: sehr schlank, silberweiß */}
              <path
                d="M5,4.5 Q60,3.4 118,4 Q135,4.4 148,5 Q140,6 118,6 Q60,6.5 5,5.5 Z"
                fill="url(#acBodySilver)"
              />
              {/* Gesenkter Bug (Droop-Nose) */}
              <path d="M122,4.2 Q138,4.6 150,5.5 Q140,6.2 126,6 L122,5.5 Z"
                fill="#b8b8c4" />
              {/* Specular Highlight oben */}
              <path d="M8,3.8 Q60,3.0 116,3.6 L116,4.4 Q60,3.8 8,4.4 Z"
                fill="rgba(255,255,255,0.52)" />
              {/* Ogival-Deltaflügel Unterseite */}
              <path d="M8,5.5 Q55,6 116,6 L76,30 L8,30 Z" fill="url(#acWing)" />
              {/* Ogival-Deltaflügel Oberseite (leicht sichtbar) */}
              <path d="M8,4 Q55,3.2 116,3.5 L76,-20 L8,-20 Z"
                fill="url(#acWing)" opacity="0.55" />
              {/* Flügelunterkante Glanz */}
              <path d="M10,5.8 Q55,6.2 112,6.2 L80,16"
                fill="none" stroke="rgba(200,210,225,0.28)" strokeWidth="1.2" />
              {/* 4 Triebwerke paarweise (Rolls-Royce Olympus) */}
              <rect x="15" y="28" width="18" height="5.5" rx="2.8" fill="url(#acEngine)" />
              <rect x="35" y="29" width="15" height="5"   rx="2.5" fill="url(#acEngine)" />
              <rect x="15" y="-21" width="18" height="5.5" rx="2.8"
                fill="url(#acEngine)" opacity="0.58" />
              <rect x="35" y="-22" width="15" height="5"   rx="2.5"
                fill="url(#acEngine)" opacity="0.58" />
              {/* Düsenöffnungen */}
              <rect x="5"  y="28"  width="12" height="5.5" rx="2.5" fill="#5e5e66" />
              <rect x="5"  y="-21" width="12" height="5.5" rx="2.5"
                fill="#5e5e66" opacity="0.58" />
              {/* Heckflosse */}
              <path d="M7,4 Q18,3.5 26,3.5 L18,-20 Z" fill="#c4c4cc" />
              {/* Fensterlinie */}
              {[52,60,68,76,84,92,100,108,116,125].map((x, i) => (
                <rect key={i} x={x} y="4.0" width="5" height="2.6"
                  fill="rgba(110,168,210,0.75)" rx="0.6" />
              ))}
              {/* Blaue Cheatline (Air-France-Stil) */}
              <path d="M12,6.2 L130,6.2" stroke="#002fa7" strokeWidth="1.2" fill="none" />
              {/* Kondensstreifen (2 Bahnen vom Heck nach links) */}
              <path d="M-6,4.5 L-240,4.0"  fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="2.0" />
              <path d="M-95,4.0 L-420,3.5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />
              <path d="M-6,6.0 L-240,6.5"  fill="none" stroke="rgba(255,255,255,0.26)" strokeWidth="1.6" />
              <path d="M-95,6.5 L-420,7.0" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.0" />
              </g>
            </g>
          </g>

          {/* FIGHTER JET (F-16-Stil) – nach LINKS, Bug links (x=0), y=115 */}
          <g className="bg-a" style={{ animation: "lkFighter 24s linear -9s infinite" }}>
            <g transform="translate(0,115) scale(0.88)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              {/* Rumpf: Bug links (x=0 spitz), Heck rechts (x≈82) */}
              <path
                d="M0,5 Q25,2.8 60,3.8 L80,5 Q74,7.5 60,7.8 Q25,7.5 0,6 Z"
                fill="url(#acBodyDark)"
              />
              {/* Specular Rumpf oben */}
              <path d="M4,3.2 Q28,2.4 58,3.2 L58,4 Q28,3.2 4,4 Z"
                fill="rgba(255,255,255,0.22)" />
              {/* Bubble-Kanzel (F-16-typisch, große Haube) */}
              <path d="M10,2.8 Q22,0.2 38,1.4 Q44,2.4 42,4 L10,4 Z"
                fill="rgba(60,120,175,0.85)" />
              <path d="M10,3 Q24,1.5 38,2 L38,4 L10,4 Z"
                fill="rgba(110,175,220,0.28)" />
              {/* Kanzelrahmen */}
              <line x1="10" y1="4" x2="42" y2="4"
                stroke="#18222e" strokeWidth="0.9" />
              {/* LERX (Leading Edge Root Extensions – charakteristische Strakes) */}
              <path d="M16,4.5 L46,3.8 L54,2.8 L24,4.5 Z"
                fill="#252f3c" opacity="0.85" />
              {/* Clipped-Delta-Flügel (swept nach rechts/Heck) */}
              <path d="M20,5 L58,4 L72,26 L20,26 Z" fill="url(#acBodyDark)" />
              <path d="M20,4.5 L58,3.5 L72,-17 L20,-17 Z"
                fill="url(#acBodyDark)" opacity="0.75" />
              {/* Flügelglanz */}
              <path d="M22,5 L56,4.2 L68,22"
                fill="none" stroke="rgba(130,150,170,0.25)" strokeWidth="1.5" />
              {/* Vertikale Heckflosse */}
              <path d="M58,3.5 L80,5 L73,-17 Z" fill="#1e2838" />
              {/* Horizontale Heckflossen */}
              <path d="M57,5.5 L80,5 L74,16 Z" fill="#1e2838" />
              {/* Belly Air Intake (F-16-Merkmal: Einlass unter dem Rumpf) */}
              <path d="M6,6 Q24,8.8 42,7.8 L42,9.8 Q24,10.8 6,8.2 Z"
                fill="#18202c" />
              {/* Triebwerkseinlass-Lippe */}
              <path d="M6,6 Q10,7.5 18,8" fill="none"
                stroke="rgba(180,190,210,0.35)" strokeWidth="1" />
              {/* Nachbrenner – 3-stufiges Glühen */}
              <ellipse cx="84" cy="5.5" rx="7.5" ry="3.4"
                fill="rgba(255,120,10,0.88)" />
              <ellipse cx="90" cy="5.5" rx="5"   ry="2.4"
                fill="rgba(255,198,40,0.78)" />
              <ellipse cx="96" cy="5.5" rx="3"   ry="1.6"
                fill="rgba(255,245,150,0.60)" />
              <ellipse cx="100" cy="5.5" rx="1.5" ry="0.9"
                fill="rgba(255,255,240,0.42)" />
              {/* Kondensstreifen (vom Heck nach rechts) */}
              <path d="M86,5 L290,4.5"  fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.8" />
              <path d="M180,4.5 L460,4" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.2" />
              <path d="M86,6.5 L290,7"  fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.4" />
              <path d="M180,7 L460,7.5" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.9" />
              </g>
            </g>
          </g>

          {/* BOEING 747 – nach RECHTS, Bug rechts (x≈122), y=182 */}
          <g className="bg-a" style={{ animation: "lkAirliner 138s linear -48s infinite" }}>
            <g transform="translate(0,182) scale(0.96)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              {/* Hauptrumpf */}
              <path
                d="M0,7.5 Q18,7 96,6.5 Q112,6 122,8 Q115,10 96,10 Q18,10.5 0,8.5 Z"
                fill="url(#acBodyWhite)"
              />
              {/* Oberdeck-Buckel (Boeing-747-Hump, nahe Bug/rechts) */}
              <path d="M80,5.5 Q96,5 115,5.5 L115,6.5 Q96,5.8 80,6.5 Z"
                fill="url(#acBodyWhite)" />
              {/* Specular Highlight Hauptrumpf */}
              <path d="M4,6.5 Q50,6 95,6.5 L95,7.5 Q50,7 4,7.5 Z"
                fill="rgba(255,255,255,0.36)" />
              {/* Specular Oberdeck */}
              <path d="M82,5 Q96,4.5 114,5 L114,5.7 Q96,5.2 82,5.7 Z"
                fill="rgba(255,255,255,0.44)" />
              {/* Swept Wings (von x=25 bis x=75, swept nach links/Heck) */}
              <path d="M25,9 L74,9.5 L54,32 L18,32 Z" fill="url(#acWing)" />
              <path d="M25,7 L74,7.5 L54,-14 L18,-14 Z"
                fill="url(#acWing)" opacity="0.55" />
              {/* Flügelglanz */}
              <path d="M28,8.5 L72,9 L56,14"
                fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
              {/* 4 Triebwerkspods */}
              <ellipse cx="52" cy="30" rx="10.5" ry="3.8" fill="url(#acEngine)" />
              <ellipse cx="38" cy="28.5" rx="9"  ry="3.2" fill="url(#acEngine)" />
              <ellipse cx="52" cy="-13" rx="10.5" ry="3.8"
                fill="url(#acEngine)" opacity="0.56" />
              <ellipse cx="38" cy="-11.5" rx="9" ry="3.2"
                fill="url(#acEngine)" opacity="0.56" />
              {/* Pylone (Aufhängung Triebwerke) */}
              <line x1="52" y1="9.5" x2="52" y2="26.5"
                stroke="#a8a8b0" strokeWidth="1.6" />
              <line x1="38" y1="9" x2="38" y2="25.5"
                stroke="#a8a8b0" strokeWidth="1.4" />
              {/* Vertikale Heckflosse */}
              <path d="M3,6.5 Q16,6 24,5.5 L14,-18 Z" fill="#d0d0d8" />
              {/* Höhenruder */}
              <path d="M3,8.5 L24,8.5 L16,20 L8,20 Z" fill="#d0d0d8" />
              <path d="M3,7 L24,7 L16,-4 L8,-4 Z"
                fill="#d0d0d8" opacity="0.68" />
              {/* Fensterlinie Hauptdeck */}
              {[22,29,36,43,50,57,64,71,78,85,92,99,107].map((x, i) => (
                <rect key={i} x={x} y="6.8" width="4.5" height="2.2"
                  fill="rgba(120,175,215,0.72)" rx="0.5" />
              ))}
              {/* Fensterlinie Oberdeck (Hump) */}
              {[84,90,96,102,108].map((x, i) => (
                <rect key={i} x={x} y="5.2" width="4" height="2"
                  fill="rgba(120,175,215,0.65)" rx="0.5" />
              ))}
              {/* Airline-Streifen unten (Lufthansa-Blau) */}
              <path d="M6,10.3 Q52,10.7 102,10.3 L102,11.2 Q52,11.6 6,11.2 Z"
                fill="#003087" />
              {/* Kondensstreifen (2 Bahnen, vom Heck nach links) */}
              <path d="M-5,8 L-290,7.5"    fill="none" stroke="rgba(255,255,255,0.34)" strokeWidth="2.2" />
              <path d="M-120,7.5 L-490,7"  fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
              <path d="M-5,9.5 L-290,10"   fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1.8" />
              <path d="M-120,10 L-490,10.5" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.1" />
              </g>
            </g>
          </g>

          {/* CESSNA 172 – nach LINKS, Bug links (x=0), Hochdecker, y=262 */}
          <g className="bg-a" style={{ animation: "lkCessna 80s linear -28s infinite" }}>
            <g transform="translate(0,262) scale(0.82)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              {/* Rumpf: Bug links (x=0 spitz), Heck rechts (x≈50) */}
              <path
                d="M0,5 Q12,3.5 38,4 Q44,4.2 50,5 Q44,5.8 38,6 Q12,6.5 0,6 Z"
                fill="url(#acCessnaYellow)"
              />
              {/* Specular oben */}
              <path d="M3,4 Q16,3.2 36,3.8 L36,4.5 Q16,3.9 3,4.7 Z"
                fill="rgba(255,255,255,0.42)" />
              {/* Hochflügel (oben auf dem Rumpf) */}
              <path d="M8,3.8 L38,3.8 L32,-12 L5,-12 Z"
                fill="url(#acCessnaYellow)" />
              {/* Flügel-Specular */}
              <path d="M10,3.5 L36,3.5 L33,-5"
                fill="none" stroke="rgba(255,255,255,0.36)" strokeWidth="1" />
              {/* Flügelverstrebungen (V-Struts) */}
              <line x1="14" y1="3.8" x2="10" y2="-12"
                stroke="#c4a030" strokeWidth="1.5" />
              <line x1="29" y1="3.8" x2="26" y2="-12"
                stroke="#c4a030" strokeWidth="1.5" />
              {/* Propeller + Nabe */}
              <circle cx="0" cy="5" r="2.4" fill="#3a3a3a" />
              <line x1="0" y1="-7"  x2="0" y2="17"
                stroke="#2a2a2a" strokeWidth="3.8" />
              {/* Propellerschimmer (Rotation) */}
              <ellipse cx="0" cy="5" rx="1.2" ry="12"
                fill="rgba(210,210,210,0.22)" />
              {/* Kabinenfenster */}
              <path d="M16,1 L32,1.5 L32,3.8 L16,3.8 Z"
                fill="rgba(150,200,235,0.76)" />
              {/* Fensterrahmen */}
              <line x1="16" y1="1" x2="16" y2="3.8"
                stroke="rgba(180,140,30,0.55)" strokeWidth="0.8" />
              <line x1="24" y1="1.2" x2="24" y2="3.8"
                stroke="rgba(180,140,30,0.55)" strokeWidth="0.8" />
              {/* Heckleitwerk */}
              <path d="M38,4 L50,5 L44,-10 Z" fill="#d4b840" />
              {/* Höhenruder */}
              <path d="M39,5.5 L50,5.5 L45,13 L40,13 Z" fill="#d4b840" />
              <path d="M39,4 L50,4 L45,-2 L40,-2 Z"
                fill="#d4b840" opacity="0.74" />
              {/* Starres Fahrwerk */}
              <line x1="16" y1="6" x2="14" y2="13"
                stroke="#b09030" strokeWidth="2.2" />
              <line x1="26" y1="6" x2="24" y2="13"
                stroke="#b09030" strokeWidth="2.2" />
              <line x1="11" y1="13" x2="17" y2="13"
                stroke="#888" strokeWidth="2.2" />
              <line x1="21" y1="13" x2="27" y2="13"
                stroke="#888" strokeWidth="2.2" />
              {/* Räder */}
              <ellipse cx="14" cy="14" rx="2.6" ry="1.6" fill="#3e3e3e" />
              <ellipse cx="24" cy="14" rx="2.6" ry="1.6" fill="#3e3e3e" />
              </g>
            </g>
          </g>

          {/* Horizontatmosphäre */}
          <rect x="0" y="528" width="1440" height="50" fill="url(#horizonGlow)" opacity="0.55" />
          <ellipse
            cx="720" cy="550"
            rx="900" ry="16"
            fill="rgba(255,240,200,0.20)"
            style={{ animation: "lkHaze 7s ease-in-out infinite" }}
          />

          {/* === BODENSEE === */}
          <rect x="0" y="550" width="1440" height="350" fill="url(#lkWater)" />

          {/* Bergspiegelung */}
          <path
            d="M0,550 L1440,550 L1440,620 Q1200,600 960,615 Q720,630 480,615 Q240,600 0,618 Z"
            fill="rgba(96,158,192,0.20)"
          />

          {/* Sonnenschimmer Wasser */}
          <ellipse cx="1120" cy="650" rx="220" ry="28" fill="rgba(255,238,170,0.15)" />
          <ellipse cx="1080" cy="720" rx="160" ry="20" fill="rgba(255,232,148,0.09)" />
          <ellipse cx="1050" cy="790" rx="120" ry="15" fill="rgba(255,228,140,0.06)" />

          {/* Wellen */}
          <g fill="none" stroke="white" strokeWidth="1.1" opacity="0.10"
             style={{ animation: "lkWave 14s linear infinite" }}>
            <path d={wave(584, 5)} />
            <path d={wave(620, 6)} />
            <path d={wave(665, 7)} />
            <path d={wave(720, 8)} />
            <path d={wave(784, 9)} />
            <path d={wave(858, 10)} />
          </g>
          <g fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8"
             style={{ animation: "lkWave 19s linear infinite" }}>
            <path d={wave(602, 4)} />
            <path d={wave(648, 5)} />
          </g>

          {/* ===== SCHIFFE ===== */}

          {/*
           * RADDAMPFER – fährt nach RECHTS (lkDrift1: -280px → 1640px)
           * Bug zeigt RECHTS, Heckrad (Sternrad) am LINKEN Ende des Schiffs
           */}
          <g className="bg-a" style={{ animation: "lkDrift1 190s linear -65s infinite" }}>
            <g transform="translate(-90,548)">
              <g className="bg-a-flip">
              {/* Heckrad (Sternrad) – wird vor dem Rumpf gezeichnet,
                  liegt am linken Ende (Heck) und ragt hinten heraus */}
              <ellipse cx="4" cy="36" rx="24" ry="24" fill="none" stroke="#7a3e10" strokeWidth="5" />
              <ellipse cx="4" cy="36" rx="11" ry="11" fill="none" stroke="#8b4e22" strokeWidth="2.5" />
              {/* 8 Speichen */}
              <line x1="4" y1="12" x2="4"  y2="60" stroke="#7a3e10" strokeWidth="2.8" />
              <line x1="-20" y1="36" x2="28" y2="36" stroke="#7a3e10" strokeWidth="2.8" />
              <line x1="-13" y1="19" x2="21" y2="53" stroke="#7a3e10" strokeWidth="2.8" />
              <line x1="21"  y1="19" x2="-13" y2="53" stroke="#7a3e10" strokeWidth="2.8" />
              <line x1="-18" y1="26" x2="26"  y2="46" stroke="#6a3410" strokeWidth="1.8" />
              <line x1="-18" y1="46" x2="26"  y2="26" stroke="#6a3410" strokeWidth="1.8" />
              {/* Schaufelbretter am Radumfang */}
              {[0,45,90,135,180,225,270,315].map((deg, i) => {
                const r = 24;
                const rad = (deg * Math.PI) / 180;
                const x = 4 + r * Math.cos(rad);
                const y = 36 + r * Math.sin(rad);
                return (
                  <rect
                    key={i}
                    x={x - 5}
                    y={y - 2}
                    width="10"
                    height="4"
                    rx="1"
                    fill="#6a3210"
                    transform={`rotate(${deg}, ${x}, ${y})`}
                  />
                );
              })}

              {/* Rumpf – Hull (über dem Rad, daher danach gezeichnet) */}
              <path d="M0,30 Q18,44 185,44 Q214,44 232,30 L226,14 L6,14 Z"
                fill="#1c2b3a" />
              {/* Weißer Streifen */}
              <rect x="6" y="11" width="222" height="4" fill="#e8e8e8" rx="1" />
              {/* Hauptdeck */}
              <rect x="20" y="2" width="200" height="12" fill="#f0ece3" rx="1" />
              {/* Oberdeck */}
              <rect x="34" y="-10" width="175" height="13" fill="#e8e4db" rx="1" />
              {/* Brückenhaus */}
              <rect x="110" y="-23" width="70" height="14" fill="#d6d2ca" rx="1" />
              {/* Schornstein */}
              <rect x="130" y="-42" width="15" height="21" rx="2" fill="#252525" />
              <ellipse cx="137" cy="-42" rx="8.5" ry="3.5" fill="#181818" />
              {/* Rauch */}
              <ellipse cx="137" cy="-48" rx="7"  ry="5" fill="rgba(185,185,185,0.50)" />
              <ellipse cx="143" cy="-58" rx="9"  ry="7" fill="rgba(185,185,185,0.36)" />
              <ellipse cx="151" cy="-69" rx="12" ry="9" fill="rgba(185,185,185,0.20)" />
              {/* Fenster Hauptdeck */}
              {[28,42,56,70,84,155,169,183,197,211].map((x, i) => (
                <rect key={i} x={x} y="5" width="9" height="6" fill="#90bcd5" rx="1" />
              ))}
              {/* Fenster Oberdeck */}
              {[44,56,68,80,92,155,167,179,191,203].map((x, i) => (
                <rect key={i} x={x} y="-7" width="8" height="5" fill="#9ac5d8" rx="1" />
              ))}
              {/* Flagge am Bug (rechts) */}
              <line x1="226" y1="-10" x2="226" y2="-30" stroke="#555" strokeWidth="1.2" />
              <path d="M226,-30 L242,-24 L226,-18 Z" fill="#cc0000" />
              {/* Wasserspiegelung */}
              <path d="M0,44 Q18,54 185,54 Q214,54 232,46 L226,58 L6,56 Z"
                fill="rgba(28,43,58,0.22)" />
              </g>
            </g>
          </g>

          {/*
           * GROSSER KREUZER – fährt nach RECHTS (lkDrift2: -500px → 1740px)
           */}
          <g className="bg-a" style={{ animation: "lkDrift2 255s linear -130s infinite" }}>
            <g transform="translate(-110,556) scale(0.62)">
              <g className="bg-a-flip">
              <path d="M5,45 Q85,58 310,58 Q372,58 402,45 L394,18 L18,18 Z" fill="#1d2f44" />
              <rect x="10" y="40" width="384" height="7" fill="#8b1a1a" rx="1" />
              <rect x="20" y="5"   width="368" height="15" fill="#e8e4da" rx="1" />
              <rect x="36" y="-12" width="336" height="18" fill="#dedace" rx="1" />
              <rect x="56" y="-28" width="296" height="17" fill="#d4d0c4" rx="1" />
              <rect x="132" y="-50" width="144" height="23" rx="2" fill="#c8c4ba" />
              {[140,158,176,194,212,230,248,266].map((x, i) => (
                <rect key={i} x={x} y="-46" width="13" height="9" fill="#68aac4" rx="1" />
              ))}
              {[62,80,98,116,206,224,242,260,278,296,314,332].map((x, i) => (
                <rect key={i} x={x} y="-24" width="12" height="8" fill="#78bacc" rx="1" />
              ))}
              {[42,60,78,96,114,132,150,210,228,246,264,282,300,318,336,354].map((x, i) => (
                <rect key={i} x={x} y="-8" width="12" height="8" fill="#82bcd4" rx="1" />
              ))}
              {[26,44,62,80,98,116,134,152,214,232,250,268,286,304,322,340,358,376].map((x, i) => (
                <rect key={i} x={x} y="8" width="11" height="8" fill="#7ab8d0" rx="1" />
              ))}
              <rect x="190" y="-72" width="20" height="24" rx="3" fill="#c42400" />
              <ellipse cx="200" cy="-72" rx="11" ry="4.5" fill="#a82000" />
              <rect x="218" y="-68" width="17" height="21" rx="3" fill="#c42400" />
              <ellipse cx="226" cy="-68" rx="9"  ry="3.5" fill="#a82000" />
              <ellipse cx="200" cy="-78" rx="9"  ry="6"   fill="rgba(155,155,155,0.44)" />
              <ellipse cx="208" cy="-88" rx="12" ry="8"   fill="rgba(155,155,155,0.30)" />
              <ellipse cx="218" cy="-100" rx="14" ry="10" fill="rgba(155,155,155,0.18)" />
              <line x1="202" y1="-72" x2="202" y2="-90" stroke="#888" strokeWidth="1.8" />
              <line x1="192" y1="-87" x2="212" y2="-87" stroke="#888" strokeWidth="1.8" />
              <path d="M5,58 Q85,68 310,68 Q372,68 402,58 L394,72 L18,72 Z"
                fill="rgba(29,47,68,0.19)" />
              </g>
            </g>
          </g>

          {/*
           * SCHNELLBOOT – fährt nach LINKS (lkDrift3: 1600px → -400px)
           * Bug zeigt LINKS (x=0, spitzer Punkt), Heck RECHTS (x=126)
           * Kielwasser zieht nach RECHTS hinter dem Heck her
           */}
          <g className="bg-a" style={{ animation: "lkDrift3 52s linear -12s infinite" }}>
            <g transform="translate(0,562) scale(1.12)">
              <g className="bg-a-flip">
              {/* Rumpf: Bug bei x=0 (spitz), Heck bei x=126 (breiter) */}
              <path d="M0,11 Q8,22 80,22 Q108,22 126,15 L126,7 Q108,-3 80,-3 Q8,-3 0,11 Z"
                fill="#18232f" />
              {/* Roter Racing-Streifen */}
              <path d="M3,11 Q12,5 80,5 Q110,5 126,9 L126,12 Q110,8 80,8 Q12,8 3,13 Z"
                fill="#d42a00" />
              {/* Weißes Oberdeck */}
              <path d="M8,7 Q32,-2 96,-2 L122,5 Q98,2 32,2 Q10,3 6,8 Z"
                fill="#eaeaea" />
              {/* Windschutzscheibe – nahe am Bug (links) */}
              <path d="M22,-3 L54,-3 L57,4 L20,4 Z" fill="rgba(96,158,200,0.72)" />
              {/* Cockpit */}
              <path d="M17,4 Q34,-4 54,-3 L56,3 Q36,0 17,5 Z" fill="#22303e" />
              {/* Bug-Spray links (Fahrtrichtung) */}
              <ellipse cx="2" cy="10" rx="10" ry="5" fill="rgba(255,255,255,0.52)" />
              <path d="M0,11 Q-9,7 -15,9 L-9,15 Q-4,13 0,14 Z" fill="rgba(255,255,255,0.36)" />
              {/* Heck-Welle V-Form RECHTS (Heck) */}
              <path d="M126,13 L148,22 Q137,17 126,16 Z" fill="rgba(255,255,255,0.52)" />
              <path d="M126,13 L142,24 Q133,19 126,17 Z" fill="rgba(255,255,255,0.36)" />
              {/* Kielwasser zieht nach RECHTS */}
              <path d="M126,15 Q168,18 208,20 Q246,20 276,18"
                fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2.2" />
              <path d="M126,16 Q165,20 203,23 Q242,23 268,21"
                fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.6" />
              {/* Wasserspiegelung */}
              <path d="M0,22 Q8,28 80,28 Q108,28 126,22 L126,30 L4,28 Z"
                fill="rgba(24,35,47,0.18)" />
              </g>
            </g>
          </g>

          {/* ===== DOPPELTE FLUGZEUGE ===== */}

          {/* CONCORDE 2 */}
          <g className="bg-a" style={{ animation: "lkConcorde 21s linear -15s infinite" }}>
            <g transform="translate(0,80) scale(0.78)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              <path d="M5,4.5 Q60,3.4 118,4 Q135,4.4 148,5 Q140,6 118,6 Q60,6.5 5,5.5 Z" fill="url(#acBodySilver)" />
              <path d="M122,4.2 Q138,4.6 150,5.5 Q140,6.2 126,6 L122,5.5 Z" fill="#b8b8c4" />
              <path d="M8,3.8 Q60,3.0 116,3.6 L116,4.4 Q60,3.8 8,4.4 Z" fill="rgba(255,255,255,0.52)" />
              <path d="M8,5.5 Q55,6 116,6 L76,30 L8,30 Z" fill="url(#acWing)" />
              <path d="M8,4 Q55,3.2 116,3.5 L76,-20 L8,-20 Z" fill="url(#acWing)" opacity="0.55" />
              <rect x="15" y="28" width="18" height="5.5" rx="2.8" fill="url(#acEngine)" />
              <rect x="35" y="29" width="15" height="5" rx="2.5" fill="url(#acEngine)" />
              <rect x="15" y="-21" width="18" height="5.5" rx="2.8" fill="url(#acEngine)" opacity="0.58" />
              <rect x="35" y="-22" width="15" height="5" rx="2.5" fill="url(#acEngine)" opacity="0.58" />
              <rect x="5" y="28" width="12" height="5.5" rx="2.5" fill="#5e5e66" />
              <rect x="5" y="-21" width="12" height="5.5" rx="2.5" fill="#5e5e66" opacity="0.58" />
              <path d="M7,4 Q18,3.5 26,3.5 L18,-20 Z" fill="#c4c4cc" />
              {[52,60,68,76,84,92,100,108,116,125].map((x, i) => (
                <rect key={i} x={x} y="4.0" width="5" height="2.6" fill="rgba(110,168,210,0.75)" rx="0.6" />
              ))}
              <path d="M-6,4.5 L-240,4.0" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="2.0" />
              <path d="M-95,4.0 L-420,3.5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />
              </g>
            </g>
          </g>

          {/* FIGHTER JET 2 */}
          <g className="bg-a" style={{ animation: "lkFighter 24s linear -18s infinite" }}>
            <g transform="translate(0,128) scale(0.84)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              <path d="M0,5 Q25,2.8 60,3.8 L80,5 Q74,7.5 60,7.8 Q25,7.5 0,6 Z" fill="url(#acBodyDark)" />
              <path d="M4,3.2 Q28,2.4 58,3.2 L58,4 Q28,3.2 4,4 Z" fill="rgba(255,255,255,0.22)" />
              <path d="M10,2.8 Q22,0.2 38,1.4 Q44,2.4 42,4 L10,4 Z" fill="rgba(60,120,175,0.85)" />
              <path d="M16,4.5 L46,3.8 L54,2.8 L24,4.5 Z" fill="#252f3c" opacity="0.85" />
              <path d="M20,5 L58,4 L72,26 L20,26 Z" fill="url(#acBodyDark)" />
              <path d="M20,4.5 L58,3.5 L72,-17 L20,-17 Z" fill="url(#acBodyDark)" opacity="0.75" />
              <path d="M58,3.5 L80,5 L73,-17 Z" fill="#1e2838" />
              <path d="M57,5.5 L80,5 L74,16 Z" fill="#1e2838" />
              <path d="M6,6 Q24,8.8 42,7.8 L42,9.8 Q24,10.8 6,8.2 Z" fill="#18202c" />
              <ellipse cx="84" cy="5.5" rx="7.5" ry="3.4" fill="rgba(255,120,10,0.88)" />
              <ellipse cx="90" cy="5.5" rx="5" ry="2.4" fill="rgba(255,198,40,0.78)" />
              <ellipse cx="96" cy="5.5" rx="3" ry="1.6" fill="rgba(255,245,150,0.60)" />
              <path d="M86,5 L290,4.5" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.8" />
              <path d="M86,6.5 L290,7" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.4" />
              </g>
            </g>
          </g>

          {/* BOEING 747 2 */}
          <g className="bg-a" style={{ animation: "lkAirliner 138s linear -90s infinite" }}>
            <g transform="translate(0,196) scale(0.92)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              <path d="M0,7.5 Q18,7 96,6.5 Q112,6 122,8 Q115,10 96,10 Q18,10.5 0,8.5 Z" fill="url(#acBodyWhite)" />
              <path d="M80,5.5 Q96,5 115,5.5 L115,6.5 Q96,5.8 80,6.5 Z" fill="url(#acBodyWhite)" />
              <path d="M4,6.5 Q50,6 95,6.5 L95,7.5 Q50,7 4,7.5 Z" fill="rgba(255,255,255,0.36)" />
              <path d="M10,7 L96,6.5 L108,32 L10,32 Z" fill="url(#acWing)" />
              <path d="M10,7 L96,6.5 L108,-18 L10,-18 Z" fill="url(#acWing)" opacity="0.72" />
              <path d="M8,7 L36,6.8 L38,32 L10,32 Z" fill="url(#acEngine)" />
              <path d="M44,7 L68,6.8 L70,28 L44,28 Z" fill="url(#acEngine)" />
              <path d="M8,6.8 L36,6.6 L38,-18 L10,-18 Z" fill="url(#acEngine)" opacity="0.65" />
              <path d="M44,6.8 L68,6.6 L70,-14 L44,-14 Z" fill="url(#acEngine)" opacity="0.65" />
              <path d="M96,6.5 L122,8 L112,-14 Z" fill="#c8c8d0" />
              <path d="M-5,8 L-290,7.5" fill="none" stroke="rgba(255,255,255,0.34)" strokeWidth="2.2" />
              <path d="M-120,7.5 L-490,7" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
              </g>
            </g>
          </g>

          {/* CESSNA 2 */}
          <g className="bg-a" style={{ animation: "lkCessna 80s linear -52s infinite" }}>
            <g transform="translate(0,276) scale(0.76)" filter="url(#acShadow)">
              <g className="bg-a-flip">
              <path d="M0,5 Q12,3.5 38,4 Q44,4.2 50,5 Q44,5.8 38,6 Q12,6.5 0,6 Z" fill="url(#acCessnaYellow)" />
              <path d="M3,4 Q16,3.2 36,3.8 L36,4.5 Q16,3.9 3,4.7 Z" fill="rgba(255,255,255,0.42)" />
              <path d="M8,3.8 L38,3.8 L32,-12 L5,-12 Z" fill="url(#acCessnaYellow)" />
              <line x1="14" y1="3.8" x2="10" y2="-12" stroke="#c4a030" strokeWidth="1.5" />
              <line x1="29" y1="3.8" x2="26" y2="-12" stroke="#c4a030" strokeWidth="1.5" />
              <circle cx="0" cy="5" r="2.4" fill="#3a3a3a" />
              <line x1="0" y1="-7" x2="0" y2="17" stroke="#2a2a2a" strokeWidth="3.8" />
              <ellipse cx="0" cy="5" rx="1.2" ry="12" fill="rgba(210,210,210,0.22)" />
              <path d="M16,1 L32,1.5 L32,3.8 L16,3.8 Z" fill="rgba(150,200,235,0.76)" />
              <path d="M38,4 L50,5 L44,-10 Z" fill="#d4b840" />
              <path d="M39,5.5 L50,5.5 L45,13 L40,13 Z" fill="#d4b840" />
              </g>
            </g>
          </g>

          {/* ===== DOPPELTE SCHIFFE ===== */}

          {/* RADDAMPFER 2 */}
          <g className="bg-a" style={{ animation: "lkDrift1 190s linear -145s infinite" }}>
            <g transform="translate(-90,564) scale(0.85)">
              <g className="bg-a-flip">
              <ellipse cx="4" cy="36" rx="22" ry="22" fill="none" stroke="#7a3e10" strokeWidth="4.5" />
              <ellipse cx="4" cy="36" rx="10" ry="10" fill="none" stroke="#8b4e22" strokeWidth="2" />
              <line x1="4" y1="14" x2="4" y2="58" stroke="#7a3e10" strokeWidth="2.5" />
              <line x1="-18" y1="36" x2="26" y2="36" stroke="#7a3e10" strokeWidth="2.5" />
              <line x1="-11" y1="20" x2="19" y2="52" stroke="#7a3e10" strokeWidth="2.5" />
              <line x1="19" y1="20" x2="-11" y2="52" stroke="#7a3e10" strokeWidth="2.5" />
              {[0,45,90,135,180,225,270,315].map((deg, i) => {
                const r = 22; const rad = (deg * Math.PI) / 180;
                const x = 4 + r * Math.cos(rad); const y = 36 + r * Math.sin(rad);
                return <rect key={i} x={x-4} y={y-2} width="9" height="4" rx="1" fill="#6a3210" transform={`rotate(${deg}, ${x}, ${y})`} />;
              })}
              <path d="M0,30 Q18,44 185,44 Q214,44 232,30 L226,14 L6,14 Z" fill="#213040" />
              <rect x="6" y="11" width="222" height="4" fill="#dcdcdc" rx="1" />
              <rect x="20" y="2" width="200" height="12" fill="#ece8df" rx="1" />
              <rect x="34" y="-10" width="175" height="13" fill="#e2ddd4" rx="1" />
              <rect x="110" y="-23" width="70" height="14" fill="#d0ccC4" rx="1" />
              <rect x="130" y="-42" width="15" height="21" rx="2" fill="#303030" />
              <ellipse cx="137" cy="-42" rx="8.5" ry="3.5" fill="#202020" />
              <ellipse cx="137" cy="-48" rx="7" ry="5" fill="rgba(185,185,185,0.50)" />
              <ellipse cx="143" cy="-58" rx="9" ry="7" fill="rgba(185,185,185,0.36)" />
              <line x1="226" y1="-10" x2="226" y2="-30" stroke="#555" strokeWidth="1.2" />
              <path d="M226,-30 L242,-24 L226,-18 Z" fill="#0055aa" />
              </g>
            </g>
          </g>

          {/* KREUZER 2 */}
          <g className="bg-a" style={{ animation: "lkDrift2 255s linear -195s infinite" }}>
            <g transform="translate(-110,572) scale(0.55)">
              <g className="bg-a-flip">
              <path d="M5,45 Q85,58 310,58 Q372,58 402,45 L394,18 L18,18 Z" fill="#1a2c42" />
              <rect x="10" y="40" width="384" height="7" fill="#8b1a1a" rx="1" />
              <rect x="20" y="5" width="368" height="15" fill="#e4e0d6" rx="1" />
              <rect x="36" y="-12" width="336" height="18" fill="#dad6ca" rx="1" />
              <rect x="56" y="-28" width="296" height="17" fill="#d0ccbf" rx="1" />
              <rect x="132" y="-50" width="144" height="23" rx="2" fill="#c4c0b6" />
              {[140,158,176,194,212,230,248,266].map((x, i) => (
                <rect key={i} x={x} y="-46" width="13" height="9" fill="#68aac4" rx="1" />
              ))}
              {[62,80,98,116,206,224,242,260,278,296,314,332].map((x, i) => (
                <rect key={i} x={x} y="-24" width="12" height="8" fill="#78bacc" rx="1" />
              ))}
              {[26,44,62,80,98,116,134,152,214,232,250,268,286,304,322,340,358,376].map((x, i) => (
                <rect key={i} x={x} y="8" width="11" height="8" fill="#7ab8d0" rx="1" />
              ))}
              <rect x="190" y="-72" width="20" height="24" rx="3" fill="#c42400" />
              <ellipse cx="200" cy="-72" rx="11" ry="4.5" fill="#a82000" />
              <ellipse cx="200" cy="-78" rx="9" ry="6" fill="rgba(155,155,155,0.44)" />
              <ellipse cx="208" cy="-88" rx="12" ry="8" fill="rgba(155,155,155,0.30)" />
              </g>
            </g>
          </g>

          {/* SCHNELLBOOT 2 */}
          <g className="bg-a" style={{ animation: "lkDrift3 52s linear -35s infinite" }}>
            <g transform="translate(0,576) scale(1.0)">
              <g className="bg-a-flip">
              <path d="M0,11 Q8,22 80,22 Q108,22 126,15 L126,7 Q108,-3 80,-3 Q8,-3 0,11 Z" fill="#1c2838" />
              <path d="M3,11 Q12,5 80,5 Q110,5 126,9 L126,12 Q110,8 80,8 Q12,8 3,13 Z" fill="#1a6aaa" />
              <path d="M8,7 Q32,-2 96,-2 L122,5 Q98,2 32,2 Q10,3 6,8 Z" fill="#eaeaea" />
              <path d="M22,-3 L54,-3 L57,4 L20,4 Z" fill="rgba(96,158,200,0.72)" />
              <path d="M17,4 Q34,-4 54,-3 L56,3 Q36,0 17,5 Z" fill="#22303e" />
              <ellipse cx="2" cy="10" rx="10" ry="5" fill="rgba(255,255,255,0.52)" />
              <path d="M0,11 Q-9,7 -15,9 L-9,15 Q-4,13 0,14 Z" fill="rgba(255,255,255,0.36)" />
              <path d="M126,13 L148,22 Q137,17 126,16 Z" fill="rgba(255,255,255,0.52)" />
              <path d="M126,15 Q168,18 208,20 Q246,20 276,18" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2.2" />
              <path d="M126,16 Q165,20 203,23 Q242,23 268,21" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.6" />
              </g>
            </g>
          </g>

        </svg>
      </div>
    </>
  );
}
