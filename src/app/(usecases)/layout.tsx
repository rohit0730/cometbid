"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { FiCalendar, FiLogOut } from "react-icons/fi";
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
import { Tooltip } from 'react-tooltip';
import { LuMenu } from "react-icons/lu";
import './responsive.css'

// svg images 
import SidebarLogo from "../../assets/images/sidebar-logo.png";
import SidebarIcon from "../../assets/images/sidebar-icon.png";
import ToggleIcon from "../../assets/images/toggle-icon.png";
import NotificationIcon from "../../assets/images/Bell.png";
import CountryFlag from "../../assets/images/flag.png";
import Profile from "../../assets/images/user-profile.png";
import ProfileIcon from "../../assets/images/User-Rounded.svg";
import RoleIcon from "../../assets/images/role.svg";
import SchedulesIcon from "../../assets/images/Calendar-Mark.svg";
import MembersIcon from "../../assets/images/Users-Group.svg";
import CookieIcon from "../../assets/images/Settings.svg";
import LogoutIcon from "../../assets/images/logout.svg";

export default function SetLayout({ children }: { children: React.ReactNode }) {

    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notificationRef = useRef(null);
    const [isSidebarShow, setIsSidebarShow] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = (menu: string) => {
        setOpenDropdowns((prev: Record<string, boolean>) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarShow(false);
            }
        }

        if (isSidebarShow) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarShow]);


    const toggleSidebar = () => {
        const sidebar = document.querySelector(".page-inner");
        if (sidebar) {
            sidebar.classList.toggle("active");
        }
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="page-content">
                <div className="page-inner">
                    {isSidebarShow && <div className="overlay"></div>}
                    <div ref={sidebarRef} className={`sidebar ${isSidebarShow ? "show-sidebar" : ""}`}>
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <Link href="/dashboard">
                                    <Image
                                        src={isSidebarOpen ? SidebarIcon : SidebarLogo}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <div className="plan">
                                <p>Organization membership plan    <Link href="/dashboard">Monthley</Link></p>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className="nav-list">
                                <li className="" onClick={() => setIsSidebarShow(false)}>
                                    <Link href="/dashboard">
                                        <RiDashboardLine /> <div className="menu-name">Dashboard</div>
                                    </Link>
                                </li>
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("events")}>
                                        <div className="menu-gap d-flex align-items-center">
                                            <FaRegUser /> <div className="menu-name">Personal Information</div>
                                        </div>
                                        {!isSidebarOpen && (openDropdowns["events"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                                    </button>
                                    {openDropdowns["events"] && (
                                        <ul className="dropdown-menu">
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/personal-information/myprofile"><CgProfile /> My Profile</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/personal-information/myrole"><MdOutlineSettingsSuggest /> My Roles</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li onClick={() => setIsSidebarShow(false)}>
                                    <Link href="/notifications"> <HiOutlineBell /> <div className="menu-name">Notifications</div> 
                                    {/* <div className="count-notification">3</div> */}
                                    </Link>
                                </li>
                                <li onClick={() => setIsSidebarShow(false)}>
                                    <Link href="/members"> <LuUsers /> <div className="menu-name">Members</div></Link>
                                </li>
                                <li onClick={() => setIsSidebarShow(false)}>
                                    <Link href="/schedules"> <FiCalendar /> <div className="menu-name">Schedules</div></Link>
                                </li>

                                <hr className="menu-divider" />
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("Collaborations")}>
                                        <div className="menu-gap d-flex align-items-center">
                                            <TbUsersGroup /> <div className="menu-name">Your Collaborations</div>
                                        </div>
                                        {!isSidebarOpen && (openDropdowns["Collaborations"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                                    </button>
                                    {openDropdowns["Collaborations"] && (
                                        <ul className="dropdown-menu">
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/collaborations/your-collaboration"><FaRegUser /> Collaborations</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/collaborations/start-working-group"><FiBox />Start Working Group</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/collaborations/start-interest-group"><FiBox />Start Interest Group</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/collaborations/join-working-group"><MdOutlineJoinFull />Join Working Group</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/collaborations/join-interest-group"><MdOutlineJoinFull />Join Interest Group</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("projects")}>
                                        <div className="menu-gap d-flex align-items-center">
                                            <FaRegFilePowerpoint /> <div className="menu-name">Your Projects</div>
                                        </div>
                                        {!isSidebarOpen && (openDropdowns["projects"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                                    </button>
                                    {openDropdowns["projects"] && (
                                        <ul className="dropdown-menu">
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/projects"><FaRegFilePowerpoint />Projects</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/projects/start-project"><FiBox />Start Projects</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/projects/join-project"><MdOutlineJoinFull />Join Projects</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li className="dropdown">
                                    <button className="dropdown-btn" onClick={() => toggleDropdown("Organization")}>
                                        <div className="menu-gap d-flex align-items-center">
                                            <LuUsers /><div className="menu-name">Your Organization Profile</div>
                                        </div>
                                        {!isSidebarOpen && (openDropdowns["Organization"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                                    </button>
                                    {openDropdowns["Organization"] && (
                                        <ul className="dropdown-menu">
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/organization/organization-profile"><CgProfile />Organization Profile</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/organization/manage-roles"><FiBox />Manage Roles</Link></li>
                                            <li onClick={() => setIsSidebarShow(false)}><Link href="/organization/organization-structure"><MdOutlineJoinFull />Organization Structure</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <hr className="menu-divider" />
                                <li onClick={() => setIsSidebarShow(false)}>
                                    <Link href="/account-settings/account-details"> <LuUserCog /> <div className="menu-name">Account Settings</div></Link>
                                </li>
                                <li onClick={() => setIsSidebarShow(false)}>
                                    <Link href="/privacy-settings"> <MdOutlinePrivacyTip /> <div className="menu-name">Privacy Settings</div></Link>
                                </li>
                                <li onClick={() => setIsSidebarShow(false)}>
                                    <Link href="/activity-logs"> <IoFileTrayStacked /> <div className="menu-name">Activity Logs</div></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar-footer sidebar-menu">
                            <ul className="nav-list">
                                <li>
                                    <Link href="/account-settings"><div className="menu-name">FAQs</div></Link>
                                </li>
                                <li>
                                    <Link href="/privacy-settings"><div className="menu-name">Resources</div></Link>
                                </li>
                                <li>
                                    <Link href="/activity-logs"><div className="menu-name">News and blogs</div></Link>
                                </li>
                                <li>
                                    <Link href="/activity-logs"><div className="menu-name">Contact us</div></Link>
                                </li>
                                <li>
                                    <button className="dropdown-btn">
                                        <div className="menu-gap d-flex align-items-center">
                                            <FiLogOut /> <div className="menu-name">Logout</div>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="page-header">
                            <div className="page-header-content">
                                <div className="sec-hide">
                                    <button className="btn-trigger" onClick={() => setIsSidebarShow(!isSidebarShow)}><LuMenu /></button>
                                </div>
                                <div className="content-left d-flex align-items-center">
                                    <div className="toggle-sidebar">
                                        <button type="button" className="btn-toggle" onClick={toggleSidebar}>
                                            <Image
                                                src={ToggleIcon}
                                                alt="icon"
                                            />
                                        </button>
                                    </div>
                                    <div className="user-info">
                                        <div className="user-name">
                                            <p className="d-flex align-items-center">Welcome back, <span className="user-name-color">Matthew Doe</span></p>
                                            <span className="user-role"> (Member Representative)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-right d-flex align-items-center">
                                    <button className="btn-downgrade">Downgrade</button>
                                    <div className="notification"
                                        ref={notificationRef}
                                        onMouseEnter={() => setIsNotificationOpen(true)}
                                        onMouseLeave={() => setIsNotificationOpen(false)}
                                    >
                                        <button type="button" className="btn-notification">
                                            <Image
                                                src={NotificationIcon}
                                                alt="icon"
                                            />
                                        </button>
                                        <span className="notification-count">3</span>
                                        {isNotificationOpen && (
                                            <div className="notification-dropdown">
                                                <p className="notification-title ms-4">Notifications</p>
                                                <ul>
                                                    <li>
                                                        <Link href="/notifications">
                                                            <div className="notification-dropdown-item active">
                                                                <div className="notification-info">
                                                                    <div className="notification-image">
                                                                        <Image
                                                                            src={Profile}
                                                                            alt="icon"
                                                                        />
                                                                    </div>
                                                                    <div className="notification-content">
                                                                        <p className="notification-message">This is an unread message waiting to be read.
                                                                            Part of demonstrating the notification messages.</p>
                                                                        <p className="notification-time">2 hours ago</p>
                                                                    </div>
                                                                </div>
                                                                <div className="notification-unread"></div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/notifications">
                                                            <div className="notification-dropdown-item active">
                                                                <div className="notification-info">
                                                                    <div className="notification-image">
                                                                        <Image
                                                                            src={Profile}
                                                                            alt="icon"
                                                                        />
                                                                    </div>
                                                                    <div className="notification-content">
                                                                        <p className="notification-message">This is an unread message waiting to be read.
                                                                            Part of demonstrating the notification messages.</p>
                                                                        <p className="notification-time">2 hours ago</p>
                                                                    </div>
                                                                </div>
                                                                <div className="notification-unread"></div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/notifications">
                                                            <div className="notification-dropdown-item">
                                                                <div className="notification-info">
                                                                    <div className="notification-image">
                                                                        <Image
                                                                            src={Profile}
                                                                            alt="icon"
                                                                        />
                                                                    </div>
                                                                    <div className="notification-content">
                                                                        <p className="notification-message">This is an unread message waiting to be read.
                                                                            Part of demonstrating the notification messages.</p>
                                                                        <p className="notification-time">2 hours ago</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="notification-footer">
                                                    <p>2 of 4 unread notifications</p>
                                                    <Link href="/notifications">See all notifications</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <button className="country-flag" title="Marshall Islands" data-tooltip-id="my-tooltip" data-tooltip-content="Marshall Islands" data-tooltip-variant="info">
                                        <Image
                                            src={CountryFlag}
                                            alt="icon"
                                            width={40}
                                            height={40}
                                        />
                                    </button>
                                    <Tooltip id="my-tooltip" />
                                    <div className="user-info-2"
                                        ref={dropdownRef}
                                        onMouseEnter={() => setIsOpen(true)}
                                        onMouseLeave={() => setIsOpen(false)}
                                    >
                                        <button className="user-profile">
                                            <Image
                                                src={Profile}
                                                alt="icon"
                                                width={40}
                                                height={40}
                                            />
                                        </button>
                                        {isOpen && (
                                            <div className="profile-dropdown">
                                                <ul>
                                                    <li><Link href="/personal-information/myprofile"><Image src={ProfileIcon} alt="icon" />  My Profile</Link></li>
                                                    <li><Link href="/personal-information/myrole"><Image src={RoleIcon} alt="icon" /> My Roles</Link></li>
                                                    <li><Link href="/schedules"><Image src={SchedulesIcon} alt="icon" /> My Schedules</Link></li>
                                                    <li><Link href="/members"><Image src={MembersIcon} alt="icon" /> Manage Members</Link></li>
                                                    <li><Link href="/privacy-settings"><Image src={CookieIcon} alt="icon" /> Manage Cookies</Link></li>
                                                    <li><Link href="/activity-logs"><Image src={LogoutIcon} alt="icon" /> Log Out</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {children}
                        <div className="page-footer">
                            <div className="footer-inner">
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
