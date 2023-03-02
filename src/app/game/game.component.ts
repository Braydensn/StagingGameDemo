import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  rounds: number;
  playerScore: number;
  compScore: number;
  playerChoice: string;
  compChoice: string;
  compImage: string;
  result: string;

  constructor(){
    this.rounds = 1;
    this.playerScore = 0;
    this.compScore = 0;
    this.playerChoice = "Pick One";
    this.compChoice = "Waiting for your selection";
    this.compImage = "assets/clock.png";
    this.result = "VS";
  }

  playRound(choice: string){
    this.rounds++;
    this.playerChoice = choice;

    let choices: string[] = ["rock", "paper", "scissors"];
    this.compChoice = choices[Math.floor(Math.random() * 3)];
    this.compImage = "assets/" + this.compChoice + ".png";
    
    if(choice === this.compChoice){
      this.result = "It's a tie!"
    }
    else if(choice === "rock"){
      if(this.compChoice === "paper"){
        this.result = "You lose";
        this.compScore++;
      }else{
        this.result = "You Win!";
        this.playerScore++;
      }
    }else if(choice === "paper"){
      if(this.compChoice === "rock"){
        this.result = "You Win!";
        this.playerScore++;
      }else{
        this.result = "You lose";
        this.compScore++;
      }
    }else{
      if(this.compChoice === "rock"){
        this.result = "You lose";
        this.compScore++;
      }else{
        this.result = "You Win!";
        this.playerScore++;
      }
    }
  }

  reset(){
    this.rounds = 1;
    this.playerScore = 0;
    this.compScore = 0;
    this.playerChoice = "Pick One";
    this.compChoice = "Waiting for your selection";
    this.compImage = "assets/clock.png";
    this.result = "VS";
  }

}
