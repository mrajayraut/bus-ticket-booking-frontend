
import { useState } from "react";
import api from "../api/api";
import { useEffect } from "react";
import SeatSelection from "./SeatSelection";
import "../css/SearchBus.css";



function SearchBus(){

        const[source,setSource]=useState("");
        const[destination,setDestination]=useState("");
        const[buses,setBuses]=useState([]);

        const[bookingDate,setBookingDate]=useState("");

        const[selectedBusId,setSelectedBusId]=useState(0);

        const selectBus=(busId)=>{
                setSelectedBusId(busId);
            }


       

        const searchBus= async()=>{
            const response=await api.get(`/User/SearchBus?source=${source}&destination=${destination}`);

            setBuses(response.data)

        };

        return(

            <div className="search-container">
                <div className="search-card">
                       
                       <h2>Search Bus</h2>

                
                     <div className="search-form">
                            <input type="text"
                            placeholder="Enter source" 
                            value={source}
                            onChange={(e)=>setSource(e.target.value)}/>
                            
                            <input type="text"
                            placeholder="Enter Destination"
                            value={destination} 
                            onChange={(e)=>setDestination(e.target.value)}/>

                            <input type="date"
                            placeholder="Enter jurney Date"
                            value={bookingDate}
                            onChange={(e)=>setBookingDate(e.target.value)}/>

                            <button onClick={searchBus}>Search Bus</button>
                        </div>




               </div>    

                        <div className="bus-list">
                            {buses.map((bus)=>(
                                <div className="bus-card" key={bus.busId}>
                                    <h3>Bus No:{bus.busNo}</h3>
                                    <p>Bus name:{bus.busName}</p>
                                    <p>Type:{bus.busType}</p>
                                    <p>Total Seats:{bus.totalseats}</p>

                                    <button onClick={()=>selectBus(bus.busId)}>Book Now</button>
                                </div>
                              ))}

                        </div> 

                            {selectedBusId >0 &&(<SeatSelection selectedBusId={selectedBusId} bookingDate={bookingDate} source={source}  destination={destination} />)}
                        
                                                        
            </div>
        );


}

export default SearchBus;