import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {login}=use(AuthContext);

    const handleLogin=(e)=>{
            e.preventDefault();
            const email=e.target.email.value;
            const password=e.target.password.value;
            login(email,password)
            .then(result=>{
                console.log(result);
            })
            .catch(error=>{
                console.log(error);
            })
    }

    return (
            <div className="card bg-base-100 mx-auto w-full rounded-xs max-w-sm shrink-0 shadow-2xl">
                        <h2 className='text-center font-semibold py-5 mx-7 border-base-300 border-b text-xl'>Login your account</h2>
                        <form onSubmit={handleLogin} className="card-body mx-5">
                            <fieldset className="fieldset">
                            <label className="font-semibold text-md -mt-1 mb-2">Email address</label>

                            {/* email */}

                            <input name="email" type="email" className="input w-full rounded-xs bg-base-300 border-none" placeholder="Enter your email address" />

                            <label className="font-semibold text-md my-2">Password</label>

                            {/* password */}

                            <input name="password" type="password" className="input w-full rounded-xs border-none bg-base-300 mb-3" placeholder="Enter your password" />

                            <button type="submit" className="btn btn-neutral my-4 ">Login</button>
                            <p className='text-center font-semibold text-md text-accent'>Don't Have An Account ? <Link className='font-bold text-secondary' to="/auth/register">Register</Link></p>
                            </fieldset>
                        </form>
            </div>
    );
};

export default Login;