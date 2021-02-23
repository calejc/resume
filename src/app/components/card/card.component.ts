import { Component, Input, OnInit } from '@angular/core';
import { TOOLS } from '../../data/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: any;
  tools: any = TOOLS;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(tool: string){
    let s = this.tools.find((s) => s.name === tool).class
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
