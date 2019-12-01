import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-title',
  templateUrl: './data-title.component.html',
  styleUrls: ['./data-title.component.css']
})
export class DataTitleComponent implements OnInit {

  titleFromRout: string
  cowSay:string
  constructor(public activatedRoute:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    console.log('router', this.router);

    this.activatedRoute.data.subscribe(data => {
      this.titleFromRout = data.title
      this.cowSay = data.cow
    })

  }
  

}
