import './App.css'
import Lottery from './LotteryGame/Lottery'


function App() {
  

  return (
    <>
     <h1>Lottery Game</h1>
    <Lottery n={3} winningSum ={15}/>
    <Lottery n={4} winningSum ={20}/>
    </>
  )
}

export default App
