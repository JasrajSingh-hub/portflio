import { BackToTop, Header, Footer, SectionLabel, NotebookMotion } from "./shared";
import { SystemSketch, ProjectSketch, WorkflowSketch, MiniSketch } from "./sketches";
import { projects, toolbox } from "./projects";

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-top mono"><span><i className="red-dot" /> PROJECT / 001</span><span>PERSONAL NOTEBOOK — 2026</span></div>
        <div className="hero-grid">
          <div className="hero-identity">
            <h1 id="hero-title">JASRAJ<br />SINGH<br />BHATIA<span className="name-period">.</span></h1>
            <div className="name-note hand">developer / builder<svg viewBox="0 0 110 70" aria-hidden="true"><path d="M104 9Q60 3 28 44L12 57m1-17-1 17 20-1" /></svg></div>
            <p className="hero-discipline mono">COMPUTER SCIENCE<br />ENGINEERING STUDENT</p>
          </div>
          <div className="hero-drawing">
            <span className="hand interests">AI → systems → software → games</span>
            <SystemSketch />
            <div className="sketch-caption mono"><span>FIG. 01 — FROM A THOUGHT TO A THING</span><span>↗</span></div>
          </div>
        </div>
        <div className="hero-bottom"><a className="text-link mono" href="#work">EXPLORE THE NOTEBOOK <span>↓</span></a><span className="hand">a work in progress. always.</span><span className="mono page-index">SCROLL TO TURN THE PAGE</span></div>
      </section>
      <section id="about" className="about section page-width">
        <div className="section-margin"><SectionLabel number="01" label="ABOUT" /><span className="hand margin-note">learn → build<br />→ break → fix<svg viewBox="0 0 120 60" aria-hidden="true"><path d="M10 8q85-9 78 38m-12-13 12 13 12-15" /></svg></span></div>
        <div className="about-copy"><h2>I like turning ideas<br />into <span className="drawn-underline">working systems.</span></h2><p>I’m Jasraj Singh Bhatia, a Computer Science Engineering student at SVIET. I build practical software across AI, Generative AI, full-stack development, computer vision, distributed systems and game development.</p><div className="about-foot mono"><span>CURIOUS BY DEFAULT.</span><span>HANDS-ON BY CHOICE.</span></div></div>
      </section>
      <section id="work" className="work section page-width">
        <div className="section-heading"><div><SectionLabel number="02" label="SELECTED WORK" /><h2>Ideas, made real<span className="accent">.</span></h2></div><span className="hand tilted">some things I’ve been building<svg viewBox="0 0 140 50" aria-hidden="true"><path d="M120 3q0 31-83 30m15-10L35 33l19 9" /></svg></span></div>
        <div className="project-list">{projects.slice(0,4).map(project => <article className="project-row" key={project.slug}>
          <div className="project-copy"><div className="project-meta mono"><span className="accent">PROJECT / {project.number}</span><span>{project.category}</span></div><h3><a href={`/work/${project.slug}`}>{project.name}<span className="project-title-arrow">↗</span></a></h3><span className="role mono">{project.role}</span><p>{project.description}</p><ul className="tags" aria-label="Technology stack">{project.tech.map(t=><li key={t}>{t}</li>)}</ul><div style={{display:"flex",gap:"28px",alignItems:"center",marginTop:"28px",flexWrap:"wrap"}}><a className="text-link mono project-link" href={`/work/${project.slug}`}>VIEW PROJECT <span>↗</span></a>{project.github&&<a className="text-link mono project-link" href={project.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>}</div></div>
          <a href={`/work/${project.slug}`} className={`project-visual ${project.slug}`} aria-label={`View ${project.name} case study`}><div className="diagram-top mono"><span>CONCEPT / {project.number}</span><span>+</span></div><ProjectSketch slug={project.slug} /><div className="diagram-bottom"><span className="hand">{project.note}</span><span className="mono">FIG. {project.number}</span></div></a>
        </article>)}</div>
        <div className="more-work-heading mono"><span>ALSO IN THE NOTEBOOK</span><span>MORE EXPLORATIONS ↓</span></div>
        <div className="more-work">{projects.slice(4).map((project,i)=><div className="small-project" key={project.slug}><div className="mono small-project-number"><a href={`/work/${project.slug}`}>{project.number}<span>↗</span></a>{project.github&&<a href={project.github} target="_blank" rel="noreferrer" style={{color:"var(--red)",letterSpacing:".08em"}}>CODE ↗</a>}</div><a href={`/work/${project.slug}`} style={{color:"inherit"}}><MiniSketch variant={i} /><h3>{project.name}</h3></a><span className="role mono">TEAM LEADER &amp; DEVELOPER</span></div>)}</div>
      </section>
      <section id="stack" className="toolbox section page-width"><div className="section-heading"><div><SectionLabel number="03" label="TOOLBOX" /><h2>The tools on my desk.</h2></div><span className="hand tilted">always room for one more.</span></div><div className="toolbox-grid">{toolbox.map((group,i)=><div className="toolbox-group" key={group.name}><div className="toolbox-title mono"><span className="inventory-number">0{i+1}</span><h3>{group.name}</h3><span>+</span></div><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul>{group.note&&<span className="hand toolbox-note">{group.note}</span>}</div>)}</div></section>
      <section id="process" className="process section page-width"><div className="section-margin"><SectionLabel number="04" label="HOW I WORK" /><span className="hand margin-note">lead + code</span></div><div className="process-content"><h2>Build the pieces.<br />Make them work together.</h2><p>Across multiple team projects, I worked as both <strong>Team Leader and Developer</strong> — dividing responsibilities, implementing assigned modules, integrating components and helping the team deliver the final product.</p><WorkflowSketch /><div className="process-notes hand"><span>everyone owns a piece</span><span>make the pieces work together ↗</span></div></div></section>
      <section id="contact" className="contact section page-width"><SectionLabel number="05" label="CONTACT" /><div className="contact-grid"><div><span className="hand contact-note">have an idea?</span><h2>LET’S BUILD<br />SOMETHING<span className="accent">.</span></h2></div><div className="contact-links"><span className="hand contact-arrow">start a conversation<svg viewBox="0 0 80 60" aria-hidden="true"><path d="M5 5q58 0 51 44m-10-12 10 12 13-14" /></svg></span>{[
          ["EMAIL","mailto:jasujasraj123@gmail.com","jasujasraj123@gmail.com"],
          ["LINKEDIN","https://www.linkedin.com/in/jasraj-singh-bhatia-0b1487324/","jasraj-singh-bhatia"],
          ["GITHUB","https://github.com/JasrajSingh-hub","JasrajSingh-hub"],
        ].map(([label,href,value])=><a className="contact-item" href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noreferrer":undefined} key={label}><span className="mono">{label}</span><span className="contact-pending">{value}</span><span aria-hidden="true">↗</span></a>)}<p className="contact-footnote">Open for AI, software, systems and full-stack project conversations.</p></div></div></section>
    </main><Footer /><NotebookMotion /><BackToTop />
  </>;
}
