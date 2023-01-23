import { Component } from '@angular/core';
import { IContact } from './contact.interface';
import { Contact } from './contact.class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contact',
  templateUrl: './contact-sample.component.html'
})
export class ContactSampleComponent {

  contact: IContact;
  status: string = '';

  constructor(private http: HttpClient) {
    this.contact = new Contact();
    this.status = 'Constructor Fired';
  }

 

  onHttpPostContact() {
    this.http.post<IContact>('https://localhost:3443/api/contact', this.contact).subscribe(apiResponseBody => {
      this.contact = apiResponseBody;
       this.status = "The this.contact object has been posted and it has been updated with the response.";
    });
  }

  onNgSubmit(formValues: any) {
    this.http.post<IContact>('https://localhost:3443/api/contact', formValues).subscribe(apiResponseBody => {
       this.contact = apiResponseBody;
       this.status = "The myNgForm.value has been posted and the this.contact object has been updated with the response.";
      });
  }

}
