import { Injectable } from '@angular/core';
import { Settings } from '../Models/settings.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settings: Settings = {
    notifications: true,
    language: 'en',
    theme: 'light'
    // Initialize other settings as needed
  };
  private settingsSubject: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(this.settings);

  constructor() { }

  getSettings(): Observable<Settings> {
    return this.settingsSubject.asObservable();
  }

  updateSettings(newSettings: Settings): void {
    this.settings = newSettings;
    this.settingsSubject.next(this.settings);
    // Implement logic to persist settings (e.g., in localStorage or backend)
  }
}
