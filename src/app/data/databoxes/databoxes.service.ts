import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { Databox } from './databox';
import { HttpHeaders } from '@angular/common/http';

/*const DATABOXES = gql`
  {
    dataBoxes {
      code
      description
      dataBoxType
    }
  }
`;*/

@Injectable({
  providedIn: 'root'
})
export class DataboxesService {

  /*constructor(private apollo: Apollo) { }

  getDataboxes(): Observable<Databox[]> {
    return this.apollo
      .watchQuery<any>({
        query: DATABOXES,
        context: { 
          headers: new HttpHeaders().set("Access-Control-Allow-Origin", "http://localhost:4200") // adding header
       }
      })
      .valueChanges.pipe(map((result) => result.data.dataBoxes));
  }*/
}
