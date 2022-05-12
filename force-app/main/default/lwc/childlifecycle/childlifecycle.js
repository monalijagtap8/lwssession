import { LightningElement } from 'lwc';

export default class Childlifecycle extends LightningElement {
    connectedCallback(){
        throw new Error('Opps error occured');
    }
}