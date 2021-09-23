import React from 'react';
import {
  Card,
  CardBody,
  Form,
} from 'reactstrap';
import EmailInputForm from './EmailInputForm';
import FormHeader from './FormHeader';
import LoginButton from './LoginButton';
import PasswordInputFrom from './PasswordInputFrom';

const LoginForm = () => {
  return (
    <Card>
      <CardBody className="m-sm-4">
        <FormHeader />
        <Form>
          <EmailInputForm />
          <PasswordInputFrom />
          <LoginButton />
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
