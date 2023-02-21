import { Component } from '@angular/core';
import { Blog } from '../model/blog';
import { BlogServiceService } from '../service/blog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  blogList:any;
  search:string='';
  upDisabled:boolean;
  downDisabled:boolean;

  constructor(private blogService: BlogServiceService){}

  ngOnInit(){
    console.log('test test');
    this.blogService.getAllBlogs().subscribe((res)=>{
      console.log('blogs: ', res);
      this.blogList=res;
      // console.log('text: ', res.);
    })
    
  }

  //Text previewed in the card
  textDisplayed(text: string, length: number){
    let result: string;
    if (text.length>length){
      result =  text.substring(0, length) + "...";
    }else{
      result = text;
    }
    return result;
  }

  upVote(blog:Blog){
    let upVoted=false;
    let downVoted=false;
    if (!upVoted){
      this.blogService.upVote(blog).subscribe();
      upVoted=true;
      downVoted=false;
      // this.upDisabled=true;
    }
    console.log('upvoted:', upVoted);
    console.log('downVoted: ', downVoted);
  }

  downVote(blog:Blog){
    let upVoted=false;
    let downVoted=false;
    if (!downVoted){
      this.blogService.downVote(blog).subscribe();
      downVoted=true;
      upVoted=false;
    }
    console.log('upvoted:', upVoted);
    console.log('downVoted: ', downVoted);
  }

  
  onSearch(event: Event){
    this.search = (<HTMLInputElement>event.target).value
  }



}
