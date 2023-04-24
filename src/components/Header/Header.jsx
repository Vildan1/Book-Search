import React from 'react';
import Search from "../Search/Search";
import "./Header.css";

const Header = () => {
  return (

        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Book Search using React ?</h2><br />
                <Search />
            </div>
        </header>

  )
}

export default Header