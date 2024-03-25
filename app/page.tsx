import { PrismaClient } from '@prisma/client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardTitle, CardHeader, CardFooter, CardContent } from "@/components/ui/card"
import Header from '@/components/ui/header';

// const prisma = new PrismaClient();

const Home = async () => {

  // const ideas = await prisma.idea.findMany();
  const ideas = [
 { id: 1, title: "test", description: "aaaa" },
 { id: 2, title: "bbb", description: "bbbb"}
  ]

  return (
    <>
    <Header></Header>
    <div className="flex flex-col items-center">
        <Carousel className="w-full max-w-xs sm:max-w-xl">
        <CarouselContent>
          {ideas.map((idea, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader> this is header</CardHeader>
                  <CardTitle className="flex justify-center">{idea.title}</CardTitle>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {idea.description}
                  </CardContent>
                  <CardFooter>this is footer</CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </>
  )
};

export default Home;