"use client";

import React, { useState } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarLogo from "../../assets/images/sidebar-logo.png";
import ToggleIcon from "../../assets/images/toggle-icon.png";
import NotificationIcon from "../../assets/images/Bell.png";
import CountryFlag from "../../assets/images/flag.png";
import Profile from "../../assets/images/user-profile.png";
import Link from "next/link";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";
import { ImFileOpenoffice } from "react-icons/im";
import { LuUserCog } from "react-icons/lu";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoFileTrayStacked } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { MdOutlineJoinFull } from "react-icons/md";
import { FaRegFilePowerpoint } from "react-icons/fa6";

export default function SetLayout({ children }: { children: React.ReactNode }) {

    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

    const toggleDropdown = (menu: string) => {
        setOpenDropdowns((prev: Record<string, boolean>) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };


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
                                <p>Organization membership plan    <a href="#">Monthley</a></p>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className="nav-list">
                                <li className="">
                                    <Link href="/dashboard">
                                        <RiDashboardLine /> Dashboard
                                    </Link>
                                </li>
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("events")}>
                                        <div className="menu-gap d-flex align-items-center">
                                            <FaRegUser /> Personal Information
                                        </div>
                                        {openDropdowns["events"] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </button>
                                    {openDropdowns["events"] && (
                                        <ul className="dropdown-menu">
                                            <li><Link href="/personal-information/myprofile"><CgProfile /> My Profile</Link></li>
                                            <li><Link href="/personal-information/myrole"><MdOutlineSettingsSuggest /> My Roles</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link href="/notifications"> <HiOutlineBell /> Notifications</Link>
                                </li>
                                <li>
                                    <Link href="/members"> <LuUsers /> Members</Link>
                                </li>
                                <li>
                                    <Link href="/schedules"> <FiCalendar /> Schedules</Link>
                                </li>

                                <hr className="menu-divider" />
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("Collaborations")}>
                                        <div className="menu-gap d-flex align-items-center">
                                        <TbUsersGroup /> Your Collaborations
                                        </div>
                                        {openDropdowns["Collaborations"] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </button>
                                    {openDropdowns["Collaborations"] && (
                                        <ul className="dropdown-menu">
                                            <li><Link href="/collaborations/your-collaboration"><FaRegUser /> Collaborations</Link></li>
                                            <li><Link href="/collaborations/start-working-group"><FiBox />Start Working Group</Link></li>
                                            <li><Link href="/collaborations/start-interest-group"><FiBox />Start Interest Group</Link></li>
                                            <li><Link href="/collaborations/join-working-group"><MdOutlineJoinFull />Join Working Group</Link></li>
                                            <li><Link href="/collaborations/join-interest-group"><MdOutlineJoinFull />Join Interest Group</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("projects")}>
                                        <div className="menu-gap d-flex align-items-center">
                                        <FaRegFilePowerpoint /> Your Projects
                                        </div>
                                        {openDropdowns["projects"] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </button>
                                    {openDropdowns["projects"] && (
                                        <ul className="dropdown-menu">
                                            <li><Link href="/projects"><FaRegFilePowerpoint />Projects</Link></li>
                                            <li><Link href="/projects/start-project"><FiBox />Start Projects</Link></li>
                                            <li><Link href="/projects/join-project"><MdOutlineJoinFull />Join Projects</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("Organization")}>
                                        <div className="menu-gap d-flex align-items-center">
                                            <LuUsers />Your Organization Profile
                                        </div>
                                        {openDropdowns["Organization"] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </button>
                                    {openDropdowns["Organization"] && (
                                        <ul className="dropdown-menu">
                                            <li><Link href="/organization/organization-profile"><CgProfile />Organization Profile</Link></li>
                                            <li><Link href="/organization/manage-roles"><FiBox />Manage Roles</Link></li>
                                            <li><Link href="/organization/organization-structure"><MdOutlineJoinFull />Organization Structure</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <hr className="menu-divider" />
                                <li>
                                    <Link href="/account-settings"> <LuUserCog /> Account Settings</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-settings"> <MdOutlinePrivacyTip /> Privacy Settings</Link>
                                </li>
                                <li>
                                    <Link href="/personal-information"> <IoFileTrayStacked /> Activity Logs</Link>
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
                        <div className="page-footer">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="copyright">
                                    <p>Copyright @ The Cometbid Software Foundation. All Rights Reserved.</p>
                                </div>
                                <div className="policy">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of use</a>
                                    <a href="#">Copyright Agent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
