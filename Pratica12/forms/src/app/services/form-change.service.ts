import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormChangeService {
  private changes = new BehaviorSubject<any[]>([]);

  addChange(change: any) {
    this.changes.next([...this.changes.getValue(), change]);
  }

  getChanges() {
    return this.changes.asObservable();
  }
}