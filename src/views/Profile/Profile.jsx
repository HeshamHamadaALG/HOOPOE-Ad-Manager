import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Row, Col, Button } from "reactstrap";
import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "../../components";

import userBackground from "../../assets/img/bg7.jpg";
import userAvatar from "../../assets/img/default-avatar.png";

class Profile extends React.Component {
  constructor(props) {
    super(props);
this.state = {
    disable: true, 
    btn: 'Edit',
    btnClr: '#20242c'
}
}

onClick = (e) => {
    if (this.state.disable) {
        this.setState({
          disable: false,
          btn: 'Done',
          btnClr: '#03970B'
        })
    } else {
        this.setState({
          disable: true,
          btn: 'Edit',
          btnClr: '#20242c'
        })
    }
}

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormInputs
                      ncols={[
                        "col-md-5 pr-1",
                        "col-md-3 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Company",
                          inputProps: {
                            type: "text",
                            disabled: this.state.disable,
                            defaultValue: "Name Agency Co."
                          }
                        },
                        {
                          label: "Username",
                          inputProps: {
                            type: "text",
                            disabled: this.state.disable,
                            defaultValue: "Ahmed123"
                          }
                        },
                        {
                          label: "Email address",
                          inputProps: {
                            type: "email",
                            disabled: this.state.disable,
                            defaultValue: "Email@mail.com"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "First Name",
                          inputProps: {
                            type: "text",
                            placeholder: "Ahmed",
                            disabled: this.state.disable,
                          }
                        },
                        {
                          label: "Last Name",
                          inputProps: {
                            type: "text",
                            placeholder: "Sayed",
                            disabled: this.state.disable,
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Address",
                          inputProps: {
                            type: "text",
                            placeholder: "Home Address",
                            disabled: this.state.disable,
                            defaultValue: "Address Here ..."
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "City",
                          inputProps: {
                            type: "text",
                            defaultValue: "Giza",
                            disabled: this.state.disable,
                            placeholder: "City"
                          }
                        },
                        {
                          label: "Country",
                          inputProps: {
                            type: "text",
                            defaultValue: "Egypt",
                            disabled: this.state.disable,
                            placeholder: "Country"
                          }
                        },
                        {
                          label: "Postal Code",
                          inputProps: {
                            type: "number",
                            disabled: this.state.disable,
                            placeholder: "ZIP Code"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "About Me",
                          inputProps: {
                            type: "textarea",
                            rows: "4",
                            cols: "80",
                            disabled: this.state.disable,
                            defaultValue: "Name Av. Agency",
                            placeholder: "Here can be your description"
                          }
                        }
                      ]}
                    />
                  </form>
                </CardBody>
                <CardFooter className="card-footer">
                  <Button to="" 
                  className="btn-round mb-3 btn btn-lg btn-block" 
                  style={{ backgroundColor: this.state.btnClr }}
                  onClick={this.onClick}
                  >{this.state.btn}</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card className="card-user">
                <div className="image">
                  <img src={userBackground} alt="..." />
                </div>
                <CardBody>
                  <CardAuthor
                    avatar={userAvatar}
                    avatarAlt="..."
                    title="Ahmed Sayed"
                    description="Ahmed123"
                  />
                  <p className="description text-center">
                    "Name Av. Agency<br />
                    Name Av. Agency"<br />
                  </p>
                </CardBody>
                <hr />
                <CardSocials
                  size="lg"
                  socials={[
                    {
                      icon: "fab fa-facebook-f success",
                      href: "https://www.facebook.com/",
                    },
                    {
                      icon: "fab fa-twitter",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-google-plus-g",
                      href: "https://plus.google.com/discover"
                    }
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
