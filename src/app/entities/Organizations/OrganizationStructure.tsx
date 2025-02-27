"use client";

import React, { useState } from "react";
import { MdInfo } from "react-icons/md";
import "./style.css";
import { Tooltip } from 'react-tooltip';

function OrganizationStructureData() {

    const [openRole, setOpenRole] = useState(null);
    const [roleMembers, setRoleMembers] = useState({
        CEO: "Armando Ruiz",
        CPO: "Sally Williams",
        CMO: "Jane Smith",
        Engineering: "Emily Davis",
        CFO: "John Doe",
        Manager: "Chester Horton",
        SEM: "Franklin Henry",
        Designer: "Crystal Warren",
        Socked: "Vernon Scott",
        SEO: "Barry Perkins",
        Leadership: "Barry Perkins",
        Marketing: "Barry Perkins",
        Builder: "John Doe",
        Optimizer: "Barry Perkins",
        Cross: "Armando Ruiz",
    });

    const members = ["Armando Ruiz", "John Doe", "Jane Smith", "Emily Davis"];

    const toggleRole = (role: any) => {
        setOpenRole(openRole === role ? null : role);
    };

    const assignMember = (role: any, member: any) => {
        setRoleMembers((prev) => ({ ...prev, [role]: member }));
        setOpenRole(null); // Close list after selection
    };
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Organization Structure</h3>
                </div>

                <div className="card-box mt-20">
                    <div className="note-box mb-5">
                        <div className="note-icon">
                            <MdInfo />
                        </div>
                        <div className="note-text">
                            <p style={{ fontSize: "14px" }}>All Text Should be editable. double clicking roles should display a drop-down to change roles. double clicking name should display a drop-down of member to select form.</p>
                        </div>
                    </div>
                    <div className="flow-chart organization-flow-chart">
                        <div className="flow-chart-inner d-flex justify-content-center flex-column align-items-center">
                            <div className="flow-chart-item">
                                <button className="flow-chart-btn btn-blue" onDoubleClick={() => toggleRole("CEO")} title="Double click to edit this text" data-tooltip-id="my-tooltip" data-tooltip-content="Doble click to edit this text" data-tooltip-variant="info">
                                    <div className="role-name">CEO</div>
                                    <div className="role-members">{roleMembers.CEO}</div>
                                </button>
                                <Tooltip id="my-tooltip" />
                                {openRole === "CEO" && (
                                    <div className="role-option-dropdown">
                                        {members.map((member) => (
                                            <div
                                                key={member}
                                                className="cursor-pointer p-2 hover:bg-gray-200"
                                                onClick={() => assignMember("CEO", member)}
                                            >
                                                {member}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="border-height"></div>
                            <div className="border-width"></div>
                            <div className="flow-row mt-5">
                                <div className="flow-column">
                                    <div className="flow-chart-item">
                                        <button className="flow-chart-btn btn-black" onDoubleClick={() => toggleRole("CPO")}>
                                            <div className="role-name">CPO</div>
                                            <div className="role-members">{roleMembers.CPO}</div>
                                        </button>
                                        {openRole === "CPO" && (
                                            <div className="role-option-dropdown">
                                                {members.map((member) => (
                                                    <div
                                                        key={member}
                                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                                        onClick={() => assignMember("CPO", member)}
                                                    >
                                                        {member}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flow-chart-under-role">
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Manager")}>
                                                <div className="role-name">Product Manager</div>
                                                <div className="role-members">{roleMembers.Manager}</div>
                                            </button>
                                            {openRole === "Manager" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Manager", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flow-column">
                                    <div className="flow-chart-item">
                                        <button className="flow-chart-btn btn-black" onDoubleClick={() => toggleRole("CMO")}>
                                            <div className="role-name">CMO</div>
                                            <div className="role-members">{roleMembers.CMO}</div>
                                        </button>
                                        {openRole === "CMO" && (
                                            <div className="role-option-dropdown">
                                                {members.map((member) => (
                                                    <div
                                                        key={member}
                                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                                        onClick={() => assignMember("CMO", member)}
                                                    >
                                                        {member}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flow-chart-under-role">
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("SEM")}>
                                                <div className="role-name">SEM Specialist</div>
                                                <div className="role-members">{roleMembers.SEM}</div>
                                            </button>
                                            {openRole === "SEM" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("SEM", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Designer")}>
                                                <div className="role-name">Designer</div>
                                                <div className="role-members">{roleMembers.Designer}</div>
                                            </button>
                                            {openRole === "Designer" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Designer", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Socked")}>
                                                <div className="role-name">Socked Specialist</div>
                                                <div className="role-members">{roleMembers.Socked}</div>
                                            </button>
                                            {openRole === "Socked" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Socked", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("SEO")}>
                                                <div className="role-name">SEO Specialist</div>
                                                <div className="role-members">{roleMembers.SEO}</div>
                                            </button>
                                            {openRole === "SEO" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("SEO", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flow-column">
                                    <div className="flow-chart-item">
                                        <button className="flow-chart-btn btn-black" onDoubleClick={() => toggleRole("Engineering")}>
                                            <div className="role-name">VP of Engineering</div>
                                            <div className="role-members">{roleMembers.Engineering}</div>
                                        </button>
                                        {openRole === "Engineering" && (
                                            <div className="role-option-dropdown">
                                                {members.map((member) => (
                                                    <div
                                                        key={member}
                                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                                        onClick={() => assignMember("Engineering", member)}
                                                    >
                                                        {member}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flow-chart-under-role">
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Leadership")}>
                                                <div className="role-name">Technical Leadership</div>
                                                <div className="role-members">{roleMembers.Leadership}</div>
                                            </button>
                                            {openRole === "Leadership" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Leadership", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Builder")}>
                                                <div className="role-name">Team Builder</div>
                                                <div className="role-members">{roleMembers.Builder}</div>
                                            </button>
                                            {openRole === "Builder" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Builder", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Optimizer")}>
                                                <div className="role-name">Process Optimizer</div>
                                                <div className="role-members">{roleMembers.Optimizer}</div>
                                            </button>
                                            {openRole === "Optimizer" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Optimizer", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Cross")}>
                                                <div className="role-name">Cross-Functional</div>
                                                <div className="role-members">{roleMembers.Cross}</div>
                                            </button>
                                            {openRole === "Cross" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Cross", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flow-column">
                                    <div className="flow-chart-item">
                                        <button className="flow-chart-btn btn-black" onDoubleClick={() => toggleRole("CFO")}>
                                            <div className="role-name">CFO</div>
                                            <div className="role-members">{roleMembers.CFO}</div>
                                        </button>
                                        {openRole === "CFO" && (
                                            <div className="role-option-dropdown">
                                                {members.map((member) => (
                                                    <div
                                                        key={member}
                                                        className="cursor-pointer p-2 hover:bg-gray-200"
                                                        onClick={() => assignMember("CFO", member)}
                                                    >
                                                        {member}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flow-chart-under-role">
                                        <div className="flow-chart-item-under">
                                            <div className="height-line"></div>
                                            <button className="flow-chart-btn btn-light-blue" onDoubleClick={() => toggleRole("Marketing")}>
                                                <div className="role-name">Marketing</div>
                                                <div className="role-members">{roleMembers.Marketing}</div>
                                            </button>
                                            {openRole === "Marketing" && (
                                                <div className="role-option-dropdown">
                                                    {members.map((member) => (
                                                        <div
                                                            key={member}
                                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                                            onClick={() => assignMember("Marketing", member)}
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-3 mt-5">
                        <button className="btn-save">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrganizationStructureData;