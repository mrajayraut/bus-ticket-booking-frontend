import { useState } from "react";
import api from "../api/api";
import "../css/BookBusTicket.css";


function BookBusTicket({selectedSeat,selectedBusId,bookingDate,source,destination}){

const[Traveller,setTraveller]=useState({
    name:"",
    age:"",
    gender:""
});

   const handleChange=(e)=>{
   setTraveller({
    ...Traveller,
    [e.target.name]:e.target.value
   })
   }


     const seatBooking=async(e)=>{
        e.preventDefault()

        const bookingData={
        seatNo : selectedSeat,
        busId : selectedBusId,
        bookingDate: bookingDate,
        pickupPoint: source,
        dropPoint: destination,
        userId:Number(localStorage.getItem("userId")),
        travellers:[{
            name:Traveller.name,
            age:Traveller.age,
            gender:Traveller.gender

        }]
        }
        try{
            
            console.log(bookingData);
            
        const response =await api.post(`/Admin/busBook`,bookingData);
        console.log(response.data);
        alert("Your seat is booked successfully");
        }catch(error){
            console.log(error);

        }


     }
    

    return(
        <div className="bookBusTicket-container">

            <div className="busTicket-card">
                    <input type="text" 
                    placeholder="Enter traveller name" 
                    name="name"value={Traveller.name} 
                    onChange={handleChange}/>


                    <input type="text"placeholder="Enter age"
                    name="age"
                    value={Traveller.age} 
                    onChange={handleChange} />
                    
                    
                    
                     <select name="gender" value={Traveller.gender} onChange={handleChange}>
                     <option value="">Select Gender</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Other">Other</option>
                      </select>


                <div className="booking-details">

                    <div className="detail-row">
                        <span>User ID</span>
                        <strong>{localStorage.getItem("userId")}</strong>
                    </div>

                    <div className="detail-row">
                        <span>Seat Number</span>
                        <strong>{selectedSeat}</strong>
                    </div>

                    <div className="detail-row">
                        <span>Journey Date</span>
                        <strong>{bookingDate}</strong>
                    </div>

                    <div className="detail-row">
                        <span>From</span>
                        <strong>{source}</strong>
                    </div>

                    <div className="detail-row">
                        <span>To</span>
                        <strong>{destination}</strong>
                    </div>

                </div>

                    <button onClick={seatBooking}>confirm booking</button>

            </div>

        </div>
    );
}
export default BookBusTicket;