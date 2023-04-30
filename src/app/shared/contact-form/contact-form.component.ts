import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public SERVICE_ID: string = environment.SERVICE_ID;
  public TEMPLATE_ID: string = environment.TEMPLATE_ID;
  public KEY: string = environment.API_PUBLIC_EMAILJS;

  constructor() { }

  sendEmail(e: Event) {
    console.log(e);
    emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.KEY)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error:any) => {
        console.log(error.text);
      });
  }
}
