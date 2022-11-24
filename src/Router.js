import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import ProductList from './pages/ProductList/ProductList';
import Products from './pages/Products/Products';
import ScentList from './pages/ScentList/ScentList';
import Shopping from './pages/Shopping/Shopping';
import Pay from './pages/Pay/Pay';
import Story from './pages/Story/Story';
import Mypage from './pages/Mypage/Mypage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/scentList/:id" element={<ScentList />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/story" element={<Story />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
