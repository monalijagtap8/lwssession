import { LightningElement } from 'lwc';
//Comment
export default class ParentEmp extends LightningElement {
    updateEmp(){
        this.template.querySelector('c-employee').updateEmp();
    }
}