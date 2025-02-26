"use client";

import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from "next/image";
import Upload from "../../../assets/images/Placeholder-Image.svg";
import "./style.css";

function OrganizationProfileData() {

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
            <div className="wrapper">
                <div className="page-title">
                    <h3>Organization Profile</h3>
                </div>

                <div className="card-box mt-20">
                    <Form>
                        <Row>
                            {/* Upload Logo for Print */}
                            <Col md={6}>
                                <div className="upload-file">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="image-preview">
                                            {images.print ? (
                                                <Image src={images.print} alt="Uploaded Print Logo" width={100} height={100} />
                                            ) : (
                                                <Image src={Upload} alt="Upload Placeholder" width={100} height={100} />
                                            )}
                                        </div>
                                        <div className="file-details">
                                            <div className="file-info mb-2">Logo for Print</div>
                                            <div className="file-uploader">
                                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "print")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            {/* Upload Logo for Web */}
                            <Col md={6}>
                                <div className="upload-file">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="image-preview">
                                            {images.web ? (
                                                <Image src={images.web} alt="Uploaded Web Logo" width={100} height={100} />
                                            ) : (
                                                <Image src={Upload} alt="Upload Placeholder" width={100} height={100} />
                                            )}
                                        </div>
                                        <div className="file-details">
                                            <div className="file-info mb-2">Logo for Web</div>
                                            <div className="file-uploader">
                                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "web")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <p className="image-dimension">The logo dimension cannot exceed 2000 by 2000 pixels. To better display the logo across CSF's websites, please upload a version with minimal margins. Padding will be added to the display.</p>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label>Corporate Name*</Form.Label>
                                    <Form.Control type="name" placeholder="Enter name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupTechnology">
                                    <Form.Label>Corporate Type*</Form.Label>
                                    <Form.Select aria-label="Default select example" className="form-control">
                                        <option>Select</option>
                                        <option value="1">Automotive & Mobility</option>
                                        <option value="2">Banking</option>
                                        <option value="3">Blockchain</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formGroupProblem">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                    <div className="text-length">700 characters limit</div>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formGroupPitch">
                                    <Form.Label>Organization website URL</Form.Label>
                                    <Form.Control type="text" placeholder="Enter URL" />
                                </Form.Group>
                            </Col>

                            <div className="form-divider-title">Contact Information</div>

                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupCountry">
                                    <Form.Label>Country*</Form.Label>
                                    <Form.Select aria-label="Default select example" className="form-control">
                                        <option>Select Country</option>
                                        <option value="1">Canada</option>
                                        <option value="2">United States</option>
                                        <option value="3">United Kingdom</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupProvince">
                                    <Form.Label>Province/State*</Form.Label>
                                    <Form.Select aria-label="Default select example" className="form-control">
                                        <option>Select Province</option>
                                        <option value="1">Ontario</option>
                                        <option value="2">Quebec</option>
                                        <option value="3">New York</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupUrl">
                                    <Form.Label>LinkedIn profile URL</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formGroupDate">
                                    <Form.Check aria-label="option 1" label="I would like to re-execute the CSF membership agreement with new information. By doing so, I agree I have read the terms of agreement and understand that information supplied replaces any previous details on CSF file." />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <div className="d-flex justify-content-end gap-3 mt-4">
                        <button className="btn-save">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrganizationProfileData;