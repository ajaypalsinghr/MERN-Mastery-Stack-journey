import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-4 text-white shadow-lg flex justify-between items-center">
      <h1 className="text-xl font-bold uppercase tracking-wider">My Practice Website</h1>
      <div className="space-x-4">
        <Link to="/home" className="hover:bg-blue-700 px-3 py-2 rounded transition">Admin</Link>
        <Link to="/fakeapi" className="hover:bg-blue-700 px-3 py-2 rounded transition">Fakeapi</Link>
        <Link to="/my" className="hover:bg-blue-700 px-3 py-2 rounded transition">My</Link>

      </div>
    </nav>
  );
};

export default Navbar;