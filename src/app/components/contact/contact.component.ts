import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  reminder!: string;

  
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const message = `My name is {this.name}`;
    alert(message)
  }
}
