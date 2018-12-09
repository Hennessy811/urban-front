import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../search.service";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from "rxjs";
import {debounceTime, finalize, tap} from "rxjs/operators";
import {switchMap} from "rxjs/operators";

export interface Company {
  name: string;
  addr: string
  ceo_name: string
  inactive: number
  inn: string
  many_ceo: number
  ogrn: string
  snippet_string: string
  snippet_type: string
  url: string
}
@Component({
  selector: 'app-search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.sass'],
})
export class SearchModuleComponent implements OnInit {

  isEmpty: boolean;
  @ViewChild('searchInput') input: ElementRef;
  constructor(private searcher: SearchService,
              private fb: FormBuilder) { }

  filteredUsers: User[] = [];
  usersForm: FormGroup;
  isLoading = false;

  doSearch() {
    let companies = [];

  }

  displayFn(user: User) {
    if (user) { return user.name; }
  }

  ngOnInit() {
    this.isEmpty = false;
    this.isLoading = false;
    this.usersForm = this.fb.group({
      userInput: null
    })

    this.usersForm
      .get('userInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => {
          return this.isLoading = true
        }),
        switchMap(value => this.searcher.search({name: value})
          .pipe(
            finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe(users => {
        this.filteredUsers = users.ul.map(item => item)
        console.log(this.filteredUsers);
        return this.filteredUsers
      });
  }

}

export class User {
  constructor(public id: number, public name: string) {}
}
