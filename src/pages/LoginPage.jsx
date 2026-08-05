import { useState } from "react";
import api from "../api/api";
import {jwtDecode}from"jwt-decode";
import "../css/LoginPage.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function LoginPage(){
 

            const navigate=useNavigate();

            const[Login,setLogin]=useState({
                email:"",
                password:""
            });

            const handleChange=(e)=>{
                setLogin({
                    ...Login,
                    [e.target.name]:e.target.value
                });
            }

                const login=async (e)=>{
                    e.preventDefault();
                    try{
                    const response= await api.post("/auth/login",Login);
                    const token=response.data.accessToken;
                    
                    localStorage.setItem("item",token);
                    
                    const decoded=jwtDecode(token);
                    
                    const userId=decoded.userId;
                    
                    localStorage.setItem("userId",userId);

                    console.log("token",token);
                    console.log("userId",userId);
                    alert("you logged in suceessfully");
                    navigate("/home");


                    }catch(error){
                        console.error(error);
                        alert("invalid password or email");
                    }

                
                };

                return(

                    <div className="login-container">
                     <div className="login-card">

                        <h1>Bus Booking</h1>
                        <h2>Welcome Back</h2>
                                <form onSubmit={login}>
                                <input type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={Login.email}
                                onChange={handleChange}

                                />

                                <input type="text"
                                name="password"
                                placeholder="Enter password"
                                value={Login.password}
                                onChange={handleChange} />

                                <button type="submit">Login</button>

                                </form>

                                <button
                                onClick={() => {
                                    window.location.href =
                                    "https://bus-ticket-booking-system-8cq7.onrender.com/oauth2/authorization/google";
                                }}
                                >
                                Continue with Google
                                </button>

                                <p>
                                    don't have an account?
                                    <Link to="/register"> Register </Link>
                                </p>
                        </div>
                    </div>
                )


}

export default LoginPage;