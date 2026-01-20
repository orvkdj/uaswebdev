"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Alya Putri",
    userName: "Mahasiswa & Daily Listener",
    comment:
      "BeMusic bikin aku lebih gampang nemuin musik yang sesuai sama mood tanpa harus capek cari sendiri. ",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rizky Mahendra",
    userName: "Content Creator",
    comment:
      "Pengalaman dengar musik di BeMusic terasa lebih fokus dan bersih, cocok buat nemenin proses kreatif. ",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Nadia Safira",
    userName: "Music Enthusiast",
    comment:
      "Rekomendasi lagunya terasa personal dan relevan dengan selera aku.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Fajar Wicaksono",
    userName: "Freelance Designer",
    comment:
      "BeMusic jadi teman kerja yang pas karena minim distraksi dan kualitas audionya nyaman.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dion Prakoso",
    userName: "Audio Listener & Podcast Fan",
    comment:
      "Fokus ke kualitas suara bikin BeMusic beda dari aplikasi musik lain yang pernah aku pakai.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maya Kusuma",
    userName: "Digital Marketer",
    comment:
      "Interface-nya simpel tapi terasa premium, jadi enak dipakai setiap hari.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimoni
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What our Listeners Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
