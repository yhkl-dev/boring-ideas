import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

export default async function About() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main className="flex flex-grow justify-between items-center">
        <div className="px-16 grid grid-cols-3 gap-2 justify-center">
          <div className="col-span-1 justify-center">
            <div className="col-span-1 justify-center">
              <div className="font-bold text-black text-6xl text-wrap mb-4">Unite in boredom & vote together</div>
              <p className="text-xl font-light mb-4">Discover the most boring ideas and vote on them.</p>
              <Button className="border rounded-full bg-red-600 text-white hover:bg-red-300 text-sm mt-4">Explore Now</Button>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative w-full mx-auto">
              <div className="bg-red-500 w-2/3 h-80 rounded-lg shadow-lg  absolute top-0 right-0">
              </div>
              <div className="bg-flip bg-cover w-2/3 h-80 rounded-lg shadow-lg absolute top-8 right-8">
              </div>
            </div>
          </div>
        </div>
      </main >
      <div className="flex flex-cols-2 items-center h-40 bg-red-600 justify-center">
        <div className="text-white text-lg">
          &ldquo;BoreBoard is the epitome of boredom. Join us in celebrating the mundane!&ldquo;
            <p className="text-white text-center text-sm mt-2">— yhkl</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}