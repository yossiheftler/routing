import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-app-user',
  templateUrl: './json-app-user.component.html',
  styleUrls: ['./json-app-user.component.css']
})
export class JsonAppUserComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,
    public router:Router,public http:HttpClient ) { }

    private api  = 'https://jsonplaceholder.typicode.com/users/'
    private user:any

  ngOnInit() {
    this.activatedRoute.params.subscribe( p =>{
      console.log(p);
      
      let userId= p.id

      this.http.get(this.api + userId)
      .subscribe(u =>{
        this.user = u
      })
    })
  }
  

}
