import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Input, Label } from 'reactstrap';

const PasswordInputFrom = () => {
  return (
    <FormGroup>
      <Label>Password</Label>
      <Input
        bsSize="lg"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <small>
        <Link to="/auth/reset-password">Forgot password?</Link>
      </small>
    </FormGroup>
  );
};

export default PasswordInputFrom;
