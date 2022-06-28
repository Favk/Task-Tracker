import { Component, OnInit } from '@angular/core';
import "../../../assets/smtp.js";
import { NgForm } from '@angular/forms';

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

  onSubmit(f : NgForm){
    Email.send({
      Host: 'smtp.elastic email.com',
      Username: 'favourkolade8@gmail.com',
      Password: '7E2CC687BD8BA99149EFDE28AC14E07883F8',
      To: 'favourkolade8@gmail.com',
      From: `favourkolade8@gmail.com`,
      Body: `<b>Name: </b>${this.name} <br /> <b>Email: </b>${this.email}<br/> 
              <b>Reminder:</b> <br /> ${this.reminder} <br><br> <b>~End of Message.~</b>`
    }).then( (reminder: any) => {alert(reminder); } );
  }
}
