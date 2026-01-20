import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "LibraryBig",
    title: "Music Library",
    description:
      "Kelola dan akses seluruh koleksi musik favoritmu dalam satu tempat terorganisir.",
  },
  {
    icon: "AudioWaveform",
    title: "Sound Waves",
    description:
      "Visualisasi audio yang hidup untuk pengalaman mendengarkan yang lebih ekspresif.",
  },
  {
    icon: "Music",
    title: "Music Playback",
    description:
      "Nikmati pemutaran musik yang stabil, jernih, dan mudah dikendalikan.",
  },
  {
    icon: "MicVocal",
    title: "Vocal Focus",
    description:
      "Sorot kualitas vokal dan detail suara artis favoritmu.",
  },
  {
    icon: "Activity",
    title: "Music Activity",
    description:
      "Pantau kebiasaan dan aktivitas mendengarkan musikmu secara real-time.",
  },
  {
    icon: "RefreshCcw",
    title: "Device Sync",
    description:
      "Sinkronisasi akun dan playlist di berbagai perangkat.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Fitur
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Where music meets mood.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Setiap detail dikembangkan agar pengalaman terasa lebih personal, intuitif, dan berkesan.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
