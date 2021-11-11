import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from "../components/Map"
import { Input } from 'postcss'
import Link from 'next/link'

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Akhil Bomma</Name>
            <UserImg></UserImg>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels
          </ActionButton>
          <ActionButton> 
            <ActionButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div `
  flex flex-col h-screen
`
const ActionItems = tw.div `
  flex-1 p-4
`
const Header = tw.div `
  flex justify-between items-center
`
const UberLogo = tw.img `
  h-28
`
const Profile = tw.div `
  flex items-center
`
const Name = tw.h1 `
mr-4 w-20 text-sm
`
const UserImg = tw.img `
  h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div `
  flex
`
const ActionButton = tw.div `
  flex flex-col bg-gray-200 flex-1 m-1 h-32 text-xl items-center justify-center rounded-lg transform hover:scale-105 transition
`
const ActionButtonImg = tw.img `
  h-3/5
`
const InputButton = tw.div `
  h-20 bg-gray-200 text-2xl m-1 mt-8 p-4 rounded-lg flex items-center
`