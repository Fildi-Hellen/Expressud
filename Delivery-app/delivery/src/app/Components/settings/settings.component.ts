import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings } from '../../Models/settings.model';
import { SettingsService } from '../../Services/settings.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ CommonModule,
    FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  settings$!: Observable<Settings>;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settings$ = this.settingsService.getSettings();
  }

  updateSettings(newSettings: Settings): void {
    this.settingsService.updateSettings(newSettings);
  }

}
