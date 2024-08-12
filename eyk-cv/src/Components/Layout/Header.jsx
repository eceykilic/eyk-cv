import React from 'react';

function Header() {
    return (
      <div>
      <header className="max-w-screen-2xl text-white py-8 flex mx-auto justify-between">
        <h1>Ece Yücel Kılıç</h1>
        <nav className='flex gap-10'>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      </div>
    );
  }
  
  export default Header;