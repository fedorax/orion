import React from 'react';
import PropTpes from 'prop-types';
const Wrapper = ({ children }) => (
  <div className="wrapper">
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTpes.any,
};

export default Wrapper;
