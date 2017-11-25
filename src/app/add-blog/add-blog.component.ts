import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogPostService} from '../blogpost.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blogForm: FormGroup;
  published = false;
  currentUser :Object;
  public options: Object = {
    charCounterCount: true,
    height: 300,
    placeholder: 'Add your blog here',
    events : {
      'froalaEditor.focus' : function(e, editor) {
        console.log(editor.selection.get());
      }
    }
  };
  constructor(formBuilder: FormBuilder, private request: BlogPostService) {
    this.blogForm = formBuilder.group({
      'title' : [null, Validators.required],
      'desc' : [],
      'body' : [null, Validators.required],
      'category': [],
      'imageUrl': [],
      "author":"",
      "date" :"",
      "latest": true
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('curUser'));
  }
  publishBlog(blog) {
    console.log('form ', blog);
    blog.author = this.currentUser['name'];
    blog.date = new Date(Date.now()).toDateString();
    this.request.addBlogs(blog).subscribe(data => 
      console.log(data));
      this.published = true;
      // wait 3 Seconds and hide
      setTimeout(function() {
        this.published = false;
      //  console.log(this.published);
      }.bind(this), 3000);
  }

}
