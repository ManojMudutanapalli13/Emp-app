import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataToPopupService, PopData } from '../services/data-to-popup.service';

@Component({
  selector: 'app-pop-up',
  standalone: false,
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent implements OnInit {
  popupData: PopData | null = null;
  objectKeys = Object.keys;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<PopData>();

  constructor(private dataService: DataToPopupService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.popupData = data;
      console.log("POPUP DATA RECEIVED:", data);
      // console.log("Mode : ",popupData.mode);
    });
  }

  getValue(obj: any, key: string): any {
    return obj?.[key];
  }

  formatKey(key: string): string {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  onOverlayClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      this.close.emit();
    }
  }

  saveData(): void {
    if (this.popupData?.mode === 'edit') {
      const { id, name, email , mode} = this.popupData;
      this.save.emit({ id, name, email, mode });// mode is removed to match PopData type
    }
  }
}
