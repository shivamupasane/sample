export class User {
    constructor(
public name: string,
public email: string,
public phone: number,
public topic: string,
public timepreferences: string,
public address: Address,
public subscribe: boolean
    ){}
}
interface Address {
street: string;
city: string;
state: string;
postalCode: number;
}