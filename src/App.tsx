import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Shell, { type PageId } from './components/Shell'
import OverviewPage from './pages/OverviewPage'
import GaitAnalysisPage from './pages/GaitAnalysisPage'
import KinematicsPage from './pages/KinematicsPage'
import CompliancePage from './pages/CompliancePage'
import ActuatorSpecsPage from './pages/ActuatorSpecsPage'

export default function App(){
 const [page,setPage]=useState<PageId>('overview')
 const pages: Record<PageId,React.ReactNode>={overview:<OverviewPage/>,gait:<GaitAnalysisPage/>,kinematics:<KinematicsPage/>,compliance:<CompliancePage/>,actuator:<ActuatorSpecsPage/>}
 return <>
  <Shell page={page} setPage={setPage}>{pages[page]}</Shell>
  <Analytics />
 </>
}
