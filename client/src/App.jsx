import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Register from "./register.jsx";
import SidebarComponent from "./components/dashboard.jsx"
import HeaderSection from "./header.jsx";
import DashboardNavBarComponent from "./components/navdashboard.jsx"
import StaffLoginPage from "./assets/Staff.jsx";

function App() {
    const [data, setData] = useState(null);
    
    const testInput= async function(){
        const email = await axios.get("/admin/login");
        console.log(email);
    }
    
    useEffect(() => {
        testInput();
    }, []);

    return (
        <BrowserRouter>
           <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <HeaderSection />
                            <Register />
                        </>
                    }
                />
                <Route path="/staff-pass" element={
                  <>
                  <HeaderSection/>
                  <StaffLoginPage />
                  </>
                  } />
                <Route path="/library/admin/panel" element ={
                    <>
                        <DashboardNavBarComponent/>
                        <SidebarComponent/>
                    </>
                } />
            </Routes>

        </BrowserRouter>
    );
}

export default App;