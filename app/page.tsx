'use client';

import { useEffect, useState } from 'react';

const categories = ['All work', 'Verticals', 'Short films', 'Variety shows', 'Social content'];
const projects = [
  { title: 'Neon After Dark', category: 'Verticals', year: '2026', role: 'Executive Producer', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=88', color: '#9eb6c2', blurb: 'A cinematic vertical series about ambition, intimacy and the city after midnight.' },
  { title: 'The Last Summer', category: 'Short films', year: '2025', role: 'Producer', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=88', color: '#c7b57f', blurb: 'A quiet coming-of-age film set across one fading coastal summer.' },
  { title: 'Come Play With Us', category: 'Variety shows', year: '2025', role: 'Series Producer', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1800&q=88', color: '#b24335', blurb: 'A fast, joyful studio format built around music, games and unexpected guests.' },
  { title: 'Made To Move', category: 'Social content', year: '2026', role: 'Creative Producer', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=88', color: '#c8d5b9', blurb: 'A social-first campaign translating one brand idea into a living content system.' },
  { title: 'Small Hours', category: 'Short films', year: '2024', role: 'Producer', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1800&q=88', color: '#6c6b70', blurb: 'Two strangers, one overnight train and a conversation that changes its destination.' },
  { title: 'One Minute City', category: 'Verticals', year: '2025', role: 'Lead Producer', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=88', color: '#726b8f', blurb: 'Character-led micro stories made for the speed and intimacy of the vertical screen.' },
];

export default function Home() {
  const [filter, setFilter] = useState('All work');
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const visible = filter === 'All work' ? projects : projects.filter((p) => p.category === filter);
  useEffect(() => { document.body.style.overflow = selected ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selected]);

  return <main>
    <header className="site-header"><a className="wordmark" href="#top">YOUR NAME<span>®</span></a><nav><a href="#work">Work</a><a href="#about">About</a></nav><a className="contact-link" href="mailto:hello@yourname.com">Get in touch ↗</a></header>
    <section className="hero" id="top"><p className="eyebrow">Independent Producer · Los Angeles / Worldwide</p><h1>I produce stories<br />people want to <em>feel.</em></h1><div className="hero-bottom"><p>From vertical series to short films, entertainment formats and social campaigns — I bring ambitious ideas into the real world.</p><span>Selected work<br />2024—2026</span></div></section>
    <section className="work" id="work"><div className="section-head"><h2>Selected work</h2><div className="filters" role="group" aria-label="Filter projects">{categories.map((category) => <button className={filter === category ? 'active' : ''} key={category} onClick={() => setFilter(category)}>{category}</button>)}</div></div><div className="project-grid">{visible.map((project, index) => <button className={`project-card card-${index % 4}`} key={project.title} onClick={() => setSelected(project)}><div className="project-image" style={{ backgroundColor: project.color }}><img src={project.image} alt="" /><span className="view-project">View project ↗</span></div><div className="project-meta"><h3>{project.title}</h3><p>{project.category} · {project.year}</p></div></button>)}</div></section>
    <section className="about" id="about"><p className="eyebrow">About</p><h2>Good producing is the invisible architecture behind work that feels effortless.</h2><div className="about-copy"><p>I work from first spark to final delivery — shaping the creative, building the right team, and protecting the idea through every practical decision.</p><div><span>Based in Los Angeles</span><a href="mailto:hello@yourname.com">hello@yourname.com ↗</a><a href="#">Instagram ↗</a></div></div></section>
    <footer><span>YOUR NAME © 2026</span><a href="#top">Back to top ↑</a></footer>
    {selected && <div className="project-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}><article onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)}>Close ×</button><div className="modal-image" style={{ backgroundColor: selected.color }}><img src={selected.image} alt="" /></div><div className="modal-copy"><div><p>{selected.category} · {selected.year}</p><h2>{selected.title}</h2></div><div><p className="role">{selected.role}</p><p>{selected.blurb}</p></div></div></article></div>}
  </main>;
}
