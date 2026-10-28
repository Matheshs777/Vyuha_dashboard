import { Card, ImageSlot, SectionTitle } from '../components/Shared'

export default function CompliancePage(){
 return <div className="flex h-full flex-col gap-2"><SectionTitle eyebrow="Virtual compliance // Whole-body balance" title="Impedance control & force equilibrium"/>
  <div className="grid min-h-0 flex-1 gap-2 xl:grid-cols-2"><Card className="flex min-h-0 flex-col p-3"><SectionTitle eyebrow="01 // Limb impedance" title="Virtual spring-damper model"/><div className="min-h-0 flex-1"><ImageSlot src="/assets/image9.jpeg" title="Virtual compliance limb" label="VIRTUAL MASS-SPRING-DAMPER"/></div><div className="mt-2 rounded-lg border border-cyan-500/20 bg-cyan-400/5 p-4 text-center font-mono text-sm text-cyan-200">F<sub>z</sub> = m<sub>virt</sub> z̈<sub>r2</sub> + b<sub>virt</sub>(ż<sub>r2</sub> − ż<sub>d2</sub>) + c<sub>virt</sub>(z<sub>r2</sub> − z<sub>d2</sub>)  </div></Card>  <Card className="flex min-h-0 flex-col gap-4 p-3"><SectionTitle eyebrow="02 // Ground reaction" title="Whole-body force equilibrium"/><div className="flex-1 min-h-0"><ImageSlot src="/assets/image10.jpeg" title="Whole body force FBD" label="FORCE FREE-BODY DIAGRAM"/></div></Card></div>
 </div>
}
