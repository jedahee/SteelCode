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
  public is_sending: boolean = false;

  constructor() { }

  sendEmail(e: Event) {
    this.is_sending = true;
    if (this.message != "" && this.from_email != "") {
      emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.KEY)
        .then((result: EmailJSResponseStatus) => {
          this.is_sending = false;
          this.from_email = "";
          this.message = "";
          
          this.is_success_sent = true;
          this.send_msg = "contacto_formulario_enviado_satis";
          
          setTimeout((e:any) => {
            this.is_success_sent = false;
            this.send_msg = ""; 
          }, 3000);
            
        }, (error:any) => {
          this.is_success_sent = false;
          this.send_msg = "contacto_formulario_enviado_err";
          
          setTimeout((e:any) => {
            this.send_msg = "";
          }, 3000)
        });
    }
  }
}
