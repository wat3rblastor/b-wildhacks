import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center mb-4">
          <Link href="/about" className="mr-5 hover:text-gray-400">
            About Us
          </Link>
          <Link href="/services" className="mr-5 hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-400">
            Contact Us
          </Link>
          {/* Add more links as needed */}
        </div>
        <div className="mb-4">© {new Date().getFullYear()} GoodNeighbor</div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.812 3.547 8.791 8.168 9.516-.06-.773-.116-2.164.024-3.904.13-1.122.84-2.24 1.514-2.788-.532.055-1.023.166-1.458.33-.156-.554-.609-.997-1.143-1.287-.225-.104-.482-.531.028-1.237.532-.605 1.123-.001 1.398.277.42.413.876.662 1.404.779.04-.304.167-.577.379-.785-1.328-.151-2.723-.664-2.723-2.958 0-.653.234-1.189.616-1.607-.062-.151-.268-.76.058-1.582 0 0 .505-.162 1.653.615.479-.133.993-.2 1.503-.204.511.004 1.024.071 1.504.204 1.148-.777 1.652-.615 1.652-.615.327.822.122 1.431.06 1.582.384.418.615.954.615 1.607 0 2.301-1.398 2.806-2.732 2.953.215.185.407.547.407 1.105 0 .798-.007 1.441-.007 1.638 0 .388.263.838 1.014.697C18.146 20.784 22 16.81 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
          </a>
          {/* Add more social media icons/links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
