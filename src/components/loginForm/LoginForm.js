import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [login, setLogin] = useState({ email: "", password: "", });
    const [formError, setFormError] = useState({})

    const validation = (login) => {
        let errors= {};
        if(!login.email){
            errors.email = "Email Required"
        }
        if(!login.password){
            errors.password = "Password Required"
        }
        return errors;
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        setFormError(validation(login));
    }
    const handleChange = (e) => {
    setLogin({...login, [e.target.name]:e.target.value })
    }

    useEffect(() => {
      if(Object.keys(formError).length === 0 && (login.email !== "" && login.password !== "")){
        alert("You Are Login");
      }
    }, [formError])



    return (
        <div>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" title="Sign In" >Sign in </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel" >Sign in to your account</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='container'>
                            <div className="modal-body">
                                <form onSubmit={handlerSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            name='email'
                                            value={login.email}
                                            onChange={handleChange} />
                                    {formError.email && <p className='text-danger'>{formError.email}</p> }
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name='password'
                                            value={login.password}
                                            onChange={handleChange} />
                                    {formError.password && <p className='text-danger'>{formError.password}</p> }
                                    </div>
                                   
                                    <Button title="Login" size="lg" variant="secondary" />
                                    </form>
                                    <div className='text-center mt-3 mb-3'>
                                        <small id="emailHelp" className="form-text text-danger"><Link to="/forget">Forgot Password?</Link></small>
                                    </div>
                                    <div className='row'>
                                        <div className="col-5"> <hr /> </div>
                                        <div className="col-2 text-center"> Or </div>
                                        <div className="col-5"> <hr /> </div>
                                    </div>
                                    <div className='mb-3'>
                                        <Button title="Continue with Facebook" size="lg" variant="facebook" />
                                    </div>
                                    <div className='mb-3'>
                                        <Button title="Continue with Google" size="lg" />
                                    </div>
                                    <div className='mb-3'>
                                        <Button title="Continue with Email" size="lg" />
                                    </div>
                                    <p className='text-center mt-5'> <Link to="/register"> Don’t have an account? Register Now</Link></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;