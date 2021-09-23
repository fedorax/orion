import React from 'react';

const SidebarToggleBtn = () => {
  return (
    <span
      className="sidebar-toggle d-flex mr-2"
    // onClick={() => {
    //   dispatch(toggleSidebar());
    // }}
    >
      <i className="hamburger align-self-center" />
    </span>
  );
};

export default SidebarToggleBtn;
