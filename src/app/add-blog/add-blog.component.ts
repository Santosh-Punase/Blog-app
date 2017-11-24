import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
