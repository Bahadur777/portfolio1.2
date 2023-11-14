import Hero from '@/components/Hero'
import Work from '@/components/Work/Works'
import { ScrollProvider } from '@/components/Providers/ScrollProvider'

export default function Home() {
  return (
    
       <ScrollProvider>
       <Hero />
        <Work/>
       </ScrollProvider>
    
  )
}
