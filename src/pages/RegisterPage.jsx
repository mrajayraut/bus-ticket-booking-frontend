import { use, useState } from "react"
import api from "../api/api";

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
       }catch(error){

        console.log(error);
       }

        

    };


    const handleChange= (e) =>{
          
        setUserRegister({
            ...UserRegister,
            [e.target.name]:e.target.value
        
        });
    };


    return(

        <div>

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

             <input type="text"
             name="password"
             placeholder="Enter password" 
             value={UserRegister.password}
             onChange={handleChange}/>

             <input type="text"
             name="gender"
             placeholder="Enter gender"
             value={UserRegister.gender}
             onChange={handleChange} />


             <input type="text"
             name="contact"
             placeholder="Enter Contact"
             value={UserRegister.contact}
             onChange={handleChange} />

             <button type="submit">Register</button>





             </form>



        </div>
    )
}

export default RegisterPage;