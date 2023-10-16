import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent {
  // constructor(private service: PostService) {
  //   service.getdata().subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
