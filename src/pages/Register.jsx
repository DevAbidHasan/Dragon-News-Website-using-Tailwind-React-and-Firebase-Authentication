import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser, updateUser}=use(AuthContext);

    const navigate=useNavigate();

    const handleRegister=(e)=>{
        e.preventDefault();
        // alert("User registered");
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        // console.log({name, photo, email, password});
        setUser("");
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(result.user);
            updateUser({displayName:name, photoURL:photo})
            .then(()=>{
                 setUser({...user, displayName:name, photoURL:photo});
                 navigate("/");
            })
            .catch(error=>{
                console.log(error);
                setUser(user);
            });
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
             <div className="card bg-base-100 mx-auto w-full rounded-xs max-w-sm shrink-0 shadow-2xl">
                        <h2 className='text-center font-semibold py-5 mx-7 border-base-300 border-b text-xl'>Register your account</h2>
                        <form onSubmit={handleRegister} className="card-body mx-5">
                            <fieldset className="fieldset">
                                <label className="font-semibold text-md -mt-4">Your Name</label>
                            <input name="name" required type="text" className="input my-1 w-full rounded-xs bg-base-300 border-none" placeholder="Enter your name address" />
                            <label className="font-semibold text-md ">Photo URL</label>
                            <input required name="photo" type="text" className="input my-1 w-full rounded-xs bg-base-300 border-none" placeholder="Enter your photo URL" />
                            <label className="font-semibold text-md ">Email address</label>
                            <input required name="email" type="email" className="input my-1 w-full rounded-xs bg-base-300 border-none" placeholder="Enter your email address" />
                            <label className="font-semibold text-md ">Password</label>
                            <input required name="password" type="password" className="input my-1 w-full rounded-xs border-none bg-base-300 " placeholder="Enter your password" />
                            <button type="submit" className="btn btn-neutral my-1">Register</button>
                            <p className='text-center font-semibold text-md text-accent'>Already Registered ? <Link className='font-bold text-secondary' to="/auth/login">Login</Link></p>
                            </fieldset>
                        </form>
            </div>
    );
};

export default Register;