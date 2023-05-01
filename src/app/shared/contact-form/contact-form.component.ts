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

  public from_email : string = "";
  public message : string = "";
  public send_msg : string = "";
  public is_success_sent: boolean = false;

  constructor() { }

  sendEmail(e: Event) {
    emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.KEY)
      .then((result: EmailJSResponseStatus) => {
        this.from_email = "";
        this.message = "";
        this.send_msg = "contacto_formulario_enviado_satis";
        this.is_success_sent = true;
      }, (error:any) => {
        this.send_msg = "contacto_formulario_enviado_err";
        this.is_success_sent = false;
      });
  }
}
