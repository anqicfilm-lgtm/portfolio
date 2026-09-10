'use client';

import { useEffect, useRef, useState } from 'react';

const verticals = [
  { title: 'Ride or Die Billionaire', image: '/assets/ride-or-die.jpg', role: 'Executive Producer', platform: 'DramaWave', info: 'Vertical drama · Executive produced by Anqi Chen.', link: 'https://www.imdb.com/title/tt43643427/?ref_=nm_knf_c_3' },
  { title: 'Swiftly Racing Girl', image: '/assets/swiftly-racing-girl.png', role: 'Executive Producer', platform: 'DramaWave', info: 'Vertical drama · Executive produced by Anqi Chen.', link: 'https://www.imdb.com/title/tt43688071/?ref_=ext_shr_lnk' },
  { title: "The Prince's First Love", image: '/assets/the-princes-first-love.png', role: 'Line Producer', platform: 'ReelShort', info: 'A queer campus romance produced for a serialized, mobile-first audience.', link: '' },
  { title: 'All My Bully Wants for Christmas Is Me', image: '/assets/my-bully-christmas.png', role: 'UPM', platform: 'DramaWave', info: 'Vertical holiday drama · Unit Production Manager.', link: '' },
  { title: 'Callsign: Legacy', image: '/assets/callsign-legacy.png', role: 'UPM', platform: 'ReelShort', info: 'Vertical military drama · Unit Production Manager.', link: '' },
];

const shortFilms = [
  { title: 'Still Water', cn: '死水', image: '/assets/still-water.jpg', role: 'Producer', format: 'Short Film', info: 'An intimate story between two women — tracing closeness, memory, and the distance that grows between them.', link: '' },
  { title: 'OYOT', cn: '', image: '/assets/oyot.png', role: 'Producer', format: 'Short Film', info: 'A Korean immigrant girl visits her estranged father in the desert to reconnect over Christmas. Confronted by his new life, she must face the fractures between them, let go, and grow into herself.', link: 'https://www.cufilmfest.arts.columbia.edu/2026-films/oyot' },
];

const writing = [
  { title: 'Don and His Contract Bride', meta: 'Vertical · Mafia romance · In pre-production', info: 'A contract marriage pulls two guarded people into a dangerous world where power, loyalty, and desire keep changing the terms.' },
  { title: 'The Dragon Rider Girl', meta: 'Vertical · Fantasy', info: 'A fantasy vertical centered on a young woman whose bond with a dragon challenges the order built to control them both.' },
  { title: "The Elf Prince's Forbidden First Love", meta: 'Vertical · Fantasy romance', info: 'A forbidden vertical romance between an elven prince and the one person his world insists he cannot choose.' },
  { title: 'Bao Down to Love', meta: 'Feature · Asian family', info: 'A feature about an Asian family, love, food, and the unruly ways people learn to belong.' },
  { title: 'Bleeding Situation', meta: 'Short · Comedy', info: 'A young girl who has never learned about menstruation thinks she is dying. With her friends, she launches a chaotic rescue mission — and discovers what is really happening to her body.' },
];

