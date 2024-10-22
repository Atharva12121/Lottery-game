import { useState } from "react";
import Button from "./Button";
import { genTicket } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n=3, winCondition}){
    
let [ticket,setTicket]=useState(genTicket(n));

let isWinning= winCondition(ticket);

   

let buyTicket=()=>{
    setTicket(genTicket(n));
}

    return(
        <div>
        <h1>Lottery is here</h1>
        <Ticket ticket={ticket}></Ticket>
        <br />
        {/* <h3>{isWinning? "Congratulation you win!": ""}</h3> */}
       <Button action={buyTicket}></Button>
        <h3> {isWinning && "Congratulation you win!"}</h3>

        </div>
    );

}