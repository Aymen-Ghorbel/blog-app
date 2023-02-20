import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogServiceService } from '../service/blog-service.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent {

  author:string;
  title:string;
  content:string;
  

  constructor(private blogService : BlogServiceService, private route: Router){}

  submitBlog(){

    const blog = {
      "title": this.title,
      "content": this.content,
      "author": this.author,
      "vote": 0
    }

    this.blogService.addBlog(blog).subscribe((res)=>{console.log('resp:', res);});
    this.route.navigate(['']);

  }
}
