import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mainSearch = $('.main-search');
    const formSearch = $('.form-search');

    $('#searchIcon').click(function () {
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
