"use client"

import React, { useState } from "react";
import { MdOutlineCheckCircle } from "react-icons/md";

function SubscriptionData() {
    const [isYearly, setIsYearly] = useState(false);
    
        const togglePricing = () => {
            setIsYearly(!isYearly);
        };
    return (
        <>
            <div className="tab-details">
                <div className="section-title" style={{ fontWeight: "bold", marginBottom: "24px" }}>
                    Pick the plan that works best for your team
                </div>
                <div className="plan-section">
                    {/* CHOOSE YOUR PLAN */}
                    <div id="js-pricing-switch" className="text-center my-4 py-2 relative js-pricing-switch">
                        <span className={`switch-label ${!isYearly ? 'active' : ''}`}>Yearly</span>
                        <label className="switch">
                            <input type="checkbox" checked={isYearly} onChange={togglePricing} />
                            <span className="slider-price"></span>
                        </label>
                        <span className={`switch-label ${isYearly ? 'active' : ''}`}>Monthly</span>
                        <div className="save-money--mobile mt-3">Save 10% on Yearly Plans</div>
                    </div>
                    {/* CHOOSE YOU PLAN END */}

                    <div className="row mx-n3 justify-content-center">
                        {/* PRICING CARD - Free Plan */}
                        <div className="col-lg-12 col-xl-4 px-2 mb-4">
                            <div className="card card-frame">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="card-header bg-transparent">
                                            <div className="price-card--title">
                                                <h4>Solo</h4>
                                                <p>Includes 1 seat</p>
                                            </div>
                                        </div>
                                        <div className="price-card--price">
                                            <div className="price-card--price-number"><sup>$</sup>9</div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className='price-btn'>
                                                <button className='btn btn-color-plan current-plan'>Current Plan</button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled list-md-space mb-0">
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> Unlimited Objects
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> Unlimited Projects
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> PNG,PDF Export
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> View-Only Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END PRICING CARD - Free Plan */}
                        {/* PRICING CARD - Free Plan */}
                        <div className="col-lg-12 col-xl-4 px-2 mb-4">
                            <div className="card card-frame">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="card-header bg-transparent">
                                            <div className="price-card--title">
                                                <h4>Team</h4>
                                                <p>Includes 5 seat</p>
                                            </div>
                                        </div>
                                        <div className="price-card--price">
                                            <div className="price-card--price-number"><sup>$</sup>15</div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className='price-btn'>
                                                <button className='btn btn-color-plan'>Upgrade Plan</button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled list-md-space mb-0">
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> Unlimited Objects
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> Unlimited Projects
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> PNG,PDF Export
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> View-Only Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END PRICING CARD - Free Plan */}
                        {/* PRICING CARD - Free Plan */}
                        <div className="col-lg-12 col-xl-4 px-2 mb-4">
                            <div className="card card-frame">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="card-header bg-transparent">
                                            <div className="price-card--title">
                                                <h4>Unlimited</h4>
                                                <p>No Seat Limit</p>
                                            </div>
                                        </div>
                                        <div className="price-card--price">
                                            <div className="price-card--price-number"><sup>$</sup>40</div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className='price-btn'>
                                                <button className='btn btn-color-plan'>Upgrade Plan</button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled list-md-space mb-0">
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> Unlimited Objects
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> Unlimited Projects
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> PNG,PDF Export
                                                </li>
                                                <li className="d-flex ">
                                                    <MdOutlineCheckCircle /> View-Only Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END PRICING CARD - Free Plan */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubscriptionData;