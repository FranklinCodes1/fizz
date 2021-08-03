import Component from '@glimmer/component'; //
import { action } from '@ember/object'; //
import { tracked } from '@glimmer/tracking'; //

export default class FizzBuzzComponent extends Component {  //
  @tracked answer = "";
  

  @action    //
  update() {    //
    let output = ""; 
    let num = 20;
    

  

    for (let i = 0; i <= num; i++) { // logic for fizzbuzz
      if (i % 3 === 0)  output += 'Fizz';

      else if (i % 5 === 0) output += 'Buzz';

      
      
      
      
      if (output === '') output = `${i}`; // setting number to a string
      console.log(output) // 
    }
      this.answer = output; //assigning the proper 
    
    
    
  
    
  }

   

  
}


    