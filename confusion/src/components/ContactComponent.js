import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: ''
            , lastname: ''
            , telephone: ''
            , email: ''
            , agree: false
            , contactType: 'Tel.'
            , message: ''
            , touched: {
                firstname: false
                , lastname: false
                , telephone: false
                , email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]:value});
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) =>(evt) => {
        this.setState({touched: {...this.state.touched, [field]: true }});
    }

    validate(firstname, lastname, telephone, email){
        const errors = {
            firstname: ''
            , lastname: ''
            , telephone: ''
            , email: ''
        }

        if(this.state.touched.firstname && firstname.length <3 ) errors.firstname = 'First Name should be >= 3 characters';
        else if(this.state.touched.firstname && firstname.length >10 ) errors.firstname = 'First Name should be <= 10 characters';
        
        if(this.state.touched.lastname && lastname.length <3 ) errors.lastname = 'Last Name should be >= 3 characters';
        else if(this.state.touched.lastname && lastname.length >10 ) errors.lastname = 'Last Name should be <= 10 characters';

        //https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript/4338544  answer # 2 by user EeeeeK
        const regPhone= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; 
        if(this.state.touched.telephone && !regPhone.test(telephone)) errors.telephone = 'Tel. Number should contain only numbers';
        
        //http://www.regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1
        const regEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if(this.state.touched.email && !regEmail.test(email)) errors.email = 'Email address is not valid';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telephone, this.state.email);

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input valid={errors.firstname===''} invalid={errors.firstname!==''} onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange} type="text" id="firstname" name="firstname"
                                            placeholder="First Name" value={this.state.firstname} />
                                            <FormFeedback>{errors.firstname}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input valid={errors.lastname===''} invalid={errors.lastname!==''} onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange} type="text" id="lastname" name="lastname"
                                            placeholder="Last Name" value={this.state.lastname} />
                                             <FormFeedback>{errors.lastname}</FormFeedback>
                                    </Col>
                                </FormGroup> 
                                <FormGroup row>
                                    <Label htmlFor="telephone" md={2}>Tel. Number</Label>
                                    <Col md={10}>
                                        <Input valid={errors.telephone===''} invalid={errors.telephone!==''} onBlur={this.handleBlur('telephone')} onChange={this.handleInputChange} type="tel" id="telephone" name="telephone"
                                            placeholder="Tel. Number" value={this.state.telephone} />
                                             <FormFeedback>{errors.telephone}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input valid={errors.email===''} invalid={errors.email!==''} onBlur={this.handleBlur('email')} onChange={this.handleInputChange} type="email" id="email" name="email"
                                            placeholder="Email" value={this.state.email} />
                                             <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>

                                    <Col md={{ size: 6, offset: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input onChange={this.handleInputChange} type="checkbox" name="agree" checked={this.state.agree} />
                                                {' '}<strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Input onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input onChange={this.handleInputChange} type="textarea" id="message" name="message"
                                            rows="12" value={this.state.message} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;