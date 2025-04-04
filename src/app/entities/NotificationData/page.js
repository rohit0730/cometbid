"use client"

import React, { useState } from "react";
import "./style.css";
import NotificationIcon from "../../../assets/images/notification-profile.svg";
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';


const notifications = [
    {
        id: 1,
        name: "Random Guy",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        time: "09:20PM Today"
    },
    {
        id: 2,
        name: "Another User",
        message: "This is another sample notification message for display.",
        time: "08:45PM Today"
    },
    {
        id: 3,
        name: "Random Guy",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        time: "09:20PM Today"
    },
    {
        id: 4,
        name: "Another User",
        message: "This is another sample notification message for display.",
        time: "08:45PM Today"
    },
    {
        id: 5,
        name: "Random Guy",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        time: "09:20PM Today"
    },
    {
        id: 6,
        name: "Another User",
        message: "This is another sample notification message for display.",
        time: "08:45PM Today"
    }
];

function NotificationData() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="notification-title">
                        Your message title goes here
                    </div>
                    <div className="notification-item model-item-border">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <div className="notification-icon">
                                    <Image src={NotificationIcon} alt="notification-icon" />
                                </div>
                                <div className="notification-content">
                                    <h6>Random Guy</h6>
                                    <p>From: jonathan@domain.com</p>
                                </div>
                            </div>
                            <div className="notification-time w-25 text-end">
                                22 JUL. 2024 08:03 PM
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <button className="btn-save" onClick={handleClose}>Accept Invitation</button>
                        <button className="btn-cancel ms-4" onClick={handleClose}>Decline</button>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Notifications</h3>
                </div>

                <div className="notification-head mt-20">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="notification-left">
                            <div className="d-flex align-items-center gap-3">
                                <button type="button" className="btn-page btn-all">All</button>
                                <button type="button" className="btn-page btn-unread">Unread (6)</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="notification-list mt-30">
                    <div className="card">
                        <div className="card-body">
                            <div className="notification-filter mb-3">
                                <h5 className="card-title">Today</h5>
                            </div>
                            {notifications.map((notification) => (
                                <div key={notification.id} className="notification-item border-line-notification" onClick={handleShow}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="dot-design"></div>
                                            <div className="notification-icon">
                                                <Image src={NotificationIcon} alt="notification-icon" />
                                            </div>
                                            <div className="notification-content">
                                                <h6>{notification.name}</h6>
                                                <div className="notification-time show_mobile">
                                                    {notification.time}
                                                </div>
                                                <p>{notification.message}</p>
                                            </div>
                                        </div>
                                        <div className="notification-time w-25 text-end hide_mobile">
                                            {notification.time}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="notification-filter mb-3">
                                <h5 className="card-title">Yesterday</h5>
                            </div>
                            {notifications.map((notification) => (
                                <div key={notification.id} className="notification-item">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="notification-icon">
                                                <Image src={NotificationIcon} alt="notification-icon" />
                                            </div>
                                            <div className="notification-content">
                                                <h6>{notification.name}</h6>
                                                <div className="notification-time show_mobile">
                                                    {notification.time}
                                                </div>
                                                <p>{notification.message}</p>
                                            </div>
                                        </div>
                                        <div className="notification-time w-25 text-end hide_mobile">
                                            {notification.time}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotificationData;