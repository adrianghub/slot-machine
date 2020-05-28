export default class Draw {
   constructor(images) {
     this.images = images;
     let _result = this.drawResult();
     
     this.getDrawResult = () => _result;
   }
   
   drawResult() {
     let cards = [];

     for(let i=0; i < this.images.length; i++) {
        let index = Math.floor(Math.random() * this.images.length);
        const card = this.images[index];
        cards.push(card);
     }
     return cards;
   }
 }
 