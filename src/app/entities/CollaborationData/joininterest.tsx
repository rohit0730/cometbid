"use client";

import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../assets/images/Arrow-Right.svg";
import Upload from "../../../assets/images/Placeholder-Image.svg";
import { FiBox } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./style.css";
import Featured from "../../../assets/images/Featured-Icon.svg";
import Modal from 'react-bootstrap/Modal';
import { MdInfo } from "react-icons/md";

const steps = [
    { id: 1, name: "Step 1", title: "Interest Group", icon: <FiBox /> },
    { id: 2, name: "Step 2", title: "Signing Authority", icon: <FaRegUser /> },
    { id: 3, name: "Step 3", title: "Review", icon: <VscPreview /> },
];


const JoinInterest = () => {

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const [images, setImages] = useState({
        print: null,
        web: null,
    });

    const handleImageChange = (event: any, type: string) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages((prevImages) => ({
                    ...prevImages,
                    [type]: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <>

            {/* Submit Member Modal start */}
            <Modal show={show3} onHide={handleClose3} centered className='custom-modal delete-modal'>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="modal-icon">
                            <Image
                                src={Featured}
                                alt="arrow"
                            />
                        </div>
                        <div>
                            <h4 className="modal-title">Thanks for contacting us to join a Project!</h4>
                            <p className="modal-description">We have received your proposal to join a project. Relevant Project associates will reach out to you shortly for further steps.</p>
                        </div>
                        <div className="form-details">
                            <div className="note-box">
                                <div className="note-icon">
                                    <MdInfo />
                                </div>
                                <div className="note-text">
                                    <p>Please download the Proposal in Pdf format, and keep it for reference purpose.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end w-100">
                            <button className="btn-outline" onClick={handleClose3}>Download PDF</button>
                            <button className="btn-save ms-4" onClick={handleClose3}>Done</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Submit Member Modal end */}


            <div className="wrapper">
                <div className="d-flex align-items-center gap-2">
                    <div className="page-title">
                        <h3>Your Collaborations</h3>
                    </div>
                    <Image
                        src={Arrow}
                        alt="arrow"
                    />
                    <div className="page-title">
                        <h3> Join A Interest Group</h3>
                    </div>
                </div>

                <div className="card-section-collaboration mt-20">
                    <div className="step-form">
                        {/* Step Header */}
                        <div className="step-header">
                            <div className="d-flex align-items-center gap-3">
                                {steps.map((step) => (
                                    <div
                                        key={step.id}
                                        className={`step-item step-${step.id} ${currentStep >= step.id ? "active" : ""}`}
                                    >
                                        <div className="step-header-card">
                                            <div className="d-flex justify-content-between">
                                                <div className="step-card-details">
                                                    <div className="step-icon">{step.icon}</div>
                                                    <div>
                                                        <div className="step-name">{step.name}</div>
                                                        <div className="step-title">{step.title}</div>
                                                    </div>
                                                </div>
                                                <div className="strp-completion">
                                                    <FaCircleCheck
                                                        className="step-completion"
                                                        style={{ color: currentStep > step.id ? "#28a745" : "#ccc" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step Body */}
                        <div className="step-body mt-30">
                            {currentStep === 1 && (
                                <div className="step-details step-1">
                                    <div className="step-title">Please complete the following details for Starting a new Interest Group</div>

                                    <Form className="mt-3">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupGroupName">
                                                    <Form.Label>Witch Interest Group would you like to join? </Form.Label>
                                                    <Form.Select aria-label="Default select example" className="form-control">
                                                        <option>Jakarta EE Interest Group</option>
                                                        <option value="1">Automotive & Mobility</option>
                                                        <option value="2">Banking</option>
                                                        <option value="3">Blockchain</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupTechnology">
                                                    <Form.Label>What Role Would ypu like to play on this Interest Group</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="form-control">
                                                        <option>Guest Member</option>
                                                        <option value="1">Automotive & Mobility</option>
                                                        <option value="2">Banking</option>
                                                        <option value="3">Blockchain</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <div className="step-subtitle">Each Interest Group has different participation levels and restrictions on who can join at those levels (e.g., Guest Member level is typically restricted to non-profit organizations).See the charter for full details on which choice is best for you, and to see the Interest group fees associated with joining this Interest group</div>
                                            <div className="step-subtitle">
                                                Please contact our membership team with any questions.</div>
                                        </Row>
                                    </Form>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="step-details step-1">
                                    <div className="step-title">Signing Authority</div>
                                    <div className="step-subtitle">Please complete the following details for Starting a new Interest Group</div>

                                    <Form className="mt-3">
                                        <Row>
                                            <Col md={12}>
                                                <Form.Group className="mb-3" controlId="formGroupDate">
                                                    <Form.Check aria-label="option 1" label="Same as Member Representative" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupFirstName">
                                                    <Form.Label>First Name*</Form.Label>
                                                    <Form.Control type="name" placeholder="Mathew" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupLastName">
                                                    <Form.Label>Last Name*</Form.Label>
                                                    <Form.Control type="name" placeholder="Parker" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label>Email Address* </Form.Label>
                                                    <Form.Control type="email" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Label>Job Title*</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control">
                                                    <option>Select</option>
                                                    <option value="1">Project Manager </option>
                                                    <option value="2">Team Lead</option>
                                                    <option value="3">Developer</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div className="step-details step-1">
                                    <div className="step-title">Review and Submit Your Completed Application</div>
                                    <div className="step-subtitle">Please review your completed Interest Group Application Form. If you would like to update any information, please click the Back Button.</div>
                                    <div className="step-subtitle-2">Please click SUBMIT when ready.</div>

                                    <Form className="mt-3">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Witch Interest Group would you like to join? </Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control">
                                                    <option> Jakarta EE Interest Group </option>
                                                    <option value="1">Automotive & Mobility</option>
                                                    <option value="2">Banking</option>
                                                    <option value="3">Blockchain</option>
                                                </Form.Select>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupTechnology">
                                                    <Form.Label> What Role Would ypu like to play on this Interest Group? </Form.Label>
                                                    <Form.Select aria-label="Default select example" className="form-control">
                                                        <option>Guest Member</option>
                                                        <option value="1">Automotive & Mobility</option>
                                                        <option value="2">Banking</option>
                                                        <option value="3">Blockchain</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>



                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupFirstName">
                                                    <Form.Label>First Name*</Form.Label>
                                                    <Form.Control type="name" placeholder="Mathew" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupLastName">
                                                    <Form.Label>Last Name*</Form.Label>
                                                    <Form.Control type="name" placeholder="Parker" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Email Address*</Form.Label>
                                                    <Form.Control type="email" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Label>Job Title*</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control">
                                                    <option>Select</option>
                                                    <option value="1">Project Manager </option>
                                                    <option value="2">Team Lead</option>
                                                    <option value="3">Developer</option>
                                                </Form.Select>
                                            </Col>


                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupDate">
                                                    <Form.Check aria-label="option 1" label="I agree to abled by the code of conduct, rules and regulations by law binding on members of this Interest group" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            )}
                        </div>

                        {/* Step Footer (Navigation Buttons) */}
                        <div className="step-footer">
                            <div className="d-flex justify-content-end gap-3">
                                <button className="btn-back" onClick={prevStep} disabled={currentStep === 1}>
                                    Back
                                </button>
                                {currentStep < steps.length && (
                                    <button className="btn-next" onClick={nextStep} disabled={currentStep === steps.length}>
                                        Next
                                    </button>
                                )}

                                {/* Submit Button (Hidden at the last step) */}
                                {currentStep === steps.length && (
                                    <button className="btn-next" onClick={handleShow3}>
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinInterest;