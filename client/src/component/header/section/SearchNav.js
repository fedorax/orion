import React from 'react';
import { Form, Input } from 'reactstrap';

const SearchNav = () => {
  return (
    <Form inline>
      <Input
        type="text"
        placeholder="Search projects..."
        aria-label="Search"
        className="border-0 shadow-none mr-sm-2"
      />
    </Form>
  );
};

export default SearchNav;
