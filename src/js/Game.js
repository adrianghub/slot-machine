// Game 
import Statistics from './Statistics';
import Wallet from './Wallet';
import Draw from './Draw';
import Result from './Result';

export default class Game {

    constructor(start) {
      this.stats = new Statistics();
      this.wallet = new Wallet(start);
      
      this.UISelectors =  {
        buttonRepeat: '[data-repeat]',
        button: '[data-button]',
        spanWallet: '[data-wallet]',
        boards: '[data-board]',
        inputBid: '[data-bid]',
        spanResult: '[data-result]',
        spanGames: '[data-number]',
        spanWins: '[data-wins]',
        spanLosses: '[data-losses]',
      }

      this.initializeGame();
      
      this.render();

      this.buttonRepeat.addEventListener('click', () => {
        this.wallet = new Wallet(200);
        this.render();
      });
    }
      
    render(boards = ['./assets/public/img/diamond.png', './assets/public/img/diamond.png', './assets/public/img/diamond.png'], money = this.wallet.getWalletValue(),result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
      
      this.boards.forEach((board, i) => {
        board.style.backgroundImage  = `url(${boards[i]})`;
        board.style.backgroundSize = 'contain';
        board.style.backgroundRepeat = 'no-repeat';
        board.style.backgroundPosition = 'center';
      })
      
      this.spanWallet.textContent = money;
      if(result) {
        result = `You've smashed it! Reward ${wonMoney}$`;
      } else if (!result && result !== "") {
        result =`Ahh...Here we go again... Loss ${bid}$`;
      }
      this.spanResult.textContent = result;
      this.spanGames.textContent = stats[0];
      this.spanWins.textContent = stats[1];
      this.spanLosses.textContent = stats[2];
      this.inputBid.value = "";
    };
    
    initializeGame() {
      this.buttonRepeat = document.querySelector(this.UISelectors.buttonRepeat);
      this.button = document.querySelector(this.UISelectors.button);
      this.spanWallet = document.querySelector(this.UISelectors.spanWallet);
      this.boards = [...document.querySelectorAll(this.UISelectors.boards)];
     this.inputBid = document.querySelector(this.UISelectors.inputBid);
    this.spanResult = document.querySelector(this.UISelectors.spanResult);
      this.spanGames = document.querySelector(this.UISelectors.spanGames);
     this.spanWins = document.querySelector(this.UISelectors.spanWins);
    this.spanLosses = document.querySelector(this.UISelectors.spanLosses);
      
      this.button.addEventListener('click', () => this.startGame());
      
      this.render();
  
    };
    
    startGame() {
    const cherry = './assets/public/img/cherry.png';
    const grape = './assets/public/img/grape.png'; 
    const seven = './assets/public/img/seven.png';
    const imageArray = [cherry, grape, seven];

      if(this.inputBid.value < 1) return alert('Time to make some money brah...elsewhere');
      const bid = Math.floor(this.inputBid.value);
      
      if(!this.wallet.checkCanPlay(bid)) {
         return alert('Time to make some money brah...elsewhere');
      }
      
      this.wallet.changeWallet(bid, '-');
      
      this.draw = new Draw(imageArray);  
      
      const cards = this.draw.getDrawResult();
      const win = Result.checkWinner(cards);
      const wonMoney = Result.moneyWinInGame(win, bid);
      this.wallet.changeWallet(wonMoney);
      this.stats.attachGameToStatistics(win, bid);
      
      this.render(cards, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)
    }
    
  }