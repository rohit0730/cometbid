"use client"

import React from "react";
import { useState } from "react";
import { useTable, usePagination, useSortBy, Column, TableInstance, TableState } from "react-table";
import "./style.css";
import { MdRefresh, MdAdd, MdKeyboardArrowDown, MdOutlineDeleteOutline, MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdInfo } from "react-icons/md";
import { BiSolidFilePdf, BiEditAlt } from "react-icons/bi";
import { FaFileCsv } from "react-icons/fa";
import { TbEye } from "react-icons/tb";
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import DeleteIcon from "../../../assets/images/model-delete.svg";

type DataType = {
    id: number;
    name: string;
    age: number;
    status: string;
    jobTitle: string;
    lastLogin: string;
    joinDate: string;
    role: string;
};


const columns: Column<DataType>[] = [
    {
        Header: "",
        id: "checkbox",
        Cell: ({ row }: { row: any }) => (
            <input type="checkbox" checked={row.isSelected} onChange={() => row.toggleRowSelected()} />
        ),
    },
    { Header: "ID", accessor: "id" },
    { Header: "Name", accessor: "name" },
    { Header: "Status", accessor: "status" },
    { Header: "Job Title", accessor: "jobTitle" },
    { Header: "Last login", accessor: "lastLogin" },
    { Header: "Join Date", accessor: "joinDate" },
    { Header: "Role", accessor: "role" },
];

const data: DataType[] = [
    { id: 1, name: "Alice", age: 25, status: "Active", jobTitle: "Software Engineer", lastLogin: "2022-01-01", joinDate: "2021-01-01", role: "Admin" },
    { id: 2, name: "Bob", age: 30, status: "Inactive", jobTitle: "Product Manager", lastLogin: "2022-02-01", joinDate: "2021-02-01", role: "User" },
    { id: 3, name: "Charlie", age: 35, status: "Active", jobTitle: "Designer", lastLogin: "2022-03-01", joinDate: "2021-03-01", role: "Admin" },
    { id: 4, name: "David", age: 40, status: "Inactive", jobTitle: "Developer", lastLogin: "2022-04-01", joinDate: "2021-04-01", role: "User" },
    { id: 5, name: "Eve", age: 45, status: "Active", jobTitle: "Tester", lastLogin: "2022-05-01", joinDate: "2021-05-01", role: "Admin" },
    { id: 6, name: "Frank", age: 50, status: "Inactive", jobTitle: "Manager", lastLogin: "2022-06-01", joinDate: "2021-06-01", role: "User" },
    { id: 7, name: "Grace", age: 55, status: "Active", jobTitle: "Architect", lastLogin: "2022-07-01", joinDate: "2021-07-01", role: "Admin" },
    { id: 8, name: "Henry", age: 60, status: "Inactive", jobTitle: "Analyst", lastLogin: "2022-08-01", joinDate: "2021-08-01", role: "User" },
    { id: 9, name: "Ivy", age: 65, status: "Active", jobTitle: "Developer", lastLogin: "2022-09-01", joinDate: "2021-09-01", role: "Admin" },
    { id: 10, name: "Jack", age: 70, status: "Inactive", jobTitle: "Designer", lastLogin: "2022-10-01", joinDate: "2021-10-01", role: "User" },
    { id: 11, name: "Kate", age: 75, status: "Active", jobTitle: "Tester", lastLogin: "2022-11-01", joinDate: "2021-11-01", role: "Admin" },
    { id: 12, name: "Liam", age: 80, status: "Inactive", jobTitle: "Manager", lastLogin: "2022-12-01", joinDate: "2021-12-01", role: "User" },
];

type TableInstanceWithPagination<T extends object> = TableInstance<T> & {
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    nextPage: () => void;
    previousPage: () => void;
    state: TableState<T> & { pageIndex: number };
    page: T[];
};

function MembersData() {
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Members</h3>
                </div>

                <div className="table-container mt-30">
                    <NextDataTable columns={columns} data={data} />;
                </div>

                <div className="table-container mt-20">
                    <NextDataTable2 columns={columns} data={data} />;
                </div>
            </div>
        </>
    );
}

export default MembersData;


