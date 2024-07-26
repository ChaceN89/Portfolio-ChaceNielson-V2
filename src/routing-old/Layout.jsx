import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components-old/navbar/Navbar';
import Footer from '../components-old/footer/Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
