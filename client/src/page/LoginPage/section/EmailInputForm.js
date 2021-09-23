import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const EmailInputForm = () => {
  return (
    <FormGroup>
      <Label>Email</Label>
      <Input
        bsSize="lg"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
    </FormGroup>
  );
};

export default EmailInputForm;
