import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback,
} from 'reactstrap';

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            validate: {
                emailState: '',
            },
        }
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`)
    }

    handleOnClick = () => {

        this.setState({ redirect: true });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/dashboard" />;
        }
        return (
            <div className="">
                <Container className="">
                    <div className="register col-lg-9 col-md-5 ">
                        <h2>Sign In</h2>
                        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                            <Col>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="hoopoe@email.com"
                                        value={this.state.email}
                                        valid={this.state.validate.emailState === 'has-success'}
                                        invalid={this.state.validate.emailState === 'has-danger'}
                                        onChange={(e) => {
                                            this.validateEmail(e)
                                            this.handleChange(e)
                                        }}
                                    />
                                    <FormFeedback valid>
                                        That's a tasty looking email you've got there.
              </FormFeedback>
                                    <FormFeedback>
                                        Uh oh! Looks like there is an issue with your email. Please input a correct email.
              </FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                        value={this.state.password}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Button onClick={this.handleOnClick} >Submit</Button>
                        </Form>
                    </div>
                </Container>

            </div>
        )
    }
}

export default Register;