import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'my-first-project';
  parentMessage:string = 'Message coming from parent component';
  message!: string;

  fromChildOutput:string | undefined;

  imgUrl:string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png";

  @ViewChild(PostComponent)
  childComp!: { childMessage: string; };

  constructor() {
    //console.log(this.childComp);
  }

  ngAfterViewInit() {
    this.message = this.childComp.childMessage;
  }
  receiveMessage($event: any) {
    this.fromChildOutput = $event;
  }

  //class Binding
  bool:boolean = false;

  //Event Binding
  buttonClick() {
    console.log("Event Binding Works on click");
  } 
  //Event Filtering using js
  // onKeyUp($event: { keyCode: any; }) {
  //   if($event.keyCode == 13) {
  //     console.log("Enter key pressed");
  //   }
  // }

  //Event filtering using angular
  // onKeyUp(username: any) {
  //     console.log(username);
  // }
  

  //Two way data binding
  userName:string | undefined;
  onKeyUp() {
    console.log(this.userName);
    
  }
 }
