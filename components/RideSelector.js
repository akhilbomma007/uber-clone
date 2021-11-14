import React, {useState, useEffect} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/CarList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState()
    console.log(pickupCoordinates,dropoffCoordinates)
    // useEffect(() => {
    //     fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWtoaWxib21tYTAwNyIsImEiOiJja3ZtdjBya3YwMmw5Mm9xdmdtNHF5cnJ4In0.p0t-ByqVTCexgsvEJEUTrA`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("data is here")
    //         console.log(data)
    //         if(data && data.routes[0]){
    //             setRideDuration(data.routes[0].duration / 100)
    //         }
    //     })
    // }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>
                Choose a ride, or swipe up for more
            </Title>
            <CarList>
                {carList.map((car, index) => (
                <Car key={index}>
                    <CarImage src={car.imgUrl}/>
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>5 Mins Away</Time>
                    </CarDetails>
                    <CarPrize>{"$"+(rideDuration*car.multiplier).toFixed(2)}</CarPrize>
                </Car>
                ))}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div `
    flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div `
    text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div `
    overflow-y-scroll
`
const Car = tw.div `
    flex p-4 items-center
`
const CarImage = tw.img `
    h-14 mr-4
`
const CarDetails = tw.div `
    flex-1
`
const Service = tw.div `
    font-medium
`
const Time = tw.div `
    text-xs text-blue-500
`
const CarPrize = tw.div `
    text-sm
`