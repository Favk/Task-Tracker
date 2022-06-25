import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import '../../../assets/smtp.js';

declare let Email: any;

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
    const message = `My name is ${this.name}. My email is ${this.email}. My reminder is ${this.reminder}`;
    alert(message)
  }
}
