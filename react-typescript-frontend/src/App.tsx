import { useEffect, useState, useRef } from 'react'
import { CSSProperties } from 'react';
import './App.css'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Login  from './routes/login'
import { Home } from './routes/home'

export interface ProtectedRouteProps{
    isAllowed: boolean,
    redirectPath: string,
    children: React.ReactElement,
}

export interface UserData {
    id: number,
    email: string,
    auth_token: string, 
    refresh_token: string,
}

function App() {
    const [user, setUser] = useState<UserData | null>(null);
    
    const ProtectedRoute = (props: ProtectedRouteProps) => {
        if (!props.isAllowed) {
            return <Navigate to={props.redirectPath} replace />;
        }
        return props.children ? props.children : <Outlet />;
    };
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoute isAllowed={!!user} />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App
