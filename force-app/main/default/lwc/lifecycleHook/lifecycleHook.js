import { api, LightningElement } from 'lwc';
import firsttemplate from './lifecycleHook.html';
import secondtemplate from './lifecycleHook1.html';

export default class LifecycleHook extends LightningElement {
    @api templateno='temp1';
    constructor(){
        super();
        console.log('Inside constructor');
    }
    connectedCallback(){
        console.log('Inside connected callback');
    }

    disconnectedCallback()
    { 
        console.log('Inside discoonected callback');
    }

 changetemplate(){
     if(this.templateno==='temp1')
     {
         this.templateno='temp2';
     }else{
         this.templateno='temp1';
     }

}

render()
{
    console.log('Inside render');
    if(this.templateno==='temp1')
    {
        return firsttemplate;
    }else{
        return secondtemplate;
    }
}
renderedCallback(){
    console.log('Inside renderedCallback');
    }
    errorCallback(error)
    {
        console.log("Inside error callback");
        alert('error'+error);
    }
}
