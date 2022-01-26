import React, { useRef, useMemo } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./osmMap.module.scss";

const OsmMap = ({ center, draggable, location }) => {
  const markerRef = useRef(null);

  const dragHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker !=null){
          onDragMarker(marker.getLatLng());
        }
      },
    }),
    []
  );

  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [40, 40],
    },
  });

  var customIcon = new LeafIcon({ iconUrl: "/assets/pin.png"});

return( 
    <MapContainer 
       center={[center.lng, center.lat]} 
       zoom={13} 
       scrol1WheelZool={false} 
       className={styles.container} 
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
      />
<Marker 
  icon={customIcon} 
  position={[ 
    location && location.lng ? location.lng : "", location && location.lat ? location.lat : "", 
]} 
draggable={draggable} 
eventHandlers={dragHandlers} 
ref={markerRef}
>
  <Popup className={styles.popup}>{"my title"}</Popup>
  </Marker> 
</MapContainer> 
); 
}; 
export default OsmMap;