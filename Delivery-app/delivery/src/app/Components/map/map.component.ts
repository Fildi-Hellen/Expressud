import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  map: any;
  directionsService: any;
  directionsRenderer: any;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    // Initialize Google Maps
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
    // Add zoom control
    this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
      new google.maps.ZoomControl()
    );
    // Add marker for delivery agent's current location
     const marker = new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: this.map,
      title: 'Delivery Agent'
    });

    // Initialize DirectionsService and DirectionsRenderer
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);

    // Define route parameters
    const request = {
      origin: { lat: -34.397, lng: 150.644 }, // Origin coordinates
      destination: { lat: -34.0, lng: 151.0 }, // Destination coordinates
      travelMode: 'DRIVING' // Travel mode
    };

    // Get route from DirectionsService
    this.directionsService.route(request, (response: any, status: any) => {
      if (status === 'OK') {
        // Display route using DirectionsRenderer
        this.directionsRenderer.setDirections(response);
      } else {
        console.error('Error fetching route:', status);
      }
    });
  }
   

 }


