import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogPostService} from '../blogpost.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit , OnDestroy{

  data: Object;
  id: string;
  private sub: any;
  constructor(private route: ActivatedRoute, private request: BlogPostService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
     // console.log(this.id);
      this.loadData(this.id);
    });
  }
  loadData(id) {
    this.request.loadBlog(id)
      .subscribe( data => {
        this.data = data;
        console.log(this.data);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
