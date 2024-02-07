import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>This is Header</header>
      <main>
        <Outlet />
      </main>
      <footer>This is footer</footer>
    </div>
  );
};

export default Layout;
