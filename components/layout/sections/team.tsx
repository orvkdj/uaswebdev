import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "data:image/webp;base64,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",
      firstName: "Taylor",
      lastName: "Swift",
      positions: ["Love Story, The Fate Of Ophelia,Style,l Hate it Here"],
      socialNetworks: [
        
      ],
    },
    {
      imageUrl:
        "data:image/webp;base64,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",
      firstName: "Sheila ",
      lastName: "On 7",
      positions: ["Dan,Sephia,Melompat lebih tinggi, Anugrah terindah "],
      socialNetworks: [
        
      ],
    },
    {
      imageUrl:
        "data:image/webp;base64,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",
      firstName: "The",
      lastName: "The Weeknd",
      positions: ["Blinding Lights,Straboy, Save your Tears, The Hills"],
      socialNetworks: [
        
      ],
    },
    {
      imageUrl:
        "data:image/webp;base64,UklGRiIOAABXRUJQVlA4IBYOAADwUgCdASovAbYAPp1MoEylpCMoI/LpmQATiWVtpTA+EudPW5f9QBZnhNxU4eYmmV47m5sYPFk7rBB6Xvzfvu+W9GtbfI2Mit20Cit1rJHL7iVTVWNpYfmHZWJI6SSj9NhdhPyMyY7a6Pf0/wASm7cGJJOlTBYmdtdNxdjz5+JrKI7rKbKZcxR20DUW48KKuvJm6EowlI3YCLzjEts9N2GyqRcKlSlcbAzEmOxi/1omn87hVkLdps9mYP5QgqzP3hK17zGNZoxtdm3JriS9vhO9thqtmO166k7kmEMEbLeT7FDmgPzU6f3GCU+9PFvFKj6pMXv2fpmyO8e4v7QDSDs7SpJM+hoEIt0hQT6v+KdvUaDAc5CUwW0JUeYar4X5uGKbfR7ovkKEtFoGUGbjLpGhmtJlgeWYZw/JKc752/g4t+uYRM6k+47cnouSPPy3W+fUmPklPW+p59YOxowenfoal7zeKJuHY8Ja0bV+PXp3KiOV5mYHdILNTmTqTt/Rw5o0fhk2bQwn1472P6AlMy08Cp2QaJuO5HV/r3Rho+FDq8ju2m9WOXQwW+q6ia7FqhzrwPld//tHYXwpPKZXDGv8XkVruyPCcZVHM2kOA1Y3xl20+SeAYcXQx4MtYGqmuOiwHxco/8L1erCOfd5ZCGVAeZffb9erhU/ngqR7WB0c8z6Bj1479QKx5aoAKc79iXBJeSw6IXNQIQuNIx8/ZvPuw6SRIkF51EG4O2EJ/nA0F82TnuQZAiTC7fiFYmurNM+dPCLK3F3Qsi49iVE1yx1z5yY/yvtWlJz1ZYe6seUMIQgFCDwVBShZlZG7YDynYinSgQayrsZXaTUKG7NhUmzLqmfh9XYhp9q73rKbAXAYjheV0XtvBjw2T8TIUHYKtwgA/vqO5JDkKkQ+9YURqFJwl7WGObJnRaKf38FEmT+rxKTSW84lDV8fsoQcya6BRq1acNkHJJCa6KFTYoXXC7Cm67vYKzzjO4lFUYlRd7irUkEXv8GX/uIhzbLhYU7VmgDJ/NMgouAGUG+/qQRWPkG4IEsMIE2YZ0TzmhezWc/oH4r9d7VmE3DCobqckD6Fif/R5YgbJCD/+U0Nv9KQYXc+J9i4GqB67APHD3CG0qI1UJ0+s5zjVngquXE/tmJify9r3kc57qwrzBWvt3uT0b/NVKK3+y/X8u4Z3XGejCeFGEa6eToN6z0CpLP+BNbWHpm3+mBVFghqeUQa/T7xREgBtKkEVrjKfJLOWF6V+ZiuDVFHiD9ug2W46Gqhg1dHN1xyAoEHZgjiQyDwx0NSMX59EyEoIteZmpM17ahScCcIJ+OJ/m302wW9pY/D1w2LtWX+t/G6zty/71unW3l6jY2ePgMjXebw2Yki1eNY7KrlxJj9kvlDTRttIM/UYkxo8BV/eJoNLypcY01BUGKQpAPiJpBDGXDCFdTPiXAUEGj9BISF1KVe4d+sS7p8QhDBfr5xkfi7H8NtBU9USxlJ/HYGgHebv+LlvRRhynRBt4dH3mgIhl5JHVvFR4gqX9xD6WoQeipUy4MjElQ7xsW7fTBUu0ZDoEMpfTmtAHeEHYBopi83D8YeJW+kX34594KlWYorVnWIhSc8XQ+ussiqE4MDdvuVpf2dG059YH7QUBF+65kygIWmYdJ8AtjOjEVmK2EcYESHaVHVpiZq72bvVWMsy5OK6U44n2SwAzbx3m5ouuNVs9d5XLrU1ctrBci8wKvO3NHV598PRS9Uhr7ALlL4wExa9C0OJAxd/5N22FlWccgTaA15p4+7r6nz9fpbiGetP/xE5Dn31g6ZsXoLrIZPHt+L4CDoYyisY2S14CbS8VRHnUU/EFIZKE8ifl9qKGzRIoc1x8gio/hftTvZNd4vpPS3/LfP15K9aBIgYj3Pv88KwG93y3afyJETdzuUQpQS5AM8r8Efn4VbrjISH2g2MhAAARs85XlZRrdNl/w3atlIOh9eBsOjwdckm6WeLnW7GUTyNkEfPqw2yVElEP/dFKTbufDmSnccJYPXxXnLQihmYPH8URMM9SvjeJHA2n0pNFXYB5yjnbiboXnzpjQp45HK2LsvIr8+z0hvxRF+rLeIqhtI7LKN8gQpH9JjL/KfCQP7OreSuot+5GpfIK2zjs8S935Ijl/XwcOs82elXOiXyOaMDS32AovhSedPIAMz2NR7ZrbLpO7V1Zu/rDLKA+9ZPTAHBh2uXkkbMqr7FoEeqjEBg7b4ixrf2ArqnoICdePgC2auDgvCD0DThO0XbtInnf42IjLgyrblKMExG/6rAWINBmV+xvbECgC8g4xtxOTGaturcAt8eSn3OjbZzirvsBGpi6bG3bMKCb18cf8wal49E9MwOUSW2eHyERHfv4b4BkAWYMiO7rfwG/WLUGU/31fQ8I40SqIdaiCuab50X/CUp8pYzIxZE2eum/cSHTCQxu9oyR6UJSfT6b2zL67K0U/4FiuHjkjPAmdOM0c5e939uyvpWzVv5d6Xygn2yZrZPh67DLesDI8fZbTTVVixaTe7RPWhk6kaT3Rsnf3dXMlRNLbNQZvDtze7Vt8eG1e7wIn+7jJx98O4i1de17eAyTiwGbVqHKmf0A4+0a1JfKFb1JcvOC3ZlmttMWn2zmhVNuVwPSTds97ZODSVGqSIL+zoLHBCk4rw/sACttgBsKKqEVUxFQcWEyOjZZ6GOVMi58W+50kzCAYR6PV8kxfn7ggeqsH01YpwTzKhcv7noUnzOHQamdHLxgQ8ryhbL8XaX0x5mvle8uzOqgyqmfNj4p8ScWWUP/2ICEpZRqnMDCo/sYfipHRIHwICRxpZGOaj1uN2PDkRFem9KiZs5AEVtpFUdwNhfhCZu7arZKy9ZceaSW7m1Lo3uBi/VsHEpVPheZZ2hfrkq5qdBvbQgML9S9r8ZfYN8YlRlWVzvQi6GtQqyAg4ZZIzJMx2+XXKBF/fHdAW41U0BkMSgVKRksIpcRICP7kQf3hATAlTwGa3YNK5lDbkHCDq8SOt8Mk/k9H2Z+7a370zrAQNkLcx1yq179CkuutwAGapKvnjfNA6iX+qW0v9kyavwH4zHtNGAWoucO0UbVre6zfm1LCTN9O9RYpl+UdW/dIFmCLQeVtBJSRH+aXVGX6Jk4XemseC1F2TXqKOO7HELgeI9blhNcFQhDti2/cITvc1Ya7c5L57Joyzr61ucNmsdF/xuh/MjjyeZTY65eZcrAgXzsyiW4DVooLY6qauo7mi/PCQaeWeUIkKiPUuaYl/tWPjsCRFI/1KbMEYBIZAdnTX0sAz8nQOlar+g0JztuDjUFmcWB9ZMstZBaT9oXfItnPlzZWkKajA/pkSvH6duahtUSGMXmFYP6VS0t3ElNG4RTCCoDKvEyoVROzhqgBdxFKM0CUWCEsOW5tCvSmoC3mlZVNtQSamiIHqHozQZphu/nCndGeiE+jkU7SYr6YB3kVk2qAWxu3R333BVH+YHXBDWZy1IFWBpfzJavGIy6S3OrEkRVYjO01Dk9t6ZHc16HhRuP86kzxYu89vVMVU/9j6R4Uz5W6CPe/27fSoiPyUAZGiCYFy7/xW1OLdbQIHToNOmdL1WpTibl46tmbibPSBYo/ispRNxJL/duwNral8enJOj2TiDC0HckuDhwBZimnGzoEyB5kFlJTSd+e7CJ9MOU+wD32WGKTfdPpd56cax6q7k9DB5atvhNLS9gralROQ7/cFlPlb8kAYLTBACin75s8OLjuO8rmt98DjOaLCmL+h+X6zqbCyA7epUv1WgolSO3OqaNvp9igTPwV6oh/YrmGY1zNF4p9ddsbCfrQ/5kvKQcTGPLH1/pv6uZm16SF3sd1A7bwuhp7JDBQLp41ZRvk8jrNZEbC2NM2FeXJCCCbxzWTTQFeKlCxEBLXF6izmM7Xz2+u0Jfr+V2y2iIV2yz1PmHeaHqLNFbJYoEpuWep7ejMcfX9F0uopaWbl9jvaVzHzygDpXMakPkht7EHz5DMnYD0Th+sLdDCmPyQ6isWBDIMe5VWYhraOWLtdDVnuoj6XuZYQ5PyiFFRfJmbT/Uv857Gr4vzfFUeUsyyEPaQXOCsYRDxngHSJK+K28lLpSC5H/QgF2GPU1KGQ6mudo3nQ+xHQsuMFhSg5bPiDcDAuL4z0weB3ZPlyfCyxDM3RCOn95Z0fSEUJAjt7PmP4Pt7ZObSejvqFI/YkTIZZ02nuqY2ilY/snfS8SKe1KTxyMY39zV7klnAwBsu1ZY3eM1nebtH2xQkU2I3IAYRWVWl3VZ1KezGStR+nstd7lVzU+p60lTwkabA40uv21Nvy7WL43NKgK5ZQQoe6W+Gqv2dQBswOhl0NPDolw8fqE4ID2Rsb2I6sPxDYhOzLc4Q9r3LVgTNsqd+iaafs5HSBiqoVA57PEBjSkV0maioUiahkj73OxOWRvfd2vts2iMGZGFQsUU+YOQy2Stp2KxxHifvF27bct+/8kMFSXtLCgDzUMdvjQRjrMv+LKYwmN9Qp4/cH8FusO9dRi6fz47rupc8JlKJxfbP2ej4Pp1au+XNgRLxVI5qcH6/lgSmQQW0yvQrhTB87MRbCkdjMG+OdtwAI1eZDxofT59XMxPPC0xgQHT6ys71Z3rA9DRRiZxbdcVUQcmN+eH+ns6bbn6evYD09Jfzp5et9Tu85CIIB06Q6iFGavl7FUi8EN7ga4KjpFKlnxA1ZQBv+NDmK45e+4QcpzVQYi2lVZ0gjhfKgWSrx0xCogMATcIP/gQ3MqE4IOP28gyJINZgmhWb4q0RNiVR+MwRmbNtfOSHcqjVw60kQpioPUFbIAAA=",
      firstName: "Justin",
      lastName: "Bieber",
      positions: ["Baby, Love Yourself,Sorry,Peaches"],
      socialNetworks: [
        
      ],
    },
    {
      imageUrl:
        "/avatar/Raisa.jpg",
      firstName: "Raisa",
      lastName: "Andriana",
      positions: ["Kali Kedua,terjebak Nostalgia,Apalah Arti Menunggu,Bahasa Kalbu"],
      socialNetworks: [
        
      ],
    },
    {
      imageUrl:
        "/avatar/Tulus.jpg",
      firstName: "Muhamad",
      lastName: "Tulus",
      positions: ["Monokrom,Hati Hati Dijalan,Sepatu,Pamit"],
      socialNetworks: [
       
      ],
    },
    {
      imageUrl:
        "/avatar/Hindia.jpg",
      firstName: "Daniel",
      lastName: "Baskara",
      positions: ["Secupkupnya,Evaluasi,Rumah Ke Rumah,Nanti Kita Kesana"],
      socialNetworks: [
        
      ],
    },
    {
      imageUrl:
        "/avatar/Nadin.jpg",
      firstName: "Nadin",
      lastName: "Amizah",
      positions: ["Rumpang,Bertaut,Sorai,Rayuan Perempuan Gila"],
      socialNetworks: [
        
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Our Top Artist
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
