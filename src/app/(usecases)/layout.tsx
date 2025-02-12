"use client";

import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarLogo  from "../../assets/images/sidebar-logo.png";
import ToggleIcon from "../../assets/images/toggle-icon.png";
import NotificationIcon from "../../assets/images/Bell.png";
import CountryFlag from "../../assets/images/flag.png";
import Profile from "../../assets/images/user-profile.png";
import Link from "next/link";

export default function SetLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="page-content">
                <div className="page-inner">
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <Image
                                    src={SidebarLogo}
                                    alt="logo"
                                />
                            </div>
                            <div className="plan">
                                <p>Organization membership plan    <a href="#">Montley</a></p>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className="nav-list">
                                <li className="active">
                                    <Link href="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/personal-information">Personal Information</Link>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="page-header">
                            <div className="page-header-content">
                                <div className="content-left d-flex align-items-center">
                                    <div className="toggle-sidebar">
                                        <button type="button" className="btn-toggle">
                                            <Image 
                                                src={ToggleIcon}
                                                alt="icon"
                                            />
                                        </button>
                                    </div>
                                    <div className="user-info">
                                        <div className="user-name">
                                            <p>Welcome back, Matthew</p>
                                            <span className="user-role"> (Member Representative)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-right d-flex align-items-center">
                                    <button className="btn-downgrade">Downgrade</button>
                                    <div className="notification">
                                        <button type="button" className="btn-notification">
                                            <Image 
                                                src={NotificationIcon}
                                                alt="icon"
                                            />
                                        </button>
                                        <span className="notification-count">3</span>
                                    </div>
                                    <button className="country-flag">
                                        <Image 
                                            src={CountryFlag}
                                            alt="icon"
                                            width={40}
                                            height={40}
                                        />
                                    </button>
                                    <div className="user-info-2">
                                        <button className="user-profile">
                                            <Image 
                                                src={Profile}
                                                alt="icon"
                                                width={40}
                                                height={40}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            
        </>
    );
}
