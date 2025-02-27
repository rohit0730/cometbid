"use client"

import React from "react";
import { useState } from "react";
import { useTable, usePagination, useSortBy, Column, TableInstance, TableState } from "react-table";
import "./style.css";
import { MdRefresh, MdAdd, MdKeyboardArrowDown, MdOutlineDeleteOutline, MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdInfo, MdMotionPhotosPaused, MdOutlineRestartAlt } from "react-icons/md";
import { BiSolidFilePdf, BiEditAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaFileCsv } from "react-icons/fa";
import { TbEye, TbLogout } from "react-icons/tb";
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Image from "next/image";
import DeleteIcon from "../../../assets/images/model-delete.svg";
import PauseIcon from "../../../assets/images/pause-icon.svg";
import RestartIcon from "../../../assets/images/restart-icon.svg";
import RetireIcon from "../../../assets/images/retire-icon.svg";
import { MultiSelect } from "react-multi-select-component";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TbTransferIn } from "react-icons/tb";

const options = [
    { label: "Soccer", value: "soccer" },
    { label: "Coding", value: "coding" },
    { label: "Hockey", value: "hockey" },
    { label: "Football", value: "football" },
    { label: "Basketball", value: "basketball" },
    { label: "Baseball", value: "baseball" },
    { label: "Tennis", value: "tennis" },
    { label: "Volleyball", value: "volleyball" },
    { label: "Golf", value: "golf" },
    { label: "Cricket", value: "cricket" },
    { label: "Rugby", value: "rugby" },
];

type DataType = {
    name?: string;
    age?: number;
    status?: string;
    category?: string;
    code?: string;
    createDate?: string;
    id?: string;
    secondaryRole?: string;
    jobTitle?: string;
    role?: string;
    joindate?: string;
    projectid?: string;
};


const columns: Column<DataType>[] = [
    {
        Header: "",
        id: "checkbox",
        Cell: ({ row }: { row: any }) => (
            <input type="checkbox" checked={row.isSelected} onChange={() => row.toggleRowSelected()} />
        ),
    },
    { Header: "Name", accessor: "name" },
    { Header: "Status", accessor: "status" },
    { Header: "Category", accessor: "category" },
    { Header: "Code", accessor: "code" },
    { Header: "Creation Date", accessor: "createDate" },
    { Header: "ID", accessor: "id" },
];

const columns2: Column<DataType>[] = [
    {
        Header: "",
        id: "checkbox",
        Cell: ({ row }: { row: any }) => (
            <input type="checkbox" checked={row.isSelected} onChange={() => row.toggleRowSelected()} />
        ),
    },
    { Header: "Name", accessor: "name" },
    { Header: "Secondary Role", accessor: "secondaryRole" },
    { Header: "Job title", accessor: "jobTitle" },
    { Header: "Role", accessor: "role" },
    { Header: "Join Date", accessor: "joindate" },
    { Header: "Project ID", accessor: "projectid" },
];

const data: DataType[] = [
    { name: "Serverless Image Processor", age: 25, status: "Active", category: "Serverless", code: "420984", createDate: "2021-01-01", id: "56" },
    { name: "Video Streaming engine", age: 30, status: "Inactive", category: "Data Analytics", code: "420985", createDate: "2021-02-01", id: "87" },
    { name: "Billing Management", age: 35, status: "Active", category: "Designer", code: "420993", createDate: "2021-03-01", id: "98" },
    { name: "Serverless Image Processor", age: 40, status: "Inactive", category: "Developer", code: "202265", createDate: "2021-04-01", id: "36" },
    { name: "Serverless Image Processor", age: 45, status: "Active", category: "Tester", code: "723894", createDate: "2021-05-01", id: "32" },
    { name: "Serverless Image Processor", age: 50, status: "Inactive", category: "Manager", code: "047294", createDate: "2021-06-01", id: "63" }
];

const data2: DataType[] = [
    { name: "Serverless Image Processor", secondaryRole: "Tester", jobTitle: "UI/UX Designer", role: "Project Lead", joindate: "2021-01-01", projectid: "56" },
    { name: "Video Streaming engine", secondaryRole: "Tester", jobTitle: "UI/UX Designer", role: "Project Lead", joindate: "2021-02-01", projectid: "87" },
    { name: "Billing Management", secondaryRole: "Tester", jobTitle: "UI/UX Designer", role: "Project Lead", joindate: "2021-03-01", projectid: "98" },
    { name: "Serverless Image Processor", secondaryRole: "Tester", jobTitle: "UI/UX Designer", role: "Project Lead", joindate: "2021-04-01", projectid: "36" },
    { name: "Serverless Image Processor", secondaryRole: "Tester", jobTitle: "UI/UX Designer", role: "Project Lead", joindate: "2021-05-01", projectid: "32" },
    { name: "Serverless Image Processor", secondaryRole: "Tester", jobTitle: "UI/UX Designer", role: "Project Lead", joindate: "2021-06-01", projectid: "63" }
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

function ProjectData() {
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Projects</h3>
                </div>

                <div className="table-container mt-30">
                    <NextDataTable columns={columns} data={data} />
                </div>

                <div className="mt-30">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={12}>
                                <Nav variant="pills" className="flex-row gap-3 project-table-tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Members</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Committees</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Resources</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Policies</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">License terms</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="table-container mt-20">
                                            <NextDataTable2 columns={columns2} data={data2} />;
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second"></Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </>
    );
}

