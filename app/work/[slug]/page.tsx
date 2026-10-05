import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../../projects";
import { Header, Footer, SectionLabel, NotebookMotion } from "../../shared";
import { ProjectSketch, MiniSketch } from "../../sketches";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {const {slug}=await params;const project=projects.find(p=>p.slug===slug);return {title:project?.name??"Page not found",description:project?.description};}
function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      if (inner.includes("`")) {
        const subParts = inner.split(/(`[^`]+`)/g);
        return (
          <strong key={i} style={{ color: "var(--ink)", fontWeight: 600 }}>
            {subParts.map((sub, j) =>
              sub.startsWith("`") && sub.endsWith("`") ? (
                <code key={j}>{sub.slice(1, -1)}</code>
              ) : (
                sub
              )
            )}
          </strong>
        );
      }
      return (
        <strong key={i} style={{ color: "var(--ink)", fontWeight: 600 }}>
          {inner}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

function CaseContent({ content }: { content?: string | string[] }) {
  if (!content) return null;
  const items = Array.isArray(content) ? content : content.split("\n\n");
  return (
    <>
      {items.map((item, idx) => {
        const trimmed = item.trim();
        if (trimmed.startsWith("• ") || trimmed.startsWith("- ")) {
          const lines = trimmed.split("\n").filter(Boolean);
          return (
            <ul key={idx} className="case-bullet-list">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^[•\-]\s*/, "");
                return <li key={lIdx}>{renderInline(cleanLine)}</li>;
              })}
            </ul>
          );
        }
        return <p key={idx}>{renderInline(trimmed)}</p>;
      })}
    </>
  );
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const index=projects.findIndex(p=>p.slug===slug);
  const project=projects[index];
  if(!project)notFound();
  const next=projects[(index+1)%projects.length];
  const sections: [string, string, string | string[] | undefined][] = [
    ["01", "PROBLEM", project.problem],
    ["02", "IDEA", project.idea],
    ["05", "IMPLEMENTATION", project.implementation],
    ["06", "CHALLENGES", project.challenges],
    ["07", "RESULT", project.result],
  ];
  return <><Header/><main id="main" className="case-study page-width"><div className="case-top mono"><a className="text-link" href="/#work">← BACK TO THE NOTEBOOK</a><span>PROJECT / {project.number}</span></div><div className="case-title"><div className="mono case-category">{project.category}</div><h1>{project.name}<span className="accent">.</span></h1><span className="role mono">{project.role}</span><p>{project.description}</p>{project.github&&<div style={{marginTop:"24px",display:"flex",gap:"24px",alignItems:"center",flexWrap:"wrap"}}><a className="text-link mono" href={project.github} target="_blank" rel="noreferrer">SOURCE REPOSITORY <span>↗</span></a>{project.demo&&<a className="text-link mono" href={project.demo} target="_blank" rel="noreferrer">LIVE PROTOTYPE <span>↗</span></a>}</div>}</div>
    {project.problem?<><div className="case-spread"><aside className="case-index mono" aria-label="Case study index"><span>ON THIS PAGE</span>{["PROBLEM","IDEA","ARCHITECTURE","MY CONTRIBUTION","IMPLEMENTATION","CHALLENGES","RESULT","TECH STACK","GITHUB"].map((item,i)=><a href={`#${item.toLowerCase().replaceAll(" ","-")}`} key={item}><span>0{i+1}</span>{item}</a>)}<span className="hand">a closer look ↗</span></aside><div className="case-body">
      {sections.slice(0,2).map(([num,title,text])=><section className="case-section" id={title?.toLowerCase()} key={title}><SectionLabel number={num!} label={title!}/><CaseContent content={text}/></section>)}
      <section className="case-section" id="architecture"><SectionLabel number="03" label="ARCHITECTURE"/><div className={`case-diagram project-visual ${project.slug}`}><div className="diagram-top mono"><span>SYSTEM NOTES</span><span>+</span></div><ProjectSketch slug={project.slug}/><div className="diagram-bottom"><span className="hand">{project.note}</span><span className="mono">FIG. {project.number}</span></div></div>{project.architecture&&<div style={{marginTop:"24px"}}><CaseContent content={project.architecture}/></div>}</section>
      <section className="case-section" id="my-contribution"><SectionLabel number="04" label="MY CONTRIBUTION"/><h2>{project.role==="PERSONAL PROJECT"?"Personal project.":"Team leader. And developer."}</h2><p>{project.role==="PERSONAL PROJECT"?`I built ${project.name === "DGAME" ? "DGAME" : "Engineering Hub"} as a personal project, working on the software and the systems described in this notebook.`:"I contributed as both Team Leader and Developer. Across my team projects, that means dividing responsibilities, implementing assigned modules, integrating components and helping deliver the final product."}</p>{project.contribution?<div style={{marginTop:"18px"}}><CaseContent content={project.contribution}/></div>:(project.role!=="PERSONAL PROJECT"&&<p className="case-note">A module-by-module contribution breakdown is still to be documented.</p>)}</section>
      {sections.slice(2).map(([num,title,text])=><section className="case-section" id={title?.toLowerCase()} key={title}><SectionLabel number={num!} label={title!}/>{title==="CHALLENGES"&&<span className="case-note">DESIGN CONSIDERATIONS</span>}<CaseContent content={text}/></section>)}
      <section className="case-section" id="tech-stack"><SectionLabel number="08" label="TECH STACK"/><ul className="tags case-tags">{project.tech.map(t=><li key={t}>{t}</li>)}</ul></section>
      <section className="case-section" id="github"><SectionLabel number="09" label="GITHUB"/>{project.github?<div style={{marginTop:"20px",display:"flex",flexDirection:"column",gap:"12px"}}><p className="repo-pending"><a className="text-link mono" href={project.github} target="_blank" rel="noreferrer">{project.github.replace("https://github.com/","")} <span>↗</span></a></p>{project.demo&&<p className="repo-pending"><a className="text-link mono" href={project.demo} target="_blank" rel="noreferrer">LIVE DEMO ({project.demo.replace("https://","")}) <span>↗</span></a></p>}</div>:<p className="repo-pending">Repository link coming soon. <span aria-hidden="true">↗</span></p>}</section>
    </div></div></>:<section className="case-in-progress"><MiniSketch variant={index-4}/><span className="hand">still putting these notes together.</span><h2>Case study in progress.</h2><p>My role in this project was <strong>Team Leader &amp; Developer</strong>. The problem, architecture, implementation, challenges, results and technology stack will be added here when the project notes are ready.</p>{project.github?<p className="repo-pending" style={{marginTop:"24px"}}><a className="text-link mono" href={project.github} target="_blank" rel="noreferrer">OPEN ON GITHUB ({project.github.replace("https://github.com/","")}) <span>↗</span></a></p>:<p className="repo-pending">GitHub repository link coming soon.</p>}</section>}
    <div className="case-next"><span className="mono">NEXT PAGE / {next.number}</span><a href={`/work/${next.slug}`}>{next.name}<span>↗</span></a></div></main><Footer/><NotebookMotion/></>;
}
