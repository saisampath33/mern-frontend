 //<> is react fragment </>
// function Home({age}){
//   let name = "John Doe"
//   if(age>18) return <h2>Welcome guys!!</h2>
//   else return <h2>Sorry, You are not allowed</h2>
//   // return (
//   // <div> 
//   //   <div style={{backgroundColor:'orange',color:"blue"}}>Hello {name}, You are {age} years old</div>
//   //   <p>This is a para </p>
//   // </div>
//   // )
// }
// export default Home;

// export default function Home({ age }) {
//   {
//     // return age>18 ? <h2>Welcome!!</h2> : <h2>Sorry, You are not allowed</h2>;
//     return age>18 && <h2>Welcome!!</h2> //if age is greater than 18 then return h2 otherwise return null
//   }
// }

// export default function Home({ age }) {
//   const handleClick = () => {
//     alert("Button clicked!");
//   }
//   const handleSubmit = (name) => {
//     alert(`Hello ${name}`);
//   }
//   return(
//     <>
//       <h2>Hello World</h2>
//       <button onClick={handleClick}>Click</button>
//       <button onClick={()=>handleSubmit("Sampath")}>Submit</button>
//     </>
//   );
// }

import {useState} from "react";
export default function Home() {
  const [score,setScore] = useState(0);
  const increment = ()=>{
    setScore(score +1);
  }
  const decrement = ()=>{
    setScore(score -1);
  }
  return(
    <>
      <p>{score}</p>
      <button onClick={increment}>Increment Score</button>
      <button onClick={decrement}>Decrement Score</button>
    </>
  )
}