export default ProjectData;


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


    const colors = ["#ff4a4a", "#ff9516", "#ff2192", "#20bd00", "#00bccf", "#1b72ff", "#4222ff",];


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

            {/* edit project Modal start */}
            <Modal show={show2} onHide={handleClose2} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="project"
                        id="uncontrolled-tab-example"
                        className="mb-3 project-tabs"
                    >
                        <Tab eventKey="project" title="Project Details">
                            <div className="member-info d-flex justify-content-between mt-4">
                                <div className="info-item">
                                    <p className="info-title">Project Id : <span>2 mins ago</span></p>
                                </div>
                                <div className="info-item">
                                    <p className="info-title">Status : <span>Active</span></p>
                                </div>
                                <div className="info-item">
                                    <p className="info-title">Date Created : <span>24 Fed 2024</span></p>
                                </div>
                                <div className="info-item">
                                    <p className="info-title">Source : <span>Open</span></p>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-4">
                                <div className="form-details">
                                    <Form className="mt-3">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupFirstName">
                                                    <Form.Label>Project Name</Form.Label>
                                                    <Form.Control type="name" placeholder="Mathew" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formGroupLastName">
                                                    <Form.Label>Category</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="form-control">
                                                        <option>Blockchain Integration</option>
                                                        <option value="1">Digital Marketing</option>
                                                        <option value="2">Web Development</option>
                                                        <option value="3">Mobile App Development</option>
                                                        <option value="4">UI/UX Design</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-3" controlId="formGroupPitch">
                                                    <Form.Label>Pitch Statement*</Form.Label>
                                                    <Form.Control type="text" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-3" controlId="formGroupProblem">
                                                    <Form.Label>Problem Statement*</Form.Label>
                                                    <Form.Control as="textarea" rows={5} />
                                                    <div className="text-length">1000 characters limit</div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-3" controlId="formGroupGoals">
                                                    <Form.Label>Goals or Objectives*</Form.Label>
                                                    <Form.Control as="textarea" rows={5} />
                                                    <div className="text-length">1000 characters limit</div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <div className="select-container">
                                                    <Form.Group controlId="exampleForm.ControlInput1">
                                                        <Form.Label>Select Interest</Form.Label>
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
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="allocation" title="Allocations">
                            <Form className="mt-4">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupLastName">
                                            <Form.Label>Software License</Form.Label>
                                            <Form.Select aria-label="Default select example" className="form-control">
                                                <option>Blockchain Integration</option>
                                                <option value="1">Digital Marketing</option>
                                                <option value="2">Web Development</option>
                                                <option value="3">Mobile App Development</option>
                                                <option value="4">UI/UX Design</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>Owned by</Form.Label>
                                            <Form.Control type="name" placeholder="https://veritas.cometbid.org." />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupPitch">
                                            <Form.Label>Website Url</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupPitch">
                                            <Form.Label>GitLab repo</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupPitch">
                                            <Form.Label>GitHub repo</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formGroupPitch">
                                            <Form.Label>Bitbucket repo</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupGoals">
                                            <Form.Label>Project Policies</Form.Label>
                                            <Form.Control as="textarea" rows={5} />
                                            <div className="text-length">1000 characters limit</div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Tab>
                    </Tabs>
                    <div className="d-flex justify-content-end mt-5">
                        <button className="btn-save" onClick={handleClose2}>Done</button>
                        <button className="btn-cancel ms-4" onClick={handleClose2}>Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* edit Member Modal end */}

            {/* Pause Project Modal start */}
            <Modal show={show3} onHide={handleClose3} centered className='custom-modal delete-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Pause Project Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-3 align-items-center mt-4">
                        <div className="modal-icon">
                            <Image
                                src={PauseIcon}
                                alt="arrow"
                            />
                        </div>
                        <div>
                            {/* <h4 className="modal-title">Member Delete Confirmation</h4> */}
                            <p className="modal-description">Are you sure to Pause this Project ?</p>
                        </div>
                        <div className="form-details">
                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstId">
                                            <Form.Label>Project ID</Form.Label>
                                            <Form.Control type="name" placeholder="39842-485" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupName">
                                            <Form.Label>Project Name</Form.Label>
                                            <Form.Control type="text" placeholder="Cloud Native Architecture" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end w-100 mt-3">
                            <button className="btn-cancel" onClick={handleClose3}>Yes, Pause</button>
                            <button className="btn-outline ms-4" onClick={handleClose3}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Pause Project Modal end */}

            {/* Restart Project Modal start */}
            <Modal show={show4} onHide={handleClose4} centered className='custom-modal delete-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Restart Project Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-3 align-items-center mt-4">
                        <div className="modal-icon">
                            <Image
                                src={RestartIcon}
                                alt="arrow"
                            />
                        </div>
                        <div>
                            {/* <h4 className="modal-title">Member Delete Confirmation</h4> */}
                            <p className="modal-description">Are you sure to Restart this Project ?</p>
                        </div>
                        <div className="form-details">
                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstId">
                                            <Form.Label>Project ID</Form.Label>
                                            <Form.Control type="name" placeholder="39842-485" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupName">
                                            <Form.Label>Project Name</Form.Label>
                                            <Form.Control type="text" placeholder="Cloud Native Architecture" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end w-100 mt-3">
                            <button className="btn-cancel" onClick={handleClose4}>Yes, Restart</button>
                            <button className="btn-outline ms-4" onClick={handleClose4}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Restart Project Modal end */}

            {/* Retire Project Modal start */}
            <Modal show={show5} onHide={handleClose5} centered className='custom-modal delete-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Retire Project Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-3 align-items-center mt-4">
                        <div className="modal-icon">
                            <Image
                                src={RetireIcon}
                                alt="arrow"
                            />
                        </div>
                        <div>
                            {/* <h4 className="modal-title">Member Delete Confirmation</h4> */}
                            <p className="modal-description">Are you sure to Retire this Project ?</p>
                        </div>
                        <div className="form-details">
                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstId">
                                            <Form.Label>Project ID</Form.Label>
                                            <Form.Control type="name" placeholder="39842-485" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupName">
                                            <Form.Label>Project Name</Form.Label>
                                            <Form.Control type="text" placeholder="Cloud Native Architecture" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="d-flex justify-content-end w-100 mt-3">
                            <button className="btn-cancel" onClick={handleClose5}>Yes, Retire</button>
                            <button className="btn-outline ms-4" onClick={handleClose5}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Restart Project Modal end */}


            <div className="card">
                <div className="card-body">
                    <div className="table-heading">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="table-title">Your Projects</div>
                            <div className="table-btn-list">
                                <button className="btn-refresh"><MdRefresh /></button>
                                {/* <button className="btn-add" onClick={handleShow}><MdAdd />Start Project</button> */}
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
                                            <button className="dropdown-item" onClick={handleShow2}><BiEditAlt />Edit</button>
                                            <button className="dropdown-item" onClick={handleShow4}><TbTransferIn />Transfer</button>
                                            <button className="dropdown-item" onClick={handleShow3}><MdMotionPhotosPaused />Pause</button>
                                            <button className="dropdown-item" onClick={handleShow4}><MdOutlineRestartAlt />Restart</button>
                                            <button className="dropdown-item" onClick={handleShow5}><AiOutlineCloseCircle />Retire</button>
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
            {/* Add New Member Project */}
            <Modal show={show} onHide={handleClose} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Start Project</Modal.Title>
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
            {/* Add New Project Modal end */}

            {/* Project Details Modal start */}
            <Modal show={show2} onHide={handleClose2} centered className='custom-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="member-info d-flex justify-content-between">
                        <div className="info-item">
                            <p className="info-title">Project Id : <span>2 mins ago</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Status : <span>Active</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Date Created : <span>24 Fed 2024</span></p>
                        </div>
                        <div className="info-item">
                            <p className="info-title">Source : <span>Open</span></p>
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
            {/* Project Details Modal end */}

            {/* Delete Project Modal start */}
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
                            <h4 className="modal-title">Project Delete Confirmation</h4>
                            <p className="modal-description">Are you sure you want to delete this project?</p>
                        </div>
                        <div className="form-details">
                            <Form>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                                            <Form.Label>Project Name</Form.Label>
                                            <Form.Control type="name" placeholder="Project 1" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="formGroupRole">
                                            <Form.Label>Project ID</Form.Label>
                                            <Form.Control type="text" placeholder="PRJ-0001" />
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
            {/* Delete Project Modal end */}

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
                            <div className="table-title">Serverless Image Processor</div>
                            <div className="table-btn-list">
                                <button className="btn-refresh"><MdRefresh /></button>
                                <button className="btn-add">Add Member</button>
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
                                            <button className="dropdown-item" onClick={handleShow4}><TbLogout />Deactivate</button>
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