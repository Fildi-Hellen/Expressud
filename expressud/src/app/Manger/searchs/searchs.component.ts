import { Component } from '@angular/core';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrl: './searchs.component.css'
})
export class SearchsComponent {

  selectedItem: string = 'all';
  searchQuery: string = '';

  entries = [
    { id: '001', date: '2024-05-01' },
    { id: '002', date: '2024-05-02' },
    { id: '003', date: '2024-05-03' },
    // Add more entries as needed
  ];

  constructor() { }

  search() {
    // Logic for searching based on selectedItem and searchQuery
    console.log('Searching for:', this.selectedItem === 'all' ? 'All Entries' : `Entry ${this.selectedItem}`, 'with query:', this.searchQuery);
    // Implement your search logic here
  }

}
