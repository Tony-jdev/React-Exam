import React, { useContext } from 'react';
import CategoriesContext from '../../contexts/CategoriesContext';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ handleCategoryClick }) => {
  const categories = useContext(CategoriesContext);

  return (
    <header className="header">
      <div className="header-left">
        <h1>Магазин</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => handleCategoryClick('')}>All</button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button onClick={() => handleCategoryClick(category)}>{category}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <NavLink to="/cart">Корзина</NavLink>
      </div>
    </header>
  );
};

export default Header;
