import Hero from '@/components/Hero'
import Work from '@/components/Work/Works'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Work/>
    </main>
  )
}
