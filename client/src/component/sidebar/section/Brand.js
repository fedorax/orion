import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <Link to="/" className="sidebar-brand">
      <span className="align-middle">
        Company
      </span>
    </Link>
  );
};

export default Brand;
