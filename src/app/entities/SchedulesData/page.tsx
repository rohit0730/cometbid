"use client"

import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "./style.css";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Form from 'react-bootstrap/Form';
import { LuUsers } from "react-icons/lu";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function SchedulesData() {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <>
            <div className="wrapper">
                <div className="page-title">
                    <h3>Schedules</h3>
                </div>

                <div className="tab-container mt-30">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={12}>
                                <Nav variant="pills" className="flex-row gap-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Event</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Task</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Appointment</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={12} className="mt-3">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col sm={5}>
                                                <div className="card-calendar h-100">
                                                    <Calendar onChange={onChange} value={value} />
                                                </div>
                                            </Col>
                                            <Col sm={7}>
                                                <div className="card-calendar">
                                                    <div className="details">
                                                        <Form className="mt-3">
                                                            <Row>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupFirstName">
                                                                        <Form.Label>Add Title</Form.Label>
                                                                        <Form.Control type="name" placeholder="Schedule Title" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Start Time</Form.Label>
                                                                        <Form.Control type="time" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>End Time</Form.Label>
                                                                        <Form.Control type="time" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <div className="add-guest">
                                                                        <button className="icon-guest">
                                                                            <LuUsers /> Add Guest
                                                                        </button>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Description</Form.Label>
                                                                        <Form.Control as="textarea" rows={5} />
                                                                        <div className="text-length">1000 characters limit</div>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Add Location</Form.Label>
                                                                        <Form.Control type="text" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <div className="d-flex justify-content-end mt-20"><button className="btn-save">Schedule</button><button className="btn-cancel ms-4">Clear</button></div>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            <Col sm={5}>
                                                <div className="card-calendar h-100">
                                                    <Calendar onChange={onChange} value={value} />
                                                </div>
                                            </Col>
                                            <Col sm={7}>
                                                <div className="card-calendar">
                                                    <div className="details">
                                                        <Form className="mt-3">
                                                            <Row>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupFirstName">
                                                                        <Form.Label>Add Title</Form.Label>
                                                                        <Form.Control type="name" placeholder="Schedule Title" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Start Time</Form.Label>
                                                                        <Form.Control type="time" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>End Time</Form.Label>
                                                                        <Form.Control type="time" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <div className="add-guest">
                                                                        <button className="icon-guest">
                                                                            <LuUsers /> Add Guest
                                                                        </button>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Description</Form.Label>
                                                                        <Form.Control as="textarea" rows={5} />
                                                                        <div className="text-length">1000 characters limit</div>
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <div className="d-flex justify-content-end mt-20"><button className="btn-save">Schedule</button><button className="btn-cancel ms-4">Clear</button></div>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            <Col sm={5}>
                                                <div className="card-calendar h-100">
                                                    <Calendar onChange={onChange} value={value} />
                                                </div>
                                            </Col>
                                            <Col sm={7}>
                                                <div className="card-calendar">
                                                    <div className="details">
                                                        <Form className="mt-3">
                                                            <Row>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupFirstName">
                                                                        <Form.Label>Add Title</Form.Label>
                                                                        <Form.Control type="name" placeholder="Schedule Title" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Start Time</Form.Label>
                                                                        <Form.Control type="time" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>End Time</Form.Label>
                                                                        <Form.Control type="time" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <div className="add-guest">
                                                                        <button className="icon-guest">
                                                                            <LuUsers /> Add Guest
                                                                        </button>
                                                                    </div>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Description</Form.Label>
                                                                        <Form.Control as="textarea" rows={5} />
                                                                        <div className="text-length">1000 characters limit</div>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={12}>
                                                                    <Form.Group className="mb-3" controlId="formGroupDate">
                                                                        <Form.Label>Add Location</Form.Label>
                                                                        <Form.Control type="text" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <div className="d-flex justify-content-end mt-20"><button className="btn-save">Schedule</button><button className="btn-cancel ms-4">Clear</button></div>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>

                <div className="page-title mt-30">
                    <h3>Your Upcoming Events</h3>
                </div>

                <div className="event-list mt-20">
                    <Row>
                        <Col md={4}>
                            <div className="event-card">
                                <div className="event-title">
                                    Reminder of App Project And Design
                                </div>
                                <div className="event-desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="event-date">
                                        Monday, August 06
                                    </div>
                                    <div className="event-time">
                                        10:00 AM
                                    </div>
                                </div>
                                <div className="event-location">
                                    LAGOS,NIGERIA
                                </div>
                                <div className="d-flex justify-content-end mt-20"><button className="btn-save">Cancel Schedules</button><button className="btn-cancel ms-4">Delete</button></div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="event-card">
                                <div className="event-title">
                                    Reminder of App Project And Design
                                </div>
                                <div className="event-desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="event-date">
                                        Monday, August 06
                                    </div>
                                    <div className="event-time">
                                        10:00 AM
                                    </div>
                                </div>
                                <div className="event-location">
                                    LAGOS,NIGERIA
                                </div>
                                <div className="d-flex justify-content-end mt-20"><button className="btn-save">Cancel Schedules</button><button className="btn-cancel ms-4">Delete</button></div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="event-card">
                                <div className="event-title">
                                    Reminder of App Project And Design
                                </div>
                                <div className="event-desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="event-date">
                                        Monday, August 06
                                    </div>
                                    <div className="event-time">
                                        10:00 AM
                                    </div>
                                </div>
                                <div className="event-location">
                                    LAGOS,NIGERIA
                                </div>
                                <div className="d-flex justify-content-end mt-20"><button className="btn-save">Cancel Schedules</button><button className="btn-cancel ms-4">Delete</button></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default SchedulesData;