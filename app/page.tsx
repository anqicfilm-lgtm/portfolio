'use client';

import { useEffect, useRef, useState } from 'react';

const verticals = [
  { title: 'Ride or Die Billionaire', image: '/assets/ride-or-die.jpg', role: 'Creative Producer', platform: 'DramaBox', info: 'Vertical drama · Romance · Creative producing from development through delivery.' },
  { title: 'Swiftly Racing Girl', image: '/assets/swiftly-racing-girl.png', role: 'Creative Producer', platform: 'DramaBox', info: 'Vertical drama · Racing romance · Creative producing across story and production.' },
  { title: "The Prince's First Love", image: '/assets/the-princes-first-love.png', role: 'Creative Producer', platform: 'ReelShort', info: 'Vertical drama · Royal romance · Creative producing for a serialized mobile-first audience.' },
  { title: 'All My Bully Wants for Christmas Is Me', image: '/assets/my-bully-christmas.png', role: 'Creative Producer', platform: 'Short-form Drama', info: 'Vertical drama · Holiday romance · A social-first serialized production.' },
  { title: 'Callsign: Legacy', image: '/assets/callsign-legacy.png', role: 'Creative Producer', platform: 'ReelShort', info: 'Vertical drama · Military romance · Creative producing from page to final delivery.' },
];

const shortFilms = [
  { title: 'Still Water', cn: '死水', image: '/assets/still-water.jpg', role: 'Producer', format: 'Short Film', info: 'A narrative short film produced by Anqi Chen, exploring intimacy, memory, and the distance between two people.' },
  { title: 'OYOT', cn: '', image: '/assets/oyot.png', role: 'Producer', format: 'Short Film', info: 'A cinematic short set against an isolated desert landscape, produced by Anqi Chen.' },
];

const writing = [
  { title: 'Don and His Contract Bride', meta: 'Mafia romance · In pre-production', info: 'A contract marriage pulls two guarded people into a dangerous world where power, loyalty, and desire keep changing the terms.' },
  { title: 'The Dragon Rider Girl', meta: 'Fantasy', info: 'A fantasy project centered on a young woman whose bond with a dragon challenges the order built to control them both.' },
  { title: "The Elf Prince's Forbidden First Love", meta: 'Fantasy romance', info: 'A forbidden romance between an elven prince and the one person his world insists he cannot choose.' },
  { title: 'Bao Down to Love', meta: 'Feature', info: 'A feature-length love story shaped by family, appetite, and the unruly ways people learn to belong.' },
];

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let targetX = -30, targetY = -30, currentX = -30, currentY = -30, frame = 0;
    const move = (event: MouseEvent) => { targetX = event.clientX; targetY = event.clientY; };
    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${currentX - 7}px, ${currentY - 7}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    frame = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(frame); };
  }, []);
  return <div ref={dot} className="cursor-dot" aria-hidden="true" />;
}

function Chapter({ kicker, title, note, id }: { kicker: string; title: string; note: string; id: string }) {
  return <div className="chapter" id={id}><p className="kicker">{kicker}</p><h2>{title}</h2><span>{note}</span></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <Cursor />
    <header className="topbar">
      <a className="monogram" href="#top">AC</a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <div className="work-menu">
          <button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Work <span>{menuOpen ? '−' : '+'}</span></button>
          {menuOpen && <div className="work-dropdown">
            <a href="#narrative" onClick={closeMenu}>Narrative work</a>
            <a href="#verticals" onClick={closeMenu}>Verticals</a>
            <a href="#writing" onClick={closeMenu}>Writing</a>
            <a href="#social" onClick={closeMenu}>Social content</a>
            <a href="#press" onClick={closeMenu}>Press</a>
          </div>}
        </div>
      </nav>
      <a href="mailto:anqicfilm@gmail.com">Email ↗</a>
    </header>

    <section className="cover" id="top">
      <div className="cover-meta"><p>Creative Producer<br />&amp; Writer</p><p>Los Angeles<br />Worldwide</p></div>
      <figure className="portrait"><img src="/assets/anqi-chen.jpg" alt="Portrait of Anqi Chen" /></figure>
      <h1><span>Anqi</span><span>Chen</span></h1>
    </section>

    <section className="intro" id="about">
      <p className="kicker">About · 01</p>
      <div className="intro-copy">
        <h2>I work at the intersection of storytelling and emerging technology.</h2>
        <div className="bio-column">
          <p>For the past six years, I’ve produced and written short-form and vertical drama for ReelShort, DramaBox, and DramaWave — across traditional live action, AI-hybrid productions, and fully AI-generated formats.</p>
          <div className="education"><p>MFA, Creative Producing<br />Columbia University</p><p>BA, Film &amp; TV Producing<br />Communication University of China</p><p>English / Mandarin</p></div>
          <a href="mailto:anqicfilm@gmail.com">anqicfilm@gmail.com ↗</a>
        </div>
      </div>
    </section>

    <section className="work" id="work">
      <Chapter id="narrative" kicker="Narrative work · 02" title="Short Films" note="Selected" />
      <div className="film-list">
        {shortFilms.map((project, index) => <article className="film" key={project.title}>
          <figure><img src={project.image} alt={`${project.title} still or poster`} /></figure>
          <details className="project-details film-detail"><summary><div><span>0{index + 1}</span><h3>{project.title}{project.cn && <small>{project.cn}</small>}</h3></div><p>{project.role}<br />{project.format}</p></summary><div className="detail-panel"><p>{project.info}</p></div></details>
        </article>)}
      </div>

      <Chapter id="verticals" kicker="Selected projects · 03" title="Verticals" note="2020—2026" />
      <div className="poster-grid">
        {verticals.map((project, index) => <article className={`poster poster-${index + 1}`} key={project.title}>
          <figure><img src={project.image} alt={`${project.title} poster`} /></figure>
          <details className="project-details"><summary><div><span>{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3></div><p>{project.role}<br />{project.platform}</p></summary><div className="detail-panel"><p>{project.info}</p></div></details>
        </article>)}
      </div>

      <Chapter id="writing" kicker="Writing · 04" title="On the Page" note="Selected" />
      <div className="writing-list">{writing.map((project, index) => <details className="text-project" key={project.title}><summary><span>0{index + 1}</span><h3>{project.title}</h3><p>{project.meta}</p><b>+</b></summary><div><p>{project.info}</p></div></details>)}</div>

      <Chapter id="social" kicker="Social content · 05" title="In Practice" note="Ongoing" />
      <div className="social-block"><p>Personal short-form video, concept to final cut — from a 10-minute dog reel to an ongoing vlog practice.</p><details className="social-detail"><summary>@bubugoesla <span>+</span></summary><div><p>Concept, writing, shooting, producing, and editing by Anqi Chen. A personal laboratory for rhythm, character, everyday observation, and audience connection.</p><a href="https://www.instagram.com/bubugoesla" target="_blank" rel="noreferrer">View social ↗</a></div></details></div>

      <Chapter id="press" kicker="Press · 06" title="Press" note="Selected" />
      <details className="press-block"><summary>Press, screenings &amp; recognition <span>+</span></summary><div><p>Selected features, screenings, and conversations will be added here. For press materials or interview requests, please get in touch.</p><a href="mailto:anqicfilm@gmail.com">Press inquiries ↗</a></div></details>
    </section>

    <section className="contact"><p className="kicker">Contact · 07</p><h2>Let’s make<br /><em>something felt.</em></h2><a href="mailto:anqicfilm@gmail.com">anqicfilm@gmail.com ↗</a></section>
    <footer><span>ANQI CHEN © 2026</span><span>Creative Producer &amp; Writer</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
