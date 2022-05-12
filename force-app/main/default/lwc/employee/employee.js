import { api, LightningElement, track } from 'lwc';

export default class Employee extends LightningElement 
{
   @api location;
   @track employee={
        firstName:'Monali',
        lastName:'Jagtap'
    };
   @api updateEmp(){
        this.employee={
            firstName:'Anandi',
            lastName:'Kadam'
        }
       // this.employee.firstName='xyz';
    }
}