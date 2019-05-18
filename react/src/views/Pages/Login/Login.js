import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Row
} from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                  <CardBody className="text-center">
                    <div>
                      <img src={'../../assets/img/avatars/showerlogohorizontal.png'} style={{width: 160, height: 70}}
                           alt="admin@bootstrapmaster.com"/>
                      <p>This is the dashboard to manage the IO-Shower devices, all the infrastructure and applications
                        health,
                        the login page with the proper admin credentials</p>
                      <a href={"http://localhost:3000/"}>
                        <Button color="primary" className="mt-3" active
                                tabIndex={-1}>Authenticate
                        </Button>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
