import React, { useState } from "react"; 
import dynamic from "next/dynamic"; 

const OsmMapNoSSR = dynamic(() => import("components/Maps/osmMap"), { ssr: false, 
}); 

export default function Home() { 
  const [location, setLocation] = useState({ lng: 34.038, lat: -118.24881 }); 
 return ( 
 <div> 
  <OsmMapNoSSR 
    center={location} 
    location={location} 
    draggable={true} 
    title="sample text" 
    onDragMarker={(e) => { 
      console.log("e", e); 
      let loc = { lat: e.lng, lng: e.lat }; 
      setLocation(loc); 
    }} 
/> 
{"lng: " + location.lng} 
<br /> 
{"lat: " + location.lat} 
</div> 
);
} 