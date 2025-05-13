"use client";

import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../DashboardData/style.css";


function FaqData() {

    return (
        <>
            <div className="wrapper">
                <div className="page-title-faq">
                    <h3>FAQs</h3>
                </div>

                <div className="card-section mt-20">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="faq-section">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How do I update our address andor member representative and other contact information?</Accordion.Header>
                                        <Accordion.Body>
                                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How do I edit our Membership Pages?</Accordion.Header>
                                        <Accordion.Body>
                                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Why can&#39;t I see the changes I have made?</Accordion.Header>
                                        <Accordion.Body>
                                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How do I promote my organization products and services?</Accordion.Header>
                                        <Accordion.Body>
                                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>How do I get involved in CSF Projects?</Accordion.Header>
                                        <Accordion.Body>
                                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqData;