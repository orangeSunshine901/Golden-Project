import './RegistrationScreen.css';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-calendar/dist/Calendar.css';




function RegistrationScreen(){
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className="form">
                <h1 style={{"text-align":"center"}}>
                    Guest Check-in
                </h1>
                <form action="" id="registration-form" autocomplete="off">

                    <label for="firstname" id="firstname-label" name= "firstname" className= "label">
                        <h3>First Name</h3>
                    </label>
                    <input className= "form-field" type="text" id= "firstname"  name= "firstname" required autocomplete= "off"/>
                    
                    <label for="lastname" id="lastname-label" name= "lastname" className= "label">
                        <h3>Last Name</h3>
                    </label>
                    <input className= "form-field" type="text" id= "lastname"  name= "lastname" required/>
                    
                    <label for="emailId" id="emailId-label" name= "emailId" className= "label">
                        <h3>Email Id</h3>
                    </label>
                    <input className= "form-field" type="email" id= "emailId" name= "emailId" required/>
                    
                    <label for="mobileNo" id="mobileNo-label" name= "mobileNo" className= "label">
                        <h3>Mobile Number</h3>
                    </label>
                    <input className= "form-field" type="tel" id= "mobileNo" name= "mobileNo" required/>
                    
                    <label for="checkIn" id="checkIn-label" name= "checkIn" className= "label">
                        <h3>Check In</h3>
                    </label>
                    
                    <DateTimePicker onChange={onChange} value={value} style={{"color":"red"}}/>
                    
                    <label for="checkOut" id="checkOut-label" name= "checkOut" className= "label">
                        <h3>Check Out</h3>
                    </label>
                    <input className= "form-field" type="date" id= "checkOut" name= "checkOut" required/>
                    
                    <label for="roomNo" id="lastname-label" name= "roomNo" className= "label">
                        <h3>Room No</h3>
                    </label>
                    <input className= "form-field" type="text" id= "roomNo" name= "roomNo" required/>
                    
                    <input type="button" name="submit" value="SUBMIT" className= "button"/>

                </form>
            </div>
        </div>
    )
}

export default RegistrationScreen