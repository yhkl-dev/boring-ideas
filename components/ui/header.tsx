import { Button } from './button';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <h1>Boring Ideas</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Button variant="ghost">About</Button></li>
          <li><Button variant="ghost">Contact</Button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;