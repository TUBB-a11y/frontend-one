import Link from "next/link";
import { ArrowRight, Code2, Globe, Server } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
 
const highlights = [
  {
    icon: Globe,
    title: "Frontend",
    description:
      "Building responsive, user-friendly interfaces with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Learning to build APIs and connect them to databases with Node.js, NestJS, and MySQL.",
  },
  {
    icon: Code2,
    title: "Hands-on practice",
    description:
      "Growing through personal projects and school work, one feature at a time.",
  },
];
 
const stack = ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "MySQL"];
 
export default function Home() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 py-8">
      {/* Hero */}
      <section className="space-y-6">
        <Badge variant="secondary" className="px-3 py-1 text-sm">
          BSIT student · Aspiring Backend Developer
        </Badge>
 
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Tristan Manacob.
        </h1>
 
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m a second-year Information Technology student who enjoys
          building websites and web applications. This portfolio shows what I
          study, what I&apos;m learning, and what I do outside of class.
        </p>
 
        <div className="flex flex-wrap gap-3">
          <Link href="/about" className={cn(buttonVariants({ size: "lg" }))}>
            About me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Contact me
          </Link>
        </div>
      </section>
 
      {/* What I'm working on */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          What I&apos;m working on
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-2 h-6 w-6 text-primary" />
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
 
      {/* Tech stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tools I use</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="outline" className="px-3 py-1 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}