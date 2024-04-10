'use client'

import Footer from "@/components/ui/footer";
import { Card, CardFooter, CardHeader, CardContent } from "@/components/ui/card";

export default async function Home() {

  // const bgurl: string = await fetchUnsplashBackground();
  const bgurl: string = '/assets/x.jpg'
  const textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel volutpat ipsum. Nam pulvinar tellus leo, in lacinia purus tempor eget. Vestibulum posuere erat sed orci ornare luctus. Donec ultrices lorem nunc, cursus mattis mi aliquam dignissim. Ut vehicula sem ut ipsum interdum fringilla. Nam dictum commodo felis, vel rhoncus lorem blandit vel. Donec eleifend justo tellus, rhoncus faucibus ante porttitor a. Nulla facilisi. Vivamus non nisi sagittis, tristique nibh vel, accumsan elit. Proin at diam non ante ultrices tempor. Phasellus hendrerit, leo a imperdiet sollicitudin, mauris urna venenatis nibh, ac aliquet nisi orci a odio. In posuere semper metus et imperdiet."
  const next = () => {
    console.log("next......");
  }
  return (
    <div className="flex flex-col h-screen w-screen" >
      <Card className="bg-cover justify-center flex-grow backdrop-blur-sm" style={{ backgroundImage: `url(${bgurl})` }}>
        <CardHeader>
          <h1 className="ml-10 font-bold">Unleash Your Creativity</h1>
        </CardHeader>
        <CardContent className="p-10 flex flex-col justify-center items-center backdrop-blur-sm font-bold border-spacing-0 h-4/5">
          <p className="italic text-xl">{textContent}</p>
          <footer className="text-sm">yhkl</footer>
        </CardContent>
        {/* <CardFooter className="flex justify-center items-center backdrop-blur-md"> */}
          {/* <Icons.replay className="mr-2 h-4 w-4 " />
          <Icons.play className="mr-2 h-4 w-4" />
          <div onClick={() => {
            console.log("sdfsdfsdf")
          }}>
          <Icons.fastforward className="mr-2 h-4 w-4" />
          </div> */}
        {/* </CardFooter> */}
      </Card>
      <Footer></Footer>
    </div>
  );
}