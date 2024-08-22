import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

let initialState = ({
    Name:"",
    Email:"",
    Contact:"",
    Password:"",
    Profession:""
})

function reducerFunction(prevState,nextState){
    return{...prevState,
        ...nextState
    }
}
function Signup(){
    const[form,setForm] = useReducer(reducerFunction, initialState);
    let navigate = useNavigate();
    const handleSignup = (event) => {
        event.preventDefault();
        localStorage.setItem("email",form.Email);
        localStorage.setItem("password", form.Password);
        localStorage.setItem("username",form.Name);
        navigate('/login')
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <div style={{width:"100%"}} >
                        <form onSubmit={handleSignup} className="d-flex flex-column p-3 gap-2 shadow-lg rounded-2">
                            <label className="text-center fs-2 text-danger">Signup</label>

                            <label className="ps-1">Name</label>
                            <input className="form-control" type="text" placeholder="enter name"
                            onChange={event => setForm(form.Name = event.target.value)}
                            value={form.Name}/>

                            <label className="ps-1 mt-1">Email</label>
                            <input className="form-control" type="email" placeholder="enter name"
                            onChange={event => setForm(form.Email = event.target.value)}
                            value={form.Email}/>

                            <label className="ps-1 mt-1">Contact No</label>
                            <input className="form-control" type="text" placeholder="enter name"
                            onChange={event => setForm(form.Contact = event.target.value)}
                            value={form.Contact}/>

                            <label className="ps-1 mt-1">Password</label>
                            <input className="form-control" type="text" placeholder="enter name"
                            onChange={event => setForm(form.Password = event.target.value)}
                            value={form.Password}/>

                            <label className="ps-1 mt-1">Profession</label>
                            <select className="form-control" 
                            onChange={event => setForm(form.Profession = event.target.value)}
                            value={form.Profession}>
                                <option> Software Engineer </option>
                                <option> Manager </option>
                                <option> Cricketer </option>
                                <option> Accountant </option>
                            </select>
                            <div className="text-center mt-3">
                                <button className="btn btn-outline-success" type="submit">Signup</button>
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
export default Signup;