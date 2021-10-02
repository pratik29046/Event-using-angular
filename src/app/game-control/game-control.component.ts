import { Component, OnInit,EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired=new EventEmitter <number>();
  interval:any;
  lastnumber=0;


  constructor() { }

  ngOnInit(): void {
  }

  onstartgame(){
    this.interval=setInterval(()=> {
      this.intervalFired.emit(this.lastnumber + 1);
      this.lastnumber++;

    },1000)
  }
  onpausegame(){
    clearInterval (this.interval);

  }
  Restart(){
    clearInterval()
  }

}
