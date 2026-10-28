import { useEffect, useState, type ReactNode } from 'react'
import { Activity, Box, ChevronLeft, ChevronRight, Download, Gauge, Menu, Orbit, Route, Settings2, X } from 'lucide-react'

export type PageId = 'overview' | 'gait' | 'kinematics' | 'compliance' | 'actuator'
const pages = [
  { id:'overview', label:'Spatial Overview', short:'OVERVIEW', icon:Orbit },
  { id:'gait', label:'Gait Dynamics', short:'GAIT', icon:Activity },
  { id:'kinematics', label:'Trajectory Tracking', short:'KINEMATICS', icon:Route },
  { id:'compliance', label:'Force Equilibrium', short:'COMPLIANCE', icon:Gauge },
  { id:'actuator', label:'Full 3D CAD Architecture', short:'3D CAD', icon:Box },
] as const

export default function Shell({ page, setPage, children }: { page:PageId; setPage:(p:PageId)=>void; children:ReactNode }) {
  const [collapsed,setCollapsed]=useState(false); const [mobile,setMobile]=useState(false); const [now,setNow]=useState(new Date()); const [mode,setMode]=useState('AUTONOMOUS')
  useEffect(()=>{ const id=setInterval(()=>setNow(new Date()),1000); return ()=>clearInterval(id)},[])
  const exportView=()=>{ const blob=new Blob([JSON.stringify({project:'Mitigators Vyuha',page,mode,timestamp:new Date().toISOString()},null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`vyuha-${page}-telemetry.json`; a.click(); URL.revokeObjectURL(a.href) }
  const nav=(mobileOpen=false)=><aside className={`${mobileOpen?'fixed inset-y-0 left-0 z-50':'hidden'} ${collapsed&&!mobileOpen?'lg:w-[76px]':'lg:w-64'} w-64 shrink-0 flex-col border-r border-white/[0.07] bg-[#080808]/95 backdrop-blur-xl lg:flex`}>
    <div className="flex h-16 items-center justify-between overflow-hidden border-b border-white/[0.07] px-0"><div className={`${collapsed&&!mobileOpen?'lg:hidden':''} flex h-16 w-full items-center overflow-hidden`}><img src="/assets/vyuha-real-logo.png" alt="Mitigators Vyuha" className="h-14 w-full shrink-0 object-contain"/></div>{mobileOpen?<button onClick={()=>setMobile(false)}><X size={18}/></button>:<button className="hidden shrink-0 text-zinc-600 lg:block" onClick={()=>setCollapsed(!collapsed)}>{collapsed?<ChevronRight/>:<ChevronLeft/>}</button>}</div>
    <nav className="flex-1 space-y-1 p-3">{pages.map(({id,label,short,icon:Icon})=>{ const active=page===id; return <button key={id} title={short} onClick={()=>{setPage(id);setMobile(false)}} className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-[11px] font-semibold tracking-wide transition ${active?'border border-purple-500/40 bg-purple-500/10 text-purple-300':'border border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200'}`}><Icon size={17} className="shrink-0"/><span className={collapsed&&!mobileOpen?'lg:hidden':''}>{label}</span>{active&&<span className="ml-auto h-1 w-1 rounded-full bg-lime-400"/>}</button>})}</nav>
  </aside>
  return <div className="flex h-screen overflow-hidden bg-[#050505] text-zinc-100">{nav()}{mobile&&nav(true)}
    <main className="h-screen min-w-0 flex-1 overflow-y-auto transition-all lg:overflow-hidden">
      <header className="flex h-16 items-center justify-between border-b border-white/[0.07] bg-[#050505]/90 px-4 backdrop-blur-xl md:px-6"><div className="flex min-w-0 items-center gap-2"><button className="lg:hidden" onClick={()=>setMobile(true)}><Menu/></button><img src="/assets/vyuha-logo.svg" alt="Vyuha" className="h-9 w-9 shrink-0 lg:hidden"/><div className="min-w-0"><p className="hidden text-[8px] font-bold uppercase tracking-[.28em] text-zinc-600 sm:block">MITIGATORS // VYUHA SYSTEM</p><p className="truncate text-sm font-semibold tracking-tight text-zinc-100 sm:text-base"><span className="lg:hidden">Vyuha</span><span className="hidden lg:inline">Ground Control</span> <span className="text-purple-400">/ {pages.find(p=>p.id===page)?.short}</span></p></div></div>
        <div className="flex items-center gap-2"><div className="hidden text-right md:block"><p className="font-mono text-xs text-zinc-300">{now.toLocaleTimeString([], {hour12:false})}</p><p className="text-[8px] uppercase tracking-widest text-zinc-600">UTC +05:30 // {now.toLocaleDateString()}</p></div><button onClick={()=>setMode(mode==='AUTONOMOUS'?'ASSISTED':'AUTONOMOUS')} className="rounded-md border border-lime-400/25 bg-lime-400/[0.06] px-2.5 py-2 text-[9px] font-bold tracking-wider text-lime-300"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_7px_rgba(163,230,53,.8)]"/> {mode}</button><button onClick={exportView} title="Export telemetry" className="rounded-md border border-white/[0.08] p-2 text-zinc-500 hover:border-purple-500/40 hover:text-purple-300"><Download size={16}/></button><button title="Settings" className="hidden rounded-md border border-white/[0.08] p-2 text-zinc-500 sm:block"><Settings2 size={16}/></button></div>
      </header>
      <div className="min-h-[calc(100vh-64px)] px-3 py-2 lg:h-[calc(100vh-64px)] lg:overflow-hidden md:px-4">{children}</div>
    </main>
  </div>
}
