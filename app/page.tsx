'use client';

import { useEffect, useRef } from 'react';

const verticals = [
  { title: 'Ride or Die Billionaire', image: '/assets/ride-or-die.jpg', role: 'Creative Producer', platform: 'DramaBox' },
  { title: 'Swiftly Racing Girl', image: '/assets/swiftly-racing-girl.png', role: 'Creative Producer', platform: 'DramaBox' },
  { title: "The Prince's First Love", image: '/assets/the-princes-first-love.png', role: 'Creative Producer', platform: 'ReelShort' },
  { title: 'All My Bully Wants for Christmas Is Me', image: '/assets/my-bully-christmas.png', role: 'Creative Producer', platform: 'Short-form Drama' },
  { title: 'Callsign: Legacy', image: '/assets/callsign-legacy.png', role: 'Creative Producer', platform: 'ReelShort' },
];

const shortFilms = [
  { title: 'Still Water', cn: '死水', image: '/assets/still-water.jpg', role: 'Producer', format: 'Short Film' },
  { title: 'OYOT', cn: '', image: '/assets/oyot.png', role: 'Producer', format: 'Short Film' },
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

export default function Home() {
  return <main>
    <Cursor />
    <header className="topbar">
      <a className="monogram" href="#top">AC</a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a></nav>
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
        <div>
          <p>For the past six years, I’ve produced and written short-form and vertical drama for ReelShort, DramaBox, and DramaWave — across traditional live action, AI-hybrid productions, and fully AI-generated formats.</p>
          <a href="mailto:anqicfilm@gmail.com">anqicfilm@gmail.com ↗</a>
        </div>
      </div>
    </section>

    <section className="work" id="work">
      <div className="chapter"><p className="kicker">Selected projects · 02</p><h2>Verticals</h2><span>2020—2026</span></div>
      <div className="poster-grid">
        {verticals.map((project, index) => <article className={`poster poster-${index + 1}`} key={project.title}>
          <figure><img src={project.image} alt={`${project.title} poster`} /></figure>
          <div className="caption"><div><span>{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3></div><p>{project.role}<br />{project.platform}</p></div>
        </article>)}
      </div>

      <div className="chapter films-chapter"><p className="kicker">Narrative work · 03</p><h2>Short Films</h2><span>Selected</span></div>
      <div className="film-list">
        {shortFilms.map((project, index) => <article className="film" key={project.title}>
          <figure><img src={project.image} alt={`${project.title} still or poster`} /></figure>
          <div className="film-copy"><div><span>0{index + 1}</span><h3>{project.title}{project.cn && <small>{project.cn}</small>}</h3></div><p>{project.role}<br />{project.format}</p></div>
        </article>)}
      </div>
    </section>

    <section className="contact">
      <p className="kicker">Contact · 04</p>
      <h2>Let’s make<br /><em>something felt.</em></h2>
      <a href="mailto:anqicfilm@gmail.com">anqicfilm@gmail.com ↗</a>
    </section>
    <footer><span>ANQI CHEN © 2026</span><span>Creative Producer &amp; Writer</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
