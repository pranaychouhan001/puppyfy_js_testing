import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./Create.css";

import Notimage1 from "../assets/puppy2.jpg";

// Marker data array
const markers = [
  {
    pos: [51.505, -0.09],
    imageUrl:
      "https://puppyfystorage.blob.core.windows.net/user-posts/test112233_2024-07-15T13-07-46.860Z_sundar ghar.jpeg",
    popupText: "Marker 1",
  },
  {
    pos: [51.515, -0.1],
    imageUrl:
      "https://puppyfystorage.blob.core.windows.net/user-stories/cross.jpeg",
    popupText: "Marker 2",
  },
  // Add more markers as needed
];





// Function to create a custom icon
const createCustomIcon = (imageUrl) => {
  return new L.DivIcon({
    className: "custom-div-icon",
    html: `<div class="custom-marker-container">
             <img src='${imageUrl}' alt='Marker Image' class='custom-marker-image'/>
           </div>`,
    iconSize: [38, 38], // Adjust size as needed
    iconAnchor: [19, 38], // Adjust anchor point as needed
    popupAnchor: [0, -25], // Adjust popup anchor as needed
  });
};

// Custom div icon configuration for the user
const customIcon = createCustomIcon(
  "https://puppyfystorage.blob.core.windows.net/user-posts/test112233_2024-07-15T13-07-46.860Z_sundar ghar.jpeg"
);

const UpdateMapView = ({ myposition }) => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.setView(myposition, 15);
    }
  }, [myposition, map]);

  return null;

  
};

const MyMapComponent = ({ myposition }) => {

  
  return (
    <div className="map-container">
      <MapContainer
        center={myposition}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <UpdateMapView myposition={myposition} />
        <Marker position={myposition} icon={customIcon}>
          <Popup>
            <div className="fymap-popup">
              <p>Pranay Chouhan</p>
            </div>
          </Popup>
        </Marker>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.pos}
            icon={createCustomIcon(marker.imageUrl)}
          >
            <Popup>
              <div className="fymap-popup">
                <p>Pranay Chouhan</p>
                <button type="button" className="btn btn-primary">
                  View Profile
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MyMapComponent;
