import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'; //the data sevice that parses the data from the feed.json
import { Observable } from 'rxjs'; //holds the data that comes from the api 
import { ByManufacturerPipe } from '../filters/by-manufacturer.pipe';
import { UniquePipe } from '../filters/uniqueFilter';
import * as $ from 'jquery'; //importing jquery 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  devices$: any  = [];
  onManufacturer$: any = [];
  orderByPriceLowToHigh: any = [];
  orderByPriceHighToLow: any =  [];
  
  constructor(private data: DataService) { }

  ngOnInit() {
    //call getDevices function to retrieve to data and store on array devices$
    this.data.getDevices().subscribe((response) => {
      this.devices$ = response;

      //add manufactureres into onManufacturer$ array for filter dropdown
      for(let i in this.devices$){
        this.onManufacturer$.push(this.devices$[i].manufacturer)
      }
      this.PriceDescending(response);
      this.PriceAscending();
    });
  }

  sortByPrice(val){
    // console.log("low to high", this.orderByPriceHighToLow);
    if(val === "Low to high"){
      console.log("LowToHigh", this.orderByPriceLowToHigh);
    }
    else{
      console.log("HighToLow", this.orderByPriceHighToLow);
    }
  }


  //order array by price Ascending and descending and store new variables
  PriceDescending(response){
    this.orderByPriceHighToLow = response.sort((a, b) => {
      if(a.priceFrom < b.priceFrom) return 1;
      if(a.priceFrom > b.priceFrom) return -1;
      return 0;
    })
    // console.log("high to low", this.orderByPriceHighToLow);
  }
  PriceAscending(){
    
    // this.orderByPriceLowToHigh = this.orderByPriceHighToLow.reverse();
    // console.log("high to low", this.orderByPriceHighToLow);
    // //reversing array not working
    // console.log("initially value", this.orderByPriceLowToHigh);
  }
 
  
  //these two functions are for scrolling animation. Add/remove active class 
  scrollToHomePage(){
    $('html, body').animate({scrollTop: $('.home-page-section').offset().top}, 1000);
    $('.navbar-menu > li > a').removeClass('app-navbar-active');
    $('#menuHome').addClass('app-navbar-active');
  }
  scrollToStore(){
    $('html, body').animate({scrollTop: $('.store-section').offset().top}, 1000);
    $('.navbar-menu > li > a').removeClass('app-navbar-active');
    $('#menuStore').addClass('app-navbar-active');
  }
  scrollToContacts(){
    $('html, body').animate({scrollTop: $('.contacts-section').offset().top}, 1000);
    $('.navbar-menu > li > a').removeClass('app-navbar-active');
    $('#menuContact').addClass('app-navbar-active');
  }
  

  //expand filter container
  expandFilters(){
    $('.filters').slideToggle();
  }
  
}