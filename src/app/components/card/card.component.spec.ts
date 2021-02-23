import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HomeComponent } from '../home/home.component';
import { TOOLS } from '../../data/data'

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    let project = {
      title: "Husqr",
      description: "Social media application utilizing a Firebase backend and an Angular front-end.",
      url: "https://husqr-1074b.web.app",
      repo: "https://github.com/calejc/husqr",
      stack: ["Angular", "Firebase", "Google Cloud", "Bootstrap", "Angular-Material"]
    }
    TestBed.configureTestingModule({
      declarations: [ CardComponent, HomeComponent ]
    })
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.project = project;
    component.tools = TOOLS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
