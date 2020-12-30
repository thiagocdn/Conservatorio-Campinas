import Leaflet from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapMarker from './map-marker.svg';

const Map = () => {
  const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [28, 38],
    iconAnchor: [14, 38],
    popupAnchor: [0, -60]
  });

  return (
    <MapContainer
      center={[-22.9327971, -47.0521885]}
      zoom={16}
      scrollWheelZoom={false}
      style={{height: '200px', width: "100%", zIndex: 0}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={mapIcon}
        position={[-22.9327971, -47.0521885]}>
      </Marker>
    </MapContainer>
  )
}

export default Map;