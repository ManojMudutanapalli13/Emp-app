import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PopData {
  id?: number;
  name: string;
  email: string;
  mode: 'view' | 'edit';  // mode added to distinguish between view and edit
}

@Injectable({
  providedIn: 'root'
})
export class DataToPopupService {
  private dataSubject = new BehaviorSubject<PopData | null>(null);
  popupData$: Observable<PopData | null> = this.dataSubject.asObservable();

  constructor() {}

  setData(data: PopData): void {
    this.dataSubject.next(data);
  }

  getData(): Observable<PopData | null> {
    return this.popupData$;
  }

  clearData(): void {
    this.dataSubject.next(null);
  }
}
