"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      className="theme-toggle mono"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "Light (Washi)" : "Dark (Sumi)"} mode`}
      title={`Switch to ${isDark ? "Light (Washi)" : "Dark (Sumi)"} mode`}
    >
      <span className="theme-toggle-dot" aria-hidden="true" />
      <span className="theme-toggle-text">{isDark ? "LIGHT" : "DARK"}</span>
      <span className="theme-toggle-sub hand" aria-hidden="true">{isDark ? "washi" : "sumi"}</span>
      <span className="theme-toggle-icon" aria-hidden="true">{isDark ? "☼" : "☾"}</span>
    </button>
  );
}

export function Header() {
  const [active, setActive] = useState("");
  useEffect(()=> {
    const targets=["about","work","stack","contact"].map(id=>document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id);},{rootMargin:"-15% 0px -55% 0px"});
    targets.forEach(target=>observer.observe(target));
    return ()=>observer.disconnect();
  },[]);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header page-width">
        <a href="/" className="wordmark" aria-label="Jasraj Singh Bhatia home">
          JASRAJ <span>/</span> BHATIA<span className="brand-square" />
        </a>
        <span className="hand header-note">building things, figuring them out</span>
        <nav aria-label="Main navigation">
          {[["ABOUT","about"],["WORK","work"],["STACK","stack"],["CONTACT","contact"]].map(([label,id])=>(
            <a className={active===id?"active":""} key={id} href={`/#${id}`} aria-current={active===id?"location":undefined}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="resume mono" href="/jasraj_resume.pdf" target="_blank" rel="noreferrer" aria-label="Open Jasraj Singh Bhatia resume">
            RESUME <span>↗</span><small>PDF</small>
          </a>
        </div>
      </header>
    </>
  );
}
export function Footer() {return <footer className="site-footer page-width"><div><a href="/">JASRAJ SINGH BHATIA</a><span className="mono">CSE / AI / SOFTWARE / SYSTEMS</span></div><span className="hand">page saved.</span><span className="mono">© 2026</span></footer>;}
export function SectionLabel({number,label}:{number:string;label:string}) {return <div className="section-label mono"><span>{number}</span><span className="section-slash">/</span>{label}</div>;}

export function NotebookMotion() {
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add("is-drawn");observer.unobserve(e.target);}},{threshold:.15});
    document.querySelectorAll(".sketch-svg,.drawn-underline").forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[]);
  return null;
}
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  },[]);
  return <button className={`back-to-top mono ${visible ? "is-visible" : ""}`} type="button" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top"><span>TOP</span><span aria-hidden="true">↑</span></button>;
}
