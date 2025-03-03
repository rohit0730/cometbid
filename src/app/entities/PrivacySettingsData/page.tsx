"use client"

import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import "./style.css";
import Link from "next/link";
import { MdInfo, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useTable, usePagination, useSortBy, Column, TableInstance, TableState } from "react-table";
import { TiInfoOutline } from "react-icons/ti";
import { HiCheckCircle } from "react-icons/hi";

function PrivacyData() {
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Privacy Settings</h3>
                </div>

                <div className="card-box mt-20">
                    <div className="account-settings-contant">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column gap-3 account-settings-tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Privacy Details</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">My Subscriptions</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="tab-details">
                                                <div style={{ marginBottom: "18px" }}>
                                                    <div className="section-title" style={{ fontWeight: "bold", marginBottom: "8px" }}>
                                                        Privacy Control
                                                    </div>
                                                    <div className="input-info">Field that you can control the visibility of are below. Optional fields can be hidden by removing the content.</div>
                                                </div>
                                                <Form className="mt-3">
                                                    <Row>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroupDate">
                                                                <Form.Check aria-label="option 1" label="Display my location (city and country)" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div style={{ marginBottom: "18px" }}>
                                                    <div className="section-title" style={{ fontWeight: "bold" }}>
                                                        Subscriptions
                                                    </div>
                                                </div>
                                                <div className="note-box mb-3">
                                                    <div className="note-icon">
                                                        <MdInfo />
                                                    </div>
                                                    <div className="note-text">
                                                        <p>You can unsubscribe at any time from the following mailing lists.</p>
                                                    </div>
                                                </div>
                                                <div style={{ marginBottom: "18px" }}>
                                                    <div className="section-title" style={{ fontWeight: "bold" }}>
                                                        Mailchimp mailing lists
                                                    </div>
                                                </div>
                                                <Form className="mt-3">
                                                    <Row>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroup2">
                                                                <Form.Check aria-label="option 2" label="I would like to subscribe to the CSF Community Newsletter." />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroup3">
                                                                <Form.Check aria-label="option 3" label="I would like to subscribe to the IoT Newsletter." />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroup4">
                                                                <Form.Check aria-label="option 4" label="I would like to subscribe to the Serverless Architecture Newsletter." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className="note-text">
                                                    <p>Note: When you subscribe to one of the Mailchimp mailing lists, your email, first name and last name will be sent to Mailchimp.</p>
                                                </div>
                                                <div style={{ marginTop: "18px" }}>
                                                    <div style={{ marginBottom: "8px" }}>
                                                        <div className="section-title" style={{ fontWeight: "bold" }}>
                                                            CSF Mailing lists
                                                        </div>
                                                    </div>
                                                    <Form className="mt-2">
                                                        <Row>
                                                            <Col md={12}>
                                                                <Form.Group className="mb-3" controlId="formGroup5">
                                                                    <Form.Check aria-label="option 5" label="I would like to receive update on CSF projects, events and community announcements." />
                                                                </Form.Group>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                                <div style={{ marginTop: "18px" }}>
                                                    <div style={{ marginBottom: "8px" }}>
                                                        <div className="section-title" style={{ fontWeight: "bold" }}>
                                                            Disable Account
                                                        </div>
                                                    </div>
                                                    <Form className="mt-2">
                                                        <Row>
                                                            <Col md={12}>
                                                                <Form.Label>A disabled account will become invisible to other accounts and will reflect in projects and groups you are currently part of.</Form.Label>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                                <Form className="mt-3">
                                                    <Row>
                                                        <Col md={12}>
                                                            <Form.Group className="mb-3" controlId="formGroup6">
                                                                <Form.Check aria-label="option 6" label="I would like to disable my account temporarily." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className="note-box mb-3">
                                                    <div className="note-icon">
                                                        <MdInfo />
                                                    </div>
                                                    <div className="note-text">
                                                        <p>The CSF community operates in an open and transparent manner. Most information you submit on our site including your email address and name will be visible to others who use our services. Some users prefer to use an email account dedicated specifically for this purpose for privacy concerns.</p>
                                                    </div>
                                                </div>
                                                <div className="step-subtitle" style={{ fontSize: "14px" }}>Please visit our <Link href="#">privacy settings page</Link> to adjust the visibility of some required fields.</div>
                                                <div className="d-flex justify-content-end gap-3 mt-5">
                                                    <button className="btn-save">
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="tab-details">
                                                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "8px" }}>
                                                    Manage My Subscriptions
                                                </div>
                                                <div className="input-info" style={{ marginBottom: "24px" }}>Below is a listing of all the public mailing lists at Cometbid.org. Visit the CSF Mailing List page to view all the mailing lists on one page. When posting emails to our mailing lists, please remember that these lists are public, avoid posting personal or private information.</div>
                                                <Form className="mt-3">
                                                    <Row>
                                                        <Col md={5}>
                                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                                <Form.Control type="email" placeholder="" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={5}>
                                                            <Form.Group className="mb-3" controlId="formGroupTechnology">
                                                                <Form.Select aria-label="Default select example" className="form-control">
                                                                    <option>All</option>
                                                                    <option value="1">English</option>
                                                                    <option value="2">French</option>
                                                                    <option value="3">Spanish</option>
                                                                    <option value="4">German</option>
                                                                    <option value="5">Italian</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={2}>
                                                            <button className="btn-search">
                                                                Search
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <NextDataTable2 columns={columns} data={data} />
                                                <div className="note-box mt-4">
                                                    <div className="note-icon">
                                                        <MdInfo />
                                                    </div>
                                                    <div className="note-text">
                                                        <p>These are mailing lists that you can't subscribe or unsubscribe from through this interface. If you wish to unsubscribe from one of those mailing lists, please follow the instructions from the emails you received from them.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end gap-3 mt-5">
                                                    <button className="btn-yellow">
                                                        UNSUBSCRIBE
                                                    </button>
                                                    <button className="btn-save ms-3">
                                                        SUBSCRIBE
                                                    </button>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrivacyData;


