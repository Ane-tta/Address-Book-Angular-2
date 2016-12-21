import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            AddBook
          </a>
          <ul class="nav navbar-nav">
            <li>
                <button routerLink="/favorites" type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Favorites
                </button>
            </li>
            <li>
                <button type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-dashboard" aria-hidden="true"></span> Recent
                </button>
            </li>
            <li>
                <button routerLink="/" type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Contacts
                </button>
            </li>
            <li>
                <button routerLink="/add" type="button" class="btn btn-default">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `,
})
export class NavbarComponent  {}
