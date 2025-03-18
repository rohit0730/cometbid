"use client"

import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import "../../entities/AccountSettingsData/style.css";

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (

        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Account Settings</h3>
                </div>

                <div className="card-box mt-20">
                    <div className="account-settings-contant">
                        <Tab.Container id="left-tabs-example">
                            <Row>
                                <Col sm={3}>
                                    <div className="tab-content account-settings-tabs">
                                        <div className="d-flex flex-column nav-item">
                                            <Link href="/account-settings/account-details" className={`link ${pathname === '/account-settings/account-details' ? 'active' : ''}`}>
                                                <span className="tab-user-name">Account Details</span>
                                            </Link>
                                            <Link href="/account-settings/security" className={`link ${pathname === '/account-settings/security' ? 'active' : ''}`}>
                                                <span className="tab-user-name">Security</span>
                                            </Link>
                                            <Link href="/account-settings/subscription" className={`link ${pathname === '/account-settings/subscription' ? 'active' : ''}`}>
                                                <span className="tab-user-name">Subscription & Payment</span>
                                            </Link>
                                            <Link href="/account-settings/billing-address" className={`link ${pathname === '/account-settings/billing-address' ? 'active' : ''}`}>
                                                <span className="tab-user-name">Billing Address</span>
                                            </Link>
                                            <Link href="/account-settings/delete-account" className={`link ${pathname === '/account-settings/delete-account' ? 'active' : ''}`}>
                                                <span className="tab-user-name">Delete Account</span>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <div className="tab-content">
                                        {children}
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>

    );
}