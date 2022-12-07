import { User } from '../App';
import { useState } from 'react';
import './login.css';

function SignArea({signIn}: {signIn: boolean}){
    if (signIn) {
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
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com"></input>
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password"></input>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="magic-card">
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Sign up </h3>
                                <p className="text-gray-500">Please create your account.</p>
                            </div>
                            <div className="space-y-5">
                                <form method="POST" encType="multipart/form-data">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                        <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com"></input>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                            Password
                                        </label>
                                        <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password"></input>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Login(userProps: User, setUser: React.Dispatch<React.SetStateAction<User>>)  {
    const [tab, setTab] = useState<boolean>(true);
    if (userProps) {
        return (
            <div className='magic-card'>
                <h1>Logged in as {userProps.email}</h1>
                <button className='btn btn-primary items-center' onClick={() => setUser(null)}>Logout</button>
            </div>
        )
    }
    return (
        <div className='magic-card'>
            <div className="tabs"> 
                <a className="tab tab-bordered tab-active" onClick={() => setTab(true)}>Sign-in</a> 
                <a className="tab tab-bordered" onClick={() => setTab(false)}>Sign-up</a>
            </div>
            <div>
                <SignArea signIn={tab}></SignArea>
            </div>
        </div>
    )
};

export default Login;