import { useEffect, useState } from 'react';
import './App.css';
import { shuffleCards } from './assets/CardDecks';

function App() {
  const totalCards = shuffleCards();
  const [currentCards,setCurrentCards] = useState({
    player:[],
    dealer: []
  })
  const [score,setScore] = useState({
    player:0,
    dealer:0,
  })
  const [totalCardDrawn,setTotalCardDrawn] = useState(0);

  const [gameEnded,setGameEnded] = useState(false)

  const assignCards = (intial = false)=>{
    const intialCards:any = {
      player: currentCards.player,
      dealer: currentCards.dealer
    }
    let intialCount = totalCardDrawn;
    const scoresCard = {...score};
    if(intial && totalCards?.length > 0){
      for(let i= 0; i<6; i++){
        if(i<3){
          intialCards.player.push(totalCards[i])
          scoresCard.player+= totalCards[i]?.value
        }else{
          intialCards.dealer.push(totalCards[i])
          scoresCard.dealer+= totalCards[i]?.value
        }
        intialCount++
      }
    }else if(totalCardDrawn < 10 && !intial){
      intialCards.player.push(totalCards[intialCount])
      intialCards.dealer.push(totalCards[intialCount+1])
      scoresCard.player+= totalCards[intialCount]?.value
      scoresCard.dealer+= totalCards[intialCount+1]?.value
      intialCount +=2;
    }else{
      return
    }

    setCurrentCards(intialCards);
    setTotalCardDrawn(intialCount);
    setScore(scoresCard)

  }


  const declareWinner = (type:string)=>{
    setGameEnded(true);
    if(type === 'low'){
      alert(score.player<score.dealer ? 'player win': 'dealer wins')
    }else {
      alert(score.player>score.dealer ? 'player win': 'dealer wins')
    }
  }

  useEffect(()=>{
    if(totalCards?.length > 0 && totalCardDrawn === 0){
      assignCards(true);
    }
  },[])


  useEffect(()=>{
    console.log(currentCards);
  },[currentCards])



  return (
    <div className='container'>
      <div className='player'>
        <p>Player</p>
        {currentCards.player?.map((card:any)=>{
          return (
            <img className='playerImages' src={card?.image || ''}/>
          )
        })}
      </div>
      <div className='dealer'>
        <p>Dealer</p>
        {currentCards.dealer?.map((card:any,index)=>{
          return (
            <img className='dealerImages' src={index !== 0 && !gameEnded ? "https://deckofcardsapi.com/static/img/back.png": card?.image}/>
          )
        })}
      </div>
      <div className='buttonSection'>
        <button onClick={()=>declareWinner('high')}>High</button>
        <button onClick={()=>declareWinner('low')}>Low</button>
        <button onClick={()=>assignCards()}>Draw</button>
      </div>
    </div>
  )
}

export default App
