import { User } from '../App';
import { useState } from 'react';
import './login.css';
import SignArea from '../components/signArea'


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
                <SignArea signIn={tab} setUser={setUser}></SignArea>
            </div>
        </div>
    )
};

export default Login;