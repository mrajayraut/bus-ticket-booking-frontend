import { useState } from "react"

function AddRoute(){

    const[Route,setRoute]=useState({
        source:"",
        destination:"",
        departureTime:"",
        arrivalTime:""
    });

    const handleChange=(e)=>{
        setRoute({
            ...Route,
            [e.target.name]:e.target.value
    })
    };




    return(
        <div>
 
        </div>
    )
}