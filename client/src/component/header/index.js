import React from 'react';
import { Navbar } from 'reactstrap';
import SearchNav from './section/SearchNav';
import SidebarToggleBtn from './section/SidebarToggleBtn';

const Header = () => {
  return (
    <Navbar color="white" light expand>
      <SidebarToggleBtn />
      <SearchNav />

    </Navbar>
  );
};

export default Header;
