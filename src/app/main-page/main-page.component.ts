import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'; //the data sevice that parses the data from the feed.json
import { Observable } from 'rxjs'; //holds the data that comes from the api 
import { ByManufacturerPipe } from '../filters/by-manufacturer.pipe';
import * as $ from 'jquery'; //importing jquery 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  devices$: Object;
  // filter: Data;
  onManufacturer: any = [];
  orderByPriceLowToHigh: any = [];
  orderByPriceHighToLow: any =  [];
  
  constructor(private data: DataService) { }

  ngOnInit() {
    // this.filter = new Data;
    this.data.getDevices().subscribe(
      data => this.devices$ = data
    );
  }
  //return selected manufacturer
  onManufacturerSelect(val){
     this.devices$ = this.data.getDevices = val;

  }
  
  //these two functions are for scrolling animation 
  scrollToHomePage(){
    $('html, body').animate({scrollTop: $('.home-page-section').offset().top}, 1000);
  }
  scrollToStore(){
    $('html, body').animate({scrollTop: $('.store-section').offset().top}, 1000);
  }

  //expand filter container
  expandFilters(){
    $('.filters').slideToggle();
  }
  
}