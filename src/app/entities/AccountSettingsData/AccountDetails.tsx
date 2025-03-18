"use client";

import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from "next/link";
import { MdInfo } from "react-icons/md";

function AccountData() {
    return (
        <>
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
        </>
    );
}

export default AccountData;