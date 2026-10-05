import { projects } from "@/data/projects";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 pt-30">
      <h2 className="text-3xl font-bold text-white [text-shadow:0,4px_18px_rgba(0,0,0,0.5)]">
        Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((proj) => (
          <Card
            key={proj.name}
            className="flex flex-row gap-0 items-start overflow-hidden min-w-0 bg-white/80 backdrop-blur-xl border border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <DynamicIcon
              name={proj.icon}
              className="ml-5 flex-none relative z-20 aspect-video object-contain w-10 h-10"
            ></DynamicIcon>
            <CardHeader className="flex-1 flex-col h-full">
              <div>
                <CardTitle className="text-2xl font-bold pb-2">
                  {proj.name}
                </CardTitle>
                <CardDescription>{proj.description}</CardDescription>
              </div>
              <div className="mt-auto pt-4 space-y-4">
                <div className="pt-2 flex items-center gap-2 flex-wrap">
                  {proj.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  {proj.websiteUrl && (
                    <Link
                      className="inline-flex items-center self-start gap-2 rounded-xl text-black bg-white border border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 font-medium transition hover:bg-white/50"
                      href={proj.websiteUrl}
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5"></ExternalLink>
                      {proj.websiteType ?? "Website"}
                    </Link>
                  )}
                  {proj.repoUrl && (
                    <Link
                      className="inline-flex items-center self-start gap-2 rounded-xl border border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 font-medium text-black transition hover:bg-white/50"
                      href={proj.repoUrl}
                      target="_blank"
                    >
                      <Code className="w-5 h-5"></Code>
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
