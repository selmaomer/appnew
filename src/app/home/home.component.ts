import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
userName:string ="ahmed";
userAge:number=30;
imgsrc:string='./assets/feedback.jpg';
imgwidth:number=200;
welcome():void{
  alert('hello');
}
sayhello():void{
  alert('hello my friends');
}
work(eventInfo:any):void{
console.log(eventInfo);
}

}
