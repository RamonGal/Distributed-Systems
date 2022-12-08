import React, {useState} from 'react';
import axios from 'axios';
import { UserData } from '../App';

interface signInInputs{
    email: string,
    password: string,
}

function SignInForm(setUser: React.SetStateAction<UserData | null>) {
    const [inputs, setInputs] = useState<signInInputs>(
        {email: '', password: ''}
    );
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const signIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const order = {
            email: inputs.email,
            password: inputs.password,
        }
        axios.post('http://localhost:8000/api/auth/register', order)
            .then(response => {
                console.log(response);
                setUser(
                    {
                        id: response.data.id,
                        email: inputs.email,
                        auth_token: response.data.auth_token, 
                        refresh_token: response.data.refresh_token,
                    }
                )
            })
            .catch(error => {
                console.log(error);
            })
        
    }

    return (
        <div className="magic-card">
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                                <p className="text-gray-500">Please sign in to your account.</p>
                            </div>
                            <div className="space-y-5">
                                <form method='POST' encType="multipart/form-data" onSubmit={signIn}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                        <input 
                                            className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                                            type="email" 
                                            placeholder="mail@gmail.com"
                                            name='email'
                                            value={inputs.email}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                            Password
                                        </label>
                                        <input 
                                            className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" 
                                            type="password" 
                                            placeholder="Enter your password"
                                            name='password'
                                            value={inputs.password}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SignInForm;