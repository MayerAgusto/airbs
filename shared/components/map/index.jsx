import ReactMap from 'react-map-gl';
import {useState} from 'react'
export const Map = () => {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude:-122.4376,
    zoom: 11
  })
  return(
    <ReactMap
      mapStyle="mapbox://styles/yean1278/cl18jpe54000h14r18xf689ll"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewPort) =>setViewPort(nextViewPort) }
    >
    </ReactMap>
  )
}