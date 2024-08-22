import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    let[userName, pickUserName] = useState();
    let[userPassword, pickUserPassword] = useState();
    let navigate = useNavigate();
    const handlerLogin = (event) => {
        event.preventDefault();
        if(userName === localStorage.getItem("email") && userPassword === localStorage.getItem("password")){
            navigate("/home");
        }
        else{
            alert("invalid credential");
        }
        window.location.reload();
    }

    const gotoSignup = () => {
        navigate("/signup")
    }
    return(
        <div className="container">
            <div style={{height:"90vh"}} className="row">
                <div className="col-lg-4"></div>
                <div  className="col-lg-4 d-flex justify-content-center align-items-center">
                    <div style={{width:"100%"}} className="shadow-lg p-3 rounded-3">
                            <form onSubmit={handlerLogin} className="d-flex flex-column gap-2">
                                <label className=" text-center fs-3 text-danger">Login</label>

                                <label className="">Email</label>
                                <input className="form-control" type="email" placeholder="xyz@gmail.com"
                                onChange={event=>pickUserName(event.target.value)}
                                value={userName}
                                />

                                <label className="">Password</label>
                                <input className="form-control" type="password" placeholder="enter password"
                                onChange={event=>pickUserPassword(event.target.value)}
                                value={userPassword}/>

                                <div className="text-center">
                                    <button className="btn btn-outline-success">Login</button>
                                </div>

                                <div className="text-center mt-3">
                                    <span> Don't have account ? <span style={{cursor:"pointer"}} className="text-primary" onClick={gotoSignup}>create Account</span></span>
                                </div>
                            </form>
                        </div>
                    </div>
                <div className="col-lg-4">
                </div>
            </div>
        </div>
    )
}
export default Login