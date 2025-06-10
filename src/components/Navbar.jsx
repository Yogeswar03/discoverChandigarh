import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Install Lucide or use any other icon set

function Navbar({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'History', action: () => setCurrentPage('history') },
    { name: 'Places', id: 'places' },
    { name: 'Reach', id: 'reach' },
    { name: 'Food', id: 'food' },
    { name: 'Commute', id: 'commute' },
    { name: 'Hotels', id: 'hotels' },
    { name: 'Gallery', action: () => setCurrentPage('gallery') },
  ];

  const handleClick = (e, item) => {
    if (item.action) {
      e.preventDefault();
      item.action();
      setMenuOpen(false); // Close menu on mobile
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className='fixed w-full z-50 bg-black/40 backdrop-blur-sm'>
      <div className='flex justify-between items-center h-[10vh] px-8 text-white font-["Neue_Montreal"]'>
        <img src="/chandigarh_logo.png" alt="Logo" className="h-[30px]" />

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6'>
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.id ? `#${item.id}` : "#"}
                onClick={(e) => handleClick(e, item)}
                className="text-white"
              >
                {item.name}
              </a>
              <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white group-hover:w-full transition-all duration-500" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='md:hidden flex flex-col gap-4 px-8 pb-4 bg-black/80 text-white font-["Neue_Montreal"]'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.id ? `#${item.id}` : "#"}
                onClick={(e) => handleClick(e, item)}
                className="block py-2 border-b border-white/20"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