type DataType = {
    list?: string;
    currentState?: string;
};


const columns: Column<DataType>[] = [
    {
        Header: "",
        id: "checkbox",
        Cell: ({ row }: { row: any }) => (
            <input type="checkbox" checked={row.isSelected} onChange={() => row.toggleRowSelected()} />
        ),
    },
    {
        Header: "List",
        accessor: "list",
        Cell: ({ row }: { row: any }) => (
            <div className="content-row">
                <div className="d-flex align-items-center gap-1">
                    <div className="icon"><TiInfoOutline /></div>
                    <div className="color-text"> cometbid.org-members-committers </div>
                </div>
                <div className="row-title">{row.original.list}</div>
            </div>
        ),
    },
    {
        Header: "Current State", accessor: "currentState",
        Cell: ({ row }: { row: any }) => (
            <div className="content-row">
                <div className="d-flex align-items-center gap-1">
                    <div className="icon-green"><HiCheckCircle /></div>
                    <div className="row-title">{row.original.currentState}</div>
                </div>
            </div>
        ),
    },
];

const data: DataType[] = [
    { list: "CSF Membership and Committer List", currentState: "Subscribed" },
    { list: "CSF Membership and Committer List", currentState: "Subscribed" },
    { list: "CSF Membership and Committer List", currentState: "Subscribed" },
    { list: "CSF Membership and Committer List", currentState: "Subscribed" },
    { list: "CSF Membership and Committer List", currentState: "Subscribed" },
    { list: "CSF Membership and Committer List", currentState: "Subscribed" },
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

    const [selectedRows, setSelectedRows] = useState({} as Record<number, boolean>);

    const toggleCheckbox = (id: number) => {
        setSelectedRows((prev: any) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>

            <div className="card">
                <div className="card-body">
                    <table {...getTableProps()} className="min-w-full bg-white">
                        <thead style={{background : "#F7F6F9"}}>
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
                                    <tr {...row.getRowProps()} key={index} className="padding-sec hover:bg-gray-100" style={{borderBottom: "1px solid #E0E0E0"}}>
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