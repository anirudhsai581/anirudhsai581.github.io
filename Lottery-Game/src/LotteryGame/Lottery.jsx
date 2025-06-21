import { useState } from 'react';
import { genTicket , sum } from './helper';
import Ticket from './Ticket';
import './Lottery.css';


export default function Lottery({n =3,winningSum=15}){


    const [ticket, setTicket] = useState(genTicket(n));
    
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));    
    }

    return (
        <>
        <div className="Lottery">
           
            <h2>You will win the lottery if Sum is {winningSum}</h2>
            <Ticket ticket ={ticket} />
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "congratulations you won the lottery , You owe Anirudh a party"}</h3>
            </div>
            

               
        </>
    )
}