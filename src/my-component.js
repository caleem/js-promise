import $ from 'jquery';

export default class {


  constructor() {
    //let p = this.testSuccess();
    let p = this.testFailure();

    p.then((success) => {
      alert('success => '+success);
    }).catch((ex) => {
      alert('ex: => '+ex);
    });
  }

  testSuccess() { 
    return new Promise(function(resolve, reject){
      if(true) {
         setTimeout(function(){
          resolve("Success!"); // Yay! Everything went well!
        }, 5000);
      }
    });
  }

  testFailure() { 
      return new Promise(function(resolve, reject){
      if(true) {
         setTimeout(function(){
          reject("REJECT!"); // Yay! Everything went well!
        }, 5000);
      }
    });
  }
 
};