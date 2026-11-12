import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          
             Hi! I'm Tristan Manacob, a second-year Bachelor of Science in Information Technology (BSIT) student with a passion for technology and web development.
                     <p>
           
          </p> My goal is to become a skilled Full-Stack Developer who can build complete, innovative, and efficient web applications. I'm always eager to learn, explore new challenges, and grow as an IT professional
          <p>
            I'm currently learning both Frontend and Backend Development, exploring how to create responsive, user-friendly websites and functional web applications. I'm continuously improving my programming skills, learning new technologies, and gaining hands-on experience through personal projects and practice.

My goal is to become a skilled Full-Stack Developer who can build complete, innovative, and efficient web applications. I'm always eager to learn, explore new challenges, and grow as an IT professional
          </p>
        </CardContent>
      </Card>
    
      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}