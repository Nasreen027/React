import React, { useState } from "react";

const ContactUsForm = () => {
const [name, setName] = useState("");
const [email,setEmail] = useState("");
// console.log(name,'name');
// console.log(email,'email');
return <form>
    <label>Enter your name here:</label>
    <input onChange={(event)=>{setName(event.target.value)}}></input><br></br>
    <label>Enter your email here:</label>
    <input onChange={(event)=>{setEmail(event.target)}}></input>
</form>
}
export default ContactUsForm;