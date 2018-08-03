import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //the data sevice that parses the data from the feed.json
import { Observable } from 'rxjs'; //holds the data that comes from the api 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.scss']
})
export class PhoneInfoComponent implements OnInit {

  device$: Object;

  constructor( private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.device$ = params.productid)
  }

  ngOnInit() {
    this.data.getDevice(this.device$).subscribe(
      data => this.device$ = data
    );
    console.log("device", this.data)
  }

}
