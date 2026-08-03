import { useState } from "react";
import api from "../api/api";

function AddBus(){


    const[Bus,setBus]=useState({
        busNo:"",
        busType:"",
        Totalseats:""
    });

    const[Route,setRout]=useState({
        source:"",
        destination:""

    });



    const handleChange=(e)=>{
       setBus({
          ...Bus,
           [e.target.name]:e.target.value
       })
    };

    const addBus=async(e)=>{
        e.preventDefault();
        try{
            const response=await api.post(`/User/setBus/?source=${Route.source}&destination=${Route.destination}`,Bus);
           console.log(response.data);
           alert("bus set successfully");
        }catch(error){
          console.log(error);
        }
    }



    return(
        <>

        <input type="text"
        placeholder="Enter Bus No"
        name="busNo"
        value={Bus.busNo}
        onChange={handleChange}/>

        <input type="text"
        placeholder="Enter Bus Type"
        name="busType"
        value={Bus.busType}
        onChange={handleChange} />

        <input type="text"
        placeholder="Enter Total Seats"
        name="Totalseats" 
        value={Bus.Totalseats}
        onChange={handleChange}/>

        <input type="text"
        placeholder="Enter Source"
        name="source"
        value={Route.source} 
        onChange={(e)=>{
            setRout({
                ...Route,
            [e.target.name]:e.target.value
            })
        }
        }/>

        <input type="text"
        placeholder="Enter Destination"
        name="destination"
        value={Route.destination} 
        onChange={(e)=>{
            setRout(
                {
                    ...Route,
                    [e.target.name]:e.target.value
                }
            )
        }}/>


     <button onClick={addBus}>add bus</button>




        </>
        

    );
};

export default AddBus;