"use client"

import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import "./style.css";
import Link from "next/link";
import { MdInfo, MdOutlineCheckCircle } from "react-icons/md";
import QrImage from "../../../assets/images/qr-code.svg";
import Image from "next/image";

function SettingsData() {
    const [isYearly, setIsYearly] = useState(false);
    const [addressType, setAddressType] = useState("business");

    const togglePricing = () => {
        setIsYearly(!isYearly);
    };
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Account Settings</h3>
                </div>

                <div className="card-box mt-20">
                    <div className="account-settings-contant">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column gap-3 account-settings-tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Account Details</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Security</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Subscription & Payment</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Billing Address</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Delete Account</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="tab-details">
                                                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "24px" }}>
                                                    Account Details
                                                </div>

                                                <Form className="mt-3">
                                                    <Row>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                                <Form.Label>Email Address*</Form.Label>
                                                                <Form.Control type="email" placeholder="Matthew@gmail.com" />
                                                                <div className="input-info">The CSF community operates in an open and transparent manner. Most of what you submit on our site including your email address and name will be visible to others who use our services. Some users prefer to use an email account dedicated specifically for this purpose.</div>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupUsername">
                                                                <Form.Label>Cometbid Foundation username*</Form.Label>
                                                                <Form.Control type="text" placeholder="macedinaise" disabled />
                                                                <div className="input-info">This is your committer ID, which is also your username across CSF websites and services.</div>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupTechnology">
                                                                <Form.Label>Preferred language of correspondence*</Form.Label>
                                                                <Form.Select aria-label="Default select example" className="form-control">
                                                                    <option>Select</option>
                                                                    <option value="1">English</option>
                                                                    <option value="2">French</option>
                                                                    <option value="3">Spanish</option>
                                                                    <option value="4">German</option>
                                                                    <option value="5">Italian</option>
                                                                </Form.Select>
                                                                <div className="input-info">The language chosen here will be used to communicate with you in future correspondence in order to serve and personalize content for you better now and into the future.</div>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupDate">
                                                                <Form.Check aria-label="option 1" label="I would like to re-execute the CSF membership agreement with new information. By doing so, I agree I have read the terms of agreement and understand that information supplied replaces any previous details on CSF file." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className="note-box">
                                                    <div className="note-icon">
                                                        <MdInfo />
                                                    </div>
                                                    <div className="note-text">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                </div>
                                                <div className="step-subtitle">Please visit our <Link href="#">privacy settings page</Link> to adjust the visibility of some required fields.</div>
                                                <div className="d-flex justify-content-end gap-3 mt-5">
                                                    <button className="btn-save">
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="tab-details">
                                                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "24px" }}>
                                                    Security
                                                </div>
                                                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "8px" }}>
                                                    Two-factor Authentication
                                                </div>
                                                <div className="input-info" style={{ marginBottom: "24px" }}>2FA adds an extra layer of security to your account. Once enabled, you'll need to provide your password as well as a code from an authenticator app to log in.</div>
                                                <div className="note-box mb-3">
                                                    <div className="note-icon">
                                                        <MdInfo />
                                                    </div>
                                                    <div className="note-text">
                                                        <p>If you haven't already installed an authenticator app on your mobile device, look for one of these free apps in either Apple's App Store or Google's Play Store: Google Authenticator, Last Pass Authenticator, Microsoft Authenticator.</p>
                                                    </div>
                                                </div>
                                                <Form.Check // prettier-ignore
                                                    type="switch"
                                                    id="custom-switch"
                                                    label="Enable 2FA"
                                                />
                                                <div className="authenticator-app">
                                                    <div className="auth-stap">
                                                        <h4>1. Install a two factor authentication app</h4>
                                                        <p>Google Authenticator, Last Pass Authenticator, Microsoft Authenticator.</p>
                                                    </div>
                                                    <div className="auth-stap">
                                                        <h4>2. Scan the QR code</h4>
                                                        <p>Add  your account details to the app and scan the QR code with your phone's camera.</p>
                                                    </div>
                                                    <div className="auth-stap">
                                                        <div className="qr-code">
                                                            <p>Scan the QR code:</p>
                                                            <Image src={QrImage} alt="qr-code" />
                                                        </div>
                                                    </div>
                                                    <div className="auth-stap">
                                                        <h4>3. Enter the code</h4>
                                                        <p className="mb-2">6 digit code generated by the app</p>
                                                        <Col md={6}>
                                                            <Form.Group className="mb-3" controlId="formGroup2fa">
                                                                <Form.Label>Select the 'Enable 2FA' button after entering the timed code.</Form.Label>
                                                                <Form.Control type="text" placeholder="" />
                                                            </Form.Group>
                                                        </Col>
                                                        <button className="btn-save">Activate</button>
                                                    </div>
                                                    <div className="auth-stap">
                                                        <h4>4. Done!</h4>
                                                        <p>Two-factor authentication is now enabled for your account.</p>
                                                    </div>
                                                </div>
                                                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "24px", marginTop: "24px" }}>
                                                    Change your Password
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                                                <Form.Label>Current Password*</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                                                <Form.Label>New Password*</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                                                <Form.Label>Confirm Password*</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" />
                                                                <div className="input-info">Password must be at least 12 characters long. Weak password will be marked as invalid. Password must not be greater than 128 characters long.</div>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className="d-flex justify-content-end gap-3 mt-5">
                                                    <button className="btn-save">
                                                        Change Password
                                                    </button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="tab-details">
                                                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "24px" }}>
                                                    Pick the plan that works best for your team
                                                </div>
                                                <div className="plan-section">
                                                    {/* CHOOSE YOUR PLAN */}
                                                    <div id="js-pricing-switch" className="text-center my-4 py-2 relative js-pricing-switch">
                                                        <span className={`switch-label ${!isYearly ? 'active' : ''}`}>Yearly</span>
                                                        <label className="switch">
                                                            <input type="checkbox" checked={isYearly} onChange={togglePricing} />
                                                            <span className="slider-price"></span>
                                                        </label>
                                                        <span className={`switch-label ${isYearly ? 'active' : ''}`}>Monthly</span>
                                                        <div className="save-money--mobile mt-3">Save 10% on Yearly Plans</div>
                                                    </div>
                                                    {/* CHOOSE YOU PLAN END */}

                                                    <div className="row mx-n3 justify-content-center">
                                                        {/* PRICING CARD - Free Plan */}
                                                        <div className="col-4 px-2 mb-4">
                                                            <div className="card card-frame">
                                                                <div className="row align-items-center">
                                                                    <div className="col-md-12">
                                                                        <div className="card-header bg-transparent">
                                                                            <div className="price-card--title">
                                                                                <h4>Solo</h4>
                                                                                <p>Includes 1 seat</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price-card--price">
                                                                            <div className="price-card--price-number"><sup>$</sup>9</div>
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <div className='price-btn'>
                                                                                <button className='btn btn-color-plan current-plan'>Current Plan</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <ul className="list-unstyled list-md-space mb-0">
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> Unlimited Objects
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> Unlimited Projects
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> PNG,PDF Export
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> View-Only Guests
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* END PRICING CARD - Free Plan */}
                                                        {/* PRICING CARD - Free Plan */}
                                                        <div className="col-4 px-2 mb-4">
                                                            <div className="card card-frame">
                                                                <div className="row align-items-center">
                                                                    <div className="col-md-12">
                                                                        <div className="card-header bg-transparent">
                                                                            <div className="price-card--title">
                                                                                <h4>Team</h4>
                                                                                <p>Includes 5 seat</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price-card--price">
                                                                            <div className="price-card--price-number"><sup>$</sup>15</div>
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <div className='price-btn'>
                                                                                <button className='btn btn-color-plan'>Upgrade Plan</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <ul className="list-unstyled list-md-space mb-0">
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> Unlimited Objects
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> Unlimited Projects
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> PNG,PDF Export
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> View-Only Guests
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* END PRICING CARD - Free Plan */}
                                                        {/* PRICING CARD - Free Plan */}
                                                        <div className="col-4 px-2 mb-4">
                                                            <div className="card card-frame">
                                                                <div className="row align-items-center">
                                                                    <div className="col-md-12">
                                                                        <div className="card-header bg-transparent">
                                                                            <div className="price-card--title">
                                                                                <h4>Unlimited</h4>
                                                                                <p>No Seat Limit</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price-card--price">
                                                                            <div className="price-card--price-number"><sup>$</sup>40</div>
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <div className='price-btn'>
                                                                                <button className='btn btn-color-plan'>Upgrade Plan</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <ul className="list-unstyled list-md-space mb-0">
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> Unlimited Objects
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> Unlimited Projects
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> PNG,PDF Export
                                                                                </li>
                                                                                <li className="d-flex ">
                                                                                    <MdOutlineCheckCircle /> View-Only Guests
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* END PRICING CARD - Free Plan */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <div className="tab-details">
                                                <div className="address-type">
                                                    <Form>
                                                        <div className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="Business Address"
                                                                name="group1"
                                                                type="radio"
                                                                id="business-address"
                                                                checked={addressType === "business"}
                                                                onChange={() => setAddressType("business")}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                label="Individual Address"
                                                                name="group1"
                                                                type="radio"
                                                                id="individual-address"
                                                                checked={addressType === "individual"}
                                                                onChange={() => setAddressType("individual")}
                                                            />
                                                        </div>
                                                    </Form>
                                                </div>

                                                {addressType === "business" && (
                                                    <div className="address-form">
                                                        <Form>
                                                            <Row>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                                                                        <Form.Label>First Name</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter first name" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicLastName">
                                                                        <Form.Label>Last Name</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter last name" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicCompany">
                                                                        <Form.Label>Company Name*</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter company name" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicVat">
                                                                        <Form.Label>VAT ID</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter VAT ID" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                        <Form.Label>Email</Form.Label>
                                                                        <Form.Control type="email" placeholder="Enter email" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                                                        <Form.Label>Phone</Form.Label>
                                                                        <Form.Control type="number" placeholder="Enter phone number" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicCountry">
                                                                        <Form.Label>Country</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter country" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicState">
                                                                        <Form.Label>State/Province</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter state/province" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                                                        <Form.Label>Address</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter address" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                                                        <Form.Label>Extended Address</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter address" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicCity">
                                                                        <Form.Label>City</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter city" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicZip">
                                                                        <Form.Label>Zip Code</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter zip code" />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                        <div className="d-flex justify-content-end gap-3 mt-5">
                                                            <button className="btn-save">Save Business Address</button>
                                                        </div>
                                                    </div>
                                                )}

                                                {addressType === "individual" && (
                                                    <div className="address-form">
                                                        <Form>
                                                            <Row>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                                                                        <Form.Label>First Name</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter first name" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicLastName">
                                                                        <Form.Label>Last Name</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter last name" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                        <Form.Label>Email</Form.Label>
                                                                        <Form.Control type="email" placeholder="Enter email" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                                                        <Form.Label>Phone</Form.Label>
                                                                        <Form.Control type="number" placeholder="Enter phone number" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicCountry">
                                                                        <Form.Label>Country</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter country" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicState">
                                                                        <Form.Label>State/Province</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter state/province" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                                                        <Form.Label>Address</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter address" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                                                        <Form.Label>Extended Address</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter address" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicCity">
                                                                        <Form.Label>City</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter city" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formBasicZip">
                                                                        <Form.Label>Zip Code</Form.Label>
                                                                        <Form.Control type="text" placeholder="Enter zip code" />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                        <div className="d-flex justify-content-end gap-3 mt-5">
                                                            <button className="btn-save">Save Individual Address</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <div className="tab-details">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="card">
                                                            <div className="card-body delete-sec">
                                                                <h4 className="title">Delete Account</h4>
                                                                <p>To Delete Your Account, you need to first cancel your paid Subscription.</p>
                                                                <Link href="#">Cancel my subscription</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SettingsData;