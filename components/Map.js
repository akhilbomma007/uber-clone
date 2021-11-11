import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWtoaWxib21tYTAwNyIsImEiOiJja3ZtdjBya3YwMmw5Mm9xdmdtNHF5cnJ4In0.p0t-ByqVTCexgsvEJEUTrA';

const Map = ({pickupCoordinates, dropoffCoordinates}) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3
        });

        if(pickupCoordinates){
          addToMap(map,pickupCoordinates)
        }

        if(dropoffCoordinates){
          addToMap(map,dropoffCoordinates)
        }

        if(pickupCoordinates && dropoffCoordinates){
          map.fitBounds([pickupCoordinates,dropoffCoordinates],{
            padding: 60
          })
        }

    },[pickupCoordinates, dropoffCoordinates]);

    const addToMap = (map, coordinates) => {
      const marker = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
    }

    return (
        <Wrapper id='map'></Wrapper>
    )
}

const Wrapper = tw.div `
    flex-1 h-1/2
`
export default Map
