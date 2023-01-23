

export class Contact {
    public firstName: string;
    public lastName: string;
    public emailAddress: string;
    public phoneNumber: string;


    constructor(firstName: string = '', lastName: string = '', emailAddress: string = '', phoneNumber: string = '') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
    }

}