import { Component, OnInit } from '@angular/core';
import "../../../assets/smtp.js";
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';


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

  constructor(private Email: EmailService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.Email.send({
      To: `${this.email}`,
      Body: `<b>Name: </b>${this.name} <br /> <b>Email: </b>${this.email}<br/> 
              <b>Reminder:</b> <br /> ${this.reminder} <br><br> <b>~End of Message.~</b>`
    }).subscribe((reminder: any) => { alert(reminder); });
  }

}
