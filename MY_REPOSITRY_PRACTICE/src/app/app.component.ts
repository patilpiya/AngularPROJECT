import { BindingPipe } from '@angular/compiler';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY_REPOSITRY_PRACTICE';
}
//propertyName :datatype = value/data;
 //testcase1  
  firstname : string = 'piya';  

 //testcase 2
  firstName1 = 'piya';
  firstName2! : string  ;
 surName2 : any;
 surName : any = true;
 formTitle : string = 'Login Form...';
 studentName = 'shree';
 amount = '5600';
 isFavCity = false;
 myName = "Om";
 gender = false;
 isDisabled = true;
 eventBindingData = 60000;
 twoWayBindingTest = 96565;

  testingInterpolation( x : number, y : number ){
 
     return x + y;
 }

 testingEventBinding(){
   this.eventBindingData = 50000;
   console.log(this.eventBindingData);
   
 }
 test(){
   console.log(this.twoWayBindingTest);
 }
}

