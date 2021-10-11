import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = '';
  subtitle = '';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Hola Mundo';
    this.subtitle = 'Valor del contador';
  }

  onCounterAddClick(){
    this.counter++;
  }

}
