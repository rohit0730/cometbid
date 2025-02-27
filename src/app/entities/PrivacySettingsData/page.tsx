"use client"

import React from "react";
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import "./style.css";
import Link from "next/link";
import { MdInfo } from "react-icons/md";

function PrivacyData() {
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Privacy Settings</h3>
                </div>

                <div className="card-box mt-20">
                    <div className="account-settings-contant">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column gap-3 account-settings-tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Privacy Details</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">My Subscriptions</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="tab-details">
                                                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "24px" }}>
                                                    Privacy Details
                                                </div>
                                                <div style={{ marginBottom: "18px" }}>
                                                    <div className="section-title" style={{ fontWeight: "bold", marginBottom: "8px" }}>
                                                        Privacy Control
                                                    </div>
                                                    <div className="input-info">Field that you can control the visibility of are below. Optional fields can be hidden by removing the content.</div>
                                                </div>
                                                <Form className="mt-3">
                                                    <Row>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupDate">
                                                                <Form.Check aria-label="option 1" label="Display my location (city and country)" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div style={{ marginBottom: "18px" }}>
                                                    <div className="section-title" style={{ fontWeight: "bold" }}>
                                                        Subscriptions
                                                    </div>
                                                </div>
                                                <div className="note-box mb-3">
                                                    <div className="note-icon">
                                                        <MdInfo />
                                                    </div>
                                                    <div className="note-text">
                                                        <p>You can unsubscribe at any time from the following mailing lists.</p>
                                                    </div>
                                                </div>
                                                <div style={{ marginBottom: "18px" }}>
                                                    <div className="section-title" style={{ fontWeight: "bold" }}>
                                                        Mailchimp mailing lists
                                                    </div>
                                                </div>
                                                <Form className="mt-3">
                                                    <Row>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupDate">
                                                                <Form.Check aria-label="option 1" label="I would like to subscribe to the CSF Community Newsletter." />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupDate">
                                                                <Form.Check aria-label="option 1" label="I would like to subscribe to the IoT Newsletter." />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupDate">
                                                                <Form.Check aria-label="option 1" label="I would like to subscribe to the Serverless Architecture Newsletter." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
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

export default PrivacyData;