import { use, useState } from "react"
import api from "../api/api";
import "../css/RegisterPage.css"
import { Link } from "react-router-dom";

function RegisterPage(){

    const [UserRegister,setUserRegister]=useState({
      name:"",
      email:"",
      password:"",
      gender:"",
      contact:""
    });

    const register=async(e)=>{
        e.preventDefault();
       try{
        const response=await api.post("/auth/register",UserRegister);

        console.log(response.data);
        alert("register successfully");

        setUserRegister({
            name: "",
            email: "",
            password: "",
            gender: "",
            contact: ""
});
       }catch(error){

        if(error.response){
            console.log(error.response.data);
        }else{
            console.log("Somthing went wrong");
        }
       }

        

    };


    const handleChange= (e) =>{
          
        setUserRegister({
            ...UserRegister,
            [e.target.name]:e.target.value
        
        });
    };


    return(

        <div className="register-container">


            <div className="register-card">

                <h1>Bus Booking</h1>
                <h2>Create Account</h2>

                <form onSubmit={register}>


                    <input type="text"
                    name="name"
                    placeholder="Enter name"
                    value={UserRegister.name}
                    onChange={handleChange}/>

                    <input type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={UserRegister.email}
                    onChange={handleChange} />

                    <input type="password"
                    name="password"
                    placeholder="Enter password" 
                    value={UserRegister.password}
                    onChange={handleChange}/>

                    <select name="gender" 
                    value={UserRegister.gender} 
                    onChange={handleChange}>

                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>


                    <input type="text"
                    name="contact"
                    placeholder="Enter Contact"
                    value={UserRegister.contact}
                    onChange={handleChange} />

                    <button type="submit">Register</button>





                </form>

                <p>Already have an account{" "}
                    <Link to="/">Login</Link>
                </p>
            
            </div>



        </div>
    )
}

export default RegisterPage;