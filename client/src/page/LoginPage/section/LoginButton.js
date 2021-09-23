import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <div className="text-center mt-3">
      <Link to="/dashboard/default">
        <Button color="primary" size="lg">
          Sign in
        </Button>
      </Link>
    </div>
  );
};

export default LoginButton;
