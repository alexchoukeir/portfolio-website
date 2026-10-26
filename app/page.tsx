import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Hero from "@/components/ui/hero";
import Projects from "@/components/ui/projects";
import Skills from "@/components/ui/skills";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
