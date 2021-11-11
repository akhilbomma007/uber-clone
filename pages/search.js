import { Input } from 'postcss'
import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const search = () => {

    const[pickup, setPickUp] = useState([])
    const[dropoff, setDropOff] = useState([])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </FromToIcons>
                <InputBoxes>
                    <InputBox placeholder="Enter pickup location"
                        value={pickup}
                        onChange={(e) => {
                            setPickUp(e.target.value)
                        }}
                    />
                    <InputBox placeholder="Where to?"
                        value={dropoff}
                        onChange={(e) => {
                            setDropOff(e.target.value)
                        }}
                    />
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                SavedPlaces
            </SavedPlaces>
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>
                <ConfirmLocation>
                    Confirm Location
                </ConfirmLocation>
            </Link>
            {/* ButtonContainer */}
            {/* InputContainer */}
            {/* SavedPlaces */}
            {/* ConfirmLocation */}
        </Wrapper>
    )
}

export default search

const Wrapper = tw.div `
    bg-gray-200 h-screen
`
const ButtonContainer = tw.div `
    bg-white px-4 
`
const BackButton = tw.img `
    h-12 cursor-pointer
`
const InputContainer = tw.div `
    flex bg-white items-center px-4 pb-2 mb-2
`
const FromToIcons = tw.div `
    flex flex-col w-10 mr-2 items-center
`
const Circle = tw.img `
    h-2.5
`
const Line = tw.img `
    h-10
`
const Square = tw.img `
    h-2.5
`
const InputBoxes = tw.div `
    flex flex-col flex-1
`
const InputBox = tw.input `
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img `
    w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces = tw.div `
    flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img `
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmLocation = tw.div `
    bg-black text-white m-4 p-2 text-center text-2xl cursor-pointer
`