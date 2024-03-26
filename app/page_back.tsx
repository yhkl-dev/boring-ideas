import { PrismaClient } from '@prisma/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardTitle, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const prisma = new PrismaClient();

const Home = async () => {
  const ideas = await prisma.idea.findMany();

  return (
    <>
      <Header />
      <main className="flex  flex-col  mx-auto items-center">
        <h1> Life is boring, share your boring ideas, someone's trash, someone's treasure.</h1>
        <Carousel className="w-full max-w-4xl h-fit">
          <CarouselContent>
            {ideas.map((idea) => (
              <CarouselItem key={idea.id}>
                <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out  h-fit">
                  <CardHeader>
                    <Avatar>
                      {/* <AvatarImage src={idea.creatorAvatarUrl} alt={idea.creatorUsername} /> */}
                      <AvatarFallback>LVG</AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardTitle className="flex justify-center">{idea.title}</CardTitle>
                  <CardContent>
                    {idea.description}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                      <Button className="text-green-500">↑</Button>
                      <Button className="text-red-500">↓</Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button>Share</Button>
                      <Button>Comment</Button>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <Footer />
    </>
  );
};

export default Home;