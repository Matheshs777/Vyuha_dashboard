
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl ${className}`}>{children}</section>
}

export function SectionTitle({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: React.ReactNode }) {
  return <div className="mb-2 flex min-w-0 items-end justify-between gap-3">
    <div className="min-w-0"><p className="mb-0.5 truncate text-[8px] font-bold uppercase tracking-[0.24em] text-purple-400">{eyebrow}</p><h2 className="truncate text-base font-semibold tracking-tight text-zinc-100">{title}</h2></div>{aside}
  </div>
}

export function ImageSlot({ src, title, label, compact=false }: { src: string; title: string; label: string; compact?: boolean }) {
  return <div className="relative w-full h-full min-h-0 flex-1 bg-black/20 rounded-lg overflow-hidden border border-white/5">
    <img src={src} alt={title} className="absolute inset-0 w-full h-full object-contain p-1" />
    {label && <div className="pointer-events-none absolute left-2 top-2 rounded border border-white/[0.1] bg-black/75 px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-zinc-300">{label}</div>}
  </div>
}

export function Metric({ label, value, color='text-purple-300', note }: { label: string; value: string; color?: string; note?: string }) {
  return <Card className="p-3.5"><p className="text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-600">{label}</p><p className={`mt-2 text-xl font-semibold tracking-tight ${color}`}>{value}</p>{note && <p className="mt-1 text-[10px] text-zinc-600">{note}</p>}</Card>
}

export function Slider({ label, value, min, max, step=1, unit='', onChange }: { label:string; value:number; min:number; max:number; step?:number; unit?:string; onChange:(n:number)=>void }) {
  const progress=((value-min)/(max-min))*100
  return <label className="block"><span className="mb-2 flex justify-between text-[11px] text-zinc-500"><span>{label}</span><b className="font-mono text-zinc-100">{value}{unit}</b></span><input className="premium-range w-full" style={{background:`linear-gradient(90deg,#a3e635 ${progress}%,#27272a ${progress}%`}} type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}/></label>
}
