import Image from "next/image";
import React from "react";
import ProjectName from "../../../assets/images/Case-Round.svg";
import Member from "../../../assets/images/member-profile.jpeg";
import "./style.css";
import { FiCalendar } from "react-icons/fi";

const projects = [
    {
        id: 1,
        name: "Agro Teach Working Group",
        description: "Lorem ipsum dolor sit amet, Scelerisque.",
        date: "01/01/2023",
        image: "/path-to-image.jpg",
    },
    {
        id: 2,
        name: "Agro Teach Working Group",
        description: "A project focused on AI advancements in agriculture.",
        date: "02/15/2023",
        image: "/path-to-image.jpg",
    },
    {
        id: 3,
        name: "Agro Teach Working Group",
        description: "Sustainable farming techniques and awareness programs.",
        date: "03/10/2023",
        image: "/path-to-image.jpg",
    },
    {
        id: 4,
        name: "Agro Teach Working Group",
        description: "Lorem ipsum dolor sit amet, Scelerisque.",
        date: "01/01/2023",
        image: "/path-to-image.jpg",
    },
    {
        id: 5,
        name: "Agro Teach Working Group",
        description: "A project focused on AI advancements in agriculture.",
        date: "02/15/2023",
        image: "/path-to-image.jpg",
    },
    {
        id: 6,
        name: "Agro Teach Working Group",
        description: "Sustainable farming techniques and awareness programs.",
        date: "03/10/2023",
        image: "/path-to-image.jpg",
    },
    {
        id: 7,
        name: "Agro Teach Working Group",
        description: "Lorem ipsum dolor sit amet, Scelerisque.",
        date: "01/01/2023",
        image: "/path-to-image.jpg",
    },
    {
        id: 8,
        name: "Agro Teach Working Group",
        description: "A project focused on AI advancements in agriculture.",
        date: "02/15/2023",
        image: "/path-to-image.jpg",
    },
];

const teamMembers = [
    { name: "Mathew Roy", role: "Project Manager", image: Member },
    { name: "Sophia Patel", role: "Software Engineer", image: Member },
    { name: "David Chen", role: "UI/UX Designer", image: Member },
    { name: "Olivia Kim", role: "Frontend Developer", image: Member },
    { name: "Ethan Nguyen", role: "Backend Developer", image: Member },
    { name: "Isabella Lee", role: "Data Analyst", image: Member },
    { name: "Liam Kim", role: "Project Manager", image: Member },
    { name: "Mia Kim", role: "Software Engineer", image: Member },
    { name: "Noah Kim", role: "UI/UX Designer", image: Member },
    { name: "Ava Kim", role: "Frontend Developer", image: Member },
    { name: "Lucas Kim", role: "Backend Developer", image: Member },
    { name: "Sofia Kim", role: "Data Analyst", image: Member },
];

function CollaborationData() {
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Your Collaborations</h3>
                </div>

                <div className="card-section-collaboration mt-20">
                    <div className="row">
                        {projects.map((project) => (
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={project.id}>
                                <div className="card card-collaboration">
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
                                            {project.name}
                                        </div>
                                        <div className="project-desc">
                                            {project.description}
                                        </div>
                                        <div className="project-date">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="date-icon">
                                                    <FiCalendar />
                                                </div>
                                                <div className="date">
                                                    {project.date}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-line"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="page-title mt-30">
                    <h3>Members</h3>
                </div>

                <div className="members-list mt-20">
                    {teamMembers.map((member, index) => (
                        <div className="member-item" key={index}>
                            <div className="member-image">
                                <Image src={member.image} alt={member.name} className="member-profile" />
                            </div>
                            <div className="member-details">
                                <div className="member-name">{member.name}</div>
                                <div className="member-role">{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CollaborationData;