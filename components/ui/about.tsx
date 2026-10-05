import { Card, CardHeader } from "./card";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 pt-30">
      <h2 className="text-3xl font-bold text-white [text-shadow:0,4px_18px_rgba(0,0,0,0.5)]">
        About Me
      </h2>
      <Card className="mt-10">
        <CardHeader className="text-xl">
          I am a passionate software engineer eager to apply my skills and
          knowledge in a professional setting, delivering high-quality solutions
          that meet and exceed expectations.
        </CardHeader>
      </Card>
    </section>
  );
}
