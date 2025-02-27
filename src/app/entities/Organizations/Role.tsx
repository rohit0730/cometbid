"use client";

import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Col, Form } from "react-bootstrap";
import Image from "next/image";
import "./style.css";

const options = [
    { label: "Sales Manager", value: "sales-manager" },
    { label: "Recruitment Manager", value: "recruitment-manager" },
    { label: "Human Resource Manager", value: "hr" },
    { label: "Cloud Engineer", value: "cloud" },
    { label: "CEO", value: "ceo" },
    { label: "CFO", value: "cfo" },
    { label: "Human Resource Associate", value: "hr-associate" },
    { label: "Sales Associate", value: "sales-associate" },
    { label: "Recruitment Associate", value: "recruitment-associate" },
];
function Role() {

    type SelectedItem = {
        value: string | number;
        label: string;
    };

    const [selected, setSelected] = useState<SelectedItem[]>([]);

    const handleRemove = (value: string | number) => {
        setSelected((prevSelected) =>
            prevSelected.filter((item) => item.value !== value)
        );
    };


    const colors = ["#ff4a4a", "#ff9516", "#ff2192", "#20bd00", "#00bccf", "#1b72ff", "#4222ff", "#A2845E", "#00C7BE", "#30B0C7"];


    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Manage Roles</h3>
                </div>

                <div className="card-box mt-20">
                    <div className="section-title" style={{ fontWeight: "bold", marginBottom: "24px" }}>
                        Organization-Role Management
                    </div>

                    <Col md={12}>
                        <div className="select-container">
                            <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
                                <Form.Label>Create new roles or Select to edit</Form.Label>
                                <div>
                                    {selected.length > 0 ? (
                                        <ul className='selected-list'>
                                            {selected.map((item, index) => (
                                                <li
                                                    key={item.value}
                                                    style={{
                                                        backgroundColor: colors[index % colors.length], // Cycle through colors
                                                    }}
                                                >
                                                    {item.label}{" "}
                                                    <button
                                                        onClick={() => handleRemove(item.value)}
                                                        style={{
                                                            marginLeft: "4px",
                                                            color: "#ffffff",
                                                            cursor: "pointer",
                                                            background: "none",
                                                            border: "none",
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    overrideStrings={{
                                        selectSomeItems: "Type text and press enter to select interest",
                                    }}
                                    className="multi-select"
                                />
                            </Form.Group>
                        </div>
                    </Col>

                    <div className="manage-role">
                        <div className="d-flex m-auto w-100 justify-content-center">
                            <Image src={require("../../../assets/images/manage-role.svg")} alt="Role" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Role;