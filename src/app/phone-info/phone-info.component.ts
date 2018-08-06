import { Component, OnInit, Sanitizer } from '@angular/core';
import { DataService } from '../services/data.service'; //the data sevice that parses the data from the feed.json
import { Observable } from 'rxjs'; //holds the data that comes from the api 
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'; //importing jquery 

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.scss']
})
export class PhoneInfoComponent implements OnInit {

  deviceID$ : Object;
  device$: any = [];
  devices$: any = [];
  deviceFront$ : boolean = true;
  deviceBack$ : boolean  = false;
  deviceDetails$ : boolean = false;
  inStock$ : boolean = true;
  os$ : string;
  imageSelected$ : string;

  constructor( private data: DataService, private route: ActivatedRoute) { 
    //store the selected device id in deviceID$ variable
    this.route.params.subscribe( (params) => { this.deviceID$ = params.id });
  }

  ngOnInit() {
    //store data from all devices in a devices$ variable. then finds the deviceID in the array and store its element in a new array
    this.data.getDevices().subscribe((response) => {
      this.devices$ = response;
      this.device$ = this.devices$.find( x => x.id === this.deviceID$);

      //set default imageSelected
      this.imageSelected$ = this.device$.imageFront;

      //check if device is out of stock 
      if(this.device$.outOfStock){
        this.inStock$ = false;
      }

      //check OS
      if(this.device$.manufacturer === "Apple"){
        this.os$ = "IOS";
      }
      else if(this.device$.filterfeatures.Android === true){
        this.os$ = "Android";
      }
      else{
        this.os$ = "Windows Phone";
      }
    })
  }

  //change images for the image gallery, add/remove active class
  imageBack(){
    this.imageSelected$ = this.device$.imageBack;
    $('.photo-gallery > img').removeClass('active')
    $('#imageBack').addClass('active');
  }
  imageFront(){
    this.imageSelected$ = this.device$.imageFront;
    $('.photo-gallery > img').removeClass('active')
    $('#imageFront').addClass('active');
  }
  imageDetails(){
    this.imageSelected$ = this.device$.imageDetails;
    $('.photo-gallery > img').removeClass('active')
    $('#imageDetails').addClass('active');
  }
}
