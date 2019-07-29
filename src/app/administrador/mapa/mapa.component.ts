import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat: number = -36.604497;
  lng: number = -72.080858;

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  public query: string;
  public position: string;
  public locations: Array<any>;
  private geoCoder;
  private geocoder;
  

  @ViewChild('search', {static: false})
    public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { 
    this.query = "Comandante Jorge Lama Lama, Chillan, Chillán, Chile";
  }

  ngOnInit() {
    //load Places Autocomplete
    var address = "Comandante Jorge Lama Lama, Chillan, Chillán, Chile";
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      this.geocoder = new google.maps.Geocoder();
      this.geocoder.geocode({ 'address': address }, (results, status) => {
         var latitude = results[0].geometry.location.lat();
         var longitude = results[0].geometry.location.lng();
        console.log("lat: " + latitude + ", long: " + longitude);
        });
      this.getAddress2();
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

   
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }
  public getAddress2() {
    if(this.query != "") {
      console.log(this.query);
        this.getAddressPeticion(this.query).then(result => {
            this.locations = <Array<any>>result;
        }, error => {
            console.error(error);
        });
    }
}
public getAddressPeticion(query2: string) {
  console.log(query2);
  return new Promise((resolve, reject) => {
    this.geoCoder.geocode({ searchText: query2 }, result => {
      if (result.Response.View.length > 0) {
        if (result.Response.View[0].Result.length > 0) {
          resolve(result.Response.View[0].Result);
        } else {
          reject({ message: "no results found" });
        }
      } else {
        reject({ message: "no results found" });
      }
    }, error => {
      reject(error);
    });
  });
}
}
