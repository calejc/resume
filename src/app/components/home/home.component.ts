import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/data/data';
import { Project } from 'src/app/data/types/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Project[] = PROJECTS

  constructor() { 
  }

  getProjects(){
    return this.projects;
  }

  ngOnInit(): void {
  }

}
