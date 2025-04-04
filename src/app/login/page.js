import React from "react";
import "./style.css";
import Image from "next/image";

import Logo from "../../assets/images/sidebar-logo.png";

function Login() {
    return (
        <>
            <div className="login-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="auth-card card">
                                <div className="auth-card-body">
                                    <div className="auth-logo">
                                        <Image src={Logo} alt="logo" />
                                    </div>
                                    <div className="auth-title">Sign In</div>
                                    <div className="auth-subtitle">Enter your email address and password to access admin panel.</div>
                                    <div className="form-contant">
                                        <div className="form-group">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="auth-footer">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;