import { useState } from "react";
import { useEffect } from "react";
import api from "../api/api";
import BookBusTicket from "./BookBusTicket";
import "../css/SeatSelection.css"

function SeatSelection({selectedBusId ,bookingDate,source,destination}){
    
    const [availableSeats,setAvailableSeats]=useState([]);

    const[selectedSeat,setSelectedSeat]=useState(0);


    useEffect(()=>{
        const getAvailableSeats=async()=>{

        
                if(selectedBusId){

                    try{
                        console.log(bookingDate);
                         const response= await api.get(`/User/availableSeats/${selectedBusId}?bookingDate=${bookingDate}`);
                        setAvailableSeats(response.data)
                      }
                
                    catch(error){
                        console.log(error);
                    }

                }
            };

            getAvailableSeats();

       }, [selectedBusId]);



    return(

        <div className="seatSelection-container">

            <h2>Select Bus Seat</h2>

                    <hr />
                    
            <div className="seat-list">
                    


                    {availableSeats.map((seat)=>(

                        <div className="seat-card" key={seat}>
                            
                        <button key={seat}
                                onClick={()=>setSelectedSeat(seat)}>{seat}
                        </button>


                        </div>
                    ))}

            </div>

            {selectedSeat>0&&(<BookBusTicket selectedSeat={selectedSeat} selectedBusId={selectedBusId} bookingDate={bookingDate} source={source} destination={destination} />)}
        </div>

    );
}

export default SeatSelection;