import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {ScanService} from '../../../services/scan-service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-scan-page',
  imports: [CommonModule],
  templateUrl: './scan-page.html',
  styleUrl: './scan-page.css',
})
export class ScanPage {
  private scanService = inject(ScanService)
  private cdr = inject(ChangeDetectorRef)

  devices: any[] = [];
  isScanning = false

  startScan() {
    this.isScanning = true;
    this.devices = [];

    this.scanService.scan().subscribe({
      next: (res) => {
        console.log('Response raw:', res);
        this.devices = res.devices || [];
        this.isScanning = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        alert(err.error.error || 'Errore durante lo scan');
        this.isScanning = false;
      },
      complete: () => {
        console.log('Scanning complete');
      }
    })

  }
}
