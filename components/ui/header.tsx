import { Button } from './button';

const Header = () => {
  return (
    <header className="px-16 p-4 flex justify-between items-center">
      <h1 className="font-['Roboto'] font-bold text-2xl">BOREBOARD</h1>
      <nav>
        <ul className="flex space-x-4">
          <Button className="border rounded-full bg-white-100 text-black hover:bg-slate-300 text-sm">Explore Now</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;