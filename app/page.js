import Hero from "@/Components/blocks/Hero";
import About from "@/Components/blocks/About";
import Contact from "@/Components/blocks/Contact";


export default function Home() {

    return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero/>
        <About/>
        <Contact/>
    </main>
  )
}
