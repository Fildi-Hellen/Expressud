import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userAddress!: string;
  errorOccurred: any;

  ngOnInit() {
    this.detectUserLocation();
  }

  detectUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.getAddressFromCoordinates(position.coords.latitude, position.coords.longitude);
        },
        error => {
          console.error('Error getting user location:', error);
          // Handle error, show user-friendly message, etc.
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle unsupported browser, show user-friendly message, etc.
    }
  }

  getAddressFromCoordinates(latitude: number, longitude: number) {
    // Use your preferred method (e.g., calling a backend API) to convert coordinates to address
    // For demonstration purposes, let's assume you have a method called getAddressFromAPI
    // that takes latitude and longitude as parameters and returns an address
    // This is just a placeholder method, you need to implement it according to your backend or service
    this.getAddressFromAPI(latitude, longitude)
      .then(address => {
        this.userAddress = address;
      })
      .catch(error => {
        console.error('Error getting address from coordinates:', error);
        // Handle error, show user-friendly message, etc.
      });
  }

  getAddressFromAPI(latitude: number, longitude: number): Promise<string> {
    // Implement your API call to get address from coordinates here
    // This is just a placeholder function, you need to replace it with your actual API call
    // For example, you can use services like Google Maps Geocoding API
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to fetch address.');
        }
        return response.json();
      })
      .then(data => {
        if (data.results && data.results.length > 0) {
          return data.results[0].formatted_address;
        } else {
          throw new Error('No address found.');
        }
      });
  }
}