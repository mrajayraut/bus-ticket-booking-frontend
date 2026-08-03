import { useState } from "react"
import api from "../api/api";

function AddRoute(){

    const[Route,setRoute]=useState({
        source:"", 
        destination:"",
        departureTime:"",
        arrivalTime:""
    });

    const saveRoute=async(e)=>{
        e.preventDefault();
        try{
            const reponse=await api.post("/User/setRoute",Route);
            console.log(reponse.data);
            alert("Route successfully set");
        }catch(error){
            console.log(error);

        }
    }

    const handleChange=(e)=>{
        setRoute({
            ...Route,
            [e.target.name]:e.target.value,
       });

    };

    return(
        <div>

            <input type="text" 
            placeholder="Enter source"
            name="source"
            value={Route.source}
            onChange={handleChange}/>

            <input type="text"
            placeholder="Enter destination"
            name="destination"
            value={Route.destination}
            onChange={handleChange} />


            <input type="time"
            placeholder="Enter Arrival Time"
            name="Arrival Time" 
            value={Route.arrivalTime}
            onChange={handleChange}/>

            <input type="time"
            placeholder="Enter departureTime"
            name="departuretime" 
            value={Route.departureTime}
            onChange={handleChange}/>

            <button onClick={saveRoute}>Save Route</button>

 
        </div>
    )
}

export default AddRoute;