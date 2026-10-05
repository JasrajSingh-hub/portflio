import type { ReactNode } from "react";

function Sketch({children,label,viewBox="0 0 600 380",className=""}:{children:ReactNode;label:string;viewBox?:string;className?:string}) {
  return <svg className={`sketch-svg ${className}`} viewBox={viewBox} role="img" aria-label={label}><defs><marker id={`arrow-${className}`} viewBox="0 0 12 12" refX="9" refY="6" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M2 2l8 4-8 4" fill="none" stroke="currentColor" strokeWidth="1.3" /></marker></defs>{children}</svg>;
}
function Box({x,y,w=130,h=52,label,accent=false}:{x:number;y:number;w?:number;h?:number;label:string;accent?:boolean}) {
  return <g className={accent?"rough-box red-box":"rough-box"}><path className="draw-line" d={`M${x-1} ${y+2}L${x+w-2} ${y-1}L${x+w+1} ${y+h-1}L${x+1} ${y+h+2}Z`} /><path className="pencil-echo" d={`M${x+3} ${y-2}L${x+w+3} ${y+1}L${x+w-1} ${y+h+4}`} /><text x={x+w/2} y={y+h/2+1} dominantBaseline="middle" textAnchor="middle">{label}</text></g>;
}
function Arrow({d,type="system",dashed=false}:{d:string;type?:string;dashed?:boolean}) {return <path className={`connector draw-line ${dashed?"dashed":""}`} d={d} markerEnd={`url(#arrow-${type})`} />;}

export function SystemSketch() {return <Sketch label="An idea becomes code, a model and a system, then ships; feedback loops lead back to the idea." viewBox="0 0 570 465" className="system">
  <g className="construction"><path d="M32 54H538M32 379H538M75 32V425M493 32V425"/><path d="M22 44h20m-10-10v20M528 44h20m-10-10v20M22 389h20m-10-10v20M528 389h20m-10-10v20" /></g>
  <Box x={76} y={63} w={120} h={62} label="IDEA" /><Box x={353} y={74} w={133} h={62} label="CODE" />
  <Arrow d="M203 90Q275 75 342 98" />
  <text className="svg-hand" x="225" y="67" transform="rotate(-5 225 67)">what if?</text>
  <Arrow d="M421 145q10 40-2 66" /><Box x={350} y={221} w={136} h={65} label="MODEL" />
  <path className="connector dashed" d="M408 220v-33h-43" /><text className="svg-hand" x="452" y="183" transform="rotate(5 452 183)">iterate</text>
  <g className="system-module"><path className="draw-line" d="M57 203L263 199l2 121-208 5Z"/><path className="pencil-echo" d="M60 206l199-3 3 120"/><path d="M58 232l204-2"/><circle cx="72" cy="217" r="2"/><circle cx="81" cy="217" r="2"/><circle cx="90" cy="217" r="2"/><text x="160" y="220" textAnchor="middle">SYSTEM</text><path d="M83 253h48v42H83ZM155 253h78v14h-78ZM155 280h55M155 290h34"/><text className="code-mark" x="108" y="279" textAnchor="middle">&lt;/&gt;</text></g>
  <Arrow d="M339 252Q300 242 275 257" />
  <Arrow d="M163 333q-3 56 89 63" /><Box x={263} y={364} w={120} h={58} label="SHIP" accent />
  <path className="feedback connector dashed draw-line" d="M64 292Q15 288 27 178Q26 105 62 99" markerEnd="url(#arrow-system)"/>
  <text className="svg-hand" x="74" y="369" transform="rotate(-7 74 369)">make it work.</text>
  <text className="svg-hand" x="404" y="392" transform="rotate(-6 404 392)">then make</text><text className="svg-hand" x="405" y="415">it better.</text>
  <path className="hand-mark draw-line" d="M270 432q67 6 113-3" />
</Sketch>;}

