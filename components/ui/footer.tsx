import { Icons } from "@/components/ui/icons"

const Footer = () => {
  return (
    <footer>

      <div className="mt-4 grid grid-cols-10 gap-4 px-16 h-36">
        <div className="col-span-5 ...">
          <p className="text-xl font-bold">BOREBOARD</p>
          <p className="text-sm mb-4">Platform for sharing and voting on boring ideas.</p>
          <p className="text-sm mb-4">Connect with us:</p>
          <div className="flex space-x-2 mb-4">
              <Icons.gitHub className="mr-2 h-4 w-4"  />
              <Icons.twitter className="mr-2 h-4 w-4 " />
          </div>
        </div>
        <div className="col-span-5 ...">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 ...">
              <div className="text-base">Categories</div>
              <div className="font-light">Top Voted</div>
              <div className="font-light">Collaborations</div>
              <div className="font-light">Corporate</div>
            </div>
            <div className="col-span-1 ...">
              <div className="text-base">Submit Idea</div>
              <div className="font-light">Share Idea</div>
              <div className="font-light">Analysis</div>
            </div>
            <div className="col-span-1 ...">
              <div className="text-base">Community</div>
              <div className="font-light">About us</div>
              <div className="font-light">Updates</div>
            </div>
            <div className="col-span-1 ...">
              <div className="text-base">Resources</div>
              <div className="font-light">Blog</div>
              <div className="font-light">Information center</div>
              <div className="font-light">Sales assistance</div>
            </div>
            <div className="col-span-1 ...">
              <div className="text-base">Help</div>
              <div className="font-light">Comment</div>
              <div className="font-light">Suggestions</div>
              <div className="font-light">Feedback form</div>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;