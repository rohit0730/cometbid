import React from "react";
import "./style.css";
import Image from "next/image";
import Arrow from "../../../assets/images/Arrow-Right.svg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RoleImage from "../../../assets/images/role-image.svg";

function RoleDetails() {
    return (
        <>
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
                        <h3>My Role</h3>
                    </div>
                </div>

                <div className="role-list mt-20">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className="mb-3">
                            <div className="card">
                                <div className="role-card-body">
                                    <div className="role-header d-flex justify-content-between">
                                        <div className="header-left-role">
                                            <div className="inner d-flex align-items-center gap-3">
                                                <div className="role-icon">
                                                    <Image
                                                        src={RoleImage}
                                                        alt="arrow"
                                                    />
                                                </div>
                                                <div className="role-details">
                                                    <span>Solutions Architect</span>
                                                    <div className="role-name">Acme Consulting</div>
                                                    <div className="role-lavel"><b>Level:</b> Group</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-right-role">
                                            <p><b>Joined Date:</b> 24th October 2024</p>
                                        </div>
                                    </div>
                                    <div className="role-body">
                                        <div className="role-description">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>

                                        <div className="tag">
                                            <div className="title"><b>Tags :</b></div>
                                            <div className="tag-item">
                                                <span>Php</span>
                                            </div>
                                            <div className="tag-item green">
                                                <span>MongoDB</span>
                                            </div>
                                            <div className="tag-item red">
                                                <span>Software Dedign</span>
                                            </div>
                                        </div>

                                        <div className="multi-links">
                                            <a href="#">Read</a> | <a href="#"> Read Report</a> | <a href="#">View Members</a>
                                        </div>

                                        <div className="d-flex justify-content-end mt-4">
                                            <button type="button" className="btn-save">Leave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="mb-3">
                            <div className="card">
                                <div className="role-card-body">
                                    <div className="role-header d-flex justify-content-between">
                                        <div className="header-left-role">
                                            <div className="inner d-flex align-items-center gap-3">
                                                <div className="role-icon">
                                                    <Image
                                                        src={RoleImage}
                                                        alt="arrow"
                                                    />
                                                </div>
                                                <div className="role-details">
                                                    <span>Solutions Architect</span>
                                                    <div className="role-name">Acme Consulting</div>
                                                    <div className="role-lavel"><b>Level:</b> Group</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-right-role">
                                            <p><b>Joined Date:</b> 24th October 2024</p>
                                        </div>
                                    </div>
                                    <div className="role-body">
                                        <div className="role-description">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>

                                        <div className="tag">
                                            <div className="title"><b>Tags :</b></div>
                                            <div className="tag-item">
                                                <span>Php</span>
                                            </div>
                                            <div className="tag-item green">
                                                <span>MongoDB</span>
                                            </div>
                                            <div className="tag-item red">
                                                <span>Software Dedign</span>
                                            </div>
                                        </div>

                                        <div className="multi-links">
                                            <a href="#">Read</a> | <a href="#"> Read Report</a> | <a href="#">View Members</a>
                                        </div>

                                        <div className="d-flex justify-content-end mt-4">
                                            <button type="button" className="btn-save">Leave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="card">
                                <div className="role-card-body">
                                    <div className="role-header d-flex justify-content-between">
                                        <div className="header-left-role">
                                            <div className="inner d-flex align-items-center gap-3">
                                                <div className="role-icon">
                                                    <Image
                                                        src={RoleImage}
                                                        alt="arrow"
                                                    />
                                                </div>
                                                <div className="role-details">
                                                    <span>Solutions Architect</span>
                                                    <div className="role-name">Acme Consulting</div>
                                                    <div className="role-lavel"><b>Level:</b> Group</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-right-role">
                                            <p><b>Joined Date:</b> 24th October 2024</p>
                                        </div>
                                    </div>
                                    <div className="role-body">
                                        <div className="role-description">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>

                                        <div className="tag">
                                            <div className="title"><b>Tags :</b></div>
                                            <div className="tag-item">
                                                <span>Php</span>
                                            </div>
                                            <div className="tag-item green">
                                                <span>MongoDB</span>
                                            </div>
                                            <div className="tag-item red">
                                                <span>Software Dedign</span>
                                            </div>
                                        </div>

                                        <div className="multi-links">
                                            <a href="#">Read</a> | <a href="#"> Read Report</a> | <a href="#">View Members</a>
                                        </div>

                                        <div className="d-flex justify-content-end mt-4">
                                            <button type="button" className="btn-save">Leave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="card">
                                <div className="role-card-body">
                                    <div className="role-header d-flex justify-content-between">
                                        <div className="header-left-role">
                                            <div className="inner d-flex align-items-center gap-3">
                                                <div className="role-icon">
                                                    <Image
                                                        src={RoleImage}
                                                        alt="arrow"
                                                    />
                                                </div>
                                                <div className="role-details">
                                                    <span>Solutions Architect</span>
                                                    <div className="role-name">Acme Consulting</div>
                                                    <div className="role-lavel"><b>Level:</b> Group</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-right-role">
                                            <p><b>Joined Date:</b> 24th October 2024</p>
                                        </div>
                                    </div>
                                    <div className="role-body">
                                        <div className="role-description">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>

                                        <div className="tag">
                                            <div className="title"><b>Tags :</b></div>
                                            <div className="tag-item">
                                                <span>Php</span>
                                            </div>
                                            <div className="tag-item green">
                                                <span>MongoDB</span>
                                            </div>
                                            <div className="tag-item red">
                                                <span>Software Dedign</span>
                                            </div>
                                        </div>

                                        <div className="multi-links">
                                            <a href="#">Read</a> | <a href="#"> Read Report</a> | <a href="#">View Members</a>
                                        </div>

                                        <div className="d-flex justify-content-end mt-4">
                                            <button type="button" className="btn-save">Leave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default RoleDetails;