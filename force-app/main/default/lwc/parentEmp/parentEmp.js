import { LightningElement } from 'lwc';

export default class ParentEmp extends LightningElement {
    updateEmp(){
        this.template.querySelector('c-employee').updateEmp();
    }
}