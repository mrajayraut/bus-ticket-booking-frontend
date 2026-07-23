import { useState } from "react";
import api from "../api/api";
import {jwtDecode}from"jwt-decode";


function LoginPage(){
 
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


                    }catch(error){
                        console.error(error);
                        alert("invalid password or email");
                    }

                
                };

                return(

                    <div>
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
                    </div>
                )


}

export default LoginPage;