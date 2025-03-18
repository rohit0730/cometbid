"use client";

import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

function Address() {
    const [addressType, setAddressType] = useState("business");
    return (
        <>
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
        </>
    );
}

export default Address;