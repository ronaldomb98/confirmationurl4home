import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class FirebaseService {

  constructor(private af: AngularFire) {
    
  }

  public databaselist(list: string){
    return this.af.database.list(list);
  }
}
