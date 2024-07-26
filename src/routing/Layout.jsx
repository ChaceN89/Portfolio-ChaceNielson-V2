import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <header className='flex space-x-3'>
        <Link className='hover:text-accent p-4 border-2 border-white rounded-2xl hover:bg-white' to="/photos">Open Photos</Link>
        <Link className='hover:text-accent p-4 border-2 border-white rounded-2xl hover:bg-white' to="/thanks">Open Thanks</Link>
        <Link className='hover:text-accent p-4 border-2 border-white rounded-2xl hover:bg-white' to="/">Open Home</Link>
      </header>
      <main className="pt-14">
        <Outlet />
      </main>
      <footer><h1>footer</h1></footer>
    </div>
  );
};

export default Layout;