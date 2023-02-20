import { Component } from '@angular/core';
import { Blog } from '../model/blog';
import { BlogServiceService } from '../service/blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  blog : any;
  blogId : string;

  constructor(private blogService : BlogServiceService, private route: ActivatedRoute){}

  ngOnInit(){
    this.blogId = this.route.snapshot.params['id'];
    this.blogService.getBlogById(this.blogId).subscribe((res)=>{
      console.log('blog: ', res);
      this.blog=res;
    })
  }

  upVote(blog:Blog){
    this.blogService.upVote(blog).subscribe();
  }

  downVote(blog:Blog){
    this.blogService.downVote(blog).subscribe();
  }

}
