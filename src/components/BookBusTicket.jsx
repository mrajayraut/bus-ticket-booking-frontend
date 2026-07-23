import { useState } from "react";
import api from "../api/api";


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
        <div>
            
         <input type="text" placeholder="Enter traveller name" name="name"value={Traveller.name} onChange={handleChange}/>

         <input type="text"placeholder="Enter age"name="age"value={Traveller.age} onChange={handleChange} />

         <input type="text" placeholder="Traveller Gender" name="gender" value={Traveller.gender} onChange={handleChange} />

         <p>UserId:-{localStorage.getItem("userId")}</p>
         <p>Seat No:-{selectedSeat}</p>
         <p>Booking date :-{bookingDate}</p>
         <p>Source:-{source}</p>
         <p>Destination:-{destination}</p>

         <button onClick={seatBooking}>confirm booking</button>

        </div>
    );
}
export default BookBusTicket;