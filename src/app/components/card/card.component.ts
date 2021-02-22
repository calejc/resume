import { Component, Input, OnInit } from '@angular/core';
import { TOOLS } from '../../data/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: any;

  constructor() { }

  ngOnInit(): void {
    this.getClass("HTML")
  }

  getClass(tool: string){
    let s = TOOLS.find((s) => s.name === tool).class
    return s
  }

  toList(s: string){
    let stringArray = []
    for(let i = 0; i < s.length; i++){
      stringArray.push(s[i]);
    }
    return stringArray;
  }

}
