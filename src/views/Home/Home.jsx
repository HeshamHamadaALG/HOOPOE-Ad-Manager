import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper-full-page">
        <div className="full-page section-image" >
          <div>
            <div className="full-page-content">
              {/* <Container>
                <Row>
                  <Col md={8} lg={4} className="ml-auto mr-auto col-12">
                    <Form>
                      <Card className="card-login card-plain card">
                        <CardHeader className="card-header">
                          <div className="logo-container">
                            <Row>
                              <Col lg={5} md={5} sm={5} className="ml-auto mr-auto col-5">
                                <img src={logo} className="Form-img" />
                              </Col>
                            </Row>
                          </div>
                        </CardHeader>
                        <CardBody className="card-body">
                          <div className="no-border form-control-lg  input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="now-ui-icons users_circle-08"></i></span>
                            </div>
                            <input placeholder="First Name..." type="text" className="form-control" />
                          </div>
                          <div className="no-border form-control-lg  input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="now-ui-icons ui-1_lock-circle-open">

                                </i></span>
                            </div>
                            <input placeholder="Password" type="password" className="form-control" />
                          </div>
                        </CardBody>
                        <CardFooter className="card-footer">
                          <Link to="" className="btn-round mb-3 btn btn-lg btn-block" style={{ backgroundColor: "#e7a15e" }}>Login</Link>
                          <div className="pull-left">
                            <h6>
                              <Link to="/signup" className="link footer-link">Don't Have Account ?</Link>
                            </h6>
                          </div>
                        </CardFooter>
                      </Card>
                    </Form>
                  </Col>
                </Row>
              </Container> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
