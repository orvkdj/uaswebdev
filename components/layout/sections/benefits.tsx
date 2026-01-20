import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Sparkles",
    title: "Personal Experience",
    description:
      "Musik yang diputar menyesuaikan suasana dan kebiasaan mendengarkanmu",
  },
  {
    icon: "Sparkles",
    title: "Focused listening",
    description:
      "Nikmati musik tanpa gangguan iklan atau distraksi berlebihan. Fokus tetap terjaga pada kualitas audio dan emosi lagu",
  },
  {
    icon: "Sparkles",
    title: "Effortless Discovery",
    description:
      "Temukan musik baru tanpa perlu mencari secara manual. Rekomendasi disajikan secara kurasi dan konsisten",
  },
  {
    icon: "Sparkles",
    title: "Seamless Access",
    description:
      "Akses musik kapan saja dan di berbagai perangkat. Pengalaman tetap sinkron dan nyaman digunakan",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More than Listening
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            BeMusic dirancang untuk memberikan pengalaman mendengarkan musik yang melampaui sekadar pemutaran lagu. Setiap fitur membantu pengguna menikmati musik dengan cara yang lebih personal dan bermakna.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
