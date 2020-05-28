// Result 

export default class Result {
    static moneyWinInGame(result, bid) {
      return result ? bid * 3 : 0;
    }
    
    static checkWinner(draw) {
      return (draw[0] === draw[1] && draw[1] === draw[2]) 
        ? true 
        : false;   
    }
  }


/* Rules */

// (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])