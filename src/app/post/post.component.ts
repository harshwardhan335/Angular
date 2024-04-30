import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostListComponent } from "../post-list/post-list.component";

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    styleUrl: './post.component.css',
    imports: [PostListComponent]
})
export class PostComponent {
  title:string = "List of posts";
  @Input()
  fromParent!: string;
  postParentMessage:string = 'I am from post to postList';
  childMessage:string = 'From Child Component';
  outputChildMessage:string = 'Message from child component via output';
  //messageEvent is the name for the event emitter
  @Output() messageEvent = new EventEmitter<string>();

  //This function is called when we click on the button
  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
    
  }
}
