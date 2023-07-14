import './App.css';
import CategoriesContext from './contexts/CategoriesContext';
import ProductsContext from './contexts/ProductsContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);


  return (
    <CategoriesContext.Provider value={categories}>
      <ProductsContext.Provider value={products}>
        <div>
          <Header handleCategoryClick={handleCategoryClick} />
        </div>
        <Routes>
          <Route path="/" element={<Products selectedCategory={selectedCategory}/>} />
          <Route
                path="/cart"
                element={
                  <Cart>
                    <Products selectedCategory={selectedCategory} disableAddToCart={true} />
                  </Cart>
                }
              />
        </Routes>
      </ProductsContext.Provider>
    </CategoriesContext.Provider>
  );
};

export default App;
