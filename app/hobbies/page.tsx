import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Gamepad2, Music, Dumbbell, Coffee, Trophy } from "lucide-react";

const hobbies = [
  {
    title: "Photography",
    icon: Camera,
    description: "capturing the nature.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "all around that give me enjoy.",
  },
  {
    title: "Music",
    icon: Music,
    description: "listening music like guddhist, chocolate factory, and many more.",
  },
  
  {
    title: "Coffee",
    icon: Coffee,
    description: "drinking cofee while relaxing outside.",
  },
  {
    title: "Sports",
    icon: Trophy,
    description: "Playing Sepak Takraw and in 2023 I was played at National PRISAA in Zamboanga City.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}