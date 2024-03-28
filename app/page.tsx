import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { PrismaClient } from '@prisma/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardTitle, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import UnsplashBackground from "@/components/unplashBackgroud";
import fetchUnsplashBackground from "@/lib/unplash";
import { url } from "inspector";

const prisma = new PrismaClient();

export default async function Home() {

  const ideas = await prisma.idea.findMany();
  const bgurl: string = await fetchUnsplashBackground();

  return (
    <div className="flex flex-col h-screen">
      {/* <UnsplashBackground></UnsplashBackground> */}
       {/* <div className="h-screen bg-cover bg-center bg-small-url" > */}
      {/* <div style={{'var(--image-url)': bgurl}} */}
  {/* className='bg-[image:var(--image-url)]'> */}
      {/* </div> */}

       <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={bgurl}
                        alt=""
                      />

    <Footer></Footer>

    </div>
  );
}