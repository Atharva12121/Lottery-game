import './App.css';
import Lottery from './Lottery';
// import { sum } from './helper';

function App() {
let winCondition=(ticket)=> { return ticket.every((num)=> num ===ticket[0]); //when all the number are same than function will pass the value
  // return sum(ticket)===15;
 // return ticket[0]===0;
};
  return (
    <>
      <Lottery n={3} winCondition={winCondition}></Lottery>
    </>
  )
}

export default App