const NextDataTable = ({ columns, data }: { columns: any; data: any }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        state: { pageIndex },
        page
    } = useTable<DataType>(
        {
            columns,
            data,
            initialState: { pageIndex: 0 } as Partial<TableState<DataType> & { pageIndex: number }>
        },
        useSortBy,
        usePagination
    ) as TableInstanceWithPagination<DataType>;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [exportOpen, setExportOpen] = useState(false);

    const handleToggleExport = () => setExportOpen(!exportOpen);

    const [actionOpen, setActionOpen] = useState(false);

    const handleToggleAction = () => setActionOpen(!actionOpen);

    const [selectedRows, setSelectedRows] = useState({} as Record<number, boolean>);

    const toggleCheckbox = (id: number) => {
        setSelectedRows((prev: any) => ({ ...prev, [id]: !prev[id] }));
    };

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
            {/* Add New Member start */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-4">
                        <div className="note-box">
                            <div className="note-icon">
                                <MdInfo />
                            </div>
                            <div className="note-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="form-details">
                            <div className="form-title">User Details</div>
                            <Form className="mt-3">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="name" placeholder="Mathew" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="name" placeholder="Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose}>Add Member</button>
                            <button className="btn-cancel ms-4" onClick={handleClose}>Cancel</button>
                        </div>
                        <hr className="m-0" />
                        <div className="form-details">
                            <div className="form-title">Invite new Members</div>
                            <Form className="mt-3">
                                <Row>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupEmailLong">
                                            <Form.Label>Enter comma separated email list of registered user of this platform to invite them. They will get an invitation Link and notification to join your team.</Form.Label>
                                            <Form.Control type="email" placeholder="email@address.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose}>Send invitation</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Add New Member Modal end */}

            {/* View Member Modal start */}
            <Modal show={show2} onHide={handleClose2} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Member Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="member-info d-flex justify-content-between">
                        <div className="info-item">
                            <p className="info-title">Status : <span>Active</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Date Joined : <span>24 Fed 2024</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Last Login : <span>2 mins ago</span></p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <div className="form-details">
                            <Form className="mt-3">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="name" placeholder="Mathew" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="name" placeholder="Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="email@address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupEmployer">
                                            <Form.Label>Current Employer</Form.Label>
                                            <Form.Control type="text" placeholder="Morgan Stanley, Us" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupJob">
                                            <Form.Label>Job Title</Form.Label>
                                            <Form.Control type="text" placeholder="Java Developer" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupDate">
                                            <Form.Label>LinkedIn Profile URL</Form.Label>
                                            <Form.Control type="text" placeholder="https://www.linkedin.com/in/" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupDate">
                                            <Form.Label>GitHub Url</Form.Label>
                                            <Form.Control type="text" placeholder="https://github.com/" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupDate">
                                            <Form.Label>Twitter(x)</Form.Label>
                                            <Form.Control type="text" placeholder="https://twitter.com/" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="policy-info">
                            <p className="policy-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose2}>Done</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* View Member Modal end */}

            {/* Delete Member Modal start */}
            <Modal show={show3} onHide={handleClose3} centered className='custom-modal delete-modal'>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="modal-icon">
                            <Image
                                src={DeleteIcon}
                                alt="arrow"
                            />
                        </div>
                        <div>
                            <h4 className="modal-title">Member Delete Confirmation</h4>
                            <p className="modal-description">Are you sure you want to delete this member?</p>
                        </div>
                        <div className="form-details">
                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="name" placeholder="Matthew Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupRole">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control type="text" placeholder="Manager" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end w-100">
                            <button className="btn-cancel" onClick={handleClose3}>Delete</button>
                            <button className="btn-outline ms-4" onClick={handleClose3}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Delete Member Modal end */}

            {/* Role Assign Modal start */}
            <Modal show={show4} onHide={handleClose4} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Member-Role Mapping</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="member-info d-flex justify-content-between">
                        <div className="info-item">
                            <p className="info-title">Date Joined : <span>24 Fed 2024</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Last Login : <span>2 mins ago</span></p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <div className="form-details">
                            <Form className="mt-3">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="name" placeholder="Mathew" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="name" placeholder="Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="email@address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formGroupEmployer">
                                            <Form.Label>Current Employer</Form.Label>
                                            <Form.Control type="text" placeholder="Morgan Stanley, Us" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formGroupJob">
                                            <Form.Label>Job Title</Form.Label>
                                            <Form.Control type="text" placeholder="Java Developer" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="policy-info">
                            <p className="policy-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <hr className="m-0" />
                        <div className="form-title">Organization Role</div>
                        <Col md={12}>
                            <Form.Label>Role</Form.Label>
                            <Form.Select aria-label="Default select example" className="form-control">
                                <option>Select</option>
                                <option value="1">Manager</option>
                                <option value="2">Project Manager</option>
                                <option value="3">Team Leader</option>
                            </Form.Select>
                        </Col>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose4}>Save</button>
                            <button className="btn-cancel ms-4" onClick={handleClose4}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Role Assign Modal end */}

            {/* Organization Structure Modal start */}
            <Modal show={show5} onHide={handleClose5} centered className='custom-modal flow-chart-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Organization Structure</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="flow-chart">
                        <div className="flow-chart-inner d-flex justify-content-center flex-column align-items-center">
                            <div className="flow-chart-item">
                                <button className="flow-chart-btn btn-blue" onDoubleClick={() => toggleRole("CEO")}>
                                    <div className="role-name">CEO</div>
                                    <div className="role-members">{roleMembers.CEO}</div>
                                </button>
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
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-5">
                        <button className="btn-save" onClick={handleClose5}>Save</button>
                        <button className="btn-cancel ms-4" onClick={handleClose5}>Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Organization Structure Modal end */}

            <div className="card">
                <div className="card-body">
                    <div className="table-heading">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="table-title">Organization Members</div>
                            <div className="table-btn-list">
                                <button className="btn-refresh"><MdRefresh /></button>
                                <button className="btn-add" onClick={handleShow}><MdAdd />Add Members</button>
                                <div className="dropdown">
                                    <button className="btn-dropdown" onClick={handleToggleExport}>Export data <MdKeyboardArrowDown /></button>
                                    {exportOpen && (
                                        <div className="dropdown-content">
                                            <button className="dropdown-item"><BiSolidFilePdf />PDF</button>
                                            <button className="dropdown-item"><FaFileCsv />CSV</button>
                                        </div>
                                    )}
                                </div>
                                <div className="dropdown">
                                    <button className="btn-dropdown" onClick={handleToggleAction}>Action <MdKeyboardArrowDown /></button>
                                    {actionOpen && (
                                        <div className="dropdown-content">
                                            <button className="dropdown-item" onClick={handleShow2}><TbEye />View</button>
                                            <button className="dropdown-item" onClick={handleShow4}><BiEditAlt />Assign Role</button>
                                            <button className="dropdown-item" onClick={handleShow3}><MdOutlineDeleteOutline />Delete</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <table {...getTableProps()} className="min-w-full bg-white">
                        <thead>
                            {headerGroups.map((headerGroup: any, index: number) => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={index} className="table-header">
                                    {headerGroup.headers.map((column: any) => {
                                        const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                                        return (
                                            <th key={key} {...rest} className="px-4 py-3 text-left border-b cursor-pointer">
                                                {column.render("Header")}
                                                <span>
                                                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                                </span>
                                            </th>
                                        );
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row: any, index: number) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} key={index} className="padding-sec hover:bg-gray-100">
                                        {row.cells.map((cell: any, index: number) => (
                                            <td {...cell.getCellProps()} key={index} className="px-4 py-3 table-body-text">
                                                {cell.column.id === "checkbox" ? (
                                                    <input type="checkbox" checked={!!selectedRows[row.original.id]} onChange={() => toggleCheckbox(row.original.id)} />
                                                ) : (
                                                    cell.render("Cell")
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div className="table-footer d-flex justify-between items-center mt-4">
                        <div className="select-row">
                            Show:
                            <select>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                            </select>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <button
                                onClick={previousPage}
                                disabled={!canPreviousPage}
                                className="btn-table-arrow disabled:opacity-50"
                            >
                                <MdOutlineArrowBackIos />
                            </button>
                            <span className="flex gap-2">
                                <div className="page-number active">{pageIndex + 1}</div>
                                <div className="page-number">/</div>
                                <div className="page-number">{pageOptions.length}</div>
                            </span>
                            <button
                                onClick={nextPage}
                                disabled={!canNextPage}
                                className="btn-table-arrow disabled:opacity-50"
                            >
                                <MdOutlineArrowForwardIos />
                            </button>
                        </div>
                        <div className="table-btn-list">
                            <button className="btn-black">Manage Roles</button>
                            <button className="btn-add" onClick={handleShow5}>View Organization Structure</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};



const NextDataTable2 = ({ columns, data }: { columns: any; data: any }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        state: { pageIndex },
        page
    } = useTable<DataType>(
        {
            columns,
            data,
            initialState: { pageIndex: 0 } as Partial<TableState<DataType> & { pageIndex: number }>
        },
        useSortBy,
        usePagination
    ) as TableInstanceWithPagination<DataType>;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [exportOpen, setExportOpen] = useState(false);

    const handleToggleExport = () => setExportOpen(!exportOpen);

    const [actionOpen, setActionOpen] = useState(false);

    const handleToggleAction = () => setActionOpen(!actionOpen);

    const [selectedRows, setSelectedRows] = useState({} as Record<number, boolean>);

    const toggleCheckbox = (id: number) => {
        setSelectedRows((prev: any) => ({ ...prev, [id]: !prev[id] }));
    };

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
            {/* Add New Member start */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-4">
                        <div className="note-box">
                            <div className="note-icon">
                                <MdInfo />
                            </div>
                            <div className="note-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="form-details">
                            <div className="form-title">User Details</div>
                            <Form className="mt-3">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="name" placeholder="Mathew" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="name" placeholder="Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose}>Add Member</button>
                            <button className="btn-cancel ms-4" onClick={handleClose}>Cancel</button>
                        </div>
                        <hr className="m-0" />
                        <div className="form-details">
                            <div className="form-title">Invite new Members</div>
                            <Form className="mt-3">
                                <Row>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupEmailLong">
                                            <Form.Label>Enter comma separated email list of registered user of this platform to invite them. They will get an invitation Link and notification to join your team.</Form.Label>
                                            <Form.Control type="email" placeholder="email@address.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose}>Send invitation</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Add New Member Modal end */}

            {/* View Member Modal start */}
            <Modal show={show2} onHide={handleClose2} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Member Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="member-info d-flex justify-content-between">
                        <div className="info-item">
                            <p className="info-title">Status : <span>Active</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Date Joined : <span>24 Fed 2024</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Last Login : <span>2 mins ago</span></p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <div className="form-details">
                            <Form className="mt-3">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="name" placeholder="Mathew" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="name" placeholder="Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="email@address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupEmployer">
                                            <Form.Label>Current Employer</Form.Label>
                                            <Form.Control type="text" placeholder="Morgan Stanley, Us" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupJob">
                                            <Form.Label>Job Title</Form.Label>
                                            <Form.Control type="text" placeholder="Java Developer" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupDate">
                                            <Form.Label>LinkedIn Profile URL</Form.Label>
                                            <Form.Control type="text" placeholder="https://www.linkedin.com/in/" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupDate">
                                            <Form.Label>GitHub Url</Form.Label>
                                            <Form.Control type="text" placeholder="https://github.com/" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupDate">
                                            <Form.Label>Twitter(x)</Form.Label>
                                            <Form.Control type="text" placeholder="https://twitter.com/" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="policy-info">
                            <p className="policy-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose2}>Done</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* View Member Modal end */}

            {/* Delete Member Modal start */}
            <Modal show={show3} onHide={handleClose3} centered className='custom-modal delete-modal'>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <div className="modal-icon">
                            <Image
                                src={DeleteIcon}
                                alt="arrow"
                            />
                        </div>
                        <div>
                            <h4 className="modal-title">Member Delete Confirmation</h4>
                            <p className="modal-description">Are you sure you want to delete this member?</p>
                        </div>
                        <div className="form-details">
                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="name" placeholder="Matthew Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupRole">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control type="text" placeholder="Manager" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end w-100">
                            <button className="btn-cancel" onClick={handleClose3}>Delete</button>
                            <button className="btn-outline ms-4" onClick={handleClose3}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Delete Member Modal end */}

            {/* Role Assign Modal start */}
            <Modal show={show4} onHide={handleClose4} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Member-Role Mapping</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="member-info d-flex justify-content-between">
                        <div className="info-item">
                            <p className="info-title">Date Joined : <span>24 Fed 2024</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Last Login : <span>2 mins ago</span></p>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <div className="form-details">
                            <Form className="mt-3">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="name" placeholder="Mathew" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="name" placeholder="Parker" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="email@address" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formGroupEmployer">
                                            <Form.Label>Current Employer</Form.Label>
                                            <Form.Control type="text" placeholder="Morgan Stanley, Us" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formGroupJob">
                                            <Form.Label>Job Title</Form.Label>
                                            <Form.Control type="text" placeholder="Java Developer" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="policy-info">
                            <p className="policy-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <hr className="m-0" />
                        <div className="form-title">Organization Role</div>
                        <Col md={12}>
                            <Form.Label>Role</Form.Label>
                            <Form.Select aria-label="Default select example" className="form-control">
                                <option>Select</option>
                                <option value="1">Manager</option>
                                <option value="2">Project Manager</option>
                                <option value="3">Team Leader</option>
                            </Form.Select>
                        </Col>
                        <div className="d-flex justify-content-end">
                            <button className="btn-save" onClick={handleClose4}>Save</button>
                            <button className="btn-cancel ms-4" onClick={handleClose4}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Role Assign Modal end */}

            <div className="card">
                <div className="card-body">
                    <div className="table-heading">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="table-title">Recent Invitations</div>
                            <div className="table-btn-list">
                                <button className="btn-refresh"><MdRefresh /></button>
                                <button className="btn-add">Cancel Invitation</button>
                                <div className="dropdown">
                                    <button className="btn-dropdown" onClick={handleToggleExport}>Export data <MdKeyboardArrowDown /></button>
                                    {exportOpen && (
                                        <div className="dropdown-content">
                                            <button className="dropdown-item"><BiSolidFilePdf />PDF</button>
                                            <button className="dropdown-item"><FaFileCsv />CSV</button>
                                        </div>
                                    )}
                                </div>
                                <div className="dropdown">
                                    <button className="btn-dropdown" onClick={handleToggleAction}>Action <MdKeyboardArrowDown /></button>
                                    {actionOpen && (
                                        <div className="dropdown-content">
                                            <button className="dropdown-item" onClick={handleShow2}><TbEye />View</button>
                                            <button className="dropdown-item" onClick={handleShow4}><BiEditAlt />Assign Role</button>
                                            <button className="dropdown-item" onClick={handleShow3}><MdOutlineDeleteOutline />Delete</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <table {...getTableProps()} className="min-w-full bg-white">
                        <thead>
                            {headerGroups.map((headerGroup: any, index: number) => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={index} className="table-header">
                                    {headerGroup.headers.map((column: any) => {
                                        const { key, ...rest } = column.getHeaderProps(column.getSortByToggleProps());
                                        return (
                                            <th key={key} {...rest} className="px-4 py-3 text-left border-b cursor-pointer">
                                                {column.render("Header")}
                                                <span>
                                                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                                </span>
                                            </th>
                                        );
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row: any, index: number) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} key={index} className="padding-sec hover:bg-gray-100">
                                        {row.cells.map((cell: any, index: number) => (
                                            <td {...cell.getCellProps()} key={index} className="px-4 py-3 table-body-text">
                                                {cell.column.id === "checkbox" ? (
                                                    <input type="checkbox" checked={!!selectedRows[row.original.id]} onChange={() => toggleCheckbox(row.original.id)} />
                                                ) : (
                                                    cell.render("Cell")
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div className="table-footer d-flex justify-between items-center mt-4">
                        <div className="select-row">
                            Show:
                            <select>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                            </select>
                        </div>
                        <div className="flex justify-end items-center gap-4">
                            <button
                                onClick={previousPage}
                                disabled={!canPreviousPage}
                                className="btn-table-arrow disabled:opacity-50"
                            >
                                <MdOutlineArrowBackIos />
                            </button>
                            <span className="flex gap-2">
                                <div className="page-number active">{pageIndex + 1}</div>
                                <div className="page-number">/</div>
                                <div className="page-number">{pageOptions.length}</div>
                            </span>
                            <button
                                onClick={nextPage}
                                disabled={!canNextPage}
                                className="btn-table-arrow disabled:opacity-50"
                            >
                                <MdOutlineArrowForwardIos />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};