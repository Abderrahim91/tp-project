import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
itemCount: number = 4;
btnText: string = 'Add an Item';
goalText: string = 'My first life goal';
goals =[];
  constructor( private dataService:DataService,private router: Router ) {
    this.goals=this.dataService.getGoal();
   }

  ngOnInit() {
this.itemCount = this.goals.length;
  }

addItem(){
//this.goals.push(this.goalText);
this.dataService.goals.push(this.goalText);
this.goalText='';
//this.itemCount = this.goals.length;
this.itemCount = this.dataService.goals.length;
}
}
