import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const[{ Cart, user }] = useStateValue();

    const login = () => {
      if (user) {
        auth.signOut();
      }
    }

  return (
    <nav className="header">
      <Link to="/">
        <img className='header__logo' src='./kmlogo.png' />
      </Link>

      {/* Search Box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

      <div className="header__nav">
        {/* 1st Link */}
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>
              <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
            </div>
          </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Your Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Profile</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__OptionCart">
            
            {/* Shopping Cart Icon */}
              <ShoppingCartIcon />
            
            {/* Number of Items in Cart */}
              <span className="header__optionLineTwo header__CartCount">
                {Cart?.length}
              </span>
            
          </div>
        </Link>

      </div>
        
    </nav>
  )
}

export default Header