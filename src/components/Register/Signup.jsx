import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Container, Form } from "reactstrap";

class Signup extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper-full-page">
        <div className="full-page section-image" >
          <div style={{opacity: '1'}}>
            <div className="full-page-content">
              <Container>
                <Row>
                  <Col md={8} lg={4} className="ml-auto mr-auto col-12">
                    <Form>
                      <Card className="card-login card-plain card" >
                        <CardHeader className="card-header">

                          <Row>
                            <Col className="ml-auto mr-auto col-12 " style={{ textAlign: 'center', color: '#a34823' }}>
                              <h3><b>Sign-Up</b></h3>
                            </Col>
                          </Row>
                        </CardHeader>
                        <CardBody className="card-body">
                          {/* firstname */}
                          <div className="no-border form-control-lg  input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="now-ui-icons users_circle-08"></i></span>
                            </div>
                            <input placeholder="First Name..." type="text" className="form-control" />
                          </div>
                          {/* lastname */}
                          <div className="no-border form-control-lg  input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="now-ui-icons users_single-02"></i></span>
                            </div>
                            <input placeholder="Last Name..." type="text" className="form-control" />
                          </div>
                          {/* Email */}
                          <div className="no-border form-control-lg  input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="now-ui-icons ui-1_email-85"></i></span>
                            </div>
                            <input placeholder="Email@mail.com" type="email" className="form-control" />
                          </div>
                          {/* password */}
                          <div className="no-border form-control-lg  input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="now-ui-icons ui-1_lock-circle-open">

                                </i></span>
                            </div>
                            <input placeholder="Password" type="password" className="form-control" />
                          </div>
                          {/* confirm password */}
                          <div className="no-border form-control-lg  input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="now-ui-icons text_align-center">

                                </i></span>
                            </div>
                            <input placeholder="Confirm-Password" type="password" className="form-control" />
                          </div>
                        </CardBody>
                        <CardFooter className="card-footer">
                          <Link to="/dashboard" className="btn-round mb-3 btn btn-lg btn-block" style={{ backgroundColor: "#e7a15e" }}>Create Account</Link>
                          <div className="pull-left">
                            <h6>
                              <Link to="/login" className="link footer-link" style={{color: '#a34823'}}>Already Have Account ..</Link>
                            </h6>
                          </div>
                        </CardFooter>
                      </Card>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
