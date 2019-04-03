import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { API_KEY } from "./config";
import {
  parseGeoJson,
  breweryLayer,
  geolocationOptions,
} from "../utilities/mapUtilities";
import "../Map.css";

class Map extends Component {
  state = { breweries: this.props.breweries };
  async componentDidMount() {
    const { breweries } = this.state
    const longitude = breweries.find(brew => brew.longitude).longitude
    const latitude = breweries.find(brew => brew.latitude).latitude
    const geoLoc = [longitude, latitude];
    mapboxgl.accessToken = API_KEY;
    const mapOptions = {
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: 10,
      center: geoLoc
    };
    this.createMap(mapOptions, geolocationOptions);
     }

     createMap = (mapOptions, geolocatioOptions) => {
       this.map = new mapboxgl.Map(mapOptions);
       const map = this.map;
       const { breweries } = this.props;
       const parsedBreweries = parseGeoJson(breweries);
       map.addControl(
         new mapboxgl.GeolocateControl({
           positionOptions: geolocatioOptions,
           trackUserLocation: true
         })
       );
       const nav = new mapboxgl.NavigationControl();
       map.addControl(nav, "top-right");
       map.on("load", _ => {
      map.addSource("breweries", { type: "geojson", data: parsedBreweries });
      map.addLayer(breweryLayer);
      map.on("moveend", () => this.fetchBreweries());
      map.on("click", "breweries", e => {
        const { properties, geometry } = e.features[0];
        const coordinates = geometry.coordinates.slice();
        const { name, address } = properties;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            `
            <div id='popup'>
              ${name}<br/>${address}<br/>
            </div>
            `
          )
          .addTo(map);
      });
    });
  };
   fetchBreweries = async _ => {
   const map = this.map;
   const { breweries } = this.props;
   const parsedBreweries = parseGeoJson(breweries);
   map.getSource("breweries").setData(parsedBreweries);
 };
 componentWillUnmount() {
     this.map.remove();
   }
   render() {
     return(
       <div>
       <div id="map-page">

               {
                 this.state.breweries.map((loc, i) => {
                   return (
                     <p key={i} onClick={ _ => this.flyTo(loc) }>
                     </p>
                   )
                 })
               }

           <div id='map' ref={el => this.mapContainer = el} />
       </div>
       </div>

 )
   }
 }

 export default Map;
