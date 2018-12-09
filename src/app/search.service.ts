import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(filter: {name: string} = {name: ''}): Observable<any> {
    if (!filter.name)
      filter.name = 'c'
    return this.http.get<any>('https://www.rusprofile.ru/ajax.php?&query=' + filter.name + '&action=search')
      .pipe(
        tap((response: any) => {
          let ip = response.ip
            .map(user => user)
          let ul = response.ul.map(item => item)
          ul.concat(ip);
            // Not filtering in the server since in-memory-web-api has somewhat restricted api
          console.log(ul)
          if (!response.ip_count && !response.ul_count) {
            return [];
          } else {
            return ul;
          }
        })
      );
  }
}
