import { useState } from 'react';
export default function ScoreBoard(){
    const [run, setRun] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [message, setMessage] = useState("");
    const incrementRun = () => {
        if(wicket<11){
            setRun(run + 1);
            setMessage("Well Done!!");
        }
    };

    const incrementWicket = () => {
        if(wicket <11){
            setWicket(wicket + 1);
            setMessage("Wicket Taken!!");
        }else{
            setMessage("Game Over!!");
        }
    };
    return (
        <div>
            <h2>Score Board</h2>
            <p>Cricket Match</p>
            <p>Runs: {run}</p>
            <p>Wickets: {wicket}</p>
            <button onClick={incrementRun}>Increment Run</button>
            <button onClick={incrementWicket}>Increment Wicket</button>
            <hr />
            {message}
        </div>
    );
}