const Footer = () => {
const date = new Date();
  return (
    <footer className="bg-gray-200 text-center p-4 mt-8">
        <p>Copy right yhkl &copy; { date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;