const press = [
  { publication: 'CanvasRebel', title: 'Meet Anqi Chen', link: 'https://canvasrebel.com/meet-anqi-chen/' },
  { publication: 'Bold Journey', title: 'Meet Anqi Chen', link: 'https://boldjourney.com/meet-anqi-chen/' },
  { publication: 'Gigwise', title: 'Producer Anqi Chen Bridges Asian Independent Film and Global Digital Storytelling', link: 'https://www.gigwise.com/producer-anqi-chen-bridges-asian-independent-film-global-digital-storytelling/' },
  { publication: 'High on Films', title: "Anqi Chen: Behind DramaWave’s First AI-Live Action Hybrid Production", link: 'https://www.highonfilms.com/anqi-chen-behind-dramawaves-first-ai-live-action-hybrid-production/' },
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
        <div className="work-menu" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
          <button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Work <span>{menuOpen ? '−' : '+'}</span></button>
          <div className={`work-dropdown ${menuOpen ? 'is-open' : ''}`}>
            <a href="#narrative" onClick={closeMenu}>Narrative work</a>
            <a href="#verticals" onClick={closeMenu}>Verticals</a>
            <a href="#writing" onClick={closeMenu}>Writing</a>
            <a href="#social" onClick={closeMenu}>Social content</a>
            <a href="#press" onClick={closeMenu}>Press</a>
          </div>
        </div>
      </nav>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anqicfilm@gmail.com" target="_blank" rel="noreferrer">Email ↗</a>
    </header>

    <section className="cover" id="top">
      <div className="cover-meta"><p>Creative Producer<br />&amp; Writer</p><p>Los Angeles</p></div>
      <figure className="portrait"><img src="/assets/anqi-chen.jpg" alt="Portrait of Anqi Chen" /></figure>
      <h1><span>Anqi</span><span>Chen</span></h1>
    </section>

    <section className="intro" id="about">
      <p className="kicker">About · 01</p>
      <div className="intro-copy">
        <h2>I work at the intersection of storytelling and emerging technology.</h2>
        <div className="bio-column">
          <p>Six years producing from page to screen — development, scripts, budgets, crews, vendors, AI and CGI-integrated post-production, start to finish. I work closely with writers and directors to shape story and protect creative vision, lead teams independently, and stay ahead of where audience taste is headed.</p>
          <div className="education"><p>MFA, Creative Producing<br />Columbia University</p><p>BA, Film &amp; TV Producing<br />Communication University of China</p><p>English / Mandarin</p></div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anqicfilm@gmail.com" target="_blank" rel="noreferrer">anqicfilm@gmail.com ↗</a>
        </div>
      </div>
    </section>

    <section className="work" id="work">
      <Chapter id="narrative" kicker="Narrative work · 02" title="Short Films" note="Selected" />
      <div className="film-list">
        {shortFilms.map((project, index) => <article className="film" key={project.title}>
          <figure><img src={project.image} alt={`${project.title} still or poster`} /></figure>
          <details className="project-details film-detail"><summary><div><span>0{index + 1}</span><h3>{project.title}{project.cn && <small>{project.cn}</small>}</h3></div><p>{project.role}<br />{project.format}</p></summary><div className="detail-panel"><p>{project.info}</p>{project.link && <a href={project.link} target="_blank" rel="noreferrer">Columbia University Film Festival ↗</a>}</div></details>
        </article>)}
      </div>

      <Chapter id="verticals" kicker="Selected projects · 03" title="Verticals" note="2020—2026" />
      <div className="poster-grid">
        {verticals.map((project, index) => <article className={`poster poster-${index + 1}`} key={project.title}>
          <figure><img src={project.image} alt={`${project.title} poster`} /></figure>
          <details className="project-details"><summary><div><span>{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3></div><p>{project.role}<br />{project.platform}</p></summary><div className="detail-panel"><p>{project.info}</p>{project.link && <a href={project.link} target="_blank" rel="noreferrer">IMDb ↗</a>}</div></details>
        </article>)}
      </div>

      <Chapter id="writing" kicker="Writing · 04" title="On the Page" note="Selected" />
      <div className="writing-list">{writing.map((project, index) => <details className="text-project" key={project.title}><summary><span>0{index + 1}</span><h3>{project.title}</h3><p>{project.meta}</p><b>+</b></summary><div><p>{project.info}</p></div></details>)}</div>

      <Chapter id="social" kicker="Social content · 05" title="In Practice" note="Ongoing" />
      <div className="social-block"><p>I’m passionate about rescue dogs. @bubugoesla follows my dog’s life and growth through personal short-form video, brand collaborations, and UGC — concept to final cut.</p><details className="social-detail"><summary>@bubugoesla <span>+</span></summary><div><p>An ongoing social practice built around rescue-dog advocacy, everyday observation, audience connection, and selected brand collaborations.</p><a href="https://www.tiktok.com/@bubugoesla" target="_blank" rel="noreferrer">View TikTok ↗</a></div></details></div>

      <Chapter id="press" kicker="Press · 06" title="Press" note="Selected" />
      <div className="press-list">{press.map((item, index) => <a href={item.link} target="_blank" rel="noreferrer" key={item.link}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.publication}</p><b>↗</b></a>)}</div>
    </section>

    <section className="contact"><p className="kicker">Contact · 07</p><h2>Let’s make<br /><em>something felt.</em></h2><div className="contact-links"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=anqicfilm@gmail.com" target="_blank" rel="noreferrer"><span>Email</span>anqicfilm@gmail.com ↗</a><a href="https://www.imdb.com/name/nm15097462/?ref_=ext_shr_lnk" target="_blank" rel="noreferrer"><span>IMDb</span>Anqi Chen ↗</a></div></section>
    <footer><span>ANQI CHEN © 2026</span><span>Creative Producer &amp; Writer</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
