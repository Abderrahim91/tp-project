import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
goals=['goal','goal2'];
  constructor() { }
  getGoal(){
    return this.goals;
  }
}
