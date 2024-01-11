class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      //Using .reduce method to calculate the sum of the array
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      //Calculate average number
      const averageRating = ratingsSum / this._ratings.length;
      return averageRating
    }
  
    addRating(value) {
      this._ratings.push(value);
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  }
  
  //Create child class of Media
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  //Create second child class of Media
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  //Create new Book instance
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  
  //Call .toggleCheckOutStatus() on the historyOfEverything instance
  historyOfEverything.toggleCheckOutStatus();
  
  //Log the value saved to the isCheckedOut property in the historyOfEverything instance
  console.log(historyOfEverything.isCheckedOut)
  
  //Call .addRating() three times 
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  
  //Create new Movie instance
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  //Call .toggleCheckOutStatus() on the speed instance
  speed.toggleCheckOutStatus();
  
  //Log the value saved to the isCheckedOut property in the speed instance
  console.log(speed._isCheckedOut);
  
  //Call .addRating() three times on speed
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  //Call .getAverageRating() on speed and log to console
  console.log(speed.getAverageRating());