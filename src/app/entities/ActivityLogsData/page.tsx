import React from "react";
import NotificationIcon from "../../../assets/images/notification-profile.svg";
import Image from "next/image";
import "./style.css";

const notifications = [
    {
        id: 1,
        name: "Random Guy",
        title: "Personal profile update",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        time: "09:20PM Today"
    },
    {
        id: 2,
        name: "Another User",
        title: "Started a new project",
        message: "This is another sample notification message for display.",
        time: "08:45PM Today"
    },
    {
        id: 3,
        name: "Random Guy",
        title: "Signed off on a project ",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        time: "09:20PM Today"
    },
    {
        id: 4,
        name: "Another User",
        title: "Sent an invitation",
        message: "This is another sample notification message for display.",
        time: "08:45PM Today"
    },
    {
        id: 5,
        name: "Random Guy",
        title: "Add attachment",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        time: "09:20PM Today"
    },
    {
        id: 6,
        name: "Another User",
        title: "Personal biodata updated",
        message: "This is another sample notification message for display.",
        time: "08:45PM Today"
    }
];
const ActivityData = () => {
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Activity Logs</h3>
                </div>


                <div className="notification-list mt-30">
                    <div className="card">
                        <div className="card-body">
                            <div className="notification-filter mb-3">
                                <h5 className="card-title">Today</h5>
                            </div>
                            {notifications.map((notification) => (
                                <div key={notification.id} className="notification-item">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-3 sm-align-top">
                                            <div className="notification-icon">
                                                <Image src={NotificationIcon} alt="notification-icon" />
                                            </div>
                                            <div className="notification-content">
                                                {/* <h6>{notification.name} <span>(Administrator)</span></h6> */}
                                                <h5>{notification.title}</h5>
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
                                        <div className="d-flex align-items-center gap-3 sm-align-top">
                                            <div className="notification-icon">
                                                <Image src={NotificationIcon} alt="notification-icon" />
                                            </div>
                                            <div className="notification-content">
                                                {/* <h6>{notification.name} <span>(Administrator)</span></h6> */}
                                                <h5>{notification.title}</h5>
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
};

export default ActivityData;