export function ProjectSketch({slug}:{slug:string}) {
  if(slug==="dgame")return <div className="vehicle-image"><img src="/images/dgame-sketch.png" alt="Technical pencil sketch of a delivery van, annotated with steering, braking, cargo, collision, physics and delivery." width="1536" height="1024" loading="lazy" /><span className="hand vehicle-note">pivot point ↗<br /><span>traction + wheelbase</span></span></div>;
  if(slug==="engineering-hub")return <Sketch label="Documents to chunk to embed to vector database to retrieve to local LLM to answer." className="rag">
    <Box x={40} y={48} label="DOCUMENTS"/><Box x={236} y={48} label="CHUNK"/><Box x={432} y={48} label="EMBED"/>
    <Arrow type="rag" d="M177 75q28-4 49 0"/><Arrow type="rag" d="M376 75q25-4 47 0"/><Arrow type="rag" d="M497 108q4 24 0 41"/>
    <Box x={432} y={163} label="VECTOR DB"/><Box x={236} y={163} label="RETRIEVE"/><Box x={40} y={163} label="LOCAL LLM"/>
    <Arrow type="rag" d="M422 188q-27 4-47 0"/><Arrow type="rag" d="M225 189q-28 3-47 0"/><Arrow type="rag" d="M103 225v55q0 13 22 13h99"/>
    <Box x={236} y={268} label="ANSWER" accent/><text className="svg-hand" x="386" y="297" transform="rotate(-5 386 297)">with context.</text><path className="hand-mark" d="M384 306q69 3 104-4" />
    <text className="svg-small" x="41" y="30">REPOS / MARKDOWN / PDFs</text><path className="diagram-boundary" d="M22 122H574"/><text className="svg-small" x="404" y="352">ALL RUNNING LOCALLY</text>
  </Sketch>;
  if(slug==="fssai-compliance")return <Sketch label="Voice or text to AI extraction to validation to eligibility to hygiene to QR pass. AI extracts and deterministic rules decide." className="fssai">
    <Box x={34} y={67} w={146} label="VOICE / TEXT"/><Box x={224} y={67} w={146} label="AI EXTRACTION"/><Box x={414} y={67} w={146} label="VALIDATION"/>
    <Arrow type="fssai" d="M189 93h25"/><Arrow type="fssai" d="M381 93h23"/><Arrow type="fssai" d="M487 128q5 32 0 71"/>
    <Box x={414} y={211} w={146} label="ELIGIBILITY"/><Box x={224} y={211} w={146} label="HYGIENE"/><Box x={34} y={211} w={146} label="QR PASS" accent/>
    <Arrow type="fssai" d="M404 237h-25"/><Arrow type="fssai" d="M215 237h-26"/>
    <path className="diagram-boundary" d="M395 38v252"/><text className="svg-hand" x="225" y="166" transform="rotate(-5 225 166)">understand first</text><text className="svg-hand" x="401" y="324">rules decide.</text><text className="svg-small" x="35" y="329">EXTRACT → CHECK → VERIFY</text>
  </Sketch>;
  if(slug==="qthorium-mesh")return <Sketch label="Client to orchestrator to three workers and monitor; gRPC, Redis, heartbeat and failover connect the system." className="mesh">
    <Box x={239} y={18} w={125} h={45} label="CLIENT"/><Box x={210} y={99} w={182} h={48} label="ORCHESTRATOR"/><Arrow type="mesh" d="M301 68v22"/>
    <text className="svg-small" x="319" y="83">gRPC</text><Arrow type="mesh" d="M233 156q-116 2-120 54"/><Arrow type="mesh" d="M301 157v53"/><Arrow type="mesh" d="M371 156q114 0 118 54"/>
    <Box x={49} y={219} label="WORKER"/><Box x={236} y={219} label="WORKER"/><Box x={423} y={219} label="WORKER"/>
    <Arrow type="mesh" d="M114 281q0 62 112 60"/><Arrow type="mesh" d="M301 280v37"/><Arrow type="mesh" d="M489 280q0 60-115 59"/><Box x={236} y={323} h={46} label="MONITOR"/>
    <text className="svg-small" x="60" y="183">Redis</text><text className="svg-small" x="321" y="301">Heartbeat</text><text className="svg-hand" x="419" y="128" transform="rotate(-4 419 128)">failover?</text><path className="dashed connector" d="M434 136q87 8 86 67"/>
  </Sketch>;
  if(slug==="medisign-ai")return <Sketch label="Camera and audio to MediaPipe to ISL and emergency models to drug OCR to safety audit to triage." className="medisign">
    <Box x={34} y={67} w={146} label="CAMERA / AUDIO"/><Box x={224} y={67} w={146} label="MEDIAPIPE"/><Box x={414} y={67} w={146} label="ISL / GESTURE"/>
    <Arrow type="medisign" d="M180 93h44"/><Arrow type="medisign" d="M370 93h44"/><Arrow type="medisign" d="M487 128q5 32 0 71"/>
    <Box x={414} y={211} w={146} label="DRUG OCR"/><Box x={224} y={211} w={146} label="SAFETY AUDIT"/><Box x={34} y={211} w={146} label="CLINICAL TRIAGE" accent/>
    <Arrow type="medisign" d="M414 237h-44"/><Arrow type="medisign" d="M224 237h-44"/>
    <path className="diagram-boundary" d="M395 38v252"/><text className="svg-hand" x="225" y="166" transform="rotate(-5 225 166)">signs to safety</text><text className="svg-hand" x="382" y="324">assistive bridge.</text><text className="svg-small" x="35" y="329">VISION → PHARMA → TRIAGE</text>
  </Sketch>;
  if(slug==="vitalguard-ai")return <Sketch label="Patient vitals to dual care routing to risk evaluation to doctor and nurse coordination to Gemini summaries to discharge." className="vitalguard">
    <Box x={34} y={67} w={146} label="VITALS INPUT"/><Box x={224} y={67} w={146} label="DUAL CARE MODE"/><Box x={414} y={67} w={146} label="RISK EVALUATOR"/>
    <Arrow type="vitalguard" d="M180 93h44"/><Arrow type="vitalguard" d="M370 93h44"/><Arrow type="vitalguard" d="M487 128q5 32 0 71"/>
    <Box x={414} y={211} w={146} label="CARE & TASKS"/><Box x={224} y={211} w={146} label="GEMINI INSIGHTS"/><Box x={34} y={211} w={146} label="DISCHARGE" accent/>
    <Arrow type="vitalguard" d="M414 237h-44"/><Arrow type="vitalguard" d="M224 237h-44"/>
    <path className="diagram-boundary" d="M395 38v252"/><text className="svg-hand" x="225" y="166" transform="rotate(-5 225 166)">continuous watch</text><text className="svg-hand" x="382" y="324">dual care modes.</text><text className="svg-small" x="35" y="329">VITALS → TASKS → DISCHARGE</text>
  </Sketch>;
  return <Sketch label="Client to orchestrator to three workers and monitor; gRPC, Redis, heartbeat and failover connect the system." className="mesh">
    <Box x={239} y={18} w={125} h={45} label="CLIENT"/><Box x={210} y={99} w={182} h={48} label="ORCHESTRATOR"/><Arrow type="mesh" d="M301 68v22"/>
    <text className="svg-small" x={319} y={83}>gRPC</text><Arrow type="mesh" d="M233 156q-116 2-120 54"/><Arrow type="mesh" d="M301 157v53"/><Arrow type="mesh" d="M371 156q114 0 118 54"/>
    <Box x={49} y={219} label="WORKER"/><Box x={236} y={219} label="WORKER"/><Box x={423} y={219} label="WORKER"/>
    <Arrow type="mesh" d="M114 281q0 62 112 60"/><Arrow type="mesh" d="M301 280v37"/><Arrow type="mesh" d="M489 280q0 60-115 59"/><Box x={236} y={323} h={46} label="MONITOR"/>
    <text className="svg-small" x={60} y="183">Redis</text><text className="svg-small" x="321" y="301">Heartbeat</text><text className="svg-hand" x="419" y="128" transform="rotate(-4 419 128)">failover?</text><path className="dashed connector" d="M434 136q87 8 86 67"/>
  </Sketch>;
}

export function WorkflowSketch() {return <Sketch label="Idea, sketch, architecture, divide work, build, integrate and ship." viewBox="0 0 710 245" className="workflow">
  <Box x={10} y={34} w={123} h={50} label="IDEA" /><Box x={186} y={34} w={123} h={50} label="SKETCH" /><Box x={362} y={34} w={143} h={50} label="ARCHITECTURE" /><Box x={558} y={34} w={143} h={50} label="DIVIDE WORK" />
  <Arrow type="workflow" d="M142 59h33"/><Arrow type="workflow" d="M320 59h33"/><Arrow type="workflow" d="M516 59h33"/><Arrow type="workflow" d="M630 93v67"/>
  <Box x={558} y={172} w={143} h={50} label="BUILD"/><Box x={362} y={172} w={143} h={50} label="INTEGRATE"/><Box x={186} y={172} w={123} h={50} label="SHIP" accent/>
  <Arrow type="workflow" d="M548 197h-33"/><Arrow type="workflow" d="M352 197h-33"/><text className="svg-hand" x="66" y="139" transform="rotate(-6 66 139)">thinking → doing</text>
</Sketch>;}

export function MiniSketch({variant}:{variant:number}) {return <svg className="mini-sketch" viewBox="0 0 180 85" aria-hidden="true">{variant===0?<><path d="M14 17l44-2 1 53-46 1ZM73 17l44-1v52H73ZM132 18l35-1 1 51h-37Z"/><path d="M24 29h23m-23 10h16m-16 10h20M83 30h23m-23 10h17m-17 10h22M141 32l7 7 11-13M60 41h12m46 0h13"/></>:variant===1?<><path d="M9 21l159-2 1 47-161 3Z"/><path d="M16 45h24l8-13 12 27 16-38 11 24h20l7-13 10 22 11-9h27"/><path className="faint" d="M9 74h160M36 9v66m54-66v66m54-66v66"/></>:<><path d="M39 18l94 4-42 47Zm0 0 7 48 87-44M46 66l45 3"/><circle cx="39" cy="18" r="10"/><circle cx="133" cy="22" r="10"/><circle cx="91" cy="69" r="10"/><circle cx="46" cy="66" r="7"/></>}</svg>;}
