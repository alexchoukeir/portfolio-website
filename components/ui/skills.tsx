import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 pt-30">
      <h2 className="text-3xl font-bold text-white [text-shadow:0,4px_18px_rgba(0,0,0,0.5)]">
        Skills
      </h2>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        {skills.technologies.map((tech) => (
          <div
            key={tech}
            className="min-w-36 max-w-xs flex items-center justify-center text-white bg-black/60 backdrop-blur-xl border border-black px-4 py-2 font-bold rounded-2xl"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
