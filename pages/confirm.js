import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from '../components/Map'
import { useRouter } from 'next/dist/client/router'
import RideSelector from '../components/RideSelector'
import Link from 'next/dist/client/link'

const confirm = () => {

    const router = useRouter()
    const {pickup, dropoff} = router.query

    const [pickupLocation, setPickupLocation] = useState();
    const [dropoffLocation, setdropoffLocation] = useState();

    const getPickupCoordinates = (pickup) => {
        // const pickup = "Santa Monica"
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWtoaWxib21tYTAwNyIsImEiOiJja3ZtdjBya3YwMmw5Mm9xdmdtNHF5cnJ4In0.p0t-ByqVTCexgsvEJEUTrA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupLocation(data.features[0].center)
        })
    }

    const getDropOffCoordinates = (dropoff) => {
        // const dropoff = "Los Angeles"
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWtoaWxib21tYTAwNyIsImEiOiJja3ZtdjBya3YwMmw5Mm9xdmdtNHF5cnJ4In0.p0t-ByqVTCexgsvEJEUTrA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setdropoffLocation(data.features[0].center)
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropOffCoordinates(dropoff);
    }, [pickup, dropoff])
    console.log(pickup,dropoff)
    // console.log(pickupLocation,dropoffLocation)

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map 
                pickupCoordinates = {pickupLocation}
                dropoffCoordinates = {dropoffLocation}
            />
            <RideContainer>
                <RideSelector 
                    pickupCoordinates = {pickupLocation}
                    dropoffCoordinates = {dropoffLocation}
                />
                <ConfirmButton>
                    Confirm Ride
                </ConfirmButton>
            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div `
    flex flex-col h-screen
`
const RideContainer = tw.div `
    flex flex-col flex-1 h-1/2
`
const ConfirmButton = tw.div `
    bg-black text-white text-center p-4 m-4 text-xl border-t-2
`
const ButtonContainer = tw.div `
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img `
    h-12 cursor-pointer
`