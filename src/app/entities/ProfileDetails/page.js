"use client"

import React, { useState } from "react";
import "./profile.css";
import Image from "next/image";
import Arrow from "../../../assets/images/Arrow-Right.svg";
import BannerProfile from "../../../assets/images/bg-profile.png";
import UserProfile from "../../../assets/images/profile-user.svg";
import Linkedin from "../../../assets/images/linkedin.svg";
import X from "../../../assets/images/x.svg";
import GitHub from "../../../assets/images/github.svg";
import Website from "../../../assets/images/website.svg";
import EditIcon from "../../../assets/images/Pen.svg";
import Link from "next/link";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ProfileDetails() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [image, setImage] = useState("http://i.pravatar.cc/500?img=7");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const [bannerImage, setbannerImage] = useState(null);
    const pictureImageTxt = "Choose an image";

    const handleBannerChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setbannerImage(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setbannerImage(null);
        }
    };

    return (
        <>
            {/* Edit Details Modal start */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="profile-edit">
                        <div className="avatar-upload">
                            <div className="avatar-edit">
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept=".png, .jpg, .jpeg"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="imageUpload"></label>
                            </div>
                            <div className="avatar-preview">
                                <div
                                    id="imagePreview"
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        display: "block",
                                        transition: "opacity 0.65s",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-edit">
                        <div className="lable">Upload Banner Image</div>
                        <label className="picture" htmlFor="picture__input" tabIndex="0">
                            <span className="picture__image">
                                {bannerImage ? <Image src={bannerImage} alt="Uploaded Preview" className="picture__img" /> : pictureImageTxt}
                            </span>
                        </label>
                        <input type="file" name="picture__input" id="picture__input" onChange={handleBannerChange} />
                    </div>

                    <Form className="mt-3">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" placeholder="Mathew" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="name" placeholder="Parker" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>Current Employer</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Current Employer</Form.Label>
                                <Form.Select aria-label="Default select example" className="form-control">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>Website Url</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>GitHub Url</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>GitLab Url</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>Twitter(x)</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>Bitbucket Url</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>LinkedIn Url</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                    <div className="text-length">1000 characters limit</div>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formGroupDate">
                                    <Form.Check aria-label="option 1"  label="I would like to re-execute the CSF membership agreement with new information. By doing so, I agree I have read the terms of agreement and understand that information supplied replaces any previous details on CSF file."/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                    <div className="d-flex justify-content-end mt-4">
                        <button className="btn-save" onClick={handleClose}>Save</button>
                        <button className="btn-cancel ms-4" onClick={handleClose}>Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Edit Details Modal end */}

            <div className="wrapper">
                <div className="d-flex align-items-center gap-2">
                    <div className="page-title">
                        <h3>Personal Information</h3>
                    </div>
                    <Image
                        src={Arrow}
                        alt="arrow"
                    />
                    <div className="page-title">
                        <h3>My Profile</h3>
                    </div>
                </div>

                <div className="profile-details mt-20">
                    <div className="card">
                        <div className="profile-banner">
                            <Image
                                src={BannerProfile}
                                alt="profile"
                            />
                        </div>
                        <div className="user-profile-details">
                            <div className="d-flex justify-content-between">
                                <div className="user-details-inner d-flex ">
                                    <div className="profile-image">
                                        <Image
                                            src={UserProfile}
                                            alt="profile"
                                        />
                                    </div>
                                    <div className="details">
                                        <div className="user-name">
                                            <h4>Mathew Parker</h4>
                                        </div>
                                        <div className="user-role">
                                            <p>(Member Representative)</p>
                                        </div>

                                        <div className="social-media">
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href="#">
                                                        <Image
                                                            src={Linkedin}
                                                            alt="linkedin-icon"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <Image
                                                            src={X}
                                                            alt="x-icon"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <Image
                                                            src={GitHub}
                                                            alt="github-icon"
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <Image
                                                            src={Website}
                                                            alt="website-icon"
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-design">
                                    <button className="btn-icon-blue" onClick={handleShow}>
                                        <Image
                                            src={EditIcon}
                                            alt="edit-icon"
                                        />
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-about mt-20">
                    <div className="card">
                        <div className="card-header-title">
                            <h3>About Me</h3>
                        </div>
                        <hr className="line mt-0" />
                        <div className="card-about-body">
                            <div className="row">
                                <div className="col-md-6 w-100">
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="about-list">
                                                <li>
                                                    <span>Full Name:</span> Mathew Parker
                                                </li>
                                                <li>
                                                    <span>Date of Birth :</span> 22nd March 2000
                                                </li>
                                                <li>
                                                    <span>Interests:</span> Soccer, Coding, Hockey
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="about-list">
                                                <li>
                                                    <span>Current Employer:</span> ABC Acme Inc.
                                                </li>
                                                <li>
                                                    <span>Job Title :</span> Front-end Developer
                                                </li>
                                                <li>
                                                    <span>Website Url:</span> userwebsite.com
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-about mt-20">
                    <div className="card">
                        <div className="card-header-title">
                            <h3>Social Media links</h3>
                        </div>
                        <hr className="line mt-0" />
                        <div className="card-about-body">
                            <div className="row">
                                <div className="col-md-6 w-100">
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="about-list">
                                                <li>
                                                    <span>GitHub url:</span> https://github.com/mathewparker
                                                </li>
                                                <li>
                                                    <span>GitLab url :</span> https://gitlab.com/mathewparker
                                                </li>
                                                <li>
                                                    <span>Twitter(X):</span> https://twitter.com/mathewparker
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="about-list">
                                                <li>
                                                    <span>Bitbucket url:</span> https://bitbucket.org/mathewparker
                                                </li>
                                                <li>
                                                    <span>Linkedin Url :</span> https://linkedin.com/mathewparker
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-about mt-20">
                    <div className="card">
                        <div className="card-header-title">
                            <h3>My Profile</h3>
                        </div>
                        <hr className="line mt-0" />
                        <div className="card-about-body">
                            <div className="description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetails;