import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Content from 'component/content';
import Main from 'component/main';
import LoginForm from './section/LoginForm';

const LoginPage = () => {
  return (
    <Main className="d-flex w-100 justify-content-center">
      <Container className="d-flex flex-column">
        <Row className="h-100">
          <Col sm="10" md="8" lg="6" className="mx-auto h-100">
            <Content>
              <LoginForm />
            </Content>
          </Col>
        </Row>
      </Container>
    </Main>
  );
};

export default LoginPage;
