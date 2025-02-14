'use client'

import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import Profile from "../../../assets/images/profile.png";
import GroupProfile from "../../../assets/images/group-logo.png";
import Project from "../../../assets/images/project-icon.png";
import ProjectName from "../../../assets/images/Case-Round.svg";
import ChatIcon from "../../../assets/images/chat.svg";
import { FaUser } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const faqs = [
    {
        question: "How do I update our address andor member representative and other contact information?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I edit our Membership Pages?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "Why can&#39t I see the changes I have made?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I promote my organization products and services?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I get involved in CSF Projects?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
];

function DashboardData() {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <>
            <div className="page-title">
                <h3>Dashboard</h3>
            </div>

            <div className="user-info-details mt-20">
                <div className="d-flex align-items-center gap-5">
                    <div className="left flex-column-column w-100">
                        <div className="profile-image">
                            <Image
                                src={Profile}
                                alt="profile"
                            />
                        </div>
                        <div className="inline-block ms-4 w-100">
                            <div className="user-1">
                                <h4>Mathew Parker</h4>
                                <p>Frontend Developer at <span>CASERO INCORPORATED INC.</span></p>
                                <hr />
                            </div>
                            <div className="user-list">
                                <div className="last-login">
                                    <b>Last login:</b>  2 months ago
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="btn-list-column d-flex flex-direction-column gap-3">
                            <button className="btn-border">Member since 29 May 2024</button>
                            <button className="btn-border">Next renewal 29 May 2025</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-title mt-30">
                <h3>OVERVIEW</h3>
            </div>

            <div className="card-section mt-20">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card colur-blue-gradient">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="card-icon">
                                        <FaUser />
                                    </div>
                                    <div className="card-text">
                                        <h3>Personal Information</h3>
                                    </div>
                                </div>
                                <div className="add-icon card-icon">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card colur-bluelight-gradient">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="card-icon">
                                        <FaUser />
                                    </div>
                                    <div className="card-text">
                                        <h3>Personal Information</h3>
                                    </div>
                                </div>
                                <div className="add-icon card-icon">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card colur-purple-gradient">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="card-icon">
                                        <FaUser />
                                    </div>
                                    <div className="card-text">
                                        <h3>Personal Information</h3>
                                    </div>
                                </div>
                                <div className="add-icon card-icon">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card colur-green-gradient">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="card-icon">
                                        <FaUser />
                                    </div>
                                    <div className="card-text">
                                        <h3>Personal Information</h3>
                                    </div>
                                </div>
                                <div className="add-icon card-icon">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-section mt-20">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="group-logo d-flex justify-content-center">
                                    <Image
                                        src={GroupProfile}
                                        alt="profile"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-tltle">
                                    <h5>STATISTICS</h5>
                                </div>
                                <div className="card-content">
                                    <div className="list-content d-flex flex-column">
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="card-icon">
                                                    <Image
                                                        src={Project}
                                                        alt="profile"
                                                        className="add-icon"
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    Projects
                                                </div>
                                            </div>
                                            <div className="card-value">
                                                10
                                            </div>
                                        </div>
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="card-icon">
                                                    <Image
                                                        src={Project}
                                                        alt="profile"
                                                        className="add-icon"
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    Collaborations
                                                </div>
                                            </div>
                                            <div className="card-value">
                                                10
                                            </div>
                                        </div>
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="card-icon">
                                                    <Image
                                                        src={Project}
                                                        alt="profile"
                                                        className="add-icon"
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    Schedules
                                                </div>
                                            </div>
                                            <div className="card-value">
                                                10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-tltle">
                                    <h5>STATUS</h5>
                                </div>
                                <div className="card-content">
                                    <div className="list-content d-flex flex-column">
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="card-text">
                                                CSF Membership Agreement
                                            </div>
                                            <div className="card-value">
                                                <IoIosInformationCircle />
                                            </div>
                                        </div>
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="card-text">
                                                Project Signoff Agreement
                                            </div>
                                            <div className="card-value">
                                                <IoIosInformationCircle />
                                            </div>
                                        </div>
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="card-text">
                                                Collaboration Agreement
                                            </div>
                                            <div className="card-value">
                                                <IoIosInformationCircle />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="list-content d-flex flex-column">
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="card-icon">
                                                    <Image
                                                        src={Project}
                                                        alt="profile"
                                                        className="add-icon"
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    Projects
                                                </div>
                                            </div>
                                            <div className="card-value">
                                                10
                                            </div>
                                        </div>
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="card-icon">
                                                    <Image
                                                        src={Project}
                                                        alt="profile"
                                                        className="add-icon"
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    Projects
                                                </div>
                                            </div>
                                            <div className="card-value">
                                                10
                                            </div>
                                        </div>
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="card-icon">
                                                    <Image
                                                        src={Project}
                                                        alt="profile"
                                                        className="add-icon"
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    Collaborations
                                                </div>
                                            </div>
                                            <div className="card-value">
                                                10
                                            </div>
                                        </div>
                                        <div className="card-list-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="card-icon">
                                                    <Image
                                                        src={Project}
                                                        alt="profile"
                                                        className="add-icon"
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    Schedules
                                                </div>
                                            </div>
                                            <div className="card-value">
                                                10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper-content">
                <div className="page-title mt-30">
                    <h3>Projects and Working Groups</h3>
                </div>
                <div className="card-section mt-20">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        {/* <div className="border-line"></div> */}
                                    </div>

                                    <div className="project-light-tltle">
                                        Your Projects
                                    </div>

                                    <ul className="project-list">
                                        <li>No projects yet</li>
                                    </ul>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        {/* <div className="border-line"></div> */}
                                    </div>

                                    <div className="project-light-tltle">
                                        Projects You May be interested in
                                    </div>

                                    <ul className="project-list">
                                        <li>Tundra Payment Gateway</li>
                                        <li>3CB Connectivity</li>
                                        <li>Web Accessibility Automation</li>
                                    </ul>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        {/* <div className="border-line"></div> */}
                                    </div>

                                    <div className="project-light-tltle">
                                        Your Working Groups
                                    </div>

                                    <ul className="project-list">
                                        <li>IoT Working Group </li>
                                        <li>Unified Blockchain Working Group</li>
                                    </ul>
                                    <div className="project-light-tltle">
                                        Your Interest Groups
                                    </div>

                                    <ul className="project-list">
                                        <li>IoT Working Group </li>
                                        <li>Web Accessibility Working Group</li>
                                    </ul>

                                    <div className="btn-read">
                                        <Link href="#">Learn more about Projects</Link>
                                    </div>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        {/* <div className="border-line"></div> */}
                                    </div>

                                    <div className="project-light-tltle">
                                        Working Groups You might be interested in
                                    </div>

                                    <ul className="project-list">
                                        <li>Unified Blockchain Working Group </li>
                                        <li>3Xs Working Group</li>
                                    </ul>
                                    <div className="project-light-tltle">
                                        Interest Groups You might be interested in
                                    </div>

                                    <ul className="project-list">
                                        <li>IoT Working Group </li>
                                        <li>Web Accessibility Working Group</li>
                                    </ul>

                                    <div className="btn-read">
                                        <Link href="#">Learn more about Projects</Link>
                                    </div>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper-content">
                <div className="page-title mt-30">
                    <h3>Resources</h3>
                </div>
                <div className="card-section mt-20">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        
                                    </div>

                                    <div className="project-light-tltle">
                                        Survey Report
                                    </div>

                                    <ul className="project-list">
                                        <li>2023 IoT & Edge Commercial Adoption survey Report</li>
                                        <li>2023 IoT & Edge Developer Survey Report</li>
                                    </ul>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        {/* <div className="border-line"></div> */}
                                    </div>

                                    <div className="project-light-tltle">
                                        White Paper
                                    </div>

                                    <ul className="project-list">
                                        <li>Beyond MQTT: How Sparkplug Transforms Raw Data into.....ay</li>
                                        <li>Spa Automotive Industry. rkplug: The Open Specification Critical to Achieving ROI in the Industrial Internet of Things.</li>
                                        {/* <li>Web Accessibility Automation</li> */}
                                    </ul>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        {/* <div className="border-line"></div> */}
                                    </div>

                                    <div className="project-light-tltle">
                                        News
                                    </div>

                                    <ul className="project-list">
                                        <li>Industrial IoT revenue expected to nearly double through 2025, data generation triple</li>
                                        <li>How Open Source Working Groups Drive Collaboration and Innovation</li>
                                    </ul>

                                    <div className="btn-read">
                                        <Link href="#">Learn more about Projects</Link>
                                    </div>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-header-icon">
                                        <div className="icon-box">
                                            <Image
                                                src={ProjectName}
                                                alt="profile"
                                                className="add-icon"
                                            />
                                        </div>
                                        {/* <div className="border-line"></div> */}
                                    </div>

                                    <div className="project-light-tltle">
                                        Trending Blogs
                                    </div>

                                    <ul className="project-list">
                                        <li>Industrial IoT & building Opensource projects </li>
                                        <li>Open Source Software in the Spa Automotive Industry</li>
                                    </ul>

                                    <div className="btn-read">
                                        <Link href="#">Learn more about Projects</Link>
                                    </div>
                                    <div className="border-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper-content">
                <div className="page-title mt-30">
                    <h3>FAQs</h3>
                </div>
                <div className="card-section mt-20">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="faq-section">
                                <div className="">
                                    <div className="space-y-4">
                                        {faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="border rounded-lg shadow-sm"
                                            >
                                                <button
                                                    onClick={() => toggleFAQ(index)}
                                                    className="w-full flex justify-between items-center px-4 py-3 text-left bg-white hover:bg-gray-200"
                                                >
                                                    <span className="font-medium">{faq.question}</span>
                                                    {openIndex === index ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                                                </button>
                                                {openIndex === index && (
                                                    <div className="px-4 py-3 text-gray-700 bg-white border-t">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="chat-icon">
                                            <Image
                                                src={ChatIcon}
                                                alt="profile"
                                                className=""
                                            />
                                        </div>
                                        <h4 className="faq-title">Do you have more questions?</h4>
                                        <p className="description">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                                    </div>
                                    <div className="btn-view-more">
                                        <button className="btn-view">View more FAQs</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardData;