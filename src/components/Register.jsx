import "./Register.css"
import { useState } from "react";
import axios from "axios";
// import { useRef } from "react";
// export default function Register() {
//     const firstName = useRef();
//     const lastName = useRef();
//     const email = useRef();
//     const password = useRef();

// const handleSubmit = () =>{
//     const user ={
//         firstName:firstName.current.value,
//         lastName:lastName.current.value,
//         email:email.current.value,
//         Password:password.current.value
//     }
//     console.log(user)
// }
// return (
// <div className="App-Register-Row">
//     <div style={{backgroundColor:"white"}}>
//     <h2>Register Page</h2>
//     <p>
//         <input type="text"  placeholder="Enter the FirstName: " ref={firstName} />
//     </p>
//     <p>
//         <input type="text" placeholder="Enter the LastName: " ref={lastName} />
//     </p>
//     <p>
//         <input type="text" placeholder="Enter the Email: " ref={email}/>
//     </p>
//     <p>
//         <input type="password" placeholder="Enter the Password: " ref={password}/>
//     </p>
//     <p><button onClick={handleSubmit}>Submit</button></p>
//     </div>
// </div>
// );
// }



export default function Register() {
const[user,setUser] = useState({});
const [error,setError] = useState()
const API_URL = import.meta.env.VITE_API_URL
const handleSubmit = async () =>{
    try{
    const url = `${API_URL}/api/users/register`;
    // const url = "https://mern-backend-mauve-two.vercel.app/api/users/register";
    const result =  await axios.post(url,user);
    setError("Data Saved Successfully")
    console.log(result);
    }catch(err){
        console.log(err);
        setError("Something Went Wrong")
    }
}
return (
<div className="App-Register-Row">
    <div style={{backgroundColor:"white"}}>
    <h2>Register Page</h2>
    {error}
    <p>
        <input type="text" onChange={(e)=>setUser({ ...user,firstName:e.target.value })} placeholder="Enter the FirstName: " />
    </p>
    <p>
        <input type="text" onChange={(e)=>setUser({ ...user,lastName:e.target.value })} placeholder="Enter the LastName: " />
    </p>
    <p>
        <input type="text" onChange={(e)=>setUser({ ...user,email:e.target.value })}placeholder="Enter the Email: " />
    </p>
    <p>
        <input type="password" onChange={(e)=>setUser({ ...user,password:e.target.value })} placeholder="Enter the Password: " />
    </p>
    <p><button onClick={handleSubmit}>Submit</button></p>
    </div>
</div>
);
}