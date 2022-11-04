import { Paper, Box } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet'
import KFS from './assets/KFS_stations';
import ForestBoundary from './assets/ForestBoundary';

export default function Dashboard() {
  const { height, width} = useViewportSize();
  return (
    <Box sx={(theme) => ({
      height: height
    })}>
      <MapContainer center={[-3.266667, 39.816667]} zoom={11}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={KFS} onEachFeature={(f, l) => {
          l.bindPopup("<table><td>"+f.properties.Name+"</td></table>")
        }} />
        <GeoJSON data={ForestBoundary} style={(feature) => {
          return {
            color: "#2B8A3E",
            fillColor: "#2B8A3E",
            fillOpacity: 1,
            opacity: 1,
          }
        }} />
        </MapContainer>
        </Box>
  );
}