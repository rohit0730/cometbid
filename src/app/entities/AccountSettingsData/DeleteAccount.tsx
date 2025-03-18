"use client"
import Link from "next/link";
import React from "react";

function AccountDelete() {
    return (

        <>
            <div className="tab-details">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body delete-sec">
                                <h4 className="title">Delete Account</h4>
                                <p>To Delete Your Account, you need to first cancel your paid Subscription.</p>
                                <Link href="#">Cancel my subscription</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountDelete;