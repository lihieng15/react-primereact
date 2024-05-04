import React from "react";

import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/saga-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import { Link, Router } from "react-router-dom";
import About from "../pages/About";
const Navbar = () => {
  const items = [
    {
      template: () => (
        <Link to="/">
          <i className="pi pi-fw pi-home"></i> Home
        </Link>
      ),
    },
    {
      template: () => (
        <Link to="/about">
          <i className="pi pi-fw pi-list"></i> About
        </Link>
      ),
    },
    {
      label: "Services",
      icon: "pi pi-fw pi-briefcase",
    },
    {
      label: "About",
      icon: "pi pi-fw pi-info-circle",
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-phone",
    },
  ];
  return (
    <div>
      <Menubar model={items} className="bg-green-300" />
    </div>
  );
};

export default Navbar;
