import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mainSearch = $('.main-search');
    const formSearch = $('.form-search');

    $('.search-bg').click(function () {
      $(mainSearch).addClass('active');
      $('body').addClass('noScroll');
      $(formSearch).addClass('flipInX');


      setTimeout(function () {
        $('#input-searchbar').focus();
      }, 370);


    });

    $('#closeSearch').click(function () {
      $(mainSearch).removeClass('active');
      $('body').removeClass('noScroll');
      $(formSearch).removeClass('flipInX');
    });
  }

}
