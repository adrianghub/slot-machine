export default class Wallet {
    constructor(money) {
      let _money = money;
      this.getWalletValue = () => _money;
      this.checkCanPlay = value => _money >= value ? true : false;
      
      this.changeWallet = (value, type ="+") => {
        if (typeof value === "number" && !isNaN(value)) {
          switch(type) {
            case "+":
              _money += value;
              break;
            case "-":
              _money -= value;
              break;
            default:
              throw new Error("Invalid type of activity.");
              break;
          } 
        } else {
          console.log(typeof value);
          throw new Error("Only number type values are valid");
        }
      }
    }
}